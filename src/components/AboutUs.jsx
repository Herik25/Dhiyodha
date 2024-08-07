import React from "react";
import useIsMobile from "../hooks/UseIsMobile";

function AboutUs() {
  const isMobile = useIsMobile();

  return (
    <div className=" h-screen w-full relative pt-20">
      <img
        className=" absolute z-10 right-0 md:right-[15%] w-[150px] md:w-[250px] xl:w-[300px]"
        src="aboutUs/lady2.png"
        alt="ladyImg1"
      />
      <img
        className=" absolute z-10 w-[150px] md:w-[250px] xl:w-[350px] bottom-[10%] left-0 md:left-[12%]"
        src="/aboutUs/lady1.png"
        alt="ladyImg2"
      />
      <div className=" flex flex-col items-center justify-center z-20 h-full">
        <div className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl translate-y-[-30px] md:translate-y-[-40px] lg:translate-y-[-50px] font-semibold">
          About Us
        </div>
        <p className="z-20 max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-10 text-center">
          Today's woman is intelligent and versatile. From home to the border,
          from land to sky, from office cleaning to company establishment, women
          are managing their personal and professional lives exceptionally well.
          Then Dhiyodha with the slogan of "the strength of nation" wants to tie
          all the women of the world from home minister to managing director in
          one thread and make the consent of WE ARE ONE meaningful for women.
        </p>
        {isMobile ? (
          <div className=" p-3 rounded-full font-semibold text-md bg-orange-gradient border-none outline-none flex items-center justify-center gap-2 cursor-pointer">
            <img
              src="https://app.rigi.club/wp-content/themes/Rigi/assets/img/apple_logo.svg"
              height={16}
              width={16}
              alt="apple"
            />
            <img
              src="https://app.rigi.club/wp-content/themes/Rigi/assets/img/playstore_logo.svg"
              height={16}
              width={16}
              alt="playstore"
            />
            <div className=" text-[#fff]">
              {isMobile ? "Download DC" : "Download DC APP!"}
            </div>
          </div>
        ) : (
          <div className=" border-[1px] px-[2rem] py-[1rem] rounded-full font-semibold text-lg bg-orange-gradient border-none outline-none flex items-center gap-3 cursor-pointer">
            <div className=" text-[#fff]">Read More</div>
          </div>
        )}
      </div>
      <div className=" absolute top-0 left-0 h-[100vh] w-full z-[-1]">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100%"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stopColor="rgba(248, 117, 55, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stopColor="rgba(251, 168, 31, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="none"
            // d="M32.7,-18.4C39.2,-7.7,39,7.4,32.4,16.6C25.9,25,12.9,29.2,-0.7,29.7C-14.4,30.1,-28.8,27.5,-35.9,18C-43.1,8.4,-42.9,-8.1,-35.7,-19.3C-28.5,-30.4,-14.3,-36.2,-0.6,-35.8C13.1,-35.5,26.2,-29.1,32.7,-18.4Z"
            d="M42.7,-28.4C66.2,-7.7,59,17.4,42.4,27.6C35.9,31,22.9,39.2,-0.7,39.7C-24.4,40.1,-38.8,37.5,-50.9,33C-70.1,28.4,-88.9,-2.1,-66,-20.3C-38.5,-40.4,-14.3,-46.2, -1.6,-45.8C23.1,-45.5,36.2,-33.1,42.7,-28.4Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="1"
            style={{
              transition: "all 0.3s ease 0s",
              strokeDasharray: 100,
              strokeDashoffset: 1000,
              animation: "dash 5s infinite ease-in-out",
            }}
            stroke="url(#sw-gradient)"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default AboutUs;
