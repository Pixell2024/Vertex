"use client";

import {
  Facebook,
  LinkedIn,
  Pinterest,
  ArrowForward,
} from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';
import { useState } from "react";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-[85px] pt-16 px-4 sm:px-6 lg:px-8 rounded-t-[2.5rem]">
      <div className=" relative max-w-7xl h-[310px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* About Section */}
        <div className="space-y-6">
          <p className="text-gray-300 max-w-sm text-lg md:hidden lg:block">
            It Is A Long Established Fact That A Reader Will Be Distracted
          </p>
          <p className="text-gray-300 max-w-sm text-md hidden md:block lg:hidden">
            It Is A Long Established Fact
            <br /> That A Reader Will Be Distracted
          </p>
          <div className="flex justify-center md:justify-start space-x-3">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 hover:bg-green-600 transition-all duration-300"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 hover:bg-green-600 transition-all duration-300"
            >
              <XIcon className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 hover:bg-green-600 transition-all duration-300"
            >
              <LinkedIn className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 hover:bg-green-600 transition-all duration-300"
            >
              <Pinterest className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-start">
            About
          </h3>
          <ul className="grid grid-cols-2 justify-center md:justify-start md:grid-cols-1 gap-4 text-lg">
            {["Leadership", "Diversity", "Partners", "ESG"].map(
              (item, index) => (
                <li key={index} className=" text-center md:text-start">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-center transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Form */}
        <div className="absolute -top-3/6 md:left-5/12 lg:left-6/12 xl:left-7/12 bg-[#111] p-6 md:p-8 rounded-xl border border-green-500 shadow-lg hidden md:block">
          <ContactForm />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-gray-400 text-sm">
          <p className="hidden md:block">
            © Vertex Lightco Industries 2025 | All Rights Reserved
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Contact Us
            </a>
          </div>
          <p className=" md:hidden">
            © Vertex Lightco Industries 2025 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
