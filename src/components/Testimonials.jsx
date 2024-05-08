import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import "./Testimonials.css" 

function Testimonials() {
  return (
    <div className=" flex justify-between overflow-hidden">
      <div className=" relative my-10 px-2 flex-1 ">
        <div style={{ animation: "slide-animation ease-in-out 2s infinite"}} className=" absolute top-0 left-0 w-[80px]">
          <img className=" h-28 min-w-28 rounded-full" src="https://alicrie.vercel.app/images/anime+pfp+luffy-8.jpg" alt="pic1" />
        </div>
        <div style={{ animation: "slide-animation ease-in-out 3s infinite"}} className=" absolute top-[20%] right-[20%] w-[80px]">
          <img className=" h-28 min-w-28 rounded-full" src="https://i0.wp.com/wallpaperaccess.com/full/5389873.jpg" alt="pic2" />
        </div> 
        <div style={{ animation: "slide-animation ease-in-out 4s infinite"}} className=" absolute top-[40%] left-[40%] w-[80px]">
          <img className=" h-28 min-w-28 rounded-full" src="https://th.bing.com/th/id/R.fe32edad699edbe82b7cc88ccd9573fa?rik=Way6AG5N1Flizg&riu=http%3a%2f%2fpm1.narvii.com%2f7824%2fcad96d095bdd5db282f5a580d2520e950758cddcr1-675-675v2_uhq.jpg&ehk=28yX%2bcYFBzma366A14dzETx7Q3RlZ7BNmGwIFRroM7I%3d&risl=&pid=ImgRaw&r=0" alt="pic3" />
        </div>
        <div style={{ animation: "slide-animation ease-in-out 5s infinite"}} className=" absolute top-[60%] left-[12%] w-[80px]">
          <img className=" h-28 min-w-28 rounded-full" src="https://i.pinimg.com/736x/74/c5/cb/74c5cbf5f2984f4787b58771ae451a58.jpg" alt="pic4" />
        </div>
        <div style={{ animation: "slide-animation ease-in-out 6s infinite"}} className=" absolute bottom-0 right-0 w-[80px]">
          <img className=" h-28 min-w-28 rounded-full" src="https://i.pinimg.com/originals/5b/ec/67/5bec673521ec13e082c4805f6e96a479.png" alt="pic4" />
        </div>
        <div style={{ animation: "slide-animation ease-in-out 7s infinite"}} className=" absolute w-[80px] right-[40%] bottom-[15%]">
          <img className=" h-28 min-w-28 rounded-full" src="https://wallpapercave.com/wp/wp8801869.jpg" alt="pic4" />
        </div>
      </div>
      <div className=" flex my-44 justify-center z-10">
        <div
          style={{ boxShadow: "2px 2px 20px 2px rgba(0,0,0,0.1)" }}
          className=" rounded-xl flex flex-col gap-5 py-10 px-20 text-center font-poppins"
        >
          <span className=" font-semibold text-[28px]">Get In Touch</span>
          <span className=" font-normal text-[16px] text-[#777] max-w-[600px]">
            Reaching us is never a problem. Call us and talk to a person without
            waiting on hold or chat online.
          </span>
          <div className=" flex items-center justify-center gap-5">
            <button className=" bg-[#5571FD] py-3 px-10 text-[#fff] font-semibold text-base rounded-full flex items-center justify-center gap-2 flex-1">
              <IoCall />
              Call +91-87990-26842
            </button>
            <button className=" bg-[#01D17A] py-3 px-10 text-[#fff] font-semibold text-base rounded-full flex items-center justify-center gap-2 flex-1">
              <CiChat1 size={22} /> Chat Live Now!
            </button>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <div className=" h-[1px] bg-[#ccc] w-[50px]"></div>
            or
            <div className=" h-[1px] bg-[#ccc] w-[50px]"></div>
          </div>
          <div className=" flex justify-center items-center">
            <button className=" py-3 px-10 text-[#f9855a] border-[1px] border-[#f48868] font-semibold text-base rounded-full flex items-center justify-center gap-2">
              Requesting A Call Back <BsArrowRight size={22} />
            </button>
          </div>
        </div>
      </div>
      <div className=" relative my-10 px-2 flex-1 ">
        <div style={{ animation: "slide-animation ease-in-out 6s infinite"}} className=" absolute top-0 right-[10%] w-[80px]">
          <img className=" h-28 min-w-28 rounded-full" src="https://alicrie.vercel.app/images/anime+pfp+luffy-8.jpg" alt="pic1" />
        </div>
        <div style={{ animation: "slide-animation ease-in-out 5s infinite"}} className=" absolute top-[20%] left-[20%] w-[80px]">
          <img className=" h-28 min-w-28 rounded-full" src="https://i0.wp.com/wallpaperaccess.com/full/5389873.jpg" alt="pic2" />
        </div> 
        <div style={{ animation: "slide-animation ease-in-out 4s infinite"}} className=" absolute top-[40%] right-[40%] w-[80px]">
          <img className=" h-28 min-w-28 rounded-full" src="https://th.bing.com/th/id/R.fe32edad699edbe82b7cc88ccd9573fa?rik=Way6AG5N1Flizg&riu=http%3a%2f%2fpm1.narvii.com%2f7824%2fcad96d095bdd5db282f5a580d2520e950758cddcr1-675-675v2_uhq.jpg&ehk=28yX%2bcYFBzma366A14dzETx7Q3RlZ7BNmGwIFRroM7I%3d&risl=&pid=ImgRaw&r=0" alt="pic3" />
        </div>
        <div style={{ animation: "slide-animation ease-in-out 3s infinite"}} className=" absolute top-[60%] right-[12%] w-[80px]">
          <img className=" h-28 min-w-28 rounded-full" src="https://i.pinimg.com/736x/74/c5/cb/74c5cbf5f2984f4787b58771ae451a58.jpg" alt="pic4" />
        </div>
        <div style={{ animation: "slide-animation ease-in-out 2s infinite"}} className=" absolute bottom-0 left-0 w-[80px]">
          <img className=" h-28 min-w-28 rounded-full" src="https://i.pinimg.com/originals/5b/ec/67/5bec673521ec13e082c4805f6e96a479.png" alt="pic4" />
        </div>
        <div style={{ animation: "slide-animation ease-in-out 6s infinite"}} className=" absolute w-[80px] left-[40%] bottom-[15%]">
          <img className=" h-28 min-w-28 rounded-full" src="https://wallpapercave.com/wp/wp8801869.jpg" alt="pic4" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
