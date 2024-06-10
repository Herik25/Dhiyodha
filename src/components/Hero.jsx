import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";
import useIsMobile from "../hooks/UseIsMobile";

function Hero() {
  const [animationFinished, setAnimationFinished] = useState(false);
  const imageRef = useRef(null);
  const boxRef = useRef(null);
  const isMobile = useIsMobile();

  const initializeAnimations = () => {
    const imageAnimation = gsap.to(imageRef.current, {
      x: isMobile
        ? 0
        : window.innerWidth < 1200
        ? -150
        : window.innerWidth < 1600
        ? -250
        : -450,
      y: 1050,
      scale: 1.5,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top",
        scrub: true,
        onToggle: ({ isActive }) => {
          if (!isActive) {
            setAnimationFinished(true);
          } else {
            setAnimationFinished(false);
          }
        },
        onLeaveBack: () => setAnimationFinished(false),
      },
    });

    // const boxAnimation = gsap.fromTo(
    //   boxRef.current,
    //   { scale: 1 },
    //   {
    //     x: isMobile
    //       ? 0
    //       : window.innerWidth < 1200
    //       ? -150
    //       : window.innerWidth < 1600
    //       ? -250
    //       : -450,
    //     y: 1000,
    //     scale: 1.5,
    //     scrollTrigger: {
    //       trigger: boxRef.current,
    //       start: "top",
    //       scrub: true,
    //     },
    //   }
    // );

    return () => {
      imageAnimation.kill();
      // boxAnimation.kill();
    };
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let cleanupAnimations = initializeAnimations();

    const handleResize = () => {
      cleanupAnimations();
      cleanupAnimations = initializeAnimations();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cleanupAnimations();
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div className="waveContainer pt-20 font-poppins bg-gradient-to-r from-purple to-blue">
      <div
        className={`flex ${
          isMobile ? "flex-col gap-10" : "mx-8 sm:mx-16 md:mx-32 lg:mx-56"
        } justify-between items-center pb-32 pt-10`}
      >
        <div className={`relative z-10 ${isMobile ? "" : "order-2"}`}>
          <div className="absolute z-20 top-[5px] left-[11%]">
            <img
              className={`${
                isMobile
                  ? "w-[250px] md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[400px]"
                  : "md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px]"
              }`}
              ref={imageRef}
              src={
                animationFinished
                  ? "src/assets/image2.gif"
                  : "/namaste.png"
              }
              alt="image"
            />
          </div>
          <div
            className={`${
              isMobile
                ? "w-[250px] h-[250px] md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px]"
                : "md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px]"
            } `}
            ref={boxRef}
          ></div>
        </div>
        <div className="flex flex-col text-[#fff]">
          <p className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-semibold mb-8">
            Created For <br /> Creators.
          </p>
          <p className="text-[15px] sm:text-[20px] md:[24px] lg:text-[26px] font-medium mb-10 max-w-[350px] sm:max-w-[450px] md:[600px] lg:max-w-[800px]">
            Boost your community and enhance your growth, all while you can earn
            some more!
          </p>
          <div className="py-4 rounded-full font-semibold text-xl bg-orange-gradient border-none outline-none flex items-center justify-center gap-3 cursor-pointer max-w-[250px] md:max-w-[350px]">
            <img
              src="https://app.rigi.club/wp-content/themes/Rigi/assets/img/apple_logo.svg"
              height={24}
              width={24}
              alt="apple"
            />
            <img
              src="https://app.rigi.club/wp-content/themes/Rigi/assets/img/playstore_logo.svg"
              height={24}
              width={24}
              alt="playstore"
            />
            <div className="text-[#fff]">
              {isMobile ? "Download DC" : "Download DC APP!"}
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="wavey wave1"></div>
      </section>
    </div>
  );
}

export default Hero;
