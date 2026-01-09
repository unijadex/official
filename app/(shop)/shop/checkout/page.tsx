"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    province: "",
    city: "",
    district: "",
    detail: "",
    paymentMethod: "alipay",
  });

  const selectedItems = cart.items.filter((item) => item.selected);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && selectedItems.length === 0) {
      router.push("/shop/cart");
    }
  }, [mounted, selectedItems.length, router]);

  if (!mounted || selectedItems.length === 0) {
    return null;
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.province ||
      !formData.city ||
      !formData.district ||
      !formData.detail
    ) {
      alert("请填写完整的收货地址信息");
      return;
    }

    setIsProcessing(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Create order (in real app, this would be sent to backend)
    const order = {
      id: Date.now().toString(),
      orderNumber: `ORD${Date.now()}${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
      items: selectedItems,
      status: "pending",
      subtotal: cart.subtotal,
      shipping: cart.shipping,
      total: cart.total,
      shippingAddress: formData,
      createdAt: new Date(),
    };

    // Store order in localStorage
    if (typeof window !== "undefined") {
      const existingOrders = JSON.parse(
        localStorage.getItem("baby-orders") || "[]"
      ) as any[];
      localStorage.setItem("baby-orders", JSON.stringify([order, ...existingOrders]));
    }

    // Clear cart and redirect to success page
    clearCart();
    router.push(`/shop/shop/checkout/success?orderId=${order.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">确认订单</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Address */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  收货地址
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      收货人姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      手机号码 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      省份 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="province"
                      value={formData.province}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">请选择省份</option>
                      <option value="北京市">北京市</option>
                      <option value="上海市">上海市</option>
                      <option value="广东省">广东省</option>
                      <option value="浙江省">浙江省</option>
                      <option value="江苏省">江苏省</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      城市 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">请选择城市</option>
                      <option value="市区">市区</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      区/县 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">请选择区/县</option>
                      <option value="朝阳区">朝阳区</option>
                      <option value="海淀区">海淀区</option>
                      <option value="浦东新区">浦东新区</option>
                      <option value="天河区">天河区</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      详细地址 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="detail"
                      value={formData.detail}
                      onChange={handleInputChange}
                      placeholder="街道、楼牌号等"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  支付方式
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="alipay"
                      checked={formData.paymentMethod === "alipay"}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <span className="ml-3 font-medium text-gray-900">
                      支付宝
                    </span>
                  </label>
                  <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="wechat"
                      checked={formData.paymentMethod === "wechat"}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <span className="ml-3 font-medium text-gray-900">
                      微信支付
                    </span>
                  </label>
                </div>
              </div>

              {/* Order Items */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  商品清单
                </h2>
                <div className="space-y-4">
                  {selectedItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-start space-x-4"
                    >
                      <Link
                        href={`/shop/products/${item.product.id}`}
                        className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100"
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
                          href={`/shop/products/${item.product.id}`}
                          className="font-medium text-gray-900 hover:text-blue-600 line-clamp-2"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-gray-500">
                          数量: {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  订单详情
                </h2>

                <div className="space-y-3 border-b border-gray-100 pb-4 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">商品总价</span>
                    <span className="font-medium text-gray-900">
                      {formatPrice(cart.subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">运费</span>
                    {cart.shipping === 0 ? (
                      <span className="text-green-600 font-medium">免运费</span>
                    ) : (
                      <span className="font-medium text-gray-900">
                        {formatPrice(cart.shipping)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-lg font-bold text-gray-900">
                    应付总额
                  </span>
                  <span className="text-3xl font-bold text-red-600">
                    {formatPrice(cart.total)}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg"
                >
                  {isProcessing ? "处理中..." : `提交订单并支付 ${formatPrice(cart.total)}`}
                </button>

                <Link
                  href="/shop/cart"
                  className="block text-center text-blue-600 hover:text-blue-700 text-sm mt-4"
                >
                  返回购物车
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
