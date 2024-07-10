import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navlist from "./NavList";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const NavSmallScreen = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = (path) => pathname === path;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="lg:hidden relative">
      <div className="dropdown" ref={dropdownRef}>
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle"
          onClick={toggleDropdown}
        >
          {isOpen ? <IoClose /> : <FaBars />}
        </label>
        <div
          className={`absolute mt-3 p-2 shadow menu menu-compact bg-customBlack rounded-box w-52 border border-gray font-semibold transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-10px]"
          }`}
          style={{ visibility: isOpen ? "visible" : "hidden" }}
        >
          <Navlist />
        </div>
      </div>
    </div>
  );
};

export default NavSmallScreen;
