import { notFound } from "next/navigation";
import { getProduct } from "@/lib/products";
import { 
  FaShoppingCart, 
  FaHeart, 
  FaShare, 
  FaStar, 
  FaShippingFast, 
  FaShieldAlt, 
  FaUndo,
  FaMinus,
  FaPlus,
  FaCheck
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { MdLocalOffer, MdSecurity } from "react-icons/md";
import Link from "next/link";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl relative overflow-hidden shadow-xl group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/50 dark:bg-gray-800/50 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <HiSparkles className="w-12 h-12 text-gray-400" />
                </div>
              </div>
              
              {/* Image Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Badges */}
              <div className="absolute top-6 left-6 space-y-2">
                <span className="inline-block px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full shadow-lg">
                  Sale
                </span>
                <span className="block px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full shadow-lg">
                  In Stock
                </span>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all duration-200 flex items-center justify-center"
                >
                  <HiSparkles className="w-6 h-6 text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400">(4.8) • 156 reviews</span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Pricing */}
            <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-2xl text-gray-500 line-through">
                  ${(product.price * 1.3).toFixed(2)}
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full">
                  Save 23%
                </span>
              </div>
              
              <div className="flex items-center text-green-600">
                <FaCheck className="w-4 h-4 mr-2" />
                <span className="font-medium">Free shipping on orders over $50</span>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-6">
              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                    <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <FaMinus className="w-3 h-3" />
                    </button>
                    <span className="px-4 py-3 text-center min-w-[3rem] font-medium">1</span>
                    <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <FaPlus className="w-3 h-3" />
                    </button>
                  </div>
                  <span className="text-gray-500">24 items available</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center space-x-3 shadow-lg">
                  <FaShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="py-3 px-6 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2 font-medium">
                    <FaHeart className="w-4 h-4" />
                    <span>Wishlist</span>
                  </button>
                  
                  <button className="py-3 px-6 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2 font-medium">
                    <FaShare className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Why choose this product?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <FaShippingFast className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Fast Shipping</div>
                    <div className="text-sm text-gray-500">2-3 days delivery</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <FaShieldAlt className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Warranty</div>
                    <div className="text-sm text-gray-500">2 year guarantee</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <FaUndo className="w-6 h-6 text-orange-600" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Easy Returns</div>
                    <div className="text-sm text-gray-500">30-day policy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Tabs */}
        <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-16">
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex space-x-8 border-b border-gray-200 dark:border-gray-700 mb-8">
              <button className="pb-4 text-blue-600 border-b-2 border-blue-600 font-semibold">
                Description
              </button>
              <button className="pb-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Specifications
              </button>
              <button className="pb-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Reviews
              </button>
            </div>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                This premium product combines cutting-edge technology with exceptional design. 
                Crafted with attention to detail and built to last, it offers unmatched performance 
                and reliability. Whether you're a professional or an enthusiast, this product 
                delivers the quality and functionality you demand.
              </p>
              
              <ul className="mt-6 space-y-3">
                <li className="flex items-center space-x-3">
                  <FaCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Premium materials and construction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Advanced features and technology</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Comprehensive warranty coverage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Exceptional customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            You might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-t-xl flex items-center justify-center">
                  <HiSparkles className="w-8 h-8 text-gray-400" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Related Product {index + 1}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Brief description of the related product.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900 dark:text-white">
                      $99.99
                    </span>
                    <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}