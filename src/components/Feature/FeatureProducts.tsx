import { Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function FeatureProducts() {
  const products = [
    {
      id: 1,
      name: "2025 Tesla Cybertruck",
      category: "suv",
      price: 106700,
      image: "/images/cybertruck.jpg",
      brand: "Tesla",
    },
    {
      id: 2,
      name: "2025 Mercedes-Benz GLS",
      category: "suv",
      price: 105700,
      image: "/images/mercedes.jpg",
      brand: "Mercedes-Benz",
    },
    {
      id: 3,
      name: "2025 Ford Mustang",
      category: "sedan",
      price: 41900,
      image: "/images/Ford-yellow.webp",
      brand: "Ford",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Feature Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden rounded-lg shadow-md"
          >
            <div className="relative h-64">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <span className="bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.brand}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Category:</span>
                  <span className="text-gray-700">{product.category}</span>
                  <span className="ml-2 text-yellow-500">🚗</span>
                </div>

                <div className="flex items-center">
                  <span className="font-semibold mr-2">Price:</span>
                  <span className="text-gray-700">$ {product.price}</span>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="  mt-4 ">
                  <button className="bg-amber-400 hover:bg-amber-700 w-auto h-auto p-3 rounded-md transition-colors">
                    Add to cart
                  </button>
                </div>
                <div className="py-4">
                  <button className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-md transition-colors">
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
