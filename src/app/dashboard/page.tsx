import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "../auth";
import { getProducts } from "@/lib/products";
import DashboardHeader from "./dashboard-header";
import ProductsList from "./products-list";

export default async function Dashboard() {
  const session = await auth();
  
  if (!session) {
    redirect("/login");
  }

  const products = await getProducts();

  return (
    <div className="p-10 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <DashboardHeader user={session.user} />
      
      <Link 
        href="/dashboard/add-product" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block"
      >
        Add Product
      </Link>
      
      <ProductsList initialProducts={products} />
    </div>
  );
}