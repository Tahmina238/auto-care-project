"use client";

import { useState, useCallback } from "react";
import type { Product, ProductCategory } from "@/types";
import { products as initialProducts } from "@/data/products";

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

  const applyFilters = useCallback(() => {
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

  const filterByCategory = useCallback(
    (category: ProductCategory | null) => {
      setActiveCategory(category);
      applyFilters();
    },
    [applyFilters]
  );

  const filterByPriceRange = useCallback(
    (min: number, max: number) => {
      setPriceRange({ min, max });
      applyFilters();
    },
    [applyFilters]
  );

  const resetFilters = useCallback(() => {
    setActiveCategory(null);
    setPriceRange(null);
    setFilteredProducts(products);
  }, [products]);

  return {
    products,
    filteredProducts,
    filterByCategory,
    filterByPriceRange,
    resetFilters,
  };
}
