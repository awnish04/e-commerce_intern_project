
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { transition1 } from "@/components/transitions";
import { Product } from "@/types/product";
import { categories } from "@/constants/categories"; // Import shared categories

interface ProductListProps {
  products: Product[];
  category: string;
  setCategory: (category: string) => void; // Add setCategory to props
  sort: string;
  searchQuery: string;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  category,
  setCategory,
  sort,
  searchQuery,
}) => {
  // Step 1: Filter by search across all products (globally)
  const searchedProducts = products.filter((p: Product) => {
    const query = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(query) || // Match by product name
      p.category.toLowerCase().includes(query) // Match by category
    );
  });

  // Step 2: Detect if the search query matches a category and update the filter
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      // Check if the search query matches any category exactly
      const matchedCategory = categories.find(
        (cat) => cat.toLowerCase() === query
      );
      if (matchedCategory) {
        // If the search query matches a category, update the category filter
        setCategory(matchedCategory);
      } else {
        // If the search query doesn't match a category, set to "All" to show results from all categories
        setCategory("All");
      }
    }
  }, [searchQuery, setCategory]);

  // Step 3: Apply category filter only if there's no search query
  const filteredProducts =
    searchQuery.trim() === ""
      ? searchedProducts.filter(
          (p: Product) => category === "All" || p.category === category
        )
      : searchedProducts; // Ignore category filter if there's a search query

  // Step 4: Sort the filtered results
  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sort === "price-asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <motion.div
      key={category + sort + searchQuery}
      initial={{ opacity: 0, y: "70%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "60%" }}
      transition={{ ...transition1, duration: 1.5 }}
      className="lg:w-full md:w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 lg:gap-7 gap-4 m-auto"
    >
      {sortedProducts.length > 0 ? (
        sortedProducts.map((product: Product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: "70%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "60%" }}
            transition={{ ...transition1, duration: 1.5 }}
          >
            <ProductCard key={product.id} product={product} />
          </motion.div>
        ))
      ) : (
        <div className="col-span-3 text-center text-gray-500 my-auto mt-40">
          <p className="font-bold">No Product Found</p>
        </div>
      )}
    </motion.div>
  );
};

export default ProductList;