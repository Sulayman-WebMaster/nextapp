"use client";
import { useState } from "react";
import Link from "next/link";
import { 
  FiShoppingCart, 
  FiUser, 
  FiHeart,
  FiStar,
  FiArrowRight,
  FiMoon,
  FiSun,
  FiMenu,
  FiX,
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiLogIn,
  FiUserPlus,
  FiSearch,
  FiGift,
  FiZap
} from "react-icons/fi";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 124,
      image: "🎧",
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199,
      originalPrice: 249,
      rating: 4.6,
      reviews: 89,
      image: "⌚",
      tag: "New Arrival"
    },
    {
      id: 3,
      name: "Minimalist Laptop Stand",
      price: 79,
      originalPrice: 99,
      rating: 4.9,
      reviews: 67,
      image: "💻",
      tag: "Limited"
    }
  ];

  const features = [
    {
      icon: <FiTruck className="w-6 h-6" />,
      title: "Free Shipping",
      description: "On orders over $100"
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Secure Payment",
      description: "100% secure checkout"
    },
    {
      icon: <FiRefreshCw className="w-6 h-6" />,
      title: "30-Day Returns",
      description: "Easy return policy"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Navbar */}
      <nav className={`${isDark ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'} border-b backdrop-blur-lg sticky top-0 z-50 transition-all duration-300 shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group mr-2">
              <div className={`p-2 rounded-xl transition-all duration-300 ${isDark ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
             
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ELEGANCE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/products" className="relative group py-2">
                <span className="hover:opacity-70 transition-all duration-200">Products</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/categories" className="relative group py-2">
                <span className="hover:opacity-70 transition-all duration-200">Categories</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/about" className="relative group py-2">
                <span className="hover:opacity-70 transition-all duration-200">About</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/contact" className="relative group py-2">
                <span className="hover:opacity-70 transition-all duration-200">Contact</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className={`relative w-full ${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-full`}>
                <FiSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="text"
                  placeholder="Search products..."
                  className={`w-full pl-12 pr-4 py-3 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${isDark ? 'text-white placeholder-gray-400' : 'text-black placeholder-gray-500'}`}
                />
              </div>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full transition-all duration-200 ${
                  isDark 
                    ? 'hover:bg-gray-800 text-yellow-400 hover:text-yellow-300' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-800'
                }`}
              >
                {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              </button>
              
              {/* Wishlist */}
              <button className={`p-2.5 rounded-full transition-all duration-200 ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} relative group`}>
                <FiHeart className="w-5 h-5 group-hover:text-red-500 transition-colors duration-200" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  2
                </span>
              </button>
              
              {/* Cart */}
              <button className={`p-2.5 rounded-full transition-all duration-200 ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} relative group`}>
                <FiShoppingCart className="w-5 h-5" />
                <span className={`absolute -top-1 -right-1 w-5 h-5 text-xs rounded-full flex items-center justify-center font-semibold transition-all duration-200 ${
                  isDark ? 'bg-white text-black' : 'bg-black text-white'
                } group-hover:scale-110`}>
                  3
                </span>
              </button>

              {/* Auth Buttons */}
              <div className="hidden sm:flex items-center space-x-2 ml-4">
                <Link href="/login">
                  <button className={`flex items-center space-x-2 px-4 py-2.5 rounded-full border transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'border-gray-700 hover:border-gray-600 hover:bg-gray-800' 
                      : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                  }`}>
                    <FiLogIn className="w-4 h-4" />
                    <span className="font-medium">Login</span>
                  </button>
                </Link>
                <Link href="/signup">
                  <button className={`flex items-center space-x-2 px-4 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg`}>
                    <FiUserPlus className="w-4 h-4" />
                    <span>Sign Up</span>
                  </button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2.5 rounded-full transition-all duration-200 ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              >
                {isMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden border-t ${isDark ? 'border-gray-800 bg-gray-900/95' : 'border-gray-200 bg-white/95'} backdrop-blur-lg`}>
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className={`relative ${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-full`}>
                <FiSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="text"
                  placeholder="Search products..."
                  className={`w-full pl-12 pr-4 py-3 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 ${isDark ? 'text-white placeholder-gray-400' : 'text-black placeholder-gray-500'}`}
                />
              </div>
              
              {/* Navigation Links */}
              <div className="space-y-2">
                <Link href="/products" className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">Products</Link>
                <Link href="/categories" className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">Categories</Link>
                <Link href="/about" className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">About</Link>
                <Link href="/contact" className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">Contact</Link>
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link href="/login">
                  <button className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-full border transition-all duration-300 ${
                    isDark 
                      ? 'border-gray-700 hover:border-gray-600 hover:bg-gray-800' 
                      : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                  }`}>
                    <FiLogIn className="w-4 h-4" />
                    <span className="font-medium">Login</span>
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg">
                    <FiUserPlus className="w-4 h-4" />
                    <span>Sign Up</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-20 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full ${isDark ? 'bg-white' : 'bg-black'} animate-pulse`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full ${isDark ? 'bg-white' : 'bg-black'} animate-pulse delay-700`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Announcement Badge */}
            <div className="mb-8">
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium border ${
                isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50/50'
              } backdrop-blur-sm`}>
                <FiGift className="w-4 h-4" />
                <span>New Collection Available</span>
                <FiZap className="w-4 h-4 text-yellow-500" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 leading-tight">
              Discover
              <span className="block font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                Elegance
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light mt-4 opacity-70">
                Redefined
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-12 ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto leading-relaxed`}>
              Curated collection of premium products designed for the modern lifestyle. 
              Experience quality, style, and innovation in every purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/products">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-2">
                    <span>Shop Collection</span>
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </Link>
              <button className={`px-8 py-4 rounded-full border font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                isDark 
                  ? 'border-gray-600 hover:border-gray-500 hover:bg-gray-800/50' 
                  : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50/50'
              }`}>
                <span className="flex items-center space-x-2">
                  <span>Watch Video</span>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-2">10K+</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-2">500+</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-2">99%</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute top-20 left-10 opacity-10">
          <div className={`w-40 h-40 rounded-full border-2 ${isDark ? 'border-white' : 'border-black'} animate-spin`} style={{animationDuration: '20s'}}></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <div className={`w-32 h-32 rounded-full ${isDark ? 'bg-white' : 'bg-black'} animate-bounce`} style={{animationDuration: '3s'}}></div>
        </div>
        <div className="absolute top-1/2 left-5 opacity-5">
          <div className={`w-24 h-24 ${isDark ? 'bg-white' : 'bg-black'} rotate-45 animate-pulse`}></div>
        </div>
        <div className="absolute top-1/3 right-5 opacity-5">
          <div className={`w-16 h-16 border-2 ${isDark ? 'border-white' : 'border-black'} rotate-45 animate-pulse delay-1000`}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-16 border-y ${isDark ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Featured Products</h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Hand-picked selections from our premium collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 ${
                isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
              } shadow-lg hover:shadow-xl`}>
                {/* Product Tag */}
                {product.tag && (
                  <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-medium ${
                    isDark ? 'bg-white text-black' : 'bg-black text-white'
                  }`}>
                    {product.tag}
                  </div>
                )}
                
                {/* Wishlist Button */}
                <button className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-200 ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
                } shadow-md`}>
                  <FiHeart className="w-4 h-4" />
                </button>

                {/* Product Image */}
                <div className={`aspect-square flex items-center justify-center text-6xl ${
                  isDark ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  {product.image}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:opacity-70 transition-opacity duration-200">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-current text-yellow-400'
                              : isDark ? 'text-gray-600' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className={`text-sm line-through ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button className={`flex-1 py-3 px-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isDark 
                        ? 'bg-white text-black hover:bg-gray-100' 
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}>
                      <span>View Product</span>
                      <FiArrowRight className="w-4 h-4" />
                    </button>
                    <button className={`p-3 rounded-full border transition-all duration-200 ${
                      isDark 
                        ? 'border-gray-700 hover:border-gray-600 hover:bg-gray-800' 
                        : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                    }`}>
                      <FiShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className={`px-8 py-4 rounded-full border font-medium transition-all duration-300 hover:scale-105 ${
              isDark 
                ? 'border-gray-700 hover:border-gray-600 hover:bg-gray-900' 
                : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
            }`}>
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`py-20 px-4 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Stay Updated</h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Subscribe to our newsletter for exclusive offers and new arrivals
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 px-6 py-4 rounded-l-full sm:rounded-r-none rounded-r-full border focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isDark 
                  ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:ring-white focus:ring-offset-gray-950' 
                  : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:ring-black focus:ring-offset-gray-50'
              }`}
            />
            <button className={`px-8 py-4 rounded-r-full sm:rounded-l-none rounded-l-full font-medium transition-all duration-300 ${
              isDark 
                ? 'bg-white text-black hover:bg-gray-100' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'} py-12`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FiShoppingCart className="w-6 h-6" />
                <span className="text-lg font-bold">ELEGANCE</span>
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Premium products for the modern lifestyle
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><a href="#" className="hover:opacity-70 transition-opacity">All Products</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">New Arrivals</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Best Sellers</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Sale</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Contact Us</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Size Guide</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Returns</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><a href="#" className="hover:opacity-70 transition-opacity">About</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Careers</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Privacy</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className={`border-t mt-8 pt-8 text-center text-sm ${isDark ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-600'}`}>
            © 2025 Elegance. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}