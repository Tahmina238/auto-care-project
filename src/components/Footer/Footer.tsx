"use client";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <Image
              src="/images/autocare-logo.png"
              alt="AutoCare Logo"
              width={150}
              height={50}
              className="h-auto"
            />
          </div>
          <p className="text-sm text-gray-300">AutoCare Ltd.</p>
          <p className="text-sm text-gray-300">
            Providing reliable automobile since 2000
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <h3 className="text-gray-400 uppercase text-sm font-medium mb-4">
            SOCIAL
          </h3>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Youtube className="w-5 h-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
