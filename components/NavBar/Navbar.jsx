"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import useScrollPosition from "./useScrollPosition";
export default function Navbar() {
  // const closeTimeoutRef2 = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const [isMegaMenuOpenBQ, setIsMegaMenuOpenBQ] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsMegaMenuOpen(false); // Close mega menu when toggling hamburger
  };

  // Open mega menu immediately when mouse enters
  //const handleMouseEnterBQ = () => {
  // if (closeTimeoutRef2.current) {
  //   clearTimeout(closeTimeoutRef2.current); // Clear any existing timeout
  // }
  // setIsMegaMenuOpenBQ(true); // Open menu
  // };

  // Delay closing the mega menu when mouse leaves
  //  const handleMouseLeaveBQ = () => {
  //   closeTimeoutRef2.current = setTimeout(() => {
  //     setIsMegaMenuOpenBQ(false); // Close after delay
  //   }, 200); // Adjust the delay as needed
  // };

  // END OF FILE for Trigger Mega Menu for Beauty Queens

  // scrolling tracker
  const scrollPosition = useScrollPosition();
  // background color add and remover
  const navbarBgColor =
    scrollPosition > 100 ? "lg:bg-lightBlack" : "lg:bg-transparent";

  return (
    <div className={`container z-50 mx-auto max-w-full`}>
      <div
        className={`flex  z-50 h-[60px] w-full justify-center fixed  ${navbarBgColor}`}
      >
        <nav className={`   bg-gray-800 text-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 absolute left-2 lg:left-[100px] shadow-xl">
                  <Image
                    src={"/images/inner/logoHotel.png"}
                    width={0}
                    height={0}
                    sizes="75px"
                    className="w-14 h-18 pt-2 pb-2 border border-orange-400 shadow-lg bg-darkBlue"
                    alt="crown"
                  />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      href="/"
                      className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <span className="text-sm md:text-sm lg:text-md xl:text-lg hover:text-orange-200">
                        Home
                      </span>
                    </Link>

                    <Link
                      href="/services"
                      className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <span className="text-sm md:text-sm lg:text-md xl:text-lg hover:text-orange-200">
                        Services
                      </span>
                    </Link>

                    <Link
                      href="/rooms"
                      className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <span className="text-sm md:text-sm lg:text-md xl:text-lg hover:text-orange-200">
                        Rooms
                      </span>
                    </Link>

                    <Link
                      href="/contactus"
                      className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <span className="text-sm md:text-sm lg:text-md xl:text-lg  hover:text-orange-200">
                        Contact Us
                      </span>
                    </Link>

                    <Link
                      href="/aboutus"
                      className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <span className="text-sm md:text-sm lg:text-md xl:text-lg  hover:text-orange-200">
                        About Us
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="flex justify-end md:hidden  ">
                  <button
                    onClick={toggleMenu}
                    className="mt-5 inline-flex absolute right-3 top-0 p-2  rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded={isMenuOpen}
                  >
                    <span className="sr-only">Open main menu</span>
                    {/* Hamburger Icon */}
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                    {/* Close Icon */}
                    <svg
                      className="hidden h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden w-[100vw] flex bg-black  `}
            id="mobile-menu"
          >
            <div className="px-2 pt-0 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/rooms"
                className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Rooms
              </Link>

              <Link
                href="/contactus"
                className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>

              <Link
                href="/aboutus"
                className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
