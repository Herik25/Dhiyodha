import gsap from "gsap";
import React, { useEffect } from "react";

function WhyDhiyodhha() {
  useEffect(() => {
    const ScrollContainer = document.querySelector(".ScrollContainer");
    const sections = gsap.utils.toArray(".ScrollContainer section");

    let scroll = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ScrollContainer,
        pin: true,
        scrub: true,
        end: "+=3000",
        markers: false,
      },
    });

    return () => {
      scroll.kill();
    };
  }, []);
  return (
    <div className=" ScrollContainer overflow-hidden relative">
      <div className=" text-center bg-[#fff] py-10 text-[#000] text-2xl">
        Dhiyoudha is here for you
      </div>
      <div className=" bg-purple text-center text-4xl font-semibold text-[#fff] pt-10">
        Hello Harsh
      </div>
      <div className=" flex items-center w-[300vw] bg-purple">
        <section className=" w-[60vw] flex justify-center items-center m-20">
          <div className=" bg-[#fff] w-full h-full py-[150px] rounded-[50px] flex items-center justify-between px-10">
            <div className=" flex flex-col max-w-[50%] ">
              <div className="text-[32px] font-bold max-w-[60%]">Private Groups and Chanels</div>
              <div className=" text-[22px] font-semibold">Created a Trusted Space With Paid Private Groups And Chanels To Frhter Enhance Yoour Engagement</div>
            </div>
            <div>Images</div>
          </div>
        </section>
        <section className=" w-[60vw] flex justify-center items-center m-20">
          <div className=" bg-[#fff] w-full h-full py-[150px] rounded-[50px] flex items-center justify-between px-10">
            <div className=" flex flex-col max-w-[50%] ">
              <div className="text-[32px] font-bold max-w-[60%]">Private Groups and Chanels</div>
              <div className=" text-[22px] font-semibold">Created a Trusted Space With Paid Private Groups And Chanels To Frhter Enhance Yoour Engagement</div>
            </div>
            <div>Images</div>
          </div>
        </section>
        <section className=" w-[60vw] flex justify-center items-center m-20">
          <div className=" bg-[#fff] w-full h-full py-[150px] rounded-[50px] flex items-center justify-between px-10">
            <div className=" flex flex-col max-w-[50%] ">
              <div className="text-[32px] font-bold max-w-[60%]">Private Groups and Chanels</div>
              <div className=" text-[22px] font-semibold">Created a Trusted Space With Paid Private Groups And Chanels To Frhter Enhance Yoour Engagement</div>
            </div>
            <div>Images</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WhyDhiyodhha;