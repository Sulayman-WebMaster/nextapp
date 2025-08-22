import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import fs from "fs/promises"
import path from "path"

interface User {
  id: string
  name: string
  email: string
  password: string
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

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()
    
    if (!email || !password) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 400 })
    }

    const users = await getUsers()
    const user = users.find(u => u.email === email)

    if (user?.password && bcrypt.compareSync(password, user.password)) {
      return NextResponse.json({
        id: user.id,
        name: user.name,
        email: user.email,
      })
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    console.error("Verify error:", error)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}