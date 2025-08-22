"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function AddProduct() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const res = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          description: formData.get("description"),
          price: parseFloat(formData.get("price") as string),
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        toast.success("Product added!");
        router.push("/dashboard");
      } else {
        toast.error("Failed to add product.");
      }
    });
  };

  return (
    <div className="p-10 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Add Product</h1>
        <form action={handleSubmit} className="flex flex-col space-y-4">
          <input name="name" placeholder="Name" className="border p-2 rounded dark:bg-gray-600 dark:text-white" required />
          <input name="description" placeholder="Description" className="border p-2 rounded dark:bg-gray-600 dark:text-white" required />
          <input name="price" type="number" placeholder="Price" className="border p-2 rounded dark:bg-gray-600 dark:text-white" required />
          <button type="submit" disabled={isPending} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            {isPending ? "Adding..." : "Add Product"}
          </button>
          {isPending && <div className="spinner mx-auto"></div>}
        </form>
      </div>
    </div>
  );
}