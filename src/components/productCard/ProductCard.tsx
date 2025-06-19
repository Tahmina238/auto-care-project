// import type { Product } from "@/types";
// import Image from "next/image";
// import { Button } from "@/components/ui/button"; // adjust path as needed

// interface ProductCardProps {
//   product: Product;
//   onView: () => void;
// }

// export function ProductCard({ product, onView }: ProductCardProps) {
//   return (
//     <div className="border rounded-lg shadow-sm p-4 hover:shadow-md transition">
//       <Image
//         src={product.image}
//         alt={product.name}
//         width={300}
//         height={200}
//         className="w-full h-48 object-cover rounded-md"
//       />
//       <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
//       <p className="text-gray-600">${product.price}</p>
//       <Button className="mt-4 w-full" onClick={onView}>
//         View Details
//       </Button>
//     </div>
//   );
// }
