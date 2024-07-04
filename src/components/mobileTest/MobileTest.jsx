import React, { useState } from "react";

function MobileTest() {
  const [flag, setFlag] = useState(false);
  const [callback, setCallback] = useState(false);
  const [obj, setObj] = useState(false);

  const handleClick = () => {
    setFlag(!flag);
    console.log("the flag value is ", flag);
  };

  const handleClickCallback = () => {
      setCallback(!callback);
    Callback();
  };

  function Callback() {
    console.log("callback function is executed");
    return "some data";
  }

  const handleClickObj = () => {
      setObj(!obj);
      const object = { name: "John Doe", age: 30 };
    console.log("the object is ", object);
  };

  return (
    <div>
      <div className=" flex flex-col gap-5 items-center justify-center h-screen">
        <div className=" absolute top-0 left-0">
          {flag && <span className="">the Flag is true</span>}
          {callback && (
            <div>
              <span className="">the Callback is true</span>
            </div>
          )}
          {obj && (
            <div>
              <span className="">the object is true</span>
            </div>
          )}
        </div>
        <button
          className=" bg-green border-[#000] border-[1px] px-5 py-3 rounded-md font-semibold"
          onClick={handleClick}
        >
          Flag
        </button>
        <button
          className=" bg-green border-[#000] border-[1px] px-5 py-3 rounded-md font-semibold"
          onClick={handleClickCallback}
        >
          Call Back
        </button>
        <button
          className=" bg-green border-[#000] border-[1px] px-5 py-3 rounded-md font-semibold"
          onClick={handleClickObj}
        >
          Obj
        </button>
      </div>
    </div>
  );
}

export default MobileTest;
