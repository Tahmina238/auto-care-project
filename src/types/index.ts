import type { StaticImport } from "next/dist/shared/lib/get-img-props"; // only if using StaticImport for images

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageSrc: string | StaticImport; // allow both string paths and StaticImport
  brand: string;
}
