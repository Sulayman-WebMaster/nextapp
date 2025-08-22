"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Signup() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          username: formData.get("username"),
          email: formData.get("email"),
          password: formData.get("password"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        toast.success("Account created! Please login.");
        router.push("/login");
      } else {
        const { error } = await res.json();
        toast.error(error || "Failed to create account.");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Signup</h1>
        <form action={handleSubmit} className="flex flex-col space-y-4">
          <input name="username" placeholder="Username" className="border p-2 rounded dark:bg-gray-600 dark:text-white" required />
          <input name="email" type="email" placeholder="Email" className="border p-2 rounded dark:bg-gray-600 dark:text-white" required />
          <input name="password" type="password" placeholder="Password" className="border p-2 rounded dark:bg-gray-600 dark:text-white" required />
          <button type="submit" disabled={isPending} className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
            {isPending ? "Signing up..." : "Signup"}
          </button>
          {isPending && <div className="spinner mx-auto"></div>}
        </form>
      </div>
    </div>
  );
}