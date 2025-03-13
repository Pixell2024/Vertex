"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/icons/logo.svg"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" flex justify-center sticky z-50 bg-transparent transition-all duration-300 p-4 mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <div className="text-white text-xl font-bold">
          <Image src={logo} width={60} height={60} alt="logo" />
        </div> */}

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center mx-auto space-x-12">
          {["Home", "Work", "Products", "About Us"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-xl hover:text-gray-300 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none ml-auto cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 right-0 bg-gray-800 opacity-50 text-white text-center flex flex-col py-6 space-y-6 md:hidden`}
      >
        {["Home", "Work", "Products", "About Us"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className=" text-white transition"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
