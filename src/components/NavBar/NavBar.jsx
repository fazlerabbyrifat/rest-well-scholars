"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a
                href="#"
                className="text-[#235784] text-xl md:text-2xl lg:text-3xl font-semibold"
              >
                ResiZen
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center justify-center space-x-4">
              <a href="#" className="text-[#235784]">
                Home
              </a>
              <a href="#" className="text-[#235784]">
                About
              </a>
              <a href="#" className="text-[#235784]">
                Services
              </a>
              <a href="#" className="text-[#235784]">
                Contact
              </a>
            </div>
          </div>
          <div className="flex md:ml-4">
            <Link href="/login">
              <button className="text-white bg-[#235784] hover:bg-white hover:text-[#235784] px-4 py-3 rounded-md text-sm font-medium">
                Login
              </button>
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-[#235784] block">
            Home
          </a>
          <a href="#" className="text-[#235784] block">
            About
          </a>
          <a href="#" className="text-[#235784] block">
            Rooms
          </a>
          <a href="#" className="text-[#235784] block">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
