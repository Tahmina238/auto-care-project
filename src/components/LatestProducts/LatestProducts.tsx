import Image from "next/image";
import Link from "next/link";

export default function LatestProducts() {
  return (
    <div className="container mx-auto px-4 py-12 ">
      <h1 className="text-4xl font-bold text-center mb-10">Latest Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Large BMW i7 Card */}
        <div className="md:col-span-7 relative group overflow-hidden rounded-lg">
          <Link href="#" className="block relative h-[300px] md:h-[400px]">
            <Image
              src="/CarPrice/teslaonX.jpg"
              alt="2025 Tesla Cybertruck"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
              <span className="text-white text-3xl font-bold block">
                <span className="text-2xl align-top">$</span>105700
              </span>
              <span className="text-yellow-400 font-semibold text-xl">
                2025 Tesla Cybertruck
              </span>
            </div>
          </Link>
        </div>

        {/* Right column with BMW X7 */}
        <div className="md:col-span-5 relative group overflow-hidden rounded-lg">
          <Link href="#" className="block  relative h-[200px] md:h-[400px]">
            <Image
              src="/CarPrice/2025-BMW-XM.jpg"
              alt="2023 BMW XM"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
              <span className="text-white text-3xl font-bold block">
                <span className="text-2xl align-top">$</span>160400
              </span>
              <span className="text-yellow-400 font-semibold text-xl">
                2025 BMW XM
              </span>
            </div>
          </Link>
        </div>

        {/* Bottom left BMW X7 in snow */}
        <div className="md:col-span-4 relative group overflow-hidden rounded-lg">
          <Link href="#" className="block relative h-[240px]">
            <Image
              src="/CarPrice/BMW-SUV.jpeg"
              alt="2025 BMW suv"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
              <span className="text-white text-2xl font-bold block">
                <span className="text-xl align-top">$</span>160500
              </span>
              <span className="text-yellow-400 font-semibold text-lg">
                2025 BMW XM SUV
              </span>
            </div>
          </Link>
        </div>

        {/* Bottom middle BMW X7 in mountains */}
        <div className="md:col-span-4 relative group overflow-hidden rounded-lg">
          <Link href="#" className="block relative h-[250px]">
            <Image
              src="/CarPrice/2025-Toyota-prius.png"
              alt="2025 Toyota prius"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
              <span className="text-white text-2xl font-bold block">
                <span className="text-xl align-top">$</span>49,654
              </span>
              <span className="text-yellow-400 font-semibold text-lg">
                2025 Toyota Prius
              </span>
            </div>
          </Link>
        </div>

        <div className="md:col-span-4 relative group overflow-hidden rounded-lg">
          <Link href="#" className="block relative h-[250px]">
            <Image
              src="/CarPrice/2025 Ford.jpg"
              alt="2025 Toyota prius"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
              <span className="text-white text-2xl font-bold block">
                <span className="text-xl align-top">$</span>40,654
              </span>
              <span className="text-yellow-400 font-semibold text-lg">
                2025 Ford F-150 XL
              </span>
            </div>
          </Link>
        </div>

        {/* Empty space to match the layout */}
        <div className="md:col-span-4"></div>
      </div>
    </div>
  );
}
