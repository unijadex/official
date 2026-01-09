"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MinusIcon, PlusIcon, TrashIcon } from "@/components/icons";
import { calculateCartTotal, formatPrice } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, toggleSelect, selectAll } =
    useCart();
  const router = useRouter();
  const [isAllSelected, setIsAllSelected] = useState(false);

  useEffect(() => {
    if (cart.items.length > 0) {
      const allSelected = cart.items.every((item) => item.selected);
      setIsAllSelected(allSelected);
    }
  }, [cart.items]);

  const handleSelectAll = (checked: boolean) => {
    setIsAllSelected(checked);
    selectAll(checked);
  };

  const selectedItems = cart.items.filter((item) => item.selected);
  const { subtotal, shipping, total } = calculateCartTotal(selectedItems);

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              购物车是空的
            </h2>
            <p className="text-gray-500 mb-8">快去选购心仪的商品吧</p>
            <Link
              href="/shop/products"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
            >
              去逛逛
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">购物车</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Select All */}
            <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="font-medium text-gray-900">全选</span>
              </label>
              <button
                onClick={() => {
                  if (confirm("确定要删除选中的商品吗？")) {
                    selectedItems.forEach((item) => {
                      removeFromCart(item.product.id);
                    });
                  }
                }}
                className="text-red-600 hover:text-red-700 text-sm font-medium"
              >
                删除选中
              </button>
            </div>

            {/* Items List */}
            {cart.items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-xl shadow-sm p-4"
              >
                <div className="flex items-start space-x-4">
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={item.selected || false}
                    onChange={() => toggleSelect(item.product.id)}
                    className="mt-8 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 shrink-0"
                  />

                  {/* Product Image */}
                  <Link
                    href={`/products/${item.product.id}`}
                    className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-100"
                  >
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${item.product.id}`}
                      className="font-semibold text-gray-900 hover:text-blue-600 line-clamp-2"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.product.brand}
                    </p>
                    {item.product.ageRange && (
                      <p className="text-xs text-gray-400 mt-1">
                        {item.product.ageRange}
                      </p>
                    )}

                    {/* Quantity Control */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="px-3 py-1 bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <input
                          type="number"
                          min="1"
                          max={item.product.stock}
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(
                              item.product.id,
                              parseInt(e.target.value) || 1
                            )
                          }
                          className="w-16 text-center border-0 focus:ring-0"
                        />
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="px-3 py-1 bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="text-lg font-bold text-red-600">
                      {formatPrice(item.product.price)}
                    </p>
                    {item.product.originalPrice && (
                      <p className="text-sm text-gray-400 line-through">
                        {formatPrice(item.product.originalPrice)}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 mt-1">
                      小计: {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                订单摘要
              </h2>

              <div className="space-y-3 border-b border-gray-100 pb-4 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    商品件数 ({selectedItems.length})
                  </span>
                  <span className="font-medium text-gray-900">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">运费</span>
                  {shipping === 0 ? (
                    <span className="text-green-600 font-medium">免运费</span>
                  ) : (
                    <span className="font-medium text-gray-900">
                      {formatPrice(shipping)}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-baseline mb-6">
                <span className="text-lg font-bold text-gray-900">总计</span>
                <span className="text-3xl font-bold text-red-600">
                  {formatPrice(total)}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                {subtotal >= 299
                  ? "✓ 已享受免运费优惠"
                  : `再买 ${formatPrice(299 - subtotal)} 可免运费`}
              </p>

              <button
                onClick={() => router.push("/shop/checkout")}
                disabled={selectedItems.length === 0}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg"
              >
                去结算 ({selectedItems.length})
              </button>

              <Link
                href="/shop/products"
                className="block text-center text-blue-600 hover:text-blue-700 text-sm mt-4"
              >
                继续购物
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
