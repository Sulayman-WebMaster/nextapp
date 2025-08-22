"use client"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.ok) {
        toast.success("Login successful!")
        router.push("/dashboard")
        router.refresh()
      } else {
        toast.error("Invalid email or password")
      }
    } catch (error) {
      toast.error("Login failed")
      console.error("Login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleGoogleLogin() {
    setIsLoading(true)
    try {
      await signIn("google", { callbackUrl: "/dashboard" })
    } catch (error) {
      toast.error("Google login failed")
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          disabled={isLoading}
          className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          disabled={isLoading}
          className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? "Signing in..." : "Login with Email"}
        </button>
      </form>

      <div className="text-center text-gray-500">or</div>

      <button
        onClick={handleGoogleLogin}
        disabled={isLoading}
        className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 disabled:opacity-50"
      >
        {isLoading ? "Loading..." : "Login with Google"}
      </button>

      <p className="text-center text-sm">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-500 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  )
}