import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import LogoWithText from "../assets/DhiyodhaLogoWithText.png";
import useIsMobile from "../hooks/UseIsMobile";

function Footer() {
  const isMobile = useIsMobile();
  const [animation, setAnimation] = useState(false);

  return isMobile ? (
    <>
      <div className="flex flex-col">
        <div className=" pt-10 px-4s pb-20 flex flex-col gap-10 justify-between items-start px-10">
          <div className=" flex flex-col items-center justify-center gap-5 ">
            <div className="">
              <img width={180} src={LogoWithText} alt="Logo" />
            </div>
            <div className={` flex w-full justify-between`}>
              <FaFacebook
                size={28}
                className=" text-[#395797] cursor-pointer"
              />
              <FaTwitter size={28} className=" text-[#07A9EA] cursor-pointer" />
              <FaInstagram
                size={28}
                className=" text-[#E80C89] cursor-pointer"
              />
              <FaLinkedin
                size={28}
                className=" text-[#017CB7] cursor-pointer"
              />
            </div>
          </div>
          <div className=" flex flex-col items-start gap-2 font-poppins font-medium text-[#444]">
            <div className=" hover:text-blue cursor-pointer">
              Permenent Vilas
            </div>
            <div className=" hover:text-blue cursor-pointer">
              Temprary Vilas
            </div>
            <div className=" hover:text-blue cursor-pointer">
              Communication Services
            </div>
          </div>
          <div className=" flex flex-col items-start gap-2 font-poppins font-medium text-[#444]">
            <div className=" hover:text-blue cursor-pointer">contact Us</div>
            <div className=" hover:text-blue cursor-pointer">About Us</div>
            <div className=" hover:text-blue cursor-pointer">Carriers</div>
          </div>
          <div className=" flex flex-col items-start gap-2 font-poppins font-medium text-[#444]">
            <div className=" hover:text-blue cursor-pointer">Our Blogs</div>
            <div className=" hover:text-blue cursor-pointer">
              Terms & Policeies
            </div>
            <div className=" hover:text-blue cursor-pointer">
              My Application
            </div>
          </div>
          <div className=" flex flex-col gap-5">
            <button
              onMouseEnter={() => setAnimation(true)}
              onMouseLeave={() => setAnimation(false)}
              className="relative transition-all duration-300 bg-blue ease-in-out shadow-lg px-5 py-3 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer text-[#fff] gap-2 font-bold border border-[#fff]/30 focus:outline-none overflow-hidden text-sm hover:scale-105 hover:border-[#fff]/60"
            >
              <span className=" z-20">Join Dhiyodha!</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 transition-all duration-300 ease-in-out z-20 transform group-hover:translate-x-1"
              >
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
              {animation && (
                <span
                  className={`absolute inset-0 w-full h-full bg-gradient-to-r translate-x-[-100px] from-blue from-60% via-[#fff] to-blue to-80% z-10 opacity-60 animate-shine`}
                ></span>
              )}
            </button>
            <div className=" border-[1px] px-[2rem] py-[1rem] rounded-full font-semibold text-lg bg-orange-gradient border-none outline-none flex items-center gap-3 cursor-pointer">
              <img
                src="https://app.rigi.club/wp-content/themes/Rigi/assets/img/apple_logo.svg"
                height={18}
                width={18}
                alt="apple"
              />
              <img
                src="https://app.rigi.club/wp-content/themes/Rigi/assets/img/playstore_logo.svg"
                height={18}
                width={18}
                alt="playstore"
              />
              <div className=" text-[#fff] text-[16px]">Download Right now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="flex flex-col">
      <div>
        <img className=" w-full" src="/group_of_women.png" alt="groupOfWomen" />
      </div>
      <div className=" pt-10 px-4 sm:px-10 md:px-20 lg:px-40 pb-20 flex justify-between items-center">
        <div className=" flex flex-col items-center justify-center gap-5">
          <div className=" ">
            <img width={180} src={LogoWithText} alt="Logo" />
          </div>
          <div className={` flex w-full justify-between`}>
            <FaFacebook size={28} className=" text-[#395797] cursor-pointer" />
            <FaTwitter size={28} className=" text-[#07A9EA] cursor-pointer" />
            <FaInstagram size={28} className=" text-[#E80C89] cursor-pointer" />
            <FaLinkedin size={28} className=" text-[#017CB7] cursor-pointer" />
          </div>
        </div>
        <div className=" flex flex-col items-start gap-2 font-poppins font-medium text-[#444]">
          <div className=" hover:text-blue cursor-pointer">Permenent Vilas</div>
          <div className=" hover:text-blue cursor-pointer">Temprary Vilas</div>
          <div className=" hover:text-blue cursor-pointer">
            Communication Services
          </div>
        </div>
        <div className=" flex flex-col items-start gap-2 font-poppins font-medium text-[#444]">
          <div className=" hover:text-blue cursor-pointer">contact Us</div>
          <div className=" hover:text-blue cursor-pointer">About Us</div>
          <div className=" hover:text-blue cursor-pointer">Carriers</div>
        </div>
        <div className=" flex flex-col items-start gap-2 font-poppins font-medium text-[#444]">
          <div className=" hover:text-blue cursor-pointer">Our Blogs</div>
          <div className=" hover:text-blue cursor-pointer">
            Terms & Policeies
          </div>
          <div className=" hover:text-blue cursor-pointer">My Application</div>
        </div>
        <div className=" flex flex-col gap-5">
          <button
            onMouseEnter={() => setAnimation(true)}
            onMouseLeave={() => setAnimation(false)}
            className="relative transition-all duration-300 bg-blue ease-in-out shadow-lg px-5 py-3 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer text-[#fff] gap-2 font-bold border border-[#fff]/30 focus:outline-none overflow-hidden text-sm hover:scale-105 hover:border-[#fff]/60"
          >
            <span className=" z-20 text-base">Join Dhiyodha!</span>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 transition-all duration-300 ease-in-out z-20 transform group-hover:translate-x-1"
            >
              <path
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fillRule="evenodd"
              ></path>
            </svg>
            {animation && (
              <span
                className={`absolute inset-0 w-full h-full bg-gradient-to-r translate-x-[-100px] from-blue from-60% via-[#fff] to-blue to-80% z-10 opacity-60 animate-shine`}
              ></span>
            )}
          </button>
          <div className=" border-[1px] px-[2rem] py-[1rem] rounded-full font-semibold text-lg bg-orange-gradient border-none outline-none flex items-center gap-3 cursor-pointer">
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
            <div className=" text-[#fff]">Download Right now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
