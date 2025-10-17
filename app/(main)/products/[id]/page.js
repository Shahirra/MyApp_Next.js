export const revalidate = 30;
import React from "react";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();

  return data.products.map((product) => ({
    id: product.id.toString(),
  }));
}

async function getSingleProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 30 },
  });
  return res.json();
}

const ProductDetails = async ({ params }) => {
  const product = await getSingleProduct(params.id);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-md"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-700 mb-4">
            ${product.price}
          </p>
          <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
