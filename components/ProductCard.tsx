import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatPrice, getDiscountPercentage } from "@/lib/utils";
import { StarIcon } from "./icons";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? getDiscountPercentage(product.originalPrice, product.price)
    : 0;

  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {discount > 0 && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
            -{discount}%
          </div>
        )}
        {product.featured && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
            精选
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-xs font-medium text-blue-600">
            {product.brand}
          </span>
          {product.ageRange && (
            <span className="text-xs text-gray-500">{product.ageRange}</span>
          )}
        </div>

        <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 h-10 mb-2">
          {product.name}
        </h3>

        <div className="flex items-center space-x-1 mb-3">
          <StarIcon className="h-4 w-4 text-yellow-400" />
          <span className="text-sm text-gray-600">{product.rating}</span>
          <span className="text-xs text-gray-400">
            ({product.reviewCount})
          </span>
        </div>

        <div className="flex items-baseline space-x-2">
          <span className="text-xl font-bold text-red-600">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {product.stock < 10 && product.stock > 0 && (
          <p className="mt-2 text-xs text-orange-600">
            仅剩 {product.stock} 件
          </p>
        )}
      </div>
    </Link>
  );
}
