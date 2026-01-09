import { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "全部商品 - 母婴之家",
  description: "浏览我们精选的母婴产品，包括玩具、图书、童装、喂养用品等",
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string; sort?: string; search?: string };
}) {
  let filteredProducts = [...products];

  // 按分类筛选
  if (searchParams.category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === searchParams.category
    );
  }

  // 搜索筛选
  if (searchParams.search) {
    const searchTerm = searchParams.search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.brand.toLowerCase().includes(searchTerm) ||
        p.tags?.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  }

  // 排序
  if (searchParams.sort) {
    switch (searchParams.sort) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filteredProducts.reverse();
        break;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">全部商品</h1>
          <p className="mt-2 text-gray-600">
            共 {filteredProducts.length} 件商品
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">没有找到相关商品</p>
          </div>
        )}
      </div>
    </div>
  );
}
