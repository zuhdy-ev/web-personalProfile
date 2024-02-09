import React from "react";
import "../styles/globals.css";
import Image from "next/image";

import NameText from "../public/assets/text.svg";
import GiantPhoto from "../public/assets/giant-photo.svg";

export default function Welcome() {
  return (
    <>
      <div className="w-full h-screen bg-[#fefefe] flex border border-red-500">
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
      </div>
    </>
  );
}
