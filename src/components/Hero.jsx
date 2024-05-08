import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

function Hero() {
  const [animationFinished, setAnimationFinished] = useState(false);
  const imageRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const imageAnimation = gsap.to(imageRef.current, {
      x: -450,
      y: 1050,
      // height: "650px",
      // width: "800px",
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
        onLeaveBack: ({ progress, direction, isActive }) =>
          setAnimationFinished(false),
        // console.log("asdf")
      },
    });

    const boxAnimation = gsap.fromTo(
      boxRef.current,
      {
        scale: 1,
      },
      {
        x: -450,
        y: 1000,
        scale: 1.5,
        // top: 0,
        // left: 0,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top",
          scrub: true,
        },
      }
    );

    // Kill animations on unmount
    return () => {
      imageAnimation.kill();
      boxAnimation.kill();
    };
  }, []);

  return (
    <div className=" waveContainer pt-20 font-poppins bg-gradient-to-r from-purple to-blue">
      <div className=" flex mx-56 justify-between items-center pb-32 pt-10">
        <div className=" flex flex-col text-[#fff]">
          <p className=" text-[60px] font-semibold mb-8">
            Created For <br /> Creators.
          </p>
          <p className=" text-[26px] font-medium mb-10 max-w-[800px]">
            Boost your community and enhance your growth, all while you can earn
            some more!
          </p>
          <div className=" py-[1rem] rounded-full font-semibold text-xl bg-blue flex items-center justify-center gap-3 cursor-pointer max-w-[350px]">
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
            <div className=" text-[#fff]">Download Right Now!</div>
          </div>
        </div>
        <div className=" relative z-10">
          <div className=" absolute z-20 top-[5px] left-[11%]">
            <img
              className=" h-[500px] w-[400px]"
              ref={imageRef}
              src={
                animationFinished
                ? "src/assets/image2.gif"
                : "src/assets/image1.gif"
              }
              alt="image"
            />
          </div>
          <div
            className=" h-[500px] w-[500px] bg-gradient-to-b from-green to-yellow rounded-full"
            ref={boxRef}
          ></div>
        </div>
      </div>
      <section>
        <div className=" wavey wave1"></div>
      </section>
    </div>
  );
}

export default Hero;
