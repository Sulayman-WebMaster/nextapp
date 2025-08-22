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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
      <DashboardHeader user={session.user} />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Products Dashboard</h1>
          <Link 
            href="/dashboard/add-product" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Add Product
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <ProductsList initialProducts={products} />
        </div>
      </main>
    </div>
  );
}