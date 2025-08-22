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
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm">Welcome, {user?.name || user?.email}!</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}