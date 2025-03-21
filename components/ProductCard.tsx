"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Product } from "../types/product"; // Import the Product type

interface ProductProps {
  product: Product; // Use the Product type here
  // onToggleFavorite: (id: number) => void;
  // isFavorite: boolean;
}

export default function ProductCard({ product }: ProductProps) {
  return (
    <div>
      <div className="md:p-4 lg:p-7 p-3 border border-grayshade-200 dark:border-grayshade-300 rounded-xl dark:bg-grayshade-500 w-full justify-center justify-items-center justify-self-center shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out z-0">
        <Image
          className="w-full rounded-lg self-stretch h-64 min-h-52 mb-7 object-cover shadow"
          src={product.image}
          alt={product.name}
          width={200} // Adjust as needed
          height={200} // Adjust as needed
        />

        <div className="w-full">
          <p className="font-semibold text-xl mb-2 h-auto">{product.name}</p>
          <p className="text-grayshade-100 dark:text-grayshade-50 text-xs truncate overflow-hidden whitespace-nowrap">
            {product.description}
          </p>
          <div className="mt-4 mb-4 flex justify-between items-center">
            <div>
              <span className="border-2 px-2 py-2 text-xs font-semibold rounded-full ">
                {product.category}
              </span>
            </div>
            {/* <button
              className={`p-2 mt-2 flex items-center space-x-2 ${
                isFavorite ? "text-red-500" : "text-gray-500"
              }`}
              onClick={() => onToggleFavorite(product.id)}
            >
              <Heart
                className={`w-6 h-6 ${
                  isFavorite ? "fill-red-500" : "fill-none"
                }`}
              />
            </button> */}
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-grayshade-100 dark:text-grayshade-50 text-xs">
              Price
            </p>
            <p className="font-semibold text-grayshade-300 dark:text-white text-lg">
              {`$${product.price}`}
            </p>
          </div>
          <div className="flex text-white justify-between items-center">
            <Button className="w-full p-2 mt-2 h-8 px-4 button cursor-pointer">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
