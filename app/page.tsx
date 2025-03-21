"use client";
// pages/Home.tsx
import Navbar from "@/components/NavBar";
import { useState } from "react";
import { motion } from "framer-motion";
import { transition1 } from "@/components/transitions";
import FilterCategory from "@/components/FilterCategory";
import SortSelect from "@/components/SortSelect";
// import ProductList from "@/components/ProductList";
// import NoProductFound from "@/components/NoProductFound";
import productsData from "../data/products.json"; // Adjust path if necessary
import dynamic from "next/dynamic";

// Dynamically import ProductList with SSR disabled
const ProductList = dynamic(() => import("@/components/ProductList"), {
  ssr: false, // Disable SSR for this component
});
export default function Home() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("price-asc");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onSearch={setSearchQuery} />
      <div className="flex-1 container mx-auto max-w-7xl py-3">
        <div className="w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: "-40%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "10%" }}
            transition={{ ...transition1, duration: 0.9 }}
            className="z-0"
          >
            <div>
              <p className="text-3xl font-extrabold mb-4 lg:text-5xl">
                Latest Products
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-70%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "20%" }}
            transition={{ ...transition1, duration: 0.9 }}
            className="flex justify-between items-center mb-6"
          >
            <FilterCategory onFilter={setCategory} />
            <SortSelect onSort={setSort} />
          </motion.div>

          {/* <ProductList
            products={productsData}
            category={category}
            sort={sort}
            searchQuery={searchQuery}
          /> */}
          <ProductList
            products={productsData}
            category={category}
            setCategory={setCategory} // Pass the setCategory function
            sort={sort}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </div>
  );
}
