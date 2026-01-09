import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Cart, CartItem } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return `¥${price.toFixed(2)}`;
}

export function calculateCartTotal(items: CartItem[]): {
  subtotal: number;
  shipping: number;
  total: number;
} {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const shipping = subtotal >= 299 ? 0 : 10;

  const total = subtotal + shipping;

  return { subtotal, shipping, total };
}

export function getInitialCart(): Cart {
  const storedCart =
    typeof window !== "undefined"
      ? localStorage.getItem("baby-cart")
      : null;

  if (storedCart) {
    const parsed = JSON.parse(storedCart) as Partial<Cart>;
    return {
      items: parsed.items || [],
      subtotal: parsed.subtotal || 0,
      shipping: parsed.shipping || 0,
      total: parsed.total || 0,
    };
  }

  return {
    items: [],
    subtotal: 0,
    shipping: 0,
    total: 0,
  };
}

export function saveCart(cart: Cart): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("baby-cart", JSON.stringify(cart));
  }
}

export function generateOrderNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ORD${timestamp}${random}`;
}

export function getDiscountPercentage(
  originalPrice: number,
  currentPrice: number
): number {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}
