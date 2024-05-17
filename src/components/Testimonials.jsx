import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import "./Testimonials.css";
import useIsMobile from "../hooks/UseIsMobile";

function Testimonials() {
  const isMobile = useIsMobile();

  return isMobile ? (
    <div className=" flex flex-col justify-between overflow-hidden">
      <div className=" flex justify-between relative px-2 flex-1 ">
        <div
          style={{ animation: "slide-animation ease-in-out 4s infinite" }}
          // className=" absolute top-0 left-0 w-[80px]"
        >
          <img
            className=" h-16 w-16 rounded-full border-[1px] border-[#ccc]"
            src="https://1.bp.blogspot.com/-etLuQuGcvk4/X7KNwaY_jNI/AAAAAAAACQk/5IakDtRRKVo5vNbZLfhSsk10RTVdHmsjQCLcBGAsYHQ/w320-h309/indira%2Bgandhi%2Btransparent%2Bpng%2B11.png"
            alt="pic1"
          />
        </div>
        <div
          style={{
            animation: "slide-animation ease-in-out 4s infinite",
            animationDelay: "0.5s",
          }}
          // className=" absolute top-[20%] right-[20%] w-[80px]"
        >
          <img
            className=" h-16 w-16 rounded-full border-[1px] border-[#ccc]"
            src="https://th.bing.com/th/id/OIP.yecByzFzfjR4auLzZtBySwHaFz?rs=1&pid=ImgDetMain"
            alt="pic2"
          />
        </div>
        <div
          style={{
            animation: "slide-animation ease-in-out 4s infinite",
            animationDelay: "1s",
          }}
          // className=" absolute top-[40%] left-[40%] w-[80px]"
        >
          <img
            className=" h-16 w-16 rounded-full border-[1px] border-[#ccc]"
            src="https://www.lifology.com/wp-content/themes/lifology/assets/gcd/images/panel/Barkha.png?ver=1.5.2"
            alt="pic3"
          />
        </div>
        <div
          style={{
            animation: "slide-animation ease-in-out 4s infinite",
            animationDelay: "1.5s",
          }}
          // className=" absolute top-[60%] left-[12%] w-[80px]"
        >
          <img
            className=" h-16 w-16 rounded-full border-[1px] border-[#ccc]"
            src="https://uploads-ssl.webflow.com/638aec50b9a23cec17b8c4d1/63c8efc8cbe2f68f8fec48ff_1588582389829-removebg-preview.png"
            alt="pic4"
          />
        </div>
        <div
          style={{
            animation: "slide-animation ease-in-out 4s infinite",
            animationDelay: "2s",
          }}
          // className=" absolute bottom-0 right-0 w-[80px]"
        >
          <img
            className=" h-16 w-16 rounded-full border-[1px] border-[#ccc]"
            src="https://www.iconspng.com/uploads/priyanka-chopra-portrait.png"
            alt="pic4"
          />
        </div>
        <div
          style={{
            animation: "slide-animation ease-in-out 4s infinite",
            animationDelay: "2.5s",
          }}
          // className=" absolute w-[80px] right-[40%] bottom-[15%]"
        >
          <img
            className=" h-16 w-16 rounded-full border-[1px] border-[#ccc]"
            src="https://www.csaspeakersindia.in/media/pictures/profile/6402.png"
            alt="pic4"
          />
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
          <div className=" flex items-center justify-center gap-1">
            <button className=" bg-orange-gradient p-3 text-[10px] text-[#fff] font-semibold rounded-full flex items-center justify-center gap-2 flex-1 min-w-[180px]">
              <IoCall size={16} />
              +91-87990-26842
            </button>
            <button className=" bg-gradient-to-r from-purple to-blue p-3 text-[#fff] font-semibold text-[10px] rounded-full flex items-center justify-center gap-2 flex-1 min-w-[180px]">
              <CiChat1 size={18} /> Chat Live Now!
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
      <div className=" flex justify-between relative my-10 px-2 flex-1 ">
        <div
          style={{
            animation: "slide-animation ease-in-out 4s infinite",
            animationDelay: "2.5s",
          }}
          // className=" absolute top-0 right-[10%] w-[80px]"
        >
          <img
            className=" h-16 w-16 rounded-full border-[1px] border-[#ccc]"
            src="https://dinazfitness.com/wp-content/uploads/2019/12/2_03_36_07_Saina-Nehwal_1_H@@IGHT_450_W@@IDTH_450-300x300.png"
            alt="pic1"
          />
        </div>
        <div
          style={{
            animation: "slide-animation ease-in-out 4s infinite",
            animationDelay: "2s",
          }}
          // className=" absolute top-[20%] left-[20%] w-[80px]"
        >
          <img
            className=" h-16 w-16 rounded-full border-[1px] border-[#ccc]"
            src="https://www.indyturk.com/sites/default/files/arundhati_2-removebg-preview.png"
            alt="pic2"
          />
        </div>
        <div
          style={{
            animation: "slide-animation ease-in-out 4s infinite",
            animationDelay: "1.5s",
          }}
          // className=" absolute top-[40%] right-[40%] w-[80px]"
        >
          <img
            className=" h-16 w-16 rounded-full border-[1px] border-[#ccc]"
            src="https://cdn.ticketsource.co.uk/images/promoter/banner/81797-16726832912241-s.png"
            alt="pic3"
          />
        </div>
        <div
          style={{
            animation: "slide-animation ease-in-out 4s infinite",
            animationDelay: "1s",
          }}
          // className=" absolute top-[60%] right-[12%] w-[80px]"
        >
          <img
            className=" h-16 w-16 rounded-full border-[1px] border-[#ccc]"
            src="https://www.bhmpics.com/downloads/mithali-raj-Wallpapers/6.99363.png"
            alt="pic4"
          />
        </div>
        <div
          style={{
            animation: "slide-animation ease-in-out 4s infinite",
            animationDelay: "0.5s",
          }}
          // className=" absolute bottom-0 left-0 w-[80px]"
        >
          <img
            className=" h-16 w-16 rounded-full border-[1px] border-[#ccc]"
            src="https://www.w3summit.io/images/speakers/vineetas.png"
            alt="pic4"
          />
        </div>
        <div
          style={{ animation: "slide-animation ease-in-out 4s infinite" }}
          // className=" absolute w-[80px] left-[40%] bottom-[15%]"
        >
          <img
            className=" h-16 w-16 rounded-full border-[1px] border-[#ccc]"
            src="https://images.squarespace-cdn.com/content/v1/5b553895697a98cf2cef2bc6/1553632726498-ILOPDRFRHE1DBFABI4IO/indra.png"
            alt="pic4"
          />
        </div>
      </div>
    </div>
  ) : window.innerWidth < 1000 ? (
    <div className=" flex justify-between overflow-hidden">
      <div className=" relative flex flex-col justify-between my-10 px-2 flex-1 ">
        <div
          style={{ animation: "slide-right-animation ease-in-out 4s infinite" }}
          // className=" absolute top-0 left-0 w-[80px]"
        >
          <img
            className=" h-20 min-w-20 rounded-full border-[1px] border-[#ccc]"
            src="https://1.bp.blogspot.com/-etLuQuGcvk4/X7KNwaY_jNI/AAAAAAAACQk/5IakDtRRKVo5vNbZLfhSsk10RTVdHmsjQCLcBGAsYHQ/w320-h309/indira%2Bgandhi%2Btransparent%2Bpng%2B11.png"
            alt="pic1"
          />
        </div>
        <div
          style={{ animation: "slide-right-animation ease-in-out 4s infinite", animationDelay: "0.5s" }}
          // className=" absolute top-[20%] right-[20%] w-[80px]"
        >
          <img
            className=" h-20 min-w-20 rounded-full border-[1px] border-[#ccc]"
            src="https://th.bing.com/th/id/OIP.yecByzFzfjR4auLzZtBySwHaFz?rs=1&pid=ImgDetMain"
            alt="pic2"
          />
        </div>
        <div
          style={{ animation: "slide-right-animation ease-in-out 4s infinite", animationDelay: "1s" }}
          // className=" absolute top-[40%] left-[40%] w-[80px]"
        >
          <img
            className=" h-20 min-w-20 rounded-full border-[1px] border-[#ccc]"
            src="https://www.lifology.com/wp-content/themes/lifology/assets/gcd/images/panel/Barkha.png?ver=1.5.2"
            alt="pic3"
          />
        </div>
        <div
          style={{ animation: "slide-right-animation ease-in-out 4s infinite", animationDelay: "1.5s" }}
          // className=" absolute top-[60%] left-[12%] w-[80px]"
        >
          <img
            className=" h-20 min-w-20 rounded-full border-[1px] border-[#ccc]"
            src="https://uploads-ssl.webflow.com/638aec50b9a23cec17b8c4d1/63c8efc8cbe2f68f8fec48ff_1588582389829-removebg-preview.png"
            alt="pic4"
          />
        </div>
        <div
          style={{ animation: "slide-right-animation ease-in-out 4s infinite", animationDelay: "2s" }}
          // className=" absolute bottom-0 right-0 w-[80px]"
        >
          <img
            className=" h-20 min-w-20 rounded-full border-[1px] border-[#ccc]"
            src="https://www.iconspng.com/uploads/priyanka-chopra-portrait.png"
            alt="pic4"
          />
        </div>
        <div
          style={{ animation: "slide-right-animation ease-in-out 4s infinite",animationDelay: "2.5s" }}
          // className=" absolute w-[80px] right-[40%] bottom-[15%]"
        >
          <img
            className=" h-20 min-w-20 rounded-full border-[1px] border-[#ccc]"
            src="https://www.csaspeakersindia.in/media/pictures/profile/6402.png"
            alt="pic4"
          />
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
            <button className=" bg-orange-gradient py-3 px-10 text-[#fff] font-semibold text-base rounded-full flex items-center justify-center gap-2 flex-1">
              <IoCall />
              Call +91-87990-26842
            </button>
            <button className=" bg-gradient-to-r from-purple to-blue py-3 px-10 text-[#fff] font-semibold text-base rounded-full flex items-center justify-center gap-2 flex-1">
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
      <div className=" relative flex flex-col justify-between my-10 px-2 flex-1 ">
        <div
          style={{ animation: "slide-right-animation ease-in-out 4s infinite", animationDelay: "2.5s" }}
          // className=" absolute top-0 right-[10%] w-[80px]"
        >
          <img
            className=" h-20 min-w-20 rounded-full border-[1px] border-[#ccc]"
            src="https://dinazfitness.com/wp-content/uploads/2019/12/2_03_36_07_Saina-Nehwal_1_H@@IGHT_450_W@@IDTH_450-300x300.png"
            alt="pic1"
          />
        </div>
        <div
          style={{ animation: "slide-right-animation ease-in-out 4s infinite", animationDelay: "2s" }}
          // className=" absolute top-[20%] left-[20%] w-[80px]"
        >
          <img
            className=" h-20 min-w-20 rounded-full border-[1px] border-[#ccc]"
            src="https://www.indyturk.com/sites/default/files/arundhati_2-removebg-preview.png"
            alt="pic2"
          />
        </div>
        <div
          style={{ animation: "slide-right-animation ease-in-out 4s infinite", animationDelay: "1.5s" }}
          // className=" absolute top-[40%] right-[40%] w-[80px]"
        >
          <img
            className=" h-20 min-w-20 rounded-full border-[1px] border-[#ccc]"
            src="https://cdn.ticketsource.co.uk/images/promoter/banner/81797-16726832912241-s.png"
            alt="pic3"
          />
        </div>
        <div
          style={{ animation: "slide-right-animation ease-in-out 4s infinite", animationDelay: "1s" }}
          // className=" absolute top-[60%] right-[12%] w-[80px]"
        >
          <img
            className=" h-20 min-w-20 rounded-full border-[1px] border-[#ccc]"
            src="https://www.bhmpics.com/downloads/mithali-raj-Wallpapers/6.99363.png"
            alt="pic4"
          />
        </div>
        <div
          style={{ animation: "slide-right-animation ease-in-out 4s infinite", animationDelay: "0.5s" }}
          // className=" absolute bottom-0 left-0 w-[80px]"
        >
          <img
            className=" h-20 min-w-20 rounded-full border-[1px] border-[#ccc]"
            src="https://www.w3summit.io/images/speakers/vineetas.png"
            alt="pic4"
          />
        </div>
        <div
          style={{ animation: "slide-right-animation ease-in-out 4s infinite" }}
          // className=" absolute w-[80px] left-[40%] bottom-[15%]"
        >
          <img
            className=" h-20 min-w-20 rounded-full border-[1px] border-[#ccc]"
            src="https://images.squarespace-cdn.com/content/v1/5b553895697a98cf2cef2bc6/1553632726498-ILOPDRFRHE1DBFABI4IO/indra.png"
            alt="pic4"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className=" flex justify-between overflow-hidden">
      <div className=" relative my-10 px-2 flex-1 ">
        <div
          style={{ animation: "slide-animation ease-in-out 2s infinite" }}
          className=" absolute top-0 left-0 w-[80px]"
        >
          <img
            className=" h-28 min-w-28 rounded-full border-[1px] border-[#ccc]"
            src="https://1.bp.blogspot.com/-etLuQuGcvk4/X7KNwaY_jNI/AAAAAAAACQk/5IakDtRRKVo5vNbZLfhSsk10RTVdHmsjQCLcBGAsYHQ/w320-h309/indira%2Bgandhi%2Btransparent%2Bpng%2B11.png"
            alt="pic1"
          />
        </div>
        <div
          style={{ animation: "slide-animation ease-in-out 3s infinite" }}
          className=" absolute top-[20%] right-[20%] w-[80px]"
        >
          <img
            className=" h-28 min-w-28 rounded-full border-[1px] border-[#ccc]"
            src="https://th.bing.com/th/id/OIP.yecByzFzfjR4auLzZtBySwHaFz?rs=1&pid=ImgDetMain"
            alt="pic2"
          />
        </div>
        <div
          style={{ animation: "slide-animation ease-in-out 4s infinite" }}
          className=" absolute top-[40%] left-[40%] w-[80px]"
        >
          <img
            className=" h-28 min-w-28 rounded-full border-[1px] border-[#ccc]"
            src="https://www.lifology.com/wp-content/themes/lifology/assets/gcd/images/panel/Barkha.png?ver=1.5.2"
            alt="pic3"
          />
        </div>
        <div
          style={{ animation: "slide-animation ease-in-out 5s infinite" }}
          className=" absolute top-[60%] left-[12%] w-[80px]"
        >
          <img
            className=" h-28 min-w-28 rounded-full border-[1px] border-[#ccc]"
            src="https://uploads-ssl.webflow.com/638aec50b9a23cec17b8c4d1/63c8efc8cbe2f68f8fec48ff_1588582389829-removebg-preview.png"
            alt="pic4"
          />
        </div>
        <div
          style={{ animation: "slide-animation ease-in-out 6s infinite" }}
          className=" absolute bottom-0 right-0 w-[80px]"
        >
          <img
            className=" h-28 min-w-28 rounded-full border-[1px] border-[#ccc]"
            src="https://www.iconspng.com/uploads/priyanka-chopra-portrait.png"
            alt="pic4"
          />
        </div>
        <div
          style={{ animation: "slide-animation ease-in-out 7s infinite" }}
          className=" absolute w-[80px] right-[40%] bottom-[15%]"
        >
          <img
            className=" h-28 min-w-28 rounded-full border-[1px] border-[#ccc]"
            src="https://www.csaspeakersindia.in/media/pictures/profile/6402.png"
            alt="pic4"
          />
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
            <button className=" bg-orange-gradient py-3 px-10 text-[#fff] font-semibold text-base rounded-full flex items-center justify-center gap-2 flex-1">
              <IoCall />
              Call +91-87990-26842
            </button>
            <button className=" bg-gradient-to-r from-purple to-blue py-3 px-10 text-[#fff] font-semibold text-base rounded-full flex items-center justify-center gap-2 flex-1">
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
        <div
          style={{ animation: "slide-animation ease-in-out 6s infinite" }}
          className=" absolute top-0 right-[10%] w-[80px]"
        >
          <img
            className=" h-28 min-w-28 rounded-full border-[1px] border-[#ccc]"
            src="https://dinazfitness.com/wp-content/uploads/2019/12/2_03_36_07_Saina-Nehwal_1_H@@IGHT_450_W@@IDTH_450-300x300.png"
            alt="pic1"
          />
        </div>
        <div
          style={{ animation: "slide-animation ease-in-out 5s infinite" }}
          className=" absolute top-[20%] left-[20%] w-[80px]"
        >
          <img
            className=" h-28 min-w-28 rounded-full border-[1px] border-[#ccc]"
            src="https://www.indyturk.com/sites/default/files/arundhati_2-removebg-preview.png"
            alt="pic2"
          />
        </div>
        <div
          style={{ animation: "slide-animation ease-in-out 4s infinite" }}
          className=" absolute top-[40%] right-[40%] w-[80px]"
        >
          <img
            className=" h-28 min-w-28 rounded-full border-[1px] border-[#ccc]"
            src="https://cdn.ticketsource.co.uk/images/promoter/banner/81797-16726832912241-s.png"
            alt="pic3"
          />
        </div>
        <div
          style={{ animation: "slide-animation ease-in-out 3s infinite" }}
          className=" absolute top-[60%] right-[12%] w-[80px]"
        >
          <img
            className=" h-28 min-w-28 rounded-full border-[1px] border-[#ccc]"
            src="https://www.bhmpics.com/downloads/mithali-raj-Wallpapers/6.99363.png"
            alt="pic4"
          />
        </div>
        <div
          style={{ animation: "slide-animation ease-in-out 2s infinite" }}
          className=" absolute bottom-0 left-0 w-[80px]"
        >
          <img
            className=" h-28 min-w-28 rounded-full border-[1px] border-[#ccc]"
            src="https://www.w3summit.io/images/speakers/vineetas.png"
            alt="pic4"
          />
        </div>
        <div
          style={{ animation: "slide-animation ease-in-out 6s infinite" }}
          className=" absolute w-[80px] left-[40%] bottom-[15%]"
        >
          <img
            className=" h-28 min-w-28 rounded-full border-[1px] border-[#ccc]"
            src="https://images.squarespace-cdn.com/content/v1/5b553895697a98cf2cef2bc6/1553632726498-ILOPDRFRHE1DBFABI4IO/indra.png"
            alt="pic4"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
