import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UniJade Tech",
  description: "UniJade Tech",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-6xl font-bold text-gray-900">UniJade Tech</h1>
    </div>
  );
}
