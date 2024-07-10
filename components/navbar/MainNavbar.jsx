"use client";

import React from "react";
import Link from "next/link";
import NavLargeScreen from "./components/NavLargeScreen";
import NavSmallScreen from "./components/NavSmallScreen";
import { usePathname } from "next/navigation";

const MainNavbar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="navbar bg-customBlack border-b border-gray-500 text-white">
      <div className="navbar-start">
        <NavSmallScreen />
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <img src="./assets/images/bee-icon.png" alt="icon" />
          pixelator
        </Link>
      </div>
      <NavLargeScreen />
      {/* <div className="navbar-end">
        <button className="btn">Buy/Sell Coins</button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="user avatar" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                href="/profile"
                className={isActive("/profile") ? "bg-gray-500" : ""}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className={isActive("/settings") ? "bg-gray-500" : ""}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="/logout"
                className={isActive("/logout") ? "bg-gray-500" : ""}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default MainNavbar;
