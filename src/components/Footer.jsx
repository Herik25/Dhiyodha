import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import LogoWithText from "../assets/DhiyodhaLogoWithText.png"

function Footer() {
  return (
    <div className="flex flex-col">
      <div className=" pt-10 px-40 pb-20 flex justify-between items-center">
        <div className=" flex flex-col items-center justify-center gap-5">
          <div className=" ">
            <img
              width={180}
              src={LogoWithText}
              alt="Logo"
            />
          </div>
          <div className=" flex w-full justify-between">
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
          <div className=" text-center text-2xl font-poppins font-semibold">Join Dhiyodha!</div>
          <div className=" border-[1px] px-[2rem] py-[1rem] rounded-full font-semibold text-lg bg-purple flex items-center gap-3 cursor-pointer">
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
