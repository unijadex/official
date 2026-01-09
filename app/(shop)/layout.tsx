import { CartProvider } from "@/lib/cart-context";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </CartProvider>
  );
}
