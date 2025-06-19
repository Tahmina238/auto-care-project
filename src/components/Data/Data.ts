"use client";

import { useState, useCallback, useEffect } from "react";
export type ProductCategory = "car"; // example
import { products as initialProducts } from "./products"; // ✅ Correct
import { Product } from "@/types";

interface UseProductsReturn {
  products: Product[];

  filteredProducts: Product[];
  filterByCategory: (category: ProductCategory | null) => void;
  filterByPriceRange: (min: number, max: number) => void;
  resetFilters: () => void;
}

export function useProducts(): UseProductsReturn {
  const [products] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(initialProducts);
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(
    null
  );
  const [priceRange, setPriceRange] = useState<{
    min: number;
    max: number;
  } | null>(null);

  // Apply filters whenever activeCategory or priceRange changes
  useEffect(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((product) => product.category === activeCategory);
    }

    if (priceRange) {
      result = result.filter(
        (product) =>
          product.price >= priceRange.min && product.price <= priceRange.max
      );
    }

    setFilteredProducts(result);
  }, [products, activeCategory, priceRange]);

  const filterByCategory = useCallback((category: ProductCategory | null) => {
    setActiveCategory(category);
  }, []);

  const filterByPriceRange = useCallback((min: number, max: number) => {
    setPriceRange({ min, max });
  }, []);

  const resetFilters = useCallback(() => {
    setActiveCategory(null);
    setPriceRange(null);
  }, []);

  return {
    products,
    filteredProducts,
    filterByCategory,
    filterByPriceRange,
    resetFilters,
  };
}
