// "use client"; // Ensure this is a client-side component

// import React, { useEffect, useState } from "react";
// import productsData from "@/data/products.json"; // Import your static data
// import ProductCard from "@/components/ProductCard";

// import Navbar from "@/components/NavBar";
// import FilterCategory from "@/components/FilterCategory";
// import SortSelect from "@/components/SortSelect";
// import Lottie from "lottie-react";
// import animationData from "@/assets/Animation.json";
// import { Product } from "@/types/product"; // Import the Product type
// import { motion } from "framer-motion";
// import { transition1 } from "@/components/transitions";

// export default function Home() {
//   const [category, setCategory] = useState("All");
//   const [sort, setSort] = useState("price-asc");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Prevent SSR errors by returning null if not on client-side
//   if (!isClient) return null;

//   const filteredProducts = productsData.filter(
//     (p: Product) =>
//       (category === "All" || p.category === category) &&
//       p.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const sortedProducts = [...filteredProducts].sort((a, b) =>
//     sort === "price-asc" ? a.price - b.price : b.price - a.price
//   );

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar onSearch={setSearchQuery} />
//       <div className="flex-1 container mx-auto max-w-7xl py-3">
//         <div className="w-full px-4 ">
//           <motion.div
//             initial={{ opacity: 0, y: "-70%" }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: "20%" }}
//             transition={{ ...transition1, duration: 0.9 }}
//           >
//             <p className="text-4xl font-extrabold mb-4 lg:text-7xl">
//               Latest Products
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: "-70%" }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: "20%" }}
//             transition={{ ...transition1, duration: 0.9 }}
//             className="flex justify-between items-center "
//           >
//             <FilterCategory onFilter={setCategory} />
//             <SortSelect onSort={setSort} />
//           </motion.div>

//           <motion.div
//             key={category + sort + searchQuery}
//             initial={{ opacity: 0, y: "70%" }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: "60%" }}
//             transition={{ ...transition1, duration: 1.5 }}
//             className="lg:w-full md:w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 lg:gap-7 gap-4 m-auto">
//             {sortedProducts.length > 0 ? (
//               sortedProducts.map((product: Product) => (
//                 <motion.div
//                   key={product.id}
//                   initial={{ opacity: 0, y: "70%" }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: "60%" }}
//                   transition={{ ...transition1, duration: 1.5 }}
//                 >
//                   <ProductCard
//                     key={product.id}
//                     product={product}
//                     onToggleFavorite={() => {}} // No-op function
//                     isFavorite={false} // Default value
//                   />
//                 </motion.div>
//               ))
//             ) : (
//               <div className="col-span-3 text-center text-gray-500">
//                 {isClient && (
//                   <Lottie
//                     animationData={animationData}
//                     loop
//                     autoplay
//                     className="w-72 h-82 mx-auto my-14 col-span-3"
//                   />
//                 )}

//                 <span className="font-bold">No Product Found</span>
//               </div>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
// pages/Home.tsx
import Navbar from "@/components/NavBar";
import { useState } from "react";
import { motion } from "framer-motion";
import { transition1 } from "@/components/transitions";
import FilterCategory from "@/components/FilterCategory";
import SortSelect from "@/components/SortSelect";
import ProductList from "@/components/ProductList";
// import NoProductFound from "@/components/NoProductFound";
import productsData from "../data/products.json"; // Adjust path if necessary

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
            initial={{ opacity: 0, y: "-70%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "20%" }}
            transition={{ ...transition1, duration: 0.9 }}
          >
            <p className="text-4xl font-extrabold mb-4 lg:text-7xl">
              Latest Products
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-70%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "20%" }}
            transition={{ ...transition1, duration: 0.9 }}
            className="flex justify-between items-center "
          >
            <FilterCategory onFilter={setCategory} />
            <SortSelect onSort={setSort} />
          </motion.div>

          <ProductList
            products={productsData}
            category={category}
            sort={sort}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </div>
  );
}
