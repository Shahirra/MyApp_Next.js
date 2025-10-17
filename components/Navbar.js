"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact Us", path: "/contact" },
  { name: "Posts", path: "/posts" },
  { name: "Login", path: "/login" },
];

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-700 pb-2">
          <Link href="/">MyApp</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.name === "Login" ? (
                <Link
                  href={link.path}
                  className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.path}
                  className={`hover:text-green-700 transition ${
                    pathName === link.path
                      ? "text-green-700 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // X icon (close)
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon (open)
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-8 pb-4 space-y-3 bg-white border-t border-green-200">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.name === "Login" ? (
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block hover:text-green-700 transition ${
                    pathName === link.path
                      ? "text-green-700 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
