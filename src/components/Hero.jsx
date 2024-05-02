import React from "react";

function Hero() {
  return (
    <div className=" mt-24 font-poppins">
      <div className=" flex mx-56 justify-between items-center py-72">
        <div className=" flex flex-col">
          <p className=" text-[40px] font-semibold mb-8">
            Created For <br /> Creators.
          </p>
          <p className=" text-[20px] font-medium mb-10 max-w-[500px]">
            Boost your community and enhance your growth, all while you can earn
            some more!
          </p>
          <div className=" py-[1rem] rounded-full font-semibold text-xl bg-blue flex items-center justify-center gap-3 cursor-pointer max-w-[350px]">
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
            <div className=" text-[#fff]">Download Right Now!</div>
          </div>
        </div>
        <div>
          <div className=" h-[500px] w-[500px] bg-gradient-to-b from-green to-yellow rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
