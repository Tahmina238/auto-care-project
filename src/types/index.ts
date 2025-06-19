export interface Product {
  [x: string]: string | StaticImport;
  id: number;
  name: string;
  category: string;
  price: number;
  imageSrc: string;
  brand: string;
}

export type ProductCategory = "coupe" | "sports" | "sedan" | "suv";
