import React from "react";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/image4.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import pumpkin from "../assets/pumpkin.svg";
import { Link } from "react-router-dom"; 

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#516549] to-[#7E9275] flex font-Poppins">
      <div className="flex flex-col w-[85%] mx-auto gap-10">
        <div className="py-3 px-3 mt-7 flex bg-gradient-to-r from-[#4E7240] to-[#727140] rounded-full lg:justify-start justify-center">
          <div className="rounded-full flex bg-[#5380be] w-fit py-2 px-5 gap-6 ">
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

        <div className=" text-white bg-gradient-to-r from-[#4E7240] to-[#727140] flex justify-center rounded-3xl">
          <div className="flex lg:flex-row flex-col py-5 w-[80%] justify-center items-center gap-10">
            <div className="">
              <img
                className="lg:max-w-[440px] w-[460px] "
                src={pumpkin}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-[20px]">#1 Ai Token Creator</span>
              <h2 className="text-[48px] font-bold leading-none">
                A Place to Create Tokenin just a click
              </h2>
              <p className="text-[16px]">
                An AI token creator for EVM chains and Solana is a tool that
                automates the generation of custom tokens on Ethereum and Solana
                blockchains. Users input token details like name, symbol, and
                supply, and the AI generates and deploys the corresponding smart
                contract code seamlessly onto the chosen blockchain, simplifying
                token creation for non-technical users.
              </p>

              <div className="flex justify-center">
                <Link to={"/DeployToken"}>
                <button  className=" bg-[#dde3ea] text-black py-2 w-[230px] rounded-full ">
                  Let's do it
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-10 text-white lg:flex-row flex-col">
          <div className="flex flex-col gap-5 bg-gradient-to-r from-[#4E7240] to-[#727140] rounded-3xl p-5">
            <span className="text-[20px]">EVM chain</span>
            <h2 className="text-[48px] font-bold leading-none">
              Create EVM Tokens
            </h2>
            <p className="text-[16px]">
              An AI token creator for EVM chains and Solana is a tool that
              automates the generation of custom tokens on Ethereum and Solana
              blockchains. Users input token details like name, symbol, and
              supply, and the AI generates and deploys the corresponding smart
              contract code seamlessly onto the chosen blockchain, simplifying
              token creation for non-technical users.
            </p>

            <div className="flex justify-center">
              <button className=" bg-[#dde3ea] text-black py-2 w-[230px] rounded-full ">
                Let's do it
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 bg-gradient-to-r from-[#4E7240] to-[#727140] rounded-3xl p-5">
            <span className="text-[20px]">Solana</span>
            <h2 className="text-[48px] font-bold leading-none">
            Create Solana Tokens
            </h2>
            <p className="text-[16px]">
              An AI token creator for EVM chains and Solana is a tool that
              automates the generation of custom tokens on Ethereum and Solana
              blockchains. Users input token details like name, symbol, and
              supply, and the AI generates and deploys the corresponding smart
              contract code seamlessly onto the chosen blockchain, simplifying
              token creation for non-technical users.
            </p>

            <div className="flex justify-center">
              <button className=" bg-[#dde3ea] text-black py-2 w-[230px] rounded-full ">
                Let's do it
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
