"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 text-white flex justify-between items-center shadow-md">
        <Link href="/" className="text-lg font-bold">E-Commerce</Link>
        <div className="flex space-x-4">
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/login" className="hover:underline">Login</Link>
          <Link href="/signup" className="hover:underline">Signup</Link>
          {/* Theme Toggle */}
          <button
            onClick={() => {
              const theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
              document.documentElement.classList.toggle('dark');
              localStorage.setItem('theme', theme);
            }}
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white"
          >
            Toggle Theme
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-blue-500 text-white p-20 text-center flex-grow">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our E-Commerce Site</h1>
        <p className="text-lg">Discover amazing products!</p>
      </section>

      {/* Product Highlights */}
      <section className="p-10 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-center">Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-700">Product A - $10</div>
          <div className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-700">Product B - $20</div>
          <div className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-700">Product C - $30</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
        © 2025 E-Commerce App
      </footer>
    </div>
  );
}