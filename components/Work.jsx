import React from "react";
import Image from "next/image";
import Link from "next/link";

import cardLinkedin from "@/public/assets/contact/card-LinkedIn.png";
import cardEmail from "@/public/assets/contact/card-Email.png";
import cardGitHub from "@/public/assets/contact/card-GitHub.png";
import cardInstagram from "@/public/assets/contact/card-Instagram.png";

export default function Work() {
  return (
    <div className="w-full h-full min-h-screen bg-primary flex flex-col lg:flex-row items-center lg:justify-center">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center max-w-[1920px] max-h-[800px] lg:mx-20 mt-36 lg:mt-0">
        <h1 className="text-fourth font-montserratBold text-[1.5rem] md:text-[3rem] lg:text-[4vw] xl:text-[3.5rem] flex lg:flex-col gap-2">
          <span>Let&apos;s</span>{" "}
          <span className="lg:-translate-y-[1.5vw]">Connect</span>
        </h1>
        <hr className="w-[80%] max-w-xl my-5 border border-fifth lg:w-0 lg:h-[35vw] lg:mx-[2vw] max-h-[800px] lg:ml-20" />
        <div className="w-[80%] h-full lg:w-full max-w-[1000px] flex flex-wrap gap-5 items-center justify-center">
          {/* LinkedIn */}
          <div className="w-[45%] rounded-md lg:rounded-2xl overflow-hidden group">
            <Link
              href={"https://www.linkedin.com/in/zuhdi-ardi"}
              target="_blank"
            >
              <div className="relative group">
                <div className="absolute w-full h-full bg-black bg-opacity-90 translate-y-[100%] group-hover:translate-y-0 transition-all flex items-center justify-center">
                  <h1 className="text-fifth text-[0.4rem] lg:text-[1.5rem] font-montserratBold">
                    linkedin.com/in/zuhdi-ardi
                  </h1>
                </div>
                <Image src={cardLinkedin} alt="Linkedin" className="w-full h-full" />
              </div>
            </Link>
          </div>
          {/* Email */}
          <div className="w-[45%] rounded-md lg:rounded-2xl overflow-hidden group">
            <Link
              href={
                "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLpxPmRHBjCGlGhZxJHnwMXTlJnwBJkWVXVfccggzbkwBHWlTfrVBSpwqLvbJmScDBlkL"
              }
              target="_blank"
            >
              <div className="relative group">
                <div className="absolute w-full h-full bg-black bg-opacity-90 translate-y-[100%] group-hover:translate-y-0 transition-all flex items-center justify-center">
                  <h1 className="text-fifth text-[0.4rem] lg:text-[1.5rem] font-montserratBold">
                    zuhdiardi.work@gmail.com
                  </h1>
                </div>
                <Image src={cardEmail} alt="Email" className="w-full h-full" />
              </div>
            </Link>
          </div>
          {/* GitHub */}
          <div className="w-[45%] rounded-md lg:rounded-2xl overflow-hidden group">
            <Link href={"https://github.com/zuhdy-ev"} target="_blank">
              <div className="relative group">
                <div className="absolute w-full h-full bg-black bg-opacity-90 translate-y-[100%] group-hover:translate-y-0 transition-all flex items-center justify-center">
                  <h1 className="text-fifth text-[0.4rem] lg:text-[1.5rem] font-montserratBold">
                    zuhdy-ev
                  </h1>
                </div>
                <Image src={cardGitHub} alt="GitHub" className="w-full h-full" />
              </div>
            </Link>
          </div>
          {/* Instagram */}
          <div className="w-[45%] rounded-md lg:rounded-2xl overflow-hidden group">
            <Link href={"https://www.instagram.com/zuhdiardi"} target="_blank">
              <div className="relative group">
                <div className="absolute w-full h-full bg-black bg-opacity-90 translate-y-[100%] group-hover:translate-y-0 transition-all flex items-center justify-center">
                  <h1 className="text-fifth text-[0.4rem] lg:text-[1.5rem] font-montserratBold">
                    instagram.com/zuhdiardi
                  </h1>
                </div>
                <Image src={cardInstagram} alt="Instagram" className="w-full h-full" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
