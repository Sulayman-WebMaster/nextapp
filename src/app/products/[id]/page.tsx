import { notFound } from "next/navigation";
import { getProduct } from "@/lib/products";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  if (!product) notFound();

  return (
    <div className="p-10 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">{product.description}</p>
        <p className="font-semibold text-xl">Price: ${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}