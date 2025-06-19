"use client";

import Image from "next/image";
import { Star, StarHalf, Pencil, Eye } from "lucide-react";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";
import Slidder from "../ford/Slidder";

export default function Ford() {
  return (
    <div>
      <Header />
      <Slidder />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tesla Model Y Long Range */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-80">
              <Image
                src="https://i.ibb.co/dJBYcrWS/Ford-yellow.webp"
                alt="FORD  Mustang "
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold">
                    2025 Ford Mustang Mach-E Premium RWD Automatic
                  </h2>
                  <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                    Best
                  </span>
                </div>
              </div>
              <div className="flex items-center mt-1">
                <span className="font-medium mr-2">Category:</span>
                <span className="text-gray-700">sedan</span>
                <span className="text-yellow-400 ml-1">★</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="font-medium mr-2">Price:</span>
                <span className="text-gray-700">$65000</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="bg-yellow-400 text-black font-medium px-3 py-0.5 rounded-full text-sm">
                  4.5
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-3">
                <button className="bg-green-400 p-2 rounded-md">
                  <Pencil className="w-5 h-5 text-white" />
                </button>
                <button className="bg-orange-500 p-2 rounded-md">
                  <Eye className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Tesla Model 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-88">
              <Image
                src="https://i.ibb.co/S7BjFPGb/2025-Ford-F-150.jpg"
                alt="Tesla Model 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold">2025 Ford F-150</h2>
                  <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                    Best
                  </span>
                </div>
              </div>
              <div className="flex items-center mt-1">
                <span className="font-medium mr-2">Category:</span>
                <span className="text-gray-700">coupe</span>
                <span className="text-yellow-400 ml-1">★</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="font-medium mr-2">Price:</span>
                <span className="text-gray-700">$79,200</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <Star className="w-5 h-5 text-gray-300" />
                </div>
                <div className="bg-yellow-400 text-black font-medium px-3 py-0.5 rounded-full text-sm">
                  4
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-3">
                <button className="bg-green-400 p-2 rounded-md">
                  <Pencil className="w-5 h-5 text-white" />
                </button>
                <button className="bg-orange-500 p-2 rounded-md">
                  <Eye className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Tesla Model X Plaid */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-85">
              <Image
                src="https://i.ibb.co/gLTC7BQv/2025-ford-escape.jpg"
                alt="Tesla Model X Plaid"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold">2025 Ford Escape</h2>
                  <span className="bg-pink-500 text-wh2025 Ford Escapeite text-xs px-2 py-0.5 rounded-full">
                    Best
                  </span>
                </div>
              </div>
              <div className="flex items-center mt-1">
                <span className="font-medium mr-2">Category:</span>
                <span className="text-gray-700">sports</span>
                <span className="text-yellow-400 ml-1">★</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="font-medium mr-2">Price:</span>
                <span className="text-gray-700">$45,880</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="bg-yellow-400 text-black font-medium px-3 py-0.5 rounded-full text-sm">
                  4.5
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-3">
                <button className="bg-green-400 p-2 rounded-md">
                  <Pencil className="w-5 h-5 text-white" />
                </button>
                <button className="bg-orange-500 p-2 rounded-md">
                  <Eye className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Tesla Model S Plaid */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-85">
              <Image
                src="https://i.ibb.co/GBzBDG9/202205-Ford-Explorer.jpg"
                alt="ford explorer"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold">2025 FORD -Explorer</h2>
                  <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                    Best
                  </span>
                </div>
              </div>
              <div className="flex items-center mt-1">
                <span className="font-medium mr-2">Category:</span>
                <span className="text-gray-700">sports</span>
                <span className="text-yellow-400 ml-1">★</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="font-medium mr-2">Price:</span>
                <span className="text-gray-700">$58,490</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="bg-yellow-400 text-black font-medium px-3 py-0.5 rounded-full text-sm">
                  4.5
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-3">
                <button className="bg-green-400 p-2 rounded-md">
                  <Pencil className="w-5 h-5 text-white" />
                </button>
                <button className="bg-orange-500 p-2 rounded-md">
                  <Eye className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
