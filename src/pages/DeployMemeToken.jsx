import React, { useState } from "react";
import SideBar from "../components/SideBar";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/image4.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Loader from "../components/Loader";
import { Switch } from "antd";

const DeployMemeToken = () => {
  const [Clicked, setClicked] = useState(false);

  const handleSubmit = () => {
    setClicked(true);
    setClicked(false);
  };

  return (
    <div className="flex bg-[#f8fafc]">
      <div className="">
        <SideBar />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault(handleSubmit);
        }}
        className="w-full font-Poppins flex flex-col gap-6"
      >
        <div className="bg-white pb-2 flex lg:justify-start justify-center">
          <div className="rounded-full flex bg-[#5380be] w-fit py-2 px-5 gap-6 ml-3 mt-2">
            <div className="">
              <span className="text-white text-[14px]">EVM</span>
            </div>
            <div className="flex text-white gap-1 items-center text-[12px]">
              <span>Includes:</span>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center mx-3">
          <div className="bg-white text-[14px] px-5 py-9 rounded-3xl lg:w-[580px] w-full flex justify-center  items-center">
            <div className="grid grid-cols-1 gap-5 w-full">
              <div className="flex lg:flex-row flex-col gap-3">
                <div className="flex flex-col gap-1 lg:mx-0 mx-4">
                  <span>Name</span>
                  <input
                    className="border-2 bg-[#f8fafc] rounded-full py-1 px-3 lg:w-[238px] w-full"
                    type="text"
                    placeholder="Ethereum"
                  />
                  <p className="text-[13px] text-[#1dabea]">
                    Creation Fee: 0.01 ETH
                  </p>
                </div>
                <div className="flex flex-col gap-1 lg:mx-0 mx-4">
                  <span>Symbol</span>
                  <input
                    className="border-2 bg-[#f8fafc] rounded-full py-1 px-3 lg:w-[238px] w-full"
                    type="text"
                    placeholder="ETH"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 ">
                <span>Description</span>
                <textarea
                  className="border-2 rounded-md"
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>

              <div className="flex lg:flex-row flex-col gap-3">
                <div className="flex flex-col gap-1 lg:mx-0 mx-4">
                  <span>Decimal</span>
                  <input
                    className="border-2 bg-[#f8fafc] rounded-full py-1 px-3 lg:w-[238px] w-full"
                    type="text"
                    placeholder="Ethereum"
                  />
                </div>

                <div className="flex flex-col gap-1 lg:mx-0 mx-4">
                  <span>Total supply</span>
                  <input
                    className="border-2 bg-[#f8fafc] rounded-full py-1 px-3 lg:w-[238px] w-full"
                    type="text"
                    placeholder="ETH"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 ">
                <span>Tokenomics</span>
                <textarea
                  className="border-2 rounded-md"
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  placeholder=""
                ></textarea>
              </div>

              <div className="flex lg:flex-row flex-col gap-3 lg:mx-0 mx-4 ">
                <div className="flex flex-col gap-1 ">
                  <span>Buy Fee Percentage %</span>
                  <input
                    className="border-2 bg-[#f8fafc] rounded-full py-1 px-3 lg:w-[238px] w-full"
                    type="text"
                    placeholder="1%"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span>Sell Fee Percentage %</span>
                  <input
                    className="border-2 bg-[#f8fafc] rounded-full py-1 px-3 lg:w-[238px] w-full"
                    type="text"
                    placeholder="0.5%"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 lg:mx-0 mx-4">
                <span>Fee Receiver Wallet</span>
                <input
                  className="border-2 bg-[#f8fafc] rounded-full py-1 px-3 lg:w-[492px] w-full"
                  type="text"
                  placeholder="0x000..."
                />
              </div>

              <div className="flex flex-wrap gap-1">
                <div className="flex flex-col gap-1">
                  {" "}
                  <span>Buy Limit</span>
                  <input
                    className="border-2 bg-[#f8fafc] rounded-full py-1 px-3"
                    type="text"
                    placeholder="1%"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  {" "}
                  <span>Sell Limit</span>
                  <input
                    className="border-2 bg-[#f8fafc] rounded-full py-1 px-3"
                    type="text"
                    placeholder="2%"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span>Transfer Limit</span>
                  <input
                    className="border-2 bg-[#f8fafc] rounded-full py-1 px-3"
                    type="text"
                    placeholder="2%"
                  />
                </div>
              </div>
              <div className="flex   w-full justify-between">
                <div className="w-full flex items-center gap-2">
                  <span>Antisnipe</span>
                  <div>
                    <Switch />
                  </div>{" "}
                </div>

                <div className="w-full flex items-center gap-2">
                  <span>Whitelisting</span>
                  <div>
                    <Switch />
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex gap-2">
                  <input type="checkbox" className="" />
                  <span className="text-[14px]">
                    Agree with the term and policies
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-center items-center">
                <span className="text-[#929da1]">
                  Total cost:0.01 ETH Gas fees
                </span>
                <button className="bg-sky-600 px-5 py-2 rounded-lg md:w-4/5 w-full text-white text-[16px] flex justify-center items-center">
                  {Clicked ? <Loader /> : "Look's cool, let's deploy it!"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeployMemeToken;
