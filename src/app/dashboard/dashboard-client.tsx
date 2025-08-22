"use client";
import { signOut } from "next-auth/react";

export default function DashboardClient() {
  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
}