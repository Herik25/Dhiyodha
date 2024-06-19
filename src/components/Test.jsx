import React from "react";
import { BsCart4, BsCurrencyRupee } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa";
import "./Test.css";

function Test() {
  return (
    <div className=" h-screen bg-[#fff]">
      <h1 className=" text-center py-10 text-4xl font-semibold">
        Welcome to Dhiyodha
      </h1>
      {/* <div className="col-span-4 md:col-span-2 mt-24 md:mt-0">
        <div
          className="relative h-full w-full flex items-center justify-center mt-[50px]"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="hero-img-area-rounded border border-solid border-[#4bbee1] w-[300px] h-[300px] lg:w-[950px] lg:h-[950px] rounded-full flex justify-center items-center ">
            <div className="hero-img-area-rounded-cicleicon4 h-8 w-8 lg:h-10 lg:w-10 bg-white rounded-full absolute z-[1] flex justify-center items-center shadow-md">
              <FaRegCreditCard className="cicleicon4Style" />
            </div>
            <div className="hero-img-area-rounded-cicleicon5 h-8 w-8 lg:h-10 lg:w-10 bg-white rounded-full absolute z-[1] flex justify-center items-center shadow-md">
              <BsCart4 className="cicleicon5Style" />
            </div>
            <div className="hero-img-area-rounded-cicleicon6 h-8 w-8 lg:h-10 lg:w-10 bg-white rounded-full absolute z-[1] flex justify-center items-center shadow-md">
              <BsCurrencyRupee className="cicleicon6Style" />
            </div>
          </div>
          <div className="hero-img-area-innerchild-rounded w-[230px] h-[230px] lg:w-[780px] lg:h-[800px] rounded-full border border-solid border-[#4bbee1] flex justify-center items-center absolute">
            <div className="hero-img-area-rounded-cicleicon h-7 w-7 lg:h-9 lg:w-9 bg-white rounded-full absolute"></div>
            <div className="hero-img-area-rounded-cicleicon2 h-7 w-7 lg:h-9 lg:w-9 bg-white rounded-full absolute"></div>
            <div className="hero-img-area-rounded-cicleicon3 h-7 w-7 lg:h-9 lg:w-9 bg-white rounded-full absolute"></div>
          </div>
          <div className="hero-img-area-inner-rounded w-[180px] h-[180px] lg:w-[320px] lg:h-[320px] rounded-full flex justify-center items-center">
            <img
              src="/namaste.png"
              alt="shopping"
              className="h-[180px] lg:h-[360px] ml-[-5px] mt-28"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Test;
