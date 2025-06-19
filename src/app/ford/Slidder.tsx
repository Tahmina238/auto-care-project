"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slidder() {
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch by only rendering Swiper on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  const slides = [
    {
      id: 1,
      imageUrl: "https://i.ibb.co/dJBYcrWS/Ford-yellow.webp ",
      alt: "Red Toyota Crown sedan against a night city skyline with full moon",
    },
    {
      id: 2,
      imageUrl: "https://i.ibb.co/wZYZY1tX/ford-black.jpg",
      alt: "Toyota Crown in silver color",
    },
    {
      id: 3,
      imageUrl: "https://i.ibb.co/99y01JwC/2025-Ford-Explorer.webp ",
      alt: "2025 Ford Explorer",
    },
  ];

  if (!mounted) {
    return (
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-470 h-[400px] md:h-[600px] lg:h-[730px] bg-gray-900">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <Image
              src={slide.imageUrl || "/placeholder.svg"}
              alt={slide.alt}
              fill
              priority={slide.id === 1}
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Toyota Logo overlay */}
      <div className="absolute bottom-4 left-4 z-10 flex items-center">
        <div className="bg-red-600 p-2 h-12 w-12 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 text-white"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>
        <div className="ml-2 text-white text-5xl font-bold tracking-widest">
          FORD
        </div>
      </div>

      {/* Crown logo overlay */}
    </div>
  );
}
