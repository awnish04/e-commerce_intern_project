// "use client";
// import React, { useState } from "react";
// import productsData from "../data/products.json"; // Import your static data
// import ProductCard from "../components/ProductCard";
// import Footer from "../components/Footer";
// import Navbar from "@/components/NavBar";
// import FilterCategory from "@/components/FilterCategory";
// import SortSelect from "@/components/SortSelect";
// import Lottie from "lottie-react";
// import animationData from "../assets/Animation.json";
// import { Product } from "../types/product"; // Import the Product type
// import { motion } from "framer-motion";
// import { transition1 } from "../components/transitions";
// // Wishlist management with localStorage
// const getFavoritesFromLocalStorage = (): number[] => {
//   if (typeof window !== "undefined") {
//     const favorites = localStorage.getItem("favorites");
//     return favorites ? JSON.parse(favorites) : [];
//   }
//   return []; // Return an empty array if running on the server
// };

// const saveFavoritesToLocalStorage = (favorites: number[]): void => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }
// };

// export default function Home() {
//   const [category, setCategory] = useState("All");
//   const [sort, setSort] = useState("price-asc");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [favorites, setFavorites] = useState<number[]>(
//     getFavoritesFromLocalStorage()
//   );

//   // Add or remove from favorites
//   const toggleFavorite = (productId: number): void => {
//     const updatedFavorites = favorites.includes(productId)
//       ? favorites.filter((id) => id !== productId)
//       : [...favorites, productId];

//     setFavorites(updatedFavorites);
//     saveFavoritesToLocalStorage(updatedFavorites); // Persist favorites
//   };

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
//             initial={{ opacity: 0, y: "50%" }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: "30%" }}
//             transition={{ ...transition1, duration: 1.5 }}
//             className="lg:w-full md:w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 lg:gap-7 gap-4 m-auto"
//           >
//             {sortedProducts.length > 0 ? (
//               sortedProducts.map((product: Product) => (
//                 <ProductCard
//                   key={product.id}
//                   product={product}
//                   onToggleFavorite={toggleFavorite}
//                   isFavorite={favorites.includes(product.id)}
//                 />
//               ))
//             ) : (
//               <div className="col-span-3 text-center text-gray-500">
//                 <Lottie
//                   animationData={animationData}
//                   loop
//                   autoplay
//                   className="w-72 h-82 mx-auto my-14 col-span-3"
//                 />
//                 <span className="font-bold">No Product Found</span>
//               </div>
//             )}
//           </motion.div>
//         </div>
//       </div>
//       <Footer /> {/* Stays at the bottom now */}
//     </div>
//   );
// }

"use client"; // Ensure this is a client-side component

import React, { useState, useEffect } from "react";
import productsData from "../data/products.json"; // Import your static data
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Navbar from "@/components/NavBar";
import FilterCategory from "@/components/FilterCategory";
import SortSelect from "@/components/SortSelect";
import Lottie from "lottie-react";
import animationData from "../assets/Animation.json";
import { Product } from "../types/product"; // Import the Product type
import { motion } from "framer-motion";
import { transition1 } from "../components/transitions";

const getFavoritesFromLocalStorage = (): number[] => {
  if (typeof window !== "undefined") {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  }
  return []; // Return an empty array if running on the server
};

const saveFavoritesToLocalStorage = (favorites: number[]): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

export default function Home() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("price-asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Ensure the code below runs only on the client-side
  useEffect(() => {
    setIsClient(true); // Set the client-side state to true
    setFavorites(getFavoritesFromLocalStorage()); // Load favorites on the client side
  }, []);
  if (!isClient) return null;

  const toggleFavorite = (productId: number): void => {
    const updatedFavorites = favorites.includes(productId)
      ? favorites.filter((id) => id !== productId)
      : [...favorites, productId];

    setFavorites(updatedFavorites);
    saveFavoritesToLocalStorage(updatedFavorites); // Persist favorites
  };

  const filteredProducts = productsData.filter(
    (p: Product) =>
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sort === "price-asc" ? a.price - b.price : b.price - a.price
  );

  // Render client-side only
  if (!isClient) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onSearch={setSearchQuery} />
      <div className="flex-1 container mx-auto max-w-7xl py-3">
        <div className="w-full px-4 ">
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
                    onToggleFavorite={toggleFavorite}
                    isFavorite={favorites.includes(product.id)}
                  />
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-500">
                <Lottie
                  animationData={animationData}
                  loop
                  autoplay
                  className="w-72 h-82 mx-auto my-14 col-span-3"
                />
                <span className="font-bold">No Product Found</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <Footer /> {/* Stays at the bottom now */}
    </div>
  );
}

