import Link from "next/link";
import { getProducts } from "@/lib/products";

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="p-10 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <li key={p.id} className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-700 hover:shadow-lg transition">
            <Link href={`/products/${p.id}`} className="text-blue-500 hover:underline">
              {p.name} - ${p.price.toFixed(2)}
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{p.description}</p>
          </li>
        ))}
      </ul>
      {products.length === 0 && <p className="text-center text-gray-500">No products found.</p>}
    </div>
  );
}