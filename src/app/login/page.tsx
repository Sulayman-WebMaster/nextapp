import { redirect } from "next/navigation";
import { signIn, auth } from "../auth";
import LoginForm from "./login-form";

export default async function Login() {
  const session = await auth();
  
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}