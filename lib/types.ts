export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: Category;
  images: string[];
  stock: number;
  ageRange?: string;
  brand: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  tags?: string[];
  specifications?: Record<string, string>;
}

export type Category =
  | "toys"
  | "books"
  | "clothing"
  | "feeding"
  | "diapers"
  | "accessories";

export interface CartItem {
  product: Product;
  quantity: number;
  selected?: boolean;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  name: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  detail: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  subtotal: number;
  shipping: number;
  total: number;
  shippingAddress: Address;
  createdAt: Date;
  updatedAt: Date;
}
