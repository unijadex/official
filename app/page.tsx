import { Metadata } from "next";
import Link from "next/link";
import { categories, featuredProducts, products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { CheckIcon, StarIcon, TruckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "母婴之家 - 专注优质母婴产品",
  description: "精选优质母婴产品，包括玩具、图书、童装、喂养用品等。正品保证，让育儿更轻松。",
};

export default function HomePage() {
  const newProducts = [...products].sort(() => Math.random() - 0.5).slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                为宝宝挑选
                <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
                  {" "}
                  最好的礼物
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                精选全球优质母婴品牌，为妈妈和宝宝提供安全、可靠、高品质的产品。
                从孕期到育儿，我们陪伴每一个重要时刻。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium text-center shadow-lg hover:shadow-xl"
                >
                  立即选购
                </Link>
                <Link
                  href="/products?category=toys"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-colors font-medium text-center border-2 border-blue-600"
                >
                  查看热卖
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-pink-400 shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">👶</div>
                  <p className="text-2xl font-bold">品质保证</p>
                  <p className="text-lg mt-2">100%正品</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">商品分类</h2>
            <p className="mt-4 text-gray-600">满足宝宝成长的各种需求</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="group p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">正品保证</h3>
                <p className="text-blue-50">所有商品均为正品，假一赔十</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <TruckIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">满299包邮</h3>
                <p className="text-blue-50">全国大部分地区次日达</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <StarIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">7天无理由退换</h3>
                <p className="text-blue-50">购物无忧，售后有保障</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">精选推荐</h2>
              <p className="mt-2 text-gray-600">为您精心挑选的热门商品</p>
            </div>
            <Link
              href="/products"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              查看更多 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">新品上架</h2>
              <p className="mt-2 text-gray-600">最新到店的好货</p>
            </div>
            <Link
              href="/products?sort=newest"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              查看更多 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            新用户注册即享优惠
          </h2>
          <p className="text-xl text-pink-50 mb-8">
            首次下单立减 ¥50，更有专属优惠券等着您
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-pink-600 rounded-xl hover:bg-gray-50 transition-colors font-medium shadow-lg">
              立即注册
            </button>
            <Link
              href="/products"
              className="px-8 py-4 bg-transparent text-white rounded-xl hover:bg-white/10 transition-colors font-medium border-2 border-white"
            >
              继续购物
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
