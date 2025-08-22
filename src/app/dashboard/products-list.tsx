"use client";
import { useState, useTransition } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface ProductsListProps {
  initialProducts: Product[];
}

export default function ProductsList({ initialProducts }: ProductsListProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isPending, startTransition] = useTransition();

  const handleDelete = (id: number) => {
    startTransition(async () => {
      try {
        const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
        if (res.ok) {
          toast.success("Product deleted");
          setProducts(products.filter((p) => p.id !== id));
        } else {
          toast.error("Failed to delete");
        }
      } catch (error) {
        toast.error("Error deleting product");
      }
    });
  };

  return (
    <>
      <ul className="space-y-4">
        {products.map((p) => (
          <li key={p.id} className="flex justify-between items-center border p-4 rounded-lg shadow-md bg-white dark:bg-gray-700">
            <span>{p.name} - ${p.price}</span>
            <div>
              <Link 
                href={`/dashboard/edit-product/${p.id}`} 
                className="text-blue-500 hover:underline mr-4"
              >
                Edit
              </Link>
              <button 
                onClick={() => handleDelete(p.id)} 
                className="text-red-500 hover:underline" 
                disabled={isPending}
              >
                {isPending ? "Deleting..." : "Delete"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      
      {products.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No products found.</p>
      )}
      
      {isPending && (
        <div className="flex justify-center mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}
    </>
  );
}