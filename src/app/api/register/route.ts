import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import bcrypt from 'bcryptjs';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

const usersFile = path.join(process.cwd(), 'data/users.json');

async function getUsers(): Promise<User[]> {
  try {
    const data = await fs.readFile(usersFile, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function POST(req: Request) {
  const { username, email, password } = await req.json();
  if (!username || !email || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }
  const users = await getUsers();
  if (users.find((u: User) => u.email === email)) {
    return NextResponse.json({ error: 'User exists' }, { status: 400 });
  }
  const hashed = bcrypt.hashSync(password, 10);
  const newUser: User = { id: `${users.length + 1}`, name: username, email, password: hashed };
  users.push(newUser);
  await fs.writeFile(usersFile, JSON.stringify(users, null, 2));
  return NextResponse.json({ message: 'User created' }, { status: 201 });
}