import React, { useState } from "react";

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-bold">Logo</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex space-x-4">
            <li>
              <a href="#" className="text-white">Home</a>
            </li>
            <li>
              <a href="#" className="text-white">About</a>
            </li>
            <li>
              <a href="#" className="text-white">Services</a>
            </li>
            <li>
              <a href="#" className="text-white">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Test;
