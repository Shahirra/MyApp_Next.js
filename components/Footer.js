import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-3">MyApp</h2>
          <p className="text-gray-600 text-sm">
            We provide high-quality products that make your life easier.
            Explore our collection and discover something you’ll love.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/" className="hover:text-green-700">Home</Link></li>
            <li><Link href="/about" className="hover:text-green-700">About</Link></li>
            <li><Link href="/products" className="hover:text-green-700">Products</Link></li>
            <li><Link href="/contact" className="hover:text-green-700">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>Email: <a href="mailto:info@myapp.com" className="hover:text-green-700">info@myapp.com</a></li>
            <li>Phone: <a href="tel:+201234567890" className="hover:text-green-700">+20 123 456 7890</a></li>
            <li>Location: Cairo, Egypt</li>
          </ul>
        </div>

      </div>

      <div className="border-t text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
