"use client";
import { signOut } from "next-auth/react";
import { toast } from "react-hot-toast";

interface DashboardHeaderProps {
  user: {
    name?: string | null;
    email?: string | null;
  } | undefined;
}

export default function DashboardHeader({ user }: DashboardHeaderProps) {
  const handleLogout = async () => {
    try {
      await signOut({ redirect: true, callbackUrl: "/" });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-700 dark:text-gray-300">Welcome, {user?.name || user?.email}!</span>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-200 font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}