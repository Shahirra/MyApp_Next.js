import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return data.products;
}

export default async function ProductsList() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center text-center"
        >
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={250}
            height={250}
            className=" object-cover rounded-lg mb-4"
          />
          <h2 className="text-lg font-semibold mb-2 min-h-[48px]">{product.title}</h2>
          <p className="text-gray-600 mb-2">${product.price}</p>
          <Link
            href={`/products/${product.id}`}
            className="inline-block bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition cursor-pointer"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

