"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { formatPrice } from "@/lib/utils";
import { HeartIcon, TruckIcon, UserIcon } from "@/components/icons";
import { CartItem } from "@/lib/types";

interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  status: string;
  total: number;
  createdAt: string;
}

function AccountContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "orders"
  );
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Load orders from localStorage
    const storedOrders = localStorage.getItem("baby-orders");
    if (storedOrders) {
      const parsedOrders = JSON.parse(storedOrders) as Order[];
      setOrders(parsedOrders);
    }
  }, []);

  const tabs = [
    { id: "orders", label: "我的订单", icon: TruckIcon },
    { id: "profile", label: "个人信息", icon: UserIcon },
    { id: "wishlist", label: "收藏夹", icon: HeartIcon },
  ];

  const getStatusText = (status: string) => {
    const statusMap: Record<string, { text: string; className: string }> = {
      pending: { text: "待付款", className: "bg-yellow-100 text-yellow-800" },
      processing: { text: "处理中", className: "bg-blue-100 text-blue-800" },
      shipped: { text: "已发货", className: "bg-purple-100 text-purple-800" },
      delivered: { text: "已送达", className: "bg-green-100 text-green-800" },
      cancelled: { text: "已取消", className: "bg-gray-100 text-gray-800" },
    };
    return statusMap[status] || { text: status, className: "bg-gray-100 text-gray-800" };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">我的账户</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {/* User Info */}
              <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl">
                  👤
                </div>
                <div>
                  <h2 className="font-bold text-gray-900">用户</h2>
                  <p className="text-sm text-gray-500">user@example.com</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  我的订单
                </h2>

                {orders.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">📦</div>
                    <p className="text-gray-500 mb-4">您还没有订单</p>
                    <Link
                      href="/shop/products"
                      className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      去购物
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => {
                      const statusInfo = getStatusText(order.status);
                      return (
                        <div
                          key={order.id}
                          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                            <div>
                              <p className="text-sm text-gray-500">
                                订单号: {order.orderNumber}
                              </p>
                              <p className="text-xs text-gray-400">
                                {new Date(order.createdAt).toLocaleString(
                                  "zh-CN"
                                )}
                              </p>
                            </div>
                            <span
                              className={`px-3 py-1 text-xs font-medium rounded-full ${statusInfo.className}`}
                            >
                              {statusInfo.text}
                            </span>
                          </div>

                          <div className="space-y-3">
                            {order.items.map((item) => (
                              <div
                                key={item.product.id}
                                className="flex items-start space-x-4"
                              >
                                <Link
                                  href={`/products/${item.product.id}`}
                                  className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-gray-100"
                                >
                                  <Image
                                    src={item.product.images[0]}
                                    alt={item.product.name}
                                    fill
                                    className="object-cover"
                                  />
                                </Link>
                                <div className="flex-1 min-w-0">
                                  <Link
                                    href={`/products/${item.product.id}`}
                                    className="font-medium text-gray-900 hover:text-blue-600 line-clamp-1"
                                  >
                                    {item.product.name}
                                  </Link>
                                  <p className="text-sm text-gray-500">
                                    数量: {item.quantity}
                                  </p>
                                </div>
                                <p className="font-medium text-gray-900">
                                  {formatPrice(
                                    item.product.price * item.quantity
                                  )}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                            <div className="text-sm text-gray-600">
                              共 {order.items.reduce((sum: number, item: CartItem) => sum + item.quantity, 0)} 件商品
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-600">
                                实付款:
                              </p>
                              <p className="text-xl font-bold text-red-600">
                                {formatPrice(order.total)}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  个人信息
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        用户名
                      </label>
                      <input
                        type="text"
                        defaultValue="用户"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        邮箱
                      </label>
                      <input
                        type="email"
                        defaultValue="user@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        手机号
                      </label>
                      <input
                        type="tel"
                        placeholder="请输入手机号"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      保存修改
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  收藏夹
                </h2>

                <div className="text-center py-12">
                  <div className="text-5xl mb-4">❤️</div>
                  <p className="text-gray-500 mb-4">收藏夹为空</p>
                  <Link
                    href="/shop/products"
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    去逛逛
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-gray-500">加载中...</div>
      </div>
    }>
      <AccountContent />
    </Suspense>
  );
}
