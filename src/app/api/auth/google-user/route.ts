import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"

interface User {
  id: string
  name: string
  email: string
  password?: string
}

const usersFile = path.join(process.cwd(), "data/users.json")

async function getUsers(): Promise<User[]> {
  try {
    await fs.mkdir(path.dirname(usersFile), { recursive: true })
    const data = await fs.readFile(usersFile, "utf-8")
    return JSON.parse(data) as User[]
  } catch {
    return []
  }
}

async function saveUser(user: User): Promise<void> {
  const users = await getUsers()
  const existingUserIndex = users.findIndex(u => u.email === user.email)
  
  if (existingUserIndex >= 0) {
    users[existingUserIndex] = { ...users[existingUserIndex], ...user }
  } else {
    users.push(user)
  }
  
  await fs.writeFile(usersFile, JSON.stringify(users, null, 2))
}

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json()
    
    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 })
    }

    const users = await getUsers()
    const existingUser = users.find(u => u.email === email)
    
    if (existingUser) {
      return NextResponse.json({ id: existingUser.id })
    }

    // Create new user
    const newUser: User = {
      id: (users.length + 1).toString(),
      name: name || "Google User",
      email,
    }

    await saveUser(newUser)
    return NextResponse.json({ id: newUser.id })
  } catch (error) {
    console.error("Google user error:", error)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}