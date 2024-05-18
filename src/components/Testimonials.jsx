import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import "./Testimonials.css";
import useIsMobile from "../hooks/UseIsMobile";

function Testimonials() {
  const isMobile = useIsMobile();

  const renderTestimonials = () => {
    const testimonials = [
      {
        src: "https://1.bp.blogspot.com/-etLuQuGcvk4/X7KNwaY_jNI/AAAAAAAACQk/5IakDtRRKVo5vNbZLfhSsk10RTVdHmsjQCLcBGAsYHQ/w320-h309/indira%2Bgandhi%2Btransparent%2Bpng%2B11.png",
        delay: "0s",
        right: "right-[20%]",
      },
      {
        src: "https://th.bing.com/th/id/OIP.yecByzFzfjR4auLzZtBySwHaFz?rs=1&pid=ImgDetMain",
        delay: "0.5s",
        right: "right-[80%]",
      },
      {
        src: "https://www.lifology.com/wp-content/themes/lifology/assets/gcd/images/panel/Barkha.png?ver=1.5.2",
        delay: "1s",
        right: "right-[30%]",
      },
      {
        src: "https://uploads-ssl.webflow.com/638aec50b9a23cec17b8c4d1/63c8efc8cbe2f68f8fec48ff_1588582389829-removebg-preview.png",
        delay: "1.5s",
        right: "right-[70%]",
      },
      {
        src: "https://www.iconspng.com/uploads/priyanka-chopra-portrait.png",
        delay: "2s",
        right: "right-[10%]",
      },
      {
        src: "https://www.csaspeakersindia.in/media/pictures/profile/6402.png",
        delay: "2.5s",
        right: "right-[45%]",
      },
    ];

    return testimonials.map((testimonial, index) => (
      <div
        key={index}
        style={{
          animation: `slide-animation ease-in-out 4s infinite`,
          animationDelay: testimonial.delay,
        }}
        className={`relative`}
      >
        {isMobile ? (
          <img
            className="h-16 w-16 rounded-full border-[1px] border-[#ccc]"
            src={testimonial.src}
            alt={`pic${index + 1}`}
          />
        ) : (
          <img
            className={`h-16 w-16 md:h-20 md:w-20 rounded-full border-[1px] border-[#ccc] absolute ${testimonial.right} `}
            src={testimonial.src}
            alt={`pic${index + 1}`}
          />
        )}
      </div>
    ));
  };
  const renderTestimonials2 = () => {
    const testimonials = [
      {
        src: "https://1.bp.blogspot.com/-etLuQuGcvk4/X7KNwaY_jNI/AAAAAAAACQk/5IakDtRRKVo5vNbZLfhSsk10RTVdHmsjQCLcBGAsYHQ/w320-h309/indira%2Bgandhi%2Btransparent%2Bpng%2B11.png",
        delay: "0s",
        right: "left-[20%]",
      },
      {
        src: "https://th.bing.com/th/id/OIP.yecByzFzfjR4auLzZtBySwHaFz?rs=1&pid=ImgDetMain",
        delay: "0.5s",
        right: "left-[80%]",
      },
      {
        src: "https://www.lifology.com/wp-content/themes/lifology/assets/gcd/images/panel/Barkha.png?ver=1.5.2",
        delay: "1s",
        right: "left-[30%]",
      },
      {
        src: "https://uploads-ssl.webflow.com/638aec50b9a23cec17b8c4d1/63c8efc8cbe2f68f8fec48ff_1588582389829-removebg-preview.png",
        delay: "1.5s",
        right: "left-[70%]",
      },
      {
        src: "https://www.iconspng.com/uploads/priyanka-chopra-portrait.png",
        delay: "2s",
        right: "left-[10%]",
      },
      {
        src: "https://www.csaspeakersindia.in/media/pictures/profile/6402.png",
        delay: "2.5s",
        right: "left-[45%]",
      },
    ];

    return testimonials.map((testimonial, index) => (
      <div
        key={index}
        style={{
          animation: `slide-animation ease-in-out 4s infinite`,
          animationDelay: testimonial.delay,
        }}
        className={`relative`}
      >
        {isMobile ? (
          <img
            className="h-16 w-16 rounded-full border-[1px] border-[#ccc]"
            src={testimonial.src}
            alt={`pic${index + 1}`}
          />
        ) : (
          <img
            className={`min-h-16 min-w-16 md:min-h-20 md:min-w-20 rounded-full border-[1px] border-[#ccc] absolute ${testimonial.right} `}
            src={testimonial.src}
            alt={`pic${index + 1}`}
          />
        )}
      </div>
    ));
  };

  return (
    <div
      className={`flex ${
        isMobile ? "flex-col" : "justify-between"
      } overflow-hidden py-20`}
    >
      <div
        className={`relative flex ${
          !isMobile && "flex-col"
        } justify-between my-10 px-2 flex-1 max-w-full`}
      >
        {renderTestimonials()}
      </div>
      <div className="flex my-44 justify-center z-10">
        <div
          style={{ boxShadow: "2px 2px 20px 2px rgba(0,0,0,0.1)" }}
          className="rounded-xl flex flex-col gap-5 py-10 px-20 text-center font-poppins"
        >
          <span className="font-semibold text-[28px]">Get In Touch</span>
          <span className="font-normal text-[16px] text-[#777] max-w-[600px]">
            Reaching us is never a problem. Call us and talk to a person without
            waiting on hold or chat online.
          </span>
          <div className="flex items-center justify-center gap-1">
            <button className="bg-orange-gradient p-3 text-[10px] sm:text-xs md:text-sm lg:text-base text-[#fff] font-semibold rounded-full flex items-center justify-center gap-2 flex-1 min-w-[180px]">
              <IoCall size={16} />
              +91-87990-26842
            </button>
            <button className="bg-gradient-to-r from-purple to-blue p-3 text-[#fff] font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base rounded-full flex items-center justify-center gap-2 flex-1 min-w-[180px]">
              <CiChat1 size={22} /> Chat Live Now!
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] bg-[#ccc] w-[50px]"></div>
            or
            <div className="h-[1px] bg-[#ccc] w-[50px]"></div>
          </div>
          <div className="flex justify-center items-center">
            <button className="py-3 px-10 text-[#f9855a] border-[1px] border-[#f48868] font-semibold text-base rounded-full flex items-center justify-center gap-2">
              Requesting A Call Back <BsArrowRight size={22} />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`relative flex ${
          !isMobile && "flex-col"
        } justify-between my-10 px-2 flex-1 max-w-full`}
      >
        {renderTestimonials()}
      </div>
    </div>
  );
}

export default Testimonials;
