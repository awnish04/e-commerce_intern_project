"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Menu, ShoppingCart, X } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import React from "react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import NavList from "./NavList";
import { motion } from "framer-motion";
import { transition1 } from "../components/transitions";
export default function Navbar({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: "-70%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "40%" }}
      transition={{ ...transition1, duration: 0.7 }}
      className="border-b sticky top-0 bg-white dark:bg-gray-900 z-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <Link href="/">
            <p className="cursor-pointer text-xl font-semibold">E-Commerce</p>
          </Link>
        </div>

        {/* Center Section - Search Bar (Responsive) */}
        <div className="flex-1 mx-4 hidden justify-center items-center md:flex">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-md border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:place-content-center"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        {/* Right Section - NavList, Mode Toggle, Cart */}
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Link href="/" className="relative">
            <ShoppingCart className="h-6 w-6" />
          </Link>

          {/* Mobile Menu Toggle */}
          <span
            className="lg:hidden cursor-pointer"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </span>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 py-2">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Mobile Collapsible Nav */}
      <Collapsible open={openNav}>
        <CollapsibleContent className="px-4 py-2">
          <NavList />
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  );
}
