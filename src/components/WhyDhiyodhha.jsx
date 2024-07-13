import gsap from "gsap";
import React, { useEffect } from "react";
import useIsMobile from "../hooks/UseIsMobile";
import { CgChevronLeft } from "react-icons/cg";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { BsTriangle } from "react-icons/bs";
import { GoTriangleRight } from "react-icons/go";
import {
  TbCircleLetterA,
  TbCircleLetterE,
  TbCircleLetterN,
  TbCircleLetterO,
  TbCircleLetterR,
  TbCircleLetterW,
} from "react-icons/tb";

function WhyDhiyodhha() {
  const isMobile = useIsMobile();

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

  const content = [
    {
      heading: "vision",
      title: "Harsh Parmar",
      description:
        "At Dhiyodha, women come together with wisdom, warmth, and strength. We create a supportive network where empowerment, empathy, and elegance flourish. Rising to challenges, we show respect and responsibility.",
    },
    {
      title: "Collaboration Tools",
      description:
        "Connect With Your Friends, Family, and Colleagues Through Private Groups, Chanels, and Video Calls",
    },
    {
      title: "Collaborative Features",
      description:
        "Collaborate with Your Team, Collaborate with Your Clients, and Collaborate with Your Colleagues",
    },
  ];

  return isMobile ? (
    <div className=" ScrollContainer overflow-hidden relative mt-20 font-poppins">
      <div className=" p-8"></div>
      <div className=" bg-purple text-center text-4xl font-semibold text-[#fff] pt-10">
        Why Dhiyodha
      </div>
      <div className=" flex items-center w-[240vw] bg-purple">
        <section className=" min-w-[250px] flex flex-col justify-center items-center m-5 mt-10">
          <div className=" bg-[#fff] w-full h-full py-[40px] rounded-[50px] flex items-center justify-between px-10">
            <div className=" flex flex-col gap-5 text-center ">
              <div className="text-[32px] font-bold text-[#444]">Mission</div>
              <div className=" flex items-center justify-center">
                <img
                  className=" w-[180px] "
                  src="/Mission.png"
                  alt="missionImg"
                />
              </div>
              <div className=" text-[16px] font-semibold text-[#444]">
                {content[0].description}
              </div>
            </div>
          </div>
        </section>
        <section className=" min-w-[250px] flex flex-col justify-center items-center m-5 mt-10">
          <div className=" bg-[#fff] w-full h-full py-[20px] rounded-[50px] flex items-center justify-between px-10">
            <div className=" flex flex-col gap-5 text-center ">
              <div className="text-[32px] font-bold text-[#444]">Vision</div>
              <div className=" flex items-center justify-center">
                <img
                  className="  w-[120px] "
                  src="/Vision.png"
                  alt="visionImg"
                />
              </div>
              <div className=" grid grid-cols-1 w-full justify-items-center font-poppins">
                <ul>
                  <li className=" flex items-center text-lg p-1">
                    {" "}
                    <TbCircleLetterW className=" text-[#F36713] text-2xl pr-1" />{" "}
                    - Warrior like
                  </li>
                  <li className=" flex items-center text-lg p-1">
                    {" "}
                    <TbCircleLetterE className=" text-[#F36713] text-2xl pr-1" />{" "}
                    - Enthusiastic
                  </li>

                  <li className=" flex items-center text-lg p-1">
                    {" "}
                    <TbCircleLetterA className=" text-[#F36713] text-2xl pr-1" />{" "}
                    - Active
                  </li>
                  <li className=" flex items-center text-lg p-1">
                    {" "}
                    <TbCircleLetterR className=" text-[#F36713] text-xl" /> -
                    Responsible
                  </li>
                  <li className=" flex items-center text-lg p-1">
                    {" "}
                    <TbCircleLetterE className=" text-[#F36713] text-xl" /> -
                    Encouraging
                  </li>

                  <li className=" flex items-center text-base p-1">
                    {" "}
                    <TbCircleLetterO className=" text-[#F36713] text-2xl pr-1" />{" "}
                    - Open hearted
                  </li>
                  <li className=" flex items-center text-lg p-1">
                    {" "}
                    <TbCircleLetterN className=" text-[#F36713] text-2xl pr-1" />{" "}
                    - Nurturing
                  </li>
                  <li className=" flex items-center text-lg p-1">
                    {" "}
                    <TbCircleLetterE className=" text-[#F36713] text-2xl pr-1" />{" "}
                    - Expressive
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className=" min-w-[250px] flex flex-col justify-center items-center m-5 mt-10">
          <div className=" bg-[#fff] w-full h-full py-[40px] rounded-[50px] flex items-center justify-between px-10">
            <div className=" flex flex-col gap-5 text-center ">
              <div className="text-[32px] font-bold text-[#444]">Value</div>
              <div className=" flex items-center justify-center">
                <img
                  className="w-[120px] h-[180px] "
                  src="/Goal.png"
                  alt="Goal"
                />
              </div>
              <div className="flex items-center justify-around">
                <div className=" grid grid-cols-1 w-full justify-items-center font-poppins">
                  <ul>
                    <li className=" flex items-center text-lg">
                      {" "}
                      <GoTriangleRight className=" text-[#F36713] text-3xl" />{" "}
                      Networking
                    </li>
                    <li className=" flex items-center text-lg">
                      {" "}
                      <GoTriangleRight className=" text-[#F36713] text-3xl" />{" "}
                      Learning
                    </li>
                    <li className=" flex items-center text-lg">
                      {" "}
                      <GoTriangleRight className=" text-[#F36713] text-3xl" />{" "}
                      Earning
                    </li>
                    <li className=" flex items-center text-lg">
                      {" "}
                      <GoTriangleRight className=" text-[#F36713] text-3xl" />{" "}
                      Marketing
                    </li>

                    <li className=" flex items-center text-lg">
                      {" "}
                      <GoTriangleRight className=" text-[#F36713] text-3xl" />{" "}
                      Identification
                    </li>
                    <li className=" flex items-center text-lg">
                      {" "}
                      <GoTriangleRight className=" text-[#F36713] text-3xl" />{" "}
                      Mentoring
                    </li>
                    <li className=" flex items-center text-lg">
                      {" "}
                      <GoTriangleRight className=" text-[#F36713] text-3xl" />{" "}
                      Saving
                    </li>
                    <li className=" flex items-center text-lg">
                      {" "}
                      <GoTriangleRight className=" text-[#F36713] text-3xl" />{" "}
                      GDP Growth
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  ) : (
    <div className=" ScrollContainer overflow-hidden relative font-poppins">
      <div className=" p-10"></div>
      <div className=" bg-purple text-center text-4xl font-semibold text-[#fff] pt-10">
        Why Dhiyodha
      </div>
      <div className=" flex items-center w-[300vw] bg-purple">
        <section className=" w-[60vw] flex justify-center items-center m-20">
          <div className=" bg-[#fff] w-full h-full rounded-[50px] px-10">
            <div className=" text-center pt-10 text-4xl font-semibold font-poppins">
              Mission
            </div>
            <div className="flex items-center justify-around  py-8">
              <div className=" flex flex-col max-w-[50%] ">
                <div className=" text-[18px] font-semibold">
                  {content[0].description}
                </div>
              </div>
              <div className=" flex items-center justify-center">
                <img
                  className=" h-[184.63px] w-[200px] "
                  src="/Mission.png"
                  alt="goalImg"
                />
              </div>
            </div>
            <div className=" text-center pb-10 text-2xl font-semibold font-playWrite">
              <span className="mr-5">W</span>
              <span className="mr-10">E</span>
              <span className="mr-5">A</span>
              <span className="mr-5">R</span>
              <span className="mr-10">E</span>
              <span className="mr-5">O</span>
              <span className="mr-5">N</span>
              <span>E</span>
            </div>
          </div>
        </section>
        <section className=" w-[60vw] flex justify-center items-center m-20">
          <div className=" bg-[#fff] w-full h-full rounded-[50px] px-10">
            <div className=" text-center pt-10 text-4xl font-semibold font-poppins">
              Vision
            </div>
            <div className="flex items-center justify-around  py-8">
              <div className=" grid md:grid-cols-[3fr,3fr,3fr] w-full justify-items-center font-poppins">
                <ul>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <TbCircleLetterW className=" text-[#F36713] text-4xl pr-1" />{" "}
                    - Warrior like
                  </li>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <TbCircleLetterE className=" text-[#F36713] text-4xl pr-1" />{" "}
                    - Enthusiastic
                  </li>
                </ul>
                <ul>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <TbCircleLetterA className=" text-[#F36713] text-4xl pr-1" />{" "}
                    - Active
                  </li>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <TbCircleLetterR className=" text-[#F36713] text-4xl" /> -
                    Responsible
                  </li>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <TbCircleLetterE className=" text-[#F36713] text-4xl" /> -
                    Encouraging
                  </li>
                </ul>
                <ul>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <TbCircleLetterO className=" text-[#F36713] text-4xl pr-1" />{" "}
                    - Open hearted
                  </li>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <TbCircleLetterN className=" text-[#F36713] text-4xl pr-1" />{" "}
                    - Nurturing
                  </li>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <TbCircleLetterE className=" text-[#F36713] text-4xl pr-1" />{" "}
                    - Expressive
                  </li>
                </ul>
              </div>
              <div className=" flex items-center justify-center">
                <img
                  className=" h-[200px] w-[139.61px] "
                  src="/Vision.png"
                  alt="goalImg"
                />
              </div>
            </div>
            {/* <div className=" text-center pb-10 text-2xl font-semibold font-playWrite">
              <span className="mr-5">W</span>
              <span className="mr-10">E</span>
              <span className="mr-5">A</span>
              <span className="mr-5">R</span>
              <span className="mr-10">E</span>
              <span className="mr-5">O</span>
              <span className="mr-5">N</span>
              <span>E</span>
            </div> */}
          </div>
        </section>
        <section className=" w-[60vw] flex justify-center items-center m-20">
          <div className=" bg-[#fff] w-full h-full rounded-[50px] px-10">
            <div className=" text-center pt-10 text-4xl font-semibold font-poppins">
              Values
            </div>
            <div className="flex items-center justify-around  py-8">
              <div className=" grid md:grid-cols-[5fr,5fr] w-full justify-items-center font-poppins">
                <ul>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <GoTriangleRight className=" text-[#F36713] text-3xl" />{" "}
                    Networking
                  </li>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <GoTriangleRight className=" text-[#F36713] text-3xl" />{" "}
                    Learning
                  </li>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <GoTriangleRight className=" text-[#F36713] text-3xl" />{" "}
                    Earning
                  </li>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <GoTriangleRight className=" text-[#F36713] text-3xl" />{" "}
                    Marketing
                  </li>
                </ul>
                <ul>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <GoTriangleRight className=" text-[#F36713] text-3xl" />{" "}
                    Identification
                  </li>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <GoTriangleRight className=" text-[#F36713] text-3xl" />{" "}
                    Mentoring
                  </li>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <GoTriangleRight className=" text-[#F36713] text-3xl" />{" "}
                    Saving
                  </li>
                  <li className=" flex items-center text-2xl p-1">
                    {" "}
                    <GoTriangleRight className=" text-[#F36713] text-3xl" /> GDP
                    Growth
                  </li>
                </ul>
              </div>
              <div className=" flex items-center justify-center min-w-[200px]">
                <img
                  className=" h-[200px] w-[86.97px] "
                  src="/Goal.png"
                  alt="goalImg"
                />
              </div>
            </div>
            {/* <div className=" text-center pb-10 text-2xl font-semibold font-playWrite">
              <span className="mr-5">W</span>
              <span className="mr-10">E</span>
              <span className="mr-5">A</span>
              <span className="mr-5">R</span>
              <span className="mr-10">E</span>
              <span className="mr-5">O</span>
              <span className="mr-5">N</span>
              <span>E</span>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default WhyDhiyodhha;
