import Link from "next/link";
import React from "react";

function NavList() {
  return (
    <div className="mt-2 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex lg:p-1">
      <Link href="#" className="font-medium bg-background text-foreground">
        <div
          className="flex items-center gap-2 px-2 py-2 font-medium
        rounded-lg lg:hover:bg-[#111A2B] lg:hover:text-white cursor-pointer bg-background
        text-foreground"
        >
          Shop
        </div>
      </Link>
      <Link href="#" className="font-medium bg-background text-foreground">
        <div
          className="flex items-center gap-2 px-2 py-2 font-medium
        rounded-lg lg:hover:bg-[#111A2B] lg:hover:text-white cursor-pointer bg-background
        text-foreground"
        >
          About
        </div>
      </Link>
      <Link href="#" className="font-medium bg-background text-foreground">
        <div
          className="flex items-center gap-2 px-2 py-2 font-medium
        rounded-lg lg:hover:bg-[#111A2B] lg:hover:text-white cursor-pointer bg-background
        text-foreground"
        >
          Account
        </div>
      </Link>
      <Link href="#" className="font-medium bg-background text-foreground">
        <div
          className="flex items-center gap-2 px-2 py-2 font-medium
        rounded-lg lg:hover:bg-[#111A2B] lg:hover:text-white cursor-pointer bg-background
        text-foreground"
        >
          Contact
        </div>
      </Link>
    </div>
  );
}

export default NavList;
