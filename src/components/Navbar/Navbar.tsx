"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import logo from "../../../public/images/logo.png";
import img2 from "../../../public/images/img-2.jpg";
import Link from "next/link"; //

export default function Navbar() {
  return (
    <div style={{ backgroundImage: `url(${img2.src})` }} className="min-h-12">
      <div className="min-h-screen text-lg ">
        <header className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="AutoCare Logo"
                width={950}
                height={750}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-yellow-400 hover:text-yellow-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/cart"
              className="text-white hover:text-yellow-300 font-medium"
            >
              My Cart
            </Link>
            <Link
              href="/add-product"
              className="text-white hover:text-yellow-300 font-medium"
            >
              Add Product
            </Link>

            <Link
              href="/login"
              className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 px-6 py-2 rounded-md font-medium transition-colors"
            >
              LOGIN
            </Link>
          </div>
        </header>

        <main className="container  mx-auto px-8  ">
          <div className="flex  items-center">
            <div className="  flex flex-col item-center space-y-2">
              <h1 className="text-7xl text-center  font-bold text-white leading-tight">
                Discover Your Dream Ride at{" "}
                <span className="text-yellow-400">AutoCare</span>
              </h1>
              <p className="text-white/90  text-2xl">
                Explore a vast selection of top-quality automobiles at AutoCare,
                where your automotive dreams come to life. Whether you&apos;re
                searching for a sleek sedan, a rugged SUV, or a powerful sports
                car, our inventory is packed with options to suit every style
                and budget. With our expert team, comprehensive vehicle
                information, and hassle-free buying experience, finding your
                perfect car has never been easier. Start your journey with
                <p className="text-center">
                  AutoCare today anddrive away in style!{" "}
                </p>
              </p>

              <div className="flex justify-center">
                <Link
                  href="/explore"
                  className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-3 rounded-md transition-colors"
                >
                  EXPLORE <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-red-500/30 rounded-lg"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
