// components/ProductList.tsx
import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard"; // Adjust path if necessary
import { transition1 } from "@/components/transitions";
import { Product } from "@/types/product";
// import NoProductFound from "./NoProductFound";

interface ProductListProps {
  products: Product[];
  category: string;
  sort: string;
  searchQuery: string;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  category,
  sort,
  searchQuery,
}) => {
  const filteredProducts = products.filter(
    (p: Product) =>
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <ProductCard
              key={product.id}
              product={product}
              onToggleFavorite={() => {}} // No-op function
              isFavorite={false} // Default value
            />
          </motion.div>
        ))
      ) : (
        <div className="col-span-3 text-center text-gray-500">
          <span className="font-bold">
            {/* <NoProductFound /> */}
            No Product Found
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default ProductList;
