import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { PiXBold, PiXCircleDuotone } from "react-icons/pi";
import "./Navbar.css";
import { BiDownArrow } from "react-icons/bi";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const checkScreenWidth = () => {
    // setIsMobile(window.innerWidth < 768);
    setIsMobile(window.innerWidth < 868);
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const navLinks = [
    { name: "Activities", path: "activities", drowDown: true },
    { name: "Training", path: "training", drowDown: true },
    { name: "Media", path: "media", drowDown: true },
    { name: "Join DC", path: "join", drowDown: false },
  ];

  return (
    <>
      {isMobile ? (
        <nav className=" bg-white flex justify-between items-center px-[1rem] py-3 w-full z-20 fixed top-0 md:px-[4rem] lg:px-[5rem] xl:px-[7rem] 2xl:px-[10rem] border-b-[1px] border-b-[#ddd]">
          <div className=" text-[2rem]">
            <img
              height={30}
              width={100}
              src="https://app.rigi.club/wp-content/themes/Rigi/assets/img/logo.svg"
              alt="Logo"
            />
          </div>
          <div className=" flex gap-4 items-center ">
            <div className=" border-[1px] px-2 sm:px-[2rem] py-[0.5rem] rounded-full font-semibold text-center text-sm  sm:text-lg cursor-pointer">
              <div className=" py-1">Book a Demo</div>
            </div>
            <IoIosMenu size={35} onClick={() => setOpen(!open)} />
          </div>

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
            <div className=" my-20 px-4 text-base font-bold">
              {navLinks.map((item, index) => {
                const { path, name } = item;
                return (
                  // add a path here
                  <Link key={index} to="/">
                    <div className=" py-4">{name}</div>
                  </Link>
                );
              })}
              <div className=" mt-3 border-[1px] px-[1rem] py-3 rounded-full font-semibold text-lg bg-[#000] flex items-center gap-3  border-none outline-none cursor-pointer">
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
        <nav className=" bg-white flex justify-between items-center px-[1rem] py-[1rem] w-full z-20 fixed top-0 md:px-[rem] lg:px-[5rem] xl:px-[7rem] 2xl:px-[10rem] border-b-[1px] border-b-[#ddd]">
          {/* LOGO */}
          <div className=" text-[2rem]">
            <img
              // className={` h-20 w-25 md:h-30 md:w-30`}
              height={30}
              width={100}
              src="https://app.rigi.club/wp-content/themes/Rigi/assets/img/logo.svg"
              alt="Logo"
            />
          </div>
          <div className=" flex px-3">
            {navLinks.map((item, index) => {
              const { path, name } = item;
              return (
                // add a path here
                <Link key={index} to="/">
                  <div className="py-[5px] px-[1rem] text-xl font-semibold cursor-pointer flex items-center hover:text-purple">
                    {name}
                    {item.drowDown && (
                      <div
                        className=" translate-y-[2px] pl-1 hover:animate-arrowRotate"
                      >
                        <IoIosArrowDown />
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className=" hidden md:flex md:gap-5">
            <div className=" border-[1px] px-[1rem] py-[0.5rem] rounded-full font-semibold text-sm text-center cursor-pointer lg:px-[2rem] lg:text-lg">
              <div className=" py-1">Book a Demo</div>
            </div>
            <div className=" border-[1px] px-[2rem] rounded-full font-semibold text-lg bg-blue flex items-center gap-3 cursor-pointer">
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
        </nav>
      )}
    </>
  );
}

export default Navbar;
