"use client";
import React from "react";
import Link from "next/link";
import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-primary">
        {/* --- Content --- */}
        <div className="w-full h-[88%] flex flex-col items-center justify-center text-fourth">
          <div className="font-montserratBold text-fifth text-[0.8rem] md:text-[1.2rem] lg:text-[1.5rem]">
            Hi! I'm
          </div>
          <div className="font-montserratBold text-[2.5rem] md:text-[3.5rem] lg:text-[5rem]">
            ZUHDI ARDI,
          </div>
          {/* <div className="font-montserratBold text-fifth text-[0.8rem] md:text-[1.2rem] lg:text-[1.5rem]">
            a Front-end Web Developer
          </div> */}
          <hr className="w-[80%] max-w-xl my-5 border border-secondary" />
          <div className="relative">
            <Link
              href="/work"
              className="bg-secondary px-6 py-2 font-montserrat rounded-md text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] mr-2 hover:outline hover:outline-fifth"
            >
              my works.
            </Link>
            <Link
              href="/about"
              className="bg-secondary px-6 py-2 font-montserrat rounded-md text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] ml-2 hover:outline hover:outline-fifth"
            >
              about me.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
