import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp, IoIosMenu } from "react-icons/io";
import { PiXBold, PiXCircleDuotone } from "react-icons/pi";
import "./Navbar.css";
import { BiDownArrow, BiMobile } from "react-icons/bi";
import LogoWithText from "../assets/DhiyodhaLogoWithText.png";
import useIsMobile from "../hooks/UseIsMobile";
import { CiMobile1 } from "react-icons/ci";

function Navbar() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("");

  // Navbar links data
  const navLinks = [
    {
      name: "Activities",
      path: "activities",
      drowDown: true,
      menu: [
        { name: "this is harsh", path: "" },
        { name: "this is harsh2", path: "" },
        { name: "this is harsh3", path: "" },
      ],
    },
    {
      name: "Training",
      path: "training",
      drowDown: true,
      menu: [
        { name: "this is harsh", path: "" },
        { name: "this is harsh2", path: "" },
      ],
    },
    {
      name: "Media",
      path: "media",
      drowDown: true,
      menu: [
        { name: "DC Meetings", path: "" },
        { name: "Dhiyodha", path: "" },
      ],
    },
  ];

  return (
    <>
      {isMobile ? (
        // Mobile View
        <nav className=" bg-[#fff] flex justify-between items-center px-[1rem] py-3 w-full z-40 fixed top-0 md:px-[4rem] lg:px-[5rem] xl:px-[7rem] 2xl:px-[10rem] border-b-[1px] border-b-[#ddd]">
          {/* Logo */}
          <div className=" text-[2rem]">
            <img height={30} width={100} src={LogoWithText} alt="Logo" />
          </div>
          {/* Book a Demo Button */}
          <div className=" flex gap-4 items-center ">
            <Link to="/register">
              <div className=" border-[1px] px-4 sm:px-[2rem] py-[0.5rem] rounded-full font-semibold text-center text-sm  sm:text-md cursor-pointer">
                <div className=" py-1">Join Dc</div>
              </div>
            </Link>
            <IoIosMenu size={35} onClick={() => setOpen(!open)} />
          </div>
          {/* Mobile menu */}
          <div
            className={`fixed top-0 right-0 bg-purple text-[#fff] h-screen xs:w-[80%] sm:w-[60%] transition-transform transform ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              animation: `${
                open ? "slide-left" : "slide-right"
              } ease-in-out 0.3s`,
            }}
          >
            <PiXBold
              size={35}
              onClick={() => setOpen(!open)}
              className=" absolute right-[10%] top-[20px] "
            />
            {/* Mobile menu items */}
            <div className=" my-20 px-4 text-sm font-bold">
              {navLinks.map((item, index) => {
                const { path, name } = item;
                return (
                  // add a path here
                  <Link key={index} to="/">
                    <div className=" py-4">{name}</div>
                  </Link>
                );
              })}
              {/* Download buttons */}
              <div className=" mt-3 border-[1px] px-[1rem] py-3 rounded-full font-semibold text-md bg-orange-gradient flex items-center gap-3  border-none outline-none cursor-pointer">
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
                <div className=" text-[#fff] text-[16px]">
                  Download Right now
                </div>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        // Desktop view
        <nav className=" bg-[#fff] flex justify-between items-center px-[1rem] py-[1rem] w-full z-40 fixed top-0 md:px-[rem] lg:px-[5rem] xl:px-[7rem] 2xl:px-[10rem] border-b-[1px] border-b-[#ddd]">
          {/* LOGO */}
          <div className=" text-[2rem]">
            <img
              className={` h-12 w-25 md:h-30 md:w-30`}
              width={180}
              src={LogoWithText}
              alt="Logo"
            />
          </div>
          {/* Desktop menu items */}
          <div className=" flex px-3">
            {navLinks.map((item, index) => {
              const { path, name } = item;
              return (
                // Menu items with dropdown functionality
                <div
                  className=" relative"
                  key={index}
                  onMouseEnter={() => setDropDownValue(name)}
                  onMouseLeave={() => setDropDownValue("")}
                >
                  <div className=" hoverBox py-[5px] px-[1rem] text-md font-semibold cursor-pointer flex items-center hover:text-purple ">
                    {name}
                    {item.drowDown && (
                      <div className=" translate-y-[2px] pl-1">
                        <IoIosArrowDown className="rotate-icon" />
                      </div>
                    )}
                  </div>
                  {/* Dropdown menu */}
                  {item.drowDown && dropDownValue === name && (
                    <div className=" absolute min-w-36 bg-[#fff] z-30 top-full left-0 py-2 rounded-lg shadow-lg fade-in ">
                      {item.menu?.map((subItem, subIndex) => (
                        // add a path here
                        <Link to="/" key={subIndex}>
                          <div className=" mx-2 p-2 rounded-md hover:bg-[#f5f5f5] text-sm font-semibold text-center">
                            {subItem.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* buttons for desktop view */}
          <div className=" hidden md:flex md:gap-5">
            <Link to="/register">
              <div className=" border-[1px] px-[1rem] py-[0.5rem] rounded-full font-semibold text-sm text-center cursor-pointer lg:px-[2rem] lg:text-md">
                <div className=" py-1">Join Dc</div>
              </div>
            </Link>
            <div className=" button border-[1px] px-[2rem] rounded-full font-semibold text-md outline-none border-none flex items-center gap-3 cursor-pointer">
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
            <Link className=" flex items-center" to="/mobile-web-form">
              <CiMobile1 size={24} />
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
