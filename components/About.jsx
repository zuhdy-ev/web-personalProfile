import React from "react";
import Image from "next/image";
import "../styles/globals.css";

import my_photo from "../public/assets/my-photo.png";
import linkedin from "../public/assets/icon/linkedin.svg";
import github from "../public/assets/icon/github.svg";
import instagram from "../public/assets/icon/instagram.svg";
import gmail from "../public/assets/icon/gmail.svg";

export default function About() {
  return (
    <>
      <div className="relative z-0 w-full h-full bg-primary flex flex-col items-center lg:flex-row lg:h-screen lg:px-[5rem] lg:items-end xl:px-[7rem] overflow-hidden">
        {/* Photo */}
        <div className="relative w-[80%] h-[180vw] sm:w-[32rem] sm:h-[50rem] rounded-b-[50px] lg:mr-10 lg:-bottom-20 xl:-bottom-14">
          <Image
            src={my_photo}
            alt="Zuhdi Ardi"
            layout="fill"
            objectFit="cover"
            className="rounded-b-[50px] lg:rounded-b-none lg:rounded-t-[50px]"
          />
        </div>
        {/* Content */}
        <div className="w-[80%] mt-[2rem] lg:-translate-y-[6rem] xl:-translate-y-[8rem]">
          {/* Name */}
          <div className="flex justify-center lg:justify-start">
            <p className="font-montserratBold text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-fifth">
              Zuhdi Ardi
            </p>
          </div>
          {/* Text */}
          <div className="">
            <hr className="w-full max-w-xl my-5 border border-secondary" />
            <p className="font-poppins text-justify text-fourth">
              Im an undergraduate student in fisheries major that is more
              passionate about the IT (Information Technology) field. Although
              my classes in college do not cover IT topics extensively, I have
              taken the initiative to learn about IT through online resources,
              courses, and bootcamps. To enhance my skills in critical thinking,
              coding, teamwork, communication, and leadership, I actively
              participate in various organizations and volunteering
              opportunities both within and outside the campus. Test.
            </p>
            <hr className="w-full max-w-xl my-5 border border-secondary" />
          </div>
          {/* Connect with me */}
          <div>
            <p className="font-montserratBold text-[1.5rem] text-fifth">
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
