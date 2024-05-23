import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const SaitaVhain = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 text-[18px] py-4 px-3 bg-white">
        <span className="font-Roboto font-semibold ml-8">SAITA CHAIN</span>
        <span className="text-[#929da1]">
          <MdOutlineKeyboardArrowDown />
        </span>
      </div>
      <div className=" h-[65vh] flex flex-col justify-center items-center gap-2">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="font-Roboto font-semibold text-[24px]">
          <span>How can I help you today?</span>
        </div>
      </div>
      <div className="flex flex-wrap text-[13px] font-Roboto justify-center gap-4">
        <div className="flex flex-col gap-3">
        <Link to={"/DeployToken"}>
        <div className="bg-white border-2 rounded-2xl text-center py-5  w-[272px] cursor-pointer">
            Suggest a memetoken
          </div>
      </Link>
          <Link to={"/DeployToken"}>
          <div className="flex flex-col bg-white border-2 rounded-2xl text-center justify-center py-2 w-[272px] cursor-pointer">
            <span className="">Generate an advance ERC20 Token</span>
            <span className="text-[#929da1]">
              with Tax, Antisnipe, Limits, and Whitelist
            </span>
          </div>
          </Link>
        </div>
        <Link to={"/DeployToken"}>
        <div className="bg-white border-2  rounded-2xl text-center py-5 h-fit w-[272px] cursor-pointer">
          <span className="">Generate a random ERC20 Token</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default SaitaVhain;
