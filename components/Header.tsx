"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { categories } from "@/lib/data";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "./icons";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartItemCount } = useCart();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
              母婴之家
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索商品、品牌..."
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-blue-600"
              >
                <SearchIcon className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <Link
              href="/account"
              className="hidden md:flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <UserIcon className="h-6 w-6" />
              <span className="text-xs mt-1">我的</span>
            </Link>

            <Link
              href="/cart"
              className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors relative"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="text-xs mt-1">购物车</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Categories - Desktop */}
        <nav className="hidden md:block border-t border-gray-100">
          <ul className="flex items-center space-x-8 py-3">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                首页
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/products?category=${category.id}`}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          {/* Search - Mobile */}
          <form onSubmit={handleSearch} className="p-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索商品、品牌..."
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400"
              >
                <SearchIcon className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Categories - Mobile */}
          <nav className="px-4 pb-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  首页
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  全部商品
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/products?category=${category.id}`}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/account"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <UserIcon className="h-5 w-5" />
                  <span>我的账户</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
