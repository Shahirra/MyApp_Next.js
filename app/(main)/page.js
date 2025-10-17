"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch sample products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=6");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className="max-w-6xl mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
        Welcome to MyStore
      </h1>

      {loading ? (
        <p className="text-center text-gray-600 text-lg">Loading products...</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 border border-green-200 flex flex-col items-center"
            >
              <div className="w-full h-56 flex items-center justify-center bg-gray-50">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold mb-2 text-green-700">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {product.description}
                </p>
                <p className="text-green-600 font-bold mt-3">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <Link
          href="/products"
          className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
        >
          Load More
        </Link>
      </div>
    </main>
  );
}
