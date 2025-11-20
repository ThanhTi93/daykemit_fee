import React, { useState } from "react";
import { LISTMENU } from "../utils/Contants";
import { IoLogoCss3, IoMdArrowDropright } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";
import { MdCategory, MdDashboard } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBarAdmin() {
  const [isOpen, setIsOpen] = useState(-1);
  const [show, setShow] = useState(false);

  const handleShow = (index: number) => {
    setIsOpen((prev) => (prev === index ? -1 : index));
  };

  return (
    <div
      className={`px-4 transition-all duration-500 ease-in-out 
      bg-gradient-to-b from-indigo-800 via-purple-700 to-pink-600 min-md:h-screen
      ${show ? "md:w-60 pb-6" : "md:w-20"}`}
    >
      {/* Logo + Toggle */}
      <div className="relative flex items-center justify-center md:justify-between p-4 text-white">
        {show ? (
          <h1 className="font-bold text-lg tracking-wide">
            DaykemIT<span className="text-yellow-300">Admin</span>
          </h1>
        ) : (
          <IoLogoCss3 className="text-3xl text-yellow-400" />
        )}
        <div
          onClick={() => setShow(!show)}
          className="absolute md:translate-x-1/2 right-[-16px] h-9 w-9 flex justify-center items-center cursor-pointer rounded-full bg-black text-white hover:bg-yellow-500 transition-colors"
        >
          {show ? <TiThMenuOutline /> : <FaHandPointRight />}
        </div>
      </div>

      {/* Menu */}
      <div className={show ? "block" : "max-md:hidden"}>
        {/* Dashboard */}
        <li className="p-2 bg-white/10 hover:bg-yellow-400 hover:text-black transition-all rounded-xl flex items-center gap-2 text-white cursor-pointer">
          <MdDashboard className="text-2xl text-yellow-300" />
          {show && <p className="font-medium">Dashboard</p>}
        </li>

        {/* UI Elements */}
        {show && (
          <h2 className="mt-4 mb-1 text-sm font-bold uppercase text-gray-200">
            UI Elements
          </h2>
        )}
        {LISTMENU.map((menu, index) => (
          <div className="relative" key={index}>
            <div
              onClick={() => handleShow(index)}
              className={`flex items-center gap-2 mt-2 p-2 rounded-xl cursor-pointer 
              bg-white/10 text-white hover:bg-yellow-400 hover:text-black transition-all`}
            >
              {menu.icon}
              {show && (
                <span className="whitespace-nowrap font-medium">
                  {menu.title}
                </span>
              )}
              <IoMdArrowDropright
                className={`ml-auto transform transition-transform duration-300 ${
                  isOpen === index ? "rotate-90" : ""
                }`}
              />
            </div>

            {/* Submenu */}
            <div
              className={`pl-8 mt-2 transition-all duration-500 flex flex-col
              ${show ? "" : "absolute right-5 top-0 translate-x-full"} 
              ${isOpen === index ? "block" : "hidden"}`}
            >
              {menu.items.map((item, idx) => (
                <Link to={item.path}
                  className="p-2 mt-2 rounded-lg bg-yellow-300 text-black hover:bg-yellow-500 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                  key={idx}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Pages */}
        {show && (
          <h2 className="mt-4 mb-1 text-sm font-bold uppercase text-gray-200">
            Pages
          </h2>
        )}
        <Link to={"/categories"} className="p-2 mt-2 flex items-center gap-2 rounded-xl bg-white/10 text-white hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
          <MdCategory className="text-2xl text-yellow-300" />
          {show && <p className="font-medium">Categories</p>}
        </Link>
      </div>
    </div>
  );
}

export default NavBarAdmin;
