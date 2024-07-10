import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaCalculator } from "react-icons/fa";

function NavList() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <>
      <li>
        <Link
          href="/"
          className={
            isActive("/")
              ? "text-white bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
              : "text-gray-500 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
          }
        >
          <FaHome /> Home
        </Link>
      </li>
      <li>
        <Link
          href="/profitCalculator"
          className={
            isActive("/profitCalculator")
              ? "text-white bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
              : "text-gray-500 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
          }
        >
          <FaCalculator /> Profit Calculator
        </Link>
      </li>
    </>
  );
}

export default NavList;
