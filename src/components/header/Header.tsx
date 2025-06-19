"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

export default function Header() {
  return (
    <div>
      <header />
      <nav className="w-full h-24 bg-gradient-to-r from-blue-950 to-blue-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative mr-2">
            <Image
              src="/logo.png"
              alt="Auto Care Logo"
              width={120}
              height={40}
              className="object-contain"
            />
            <button className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white rounded-full p-1">
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-white">
          <Link href="/" className="hover:text-gray-200 transition-colors">
            Home
          </Link>
          <Link href="/cart" className="hover:text-gray-200 transition-colors">
            My Cart
          </Link>
          <Link
            href="/add-product"
            className="hover:text-gray-200 transition-colors"
          >
            Add Product
          </Link>
        </div>

        <Link
          href="/login"
          className="px-4 py-1 border-2 border-yellow-500 text-white font-medium rounded hover:bg-yellow-500/10 transition-colors"
        >
          LOGIN
        </Link>
      </nav>
    </div>
  );
}
