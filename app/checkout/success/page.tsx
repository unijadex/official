"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckIcon } from "@/components/icons";

export default function CheckoutSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    const orderId = searchParams.get("orderId");
    if (orderId) {
      // Get order from localStorage
      const orders = JSON.parse(localStorage.getItem("baby-orders") || "[]");
      const order = orders.find((o: any) => o.id === orderId);
      if (order) {
        setOrderNumber(order.orderNumber);
      }
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckIcon className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            订单提交成功！
          </h1>

          {orderNumber && (
            <p className="text-gray-600 mb-6">
              订单号：<span className="font-semibold">{orderNumber}</span>
            </p>
          )}

          <p className="text-gray-500 mb-8">
            您的订单已成功提交，我们会尽快为您发货。您可以在"我的订单"中查看订单详情。
          </p>

          <div className="space-y-3">
            <Link
              href="/account?tab=orders"
              className="block w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
            >
              查看订单
            </Link>
            <Link
              href="/products"
              className="block w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
            >
              继续购物
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              如有问题，请联系客服：
              <a href="tel:400-123-4567" className="text-blue-600 hover:underline">
                400-123-4567
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
