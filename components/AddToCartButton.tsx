"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import { ShoppingCartIcon } from "./icons";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = async () => {
    if (product.stock < 1) return;

    setIsAdding(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    addToCart(product, quantity);

    setIsAdding(false);
  };

  const handleBuyNow = async () => {
    await handleAddToCart();
    router.push("/checkout");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="text-sm font-medium text-gray-700">数量：</label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors border-r border-gray-300"
            disabled={quantity <= 1}
          >
            −
          </button>
          <input
            type="number"
            min="1"
            max={product.stock}
            value={quantity}
            onChange={(e) =>
              setQuantity(
                Math.min(
                  product.stock,
                  Math.max(1, parseInt(e.target.value) || 1)
                )
              )
            }
            className="w-16 text-center border-0 focus:ring-0"
          />
          <button
            onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
            className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors border-l border-gray-300"
            disabled={quantity >= product.stock}
          >
            +
          </button>
        </div>
        <span className="text-sm text-gray-500">
          库存 {product.stock} 件
        </span>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={handleAddToCart}
          disabled={product.stock < 1 || isAdding}
          className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          <ShoppingCartIcon className="h-5 w-5" />
          <span>{isAdding ? "添加中..." : "加入购物车"}</span>
        </button>
        <button
          onClick={handleBuyNow}
          disabled={product.stock < 1 || isAdding}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg hover:shadow-xl"
        >
          立即购买
        </button>
      </div>
    </div>
  );
}
