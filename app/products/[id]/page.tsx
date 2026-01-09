import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProductById, getRelatedProducts } from "@/lib/data";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductCard } from "@/components/ProductCard";
import { CheckIcon, StarIcon, TruckIcon } from "@/components/icons";
import { cn, formatPrice, getDiscountPercentage } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "商品未找到",
    };
  }

  return {
    title: `${product.name} - 母婴之家`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(id);
  const discount = product.originalPrice
    ? getDiscountPercentage(product.originalPrice, product.price)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li>
              <Link href="/" className="hover:text-gray-900">
                首页
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-gray-900">
                全部商品
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:ring-2 hover:ring-blue-500"
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - ${index + 2}`}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                    {product.brand}
                  </span>
                  {product.ageRange && (
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                      {product.ageRange}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center mt-3 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({product.reviewCount} 条评价)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-baseline space-x-3">
                  <span className="text-4xl font-bold text-red-600">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                        {discount}% OFF
                      </span>
                    </>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {product.stock > 0 ? (
                    <span className="text-green-600">
                      ✓ 现货，库存充足 ({product.stock}件)
                    </span>
                  ) : (
                    <span className="text-red-600">✗ 暂时缺货</span>
                  )}
                </p>
              </div>

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  商品简介
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specifications */}
              {product.specifications && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    商品规格
                  </h3>
                  <dl className="grid grid-cols-2 gap-3">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-2 border-b border-gray-100"
                        >
                          <dt className="text-gray-500">{key}</dt>
                          <dd className="text-gray-900 font-medium">{value}</dd>
                        </div>
                      )
                    )}
                  </dl>
                </div>
              )}

              {/* Shipping Info */}
              <div className="space-y-3 bg-blue-50 rounded-xl p-4">
                <div className="flex items-center space-x-3 text-sm">
                  <TruckIcon className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">
                    满 ¥299 免运费，否则运费 ¥10
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <CheckIcon className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">
                    正品保证，7天无理由退换货
                  </span>
                </div>
              </div>

              {/* Add to Cart */}
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              相关推荐
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
