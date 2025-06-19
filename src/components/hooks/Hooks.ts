"use client";

import { useState, useCallback, useEffect } from "react";
export type ProductCategory = "electronics" | "fashion" | "home" | "books"; // example
import { products as initialProducts } from "../data/products"; // ✅ points to actual product data
import { Product } from "@/types";

interface UseProductsReturn {
  products: Product[];
  filteredProducts: Product[];
  filterByCategory: (category: ProductCategory | null) => void;
  filterByPriceRange: (min: number, max: number) => void;
  resetFilters: () => void;
}

export function useProducts(): UseProductsReturn {
  const [products] = useState<Product[]>(initialProducts); // base data
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(initialProducts);
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(
    null
  );
  const [priceRange, setPriceRange] = useState<{
    min: number;
    max: number;
  } | null>(null);

  // Re-filter products when category or price changes
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
