"use client";
import React from "react";
import { useState } from "react";
import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";

import Logo from "../public/assets/logo-darkBg.png";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar((prevNavbar) => !prevNavbar);
  };

  return (
    <>
      <div className="absolute w-full h-[12%] flex items-center justify-center z-50">
        {/* Nabvar - Container */}
        <div className="w-[90%] h-[60%] bg-gradient-to-b from-[#565969] to-[#383B4E] to-[150%] rounded-full flex place-content-between items-center px-3">
          {/* Navbar - Logo */}
          <button>
            <div className="ml-3">
              <Image
                src={Logo}
                alt="Logo"
                height={0}
                width={0}
                className="w-20 md:w-24 lg:w-28 2xl:w-32"
              />
            </div>
          </button>
          {/* Navbar - Menu */}
          <div className="relative flex flex-col">
            {/* Navbar - Toggle Button */}
            <button
              className="w-10 h-10 2xl:w-12 2xl:h-12 bg-fourth rounded-full flex items-center justify-center hover:outline hover:outline-fifth"
              onClick={toggleNavbar}
            >
              <div>
                {navbar ? (
                  <div className="flex">
                    <div className="w-5 h-1 bg-primary rounded-full rotate-45"></div>
                    <div className="absolute w-5 h-1 bg-primary rounded-full -rotate-45"></div>
                  </div>
                ) : (
                  <div className="gap-[2px] flex flex-col items-center justify-center">
                    <div className="w-5 h-1 bg-primary rounded-full"></div>
                    <div className="w-5 h-1 bg-primary rounded-full"></div>
                    <div className="w-5 h-1 bg-primary rounded-full"></div>
                  </div>
                )}
              </div>
            </button>

            {/* Navbar - Detail Menu */}
            <div
              className={`absolute mt-[4rem] 2xl:mt-[4.3rem] right-0 w-36 md:w-64 h-fit bg-tertiary rounded-md p-2 flex flex-col gap-1 ${
                navbar ? "" : "hidden"
              }`}
            >
              <Link
                className="w-full md:my-1 font-montserratBold text-primary text-xl text-start rounded-md hover:bg-fourth pl-3 md:text-[1.5rem] hover:outline hover:outline-fifth"
                href="/"
              >
                Home
              </Link>
              <Link
                className="w-full md:my-1 font-montserratBold text-primary text-xl text-start rounded-md hover:bg-fourth pl-3 md:text-[1.5rem] hover:outline hover:outline-fifth"
                href="/work"
              >
                Work
              </Link>
              <Link
                className="w-full md:my-1 font-montserratBold text-primary text-xl text-start rounded-md hover:bg-fourth pl-3 md:text-[1.5rem] hover:outline hover:outline-fifth"
                href="/about"
              >
                About
              </Link>
              <Link
                className="w-full md:my-1 font-montserratBold text-primary text-xl text-start rounded-md hover:bg-fourth pl-3 md:text-[1.5rem] hover:outline hover:outline-fifth"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
