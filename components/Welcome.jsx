"use client";
import React from "react";
import { useState } from "react";
import "../styles/globals.css";
import Image from "next/image";

import NameText from "../public/assets/text.svg";
import GiantPhoto from "../public/assets/giant-photo.svg";
import Logo from "../public/assets/logo-darkBg.png";

export default function Welcome() {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar((prevNavbar) => !prevNavbar);
  };

  return (
    <>
      <div className="w-full h-screen bg-primary">
        {/* --- Navbar --- */}
        <div className="w-full h-[12%] flex items-center justify-center">
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
            {/* Navbar - Button Menu */}
            <div className="relative flex flex-col">
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

              {/* Navbar - Menu */}
              <div
                className={`absolute mt-[4rem] 2xl:mt-[4.3rem] right-0 w-36 md:w-64 h-fit bg-tertiary rounded-md p-2 flex flex-col gap-1 ${
                  navbar ? "" : "hidden"
                }`}
              >
                <button className="w-full md:my-1 font-montserratBold text-primary text-xl text-start rounded-md hover:bg-fourth pl-3 md:text-[1.5rem] hover:outline hover:outline-fifth">
                  Home
                </button>
                <button className="w-full md:my-1 font-montserratBold text-primary text-xl text-start rounded-md hover:bg-fourth pl-3 md:text-[1.5rem] hover:outline hover:outline-fifth">
                  Work
                </button>
                <button className="w-full md:my-1 font-montserratBold text-primary text-xl text-start rounded-md hover:bg-fourth pl-3 md:text-[1.5rem] hover:outline hover:outline-fifth">
                  About
                </button>
                <button className="w-full md:my-1 font-montserratBold text-primary text-xl text-start rounded-md hover:bg-fourth pl-3 md:text-[1.5rem] hover:outline hover:outline-fifth">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full h-[88%] flex flex-col items-center justify-center text-fourth">
          <div className="font-montserratBold text-fifth text-[0.8rem] md:text-[1.2rem] lg:text-[1.5rem]">
            Hi! I'm
          </div>
          <div className="font-montserratBold text-[2.5rem] md:text-[3.5rem] lg:text-[5rem]">
            ZUHDI ARDI,
          </div>
          <div className="font-montserratBold text-fifth text-[0.8rem] md:text-[1.2rem] lg:text-[1.5rem]">
            a Front-end Web Developer
          </div>
          <hr className="w-[80%] max-w-xl my-5 border border-secondary" />
          <div className="relative">
            <button className="bg-secondary px-6 py-2 font-montserrat rounded-md text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] mr-2 hover:outline hover:outline-fifth">
              my works.
            </button>
            <button className="bg-secondary px-6 py-2 font-montserrat rounded-md text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] ml-2 hover:outline hover:outline-fifth">
              about me.
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="w-full h-screen bg-[#fefefe] flex border border-red-500">
        <div className="h-screen w-0 md:w-[50%] flex items-end justify-end md:pt-5 md:pl-3 md:pr-3 border border-red-500">
          <Image
            src={GiantPhoto}
            alt="Zuhdi Ardi"
            height={0}
            width={0}
            className="lg:w-full max-h-full lg:h-full border border-red-500"
          />
        </div>
        <div className="h-screen w-full md:w-[50%] border border-red-500">
          <div className="w-full h-1/3 md:h-[100%] p-3 flex flex-col items-center justify-center gap-2 lg:gap-5 border border-red-500">
            <h1 className="font-imperialScript text-2xl md:text-5xl xl:text-6xl border border-red-500">
              Hey, I'm
            </h1>
            <Image
              src={NameText}
              alt="Zuhdi Ardi"
              height={0}
              width={0}
              className="w-52 md:w-96 xl:w-[30vw]"
            />
            <hr className="border-[#2c2c2c] mt-2 w-24 lg:w-40" />
          </div>
          <div className="w-full h-2/3 md:h-0 border border-red-500">
            <Image
              src={GiantPhoto}
              alt="Zuhdi Ardi"
              height={0}
              width={0}
              className="w-full h-full border border-red-500 md:hidden"
            />
          </div>
        </div>
      </div> */
}
