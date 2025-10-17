import Link from "next/link";

export default function AboutLayout({children}) {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-8">{children}</main>

      <aside className="w-1/4 bg-gray-100 p-6 border-l border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-800 ">
          About Us Menu
        </h2>
        <nav className="flex flex-col items-start space-y-2 ">
          <Link href="/about/vision" className="hover:text-blue-600 transition">
            Vision
          </Link>
          <Link
            href="/about/mission"
            className="hover:text-blue-600 transition"
          >
            Mission
          </Link>
        </nav>
      </aside>
    </div>
  );
}
