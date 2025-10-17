import React, {Suspense} from "react";
import ProductsList from "@/components/products/ProductsList";
import Spinner from "@/components/ui/spinner";

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-700">Our Products</h1>
      <p className="text-2xl text-center text-gray-600 max-w-4xl mx-auto mb-10">
        Discover our wide range of high-quality products designed to meet your everyday needs.
        Browse through our latest collection and find the perfect item that fits your lifestyle and budget.
      </p>

      <Suspense fallback={<Spinner />}>
        <ProductsList />
      </Suspense>
    </div>
  );
}
