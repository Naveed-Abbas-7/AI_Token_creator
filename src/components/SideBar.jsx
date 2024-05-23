import React from "react";
import logo from "../assets/Logo.svg";
import { LuMessageSquare } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { MdOutlineHistory } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import reddot from "../assets/reddot.svg";
import star from "../assets/star.svg";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isopen, setisopen] = useState(true);

  const toggleMenu = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <div
      id="SiderHovered"
        className={`fixed md:relative ${
          isopen ? "w-[280px]  z-10 shadow-lg shadow-gray-500" : "hidden"
        }`}
      >
        <div className=" bg-[#f0f4f9] text-[14px] flex flex-col gap-[7rem] py-7 ">
          <div className="flex flex-col gap-10 mx-3 font-semibold">
            <div className="flex justify-around items-center py-3">
              <div>
                <img src={logo} alt="" />
              </div>
              <div>
                <Link to={"/AddToken"}>
                  <button className="bg-[#e5eaf1] py-3 px-10 w-full rounded-full text-[#929da1] text-[14px]">
                    + New Token
                  </button>
                </Link>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col gap-3">
                <button className="flex gap-2 items-center ">
                  <span className="text-[14px]">
                    <LuMessageSquare />
                  </span>
                  <span>Marvel - MTT ( 1M )</span>
                </button>

                <button className="flex gap-2 items-center ">
                  <span className="text-[14px]">
                    <LuMessageSquare />
                  </span>
                  <span>Angry Bull - AGB ( 10B )</span>
                </button>
                <button className="flex gap-2 items-center ">
                  <span className="text-[14px]">
                    <LuMessageSquare />
                  </span>
                  <span>Musk Must - MuMu ( 999M )</span>
                </button>

                <button className="flex gap-2 items-center ">
                  <span className="text-[14px]">
                    <LuMessageSquare />
                  </span>
                  <span>11 Probes - 11PRO ( 10T )</span>
                </button>
                <button className="flex gap-2 items-center ">
                  <span className="text-[14px]">
                    <MdOutlineKeyboardArrowDown />
                  </span>
                  <span>More</span>
                </button>
              </div>
            </div>

            <div className=" flex flex-col gap-4">
              <button className="flex gap-2 items-center ">
                <span className="text-[16px]">
                  <GoQuestion />
                </span>
                <span>Help </span>
                <span>
                  <img src={reddot} alt="" />
                </span>
              </button>

              <button className="flex gap-2 items-center ">
                <span className="text-[16x]">
                  <MdOutlineHistory />
                </span>
                <span>Activity</span>
              </button>

              <button className="flex gap-2 items-center ">
                <span className="text-[16px]">
                  <IoSettings />
                </span>
                <span>Settings</span>
              </button>

              <button className="bg-[#e5eaf1] mt-2 rounded-full flex justify-center items-center text-[14px] py-2.5  gap-3">
                <span>
                  <img src={star} alt="" />
                </span>
                <span>Upgrade</span>
              </button>
            </div>
          </div>
          <div className="mx-3 text-[16px]">
            <button className="rounded-full bg-[#2d374b] w-full text-white flex justify-center items-center font-bold py-4 gap-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
                0 ETH
              </span>
              <span>Select Wallet</span>
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={toggleMenu}
        className="bg-red-700 absolute left-2 top-5 text-black text-[18px] lg:hidden block z-20"
      >
        <RiMenu2Line />
      </div>
    </>
  );
};

export default SideBar;
