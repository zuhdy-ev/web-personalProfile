import React from "react";
import Image from "next/image";
import "../styles/globals.css";

import my_photo from "../public/assets/my-photo.jpg";
import linkedin from "../public/assets/icon/linkedin.svg";
import github from "../public/assets/icon/github.svg";
import instagram from "../public/assets/icon/instagram.svg";
import gmail from "../public/assets/icon/gmail.svg";

export default function About() {
  return (
    <>
      <div className="relative z-0 w-full h-full bg-primary flex flex-col items-center">
        {/* Photo */}
        <div className="relative w-[80%] h-[40rem] rounded-b-[50px]">
          <Image
            src={my_photo}
            alt="Zuhdi Ardi"
            layout="fill"
            objectFit="cover"
            className="rounded-b-[50px]"
          />
        </div>
        {/* Content */}
        <div className="w-[80%] mt-[2rem]">
          {/* Name */}
          <div className="flex justify-center">
            <p className="font-montserratBold text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] text-fifth">
              Zuhdi Ardi
            </p>
          </div>
          <hr className="w-full max-w-xl my-5 border border-secondary" />
          {/* Text */}
          <div className="">
            <p className="font-poppins text-justify text-fourth">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <hr className="w-full max-w-xl my-5 border border-secondary" />
          {/* Connect with me */}
          <div>
            <p className="font-montserratBold text-[1.5rem] md:text-[3.5rem] lg:text-[5rem] text-fifth">
              Connect with me.
            </p>
            {/* Resume & Portfolio */}
            <div className="mt-3">
              <button className="px-5 py-1 rounded-full bg-fourth font-poppins mr-1 hover:outline hover:outline-fifth">
                Resume
              </button>
              <button className="px-5 py-1 rounded-full bg-fourth font-poppins ml-1 hover:outline hover:outline-fifth">
                Portfolio
              </button>
            </div>
            {/* Social Media */}
            <div className="mt-5 mb-20 flex gap-2">
              {/* LinkedIn */}
              <button className="w-10 h-10 2xl:w-12 2xl:h-12 bg-fourth rounded-full flex items-center justify-center hover:outline hover:outline-fifth">
                <a
                  href="https://www.linkedin.com/in/zuhdi-ardi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={linkedin}
                    alt="LinkedIn"
                    height={0}
                    width={0}
                    className="w-5 h-5 2xl:w-6 2xl:h-6"
                  />
                </a>
              </button>
              {/* GitHub */}
              <button className="w-10 h-10 2xl:w-12 2xl:h-12 bg-black rounded-full flex items-center justify-center hover:outline hover:outline-fifth">
                <a
                  href="https://github.com/zuhdy-ev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={github}
                    alt="GitHub"
                    height={0}
                    width={0}
                    className=""
                  />
                </a>
              </button>
              {/* Instagram */}
              <button className="w-10 h-10 2xl:w-12 2xl:h-12 bg-fourth rounded-full flex items-center justify-center hover:outline hover:outline-fifth">
                <a
                  href="https://www.instagram.com/zuhdiardi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={instagram}
                    alt="Instagram"
                    height={0}
                    width={0}
                    className="w-5 h-5 2xl:w-6 2xl:h-6"
                  />
                </a>
              </button>
              {/* Gmail */}
              <button className="w-10 h-10 2xl:w-12 2xl:h-12 bg-fourth rounded-full flex items-center justify-center hover:outline hover:outline-fifth">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLpxPmRHBjCGlGhZxJHnwMXTlJnwBJkWVXVfccggzbkwBHWlTfrVBSpwqLvbJmScDBlkL"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={gmail}
                    alt="Gmail"
                    height={0}
                    width={0}
                    className="w-5 h-5 2xl:w-6 2xl:h-6"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
