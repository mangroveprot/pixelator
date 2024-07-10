import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navlist from "./NavList";

const NavLargeScreen = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 font-semibold">
        <Navlist />
      </ul>
    </div>
  );
};

export default NavLargeScreen;
