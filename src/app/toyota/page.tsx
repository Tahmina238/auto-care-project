"use client";

import Image from "next/image";
import { Star, StarHalf, Edit, Eye } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import Slidder from "../slidder/page";
export default function Toyota() {
  return (
    <div>
      <Header />
      <Slidder />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Our Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* RAV4 Prime */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-56 md:h-64">
              <Image
                src="https://i.ibb.co/1fQPzHWR/rav4.jpg"
                alt="2023 Toyota RAV4 Prime"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">
                  2025 Toyota RAV4 Prime
                </h2>
                <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                  Buy now
                </span>
              </div>
              <div className="flex items-center mb-2">
                <span className="font-medium mr-2">Category:</span>
                <span className="text-gray-700 mr-1">SUV</span>
                <span className="text-yellow-500">🚙</span>
              </div>
              <div className="flex items-center mb-3">
                <span className="font-medium mr-2">Price:</span>
                <span className="text-gray-700">$ 42340</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="bg-yellow-400 text-white text-xs px-3 py-1 rounded-full">
                  5
                </span>
              </div>
              <div className="flex justify-end mt-4 space-x-2">
                <button className="p-2 bg-green-400 text-white rounded-md">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="p-2 bg-orange-500 text-white rounded-md">
                  <Eye className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Highlander */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-56 md:h-64">
              <Image
                src="https://i.ibb.co/pBmpB5V2/highlander.png"
                alt="2023 Toyota Highlander"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">
                  2025 Toyota Highlander
                </h2>
                <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                  Buy now
                </span>
              </div>
              <div className="flex items-center mb-2">
                <span className="font-medium mr-2">Category:</span>
                <span className="text-gray-700 mr-1">SUV</span>
                <span className="text-yellow-500">🚙</span>
              </div>
              <div className="flex items-center mb-3">
                <span className="font-medium mr-2">Price:</span>
                <span className="text-gray-700">$ 36420</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
                <span className="bg-yellow-400 text-white text-xs px-3 py-1 rounded-full">
                  4
                </span>
              </div>
              <div className="flex justify-end mt-4 space-x-2">
                <button className="p-2 bg-green-400 text-white rounded-md">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="p-2 bg-orange-500 text-white rounded-md">
                  <Eye className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Prius */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-60  md:h-64">
              <Image
                src="https://i.ibb.co/N2vP2pxN/toyota3.jpg"
                alt="2025 Toyota Prius"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">2025 Toyota Prius</h2>
                <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                  Buy now
                </span>
              </div>
              <div className="flex items-center mb-2">
                <span className="font-medium mr-2">Category:</span>
                <span className="text-gray-700 mr-1">coupe</span>
                <span className="text-yellow-500">🚗</span>
              </div>
              <div className="flex items-center mb-3">
                <span className="font-medium mr-2">Price:</span>
                <span className="text-gray-700">$ 27450</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <StarHalf className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="bg-yellow-400 text-white text-xs px-3 py-1 rounded-full">
                  4.5
                </span>
              </div>
              <div className="flex justify-end mt-4 space-x-2">
                <button className="p-2 bg-green-400 text-white rounded-md">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="p-2 bg-orange-500 text-white rounded-md">
                  <Eye className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Corolla */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-140 h-50 md:h-64">
              <Image
                src="https://i.ibb.co/vvT8H94K/colla.jpg"
                alt="2025 Toyota Corolla"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">2025 Toyota Corolla</h2>
                <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                  Buy now
                </span>
              </div>
              <div className="flex items-center mb-2">
                <span className="font-medium mr-2">Category:</span>
                <span className="text-gray-700 mr-1">sedan</span>
                <span className="text-yellow-500">🚗</span>
              </div>
              <div className="flex items-center mb-3">
                <span className="font-medium mr-2">Price:</span>
                <span className="text-gray-700">$ 21550</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <StarHalf className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="bg-yellow-400 text-white text-xs px-3 py-1 rounded-full">
                  4.5
                </span>
              </div>
              <div className="flex justify-end mt-4 space-x-2">
                <button className="p-2 bg-green-400 text-white rounded-md">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="p-2 bg-orange-500 text-white rounded-md">
                  <Eye className="h-5 w-5" />
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
