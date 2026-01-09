"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Cart, CartItem, Product } from "./types";
import {
  calculateCartTotal,
  getInitialCart,
  saveCart,
} from "./utils";

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleSelect: (productId: string) => void;
  selectAll: (selected: boolean) => void;
  clearCart: () => void;
  cartItemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>(getInitialCart());
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(
      cart.items.reduce((sum, item) => sum + item.quantity, 0)
    );
  }, [cart]);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex(
        (item) => item.product.id === product.id
      );

      let newItems: CartItem[];

      if (existingItemIndex >= 0) {
        newItems = prevCart.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...prevCart.items, { product, quantity, selected: true }];
      }

      const totals = calculateCartTotal(
        newItems.filter((item) => item.selected)
      );

      return {
        items: newItems,
        ...totals,
      };
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter(
        (item) => item.product.id !== productId
      );

      const totals = calculateCartTotal(
        newItems.filter((item) => item.selected)
      );

      return {
        items: newItems,
        ...totals,
      };
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );

      const totals = calculateCartTotal(
        newItems.filter((item) => item.selected)
      );

      return {
        items: newItems,
        ...totals,
      };
    });
  };

  const toggleSelect = (productId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) =>
        item.product.id === productId
          ? { ...item, selected: !item.selected }
          : item
      );

      const totals = calculateCartTotal(
        newItems.filter((item) => item.selected)
      );

      return {
        items: newItems,
        ...totals,
      };
    });
  };

  const selectAll = (selected: boolean) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) => ({ ...item, selected }));

      const totals = calculateCartTotal(
        newItems.filter((item) => item.selected)
      );

      return {
        items: newItems,
        ...totals,
      };
    });
  };

  const clearCart = () => {
    setCart({
      items: [],
      subtotal: 0,
      shipping: 0,
      total: 0,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleSelect,
        selectAll,
        clearCart,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
