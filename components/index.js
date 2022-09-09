import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";

import { BsArrowRight } from "react-icons/bs";

import { IoMdArrowRoundForward } from "react-icons/io";
import { BiMoon } from "react-icons/bi";

import Fixed from "./Fixed";

import Ratingsdiv from "./Ratingsdiv";
import Doctordiv from "./Docordiv";

export default function Index() {
  return (
    <div className="pb-[7rem] flex flex-col bg-[#F6F4F7]">
      <div className="flex flex-col  text-center bg-[#F6F4F7] p-4 h-full gap-3 ">
        <header className="flex justify-between w-full text-[#302D34] font-bold items-center">
          <span className="flex items-center justify-center bg-[#F3E349] rounded-full border-2 text-[0.8rem] border-[#62BBCB] w-[3rem] h-[3rem] scale-90">
            LOGO
          </span>
          <div className="flex gap-3 text-[1.5rem]">
            <IoNotificationsOutline></IoNotificationsOutline>
            <HiMenuAlt3></HiMenuAlt3>
          </div>
        </header>

        <div className="flex justify-between ">
          <div className="font-bold flex flex-col  ">
            <span className="text-[1.8rem] text-left text-[#302D34]">
              Hello,
            </span>
            <span className="text-[1.3rem] text-[#62BBCB]">Charles Muller</span>
          </div>

          <Image
            objectFit="contain"
            src="/Frame8.png"
            alt="frame 8"
            width={50}
            height={50}
          ></Image>
        </div>
        <div className="flex w-full justify-center items-center p-4 ">
          <section className="flex w-full justify-center items-center bg-white mx-3 rounded-lg">
            <input
              className="focus:outline-none border-none rounded-lg font-semibold p-1 pl-2"
              placeholder="Search docter"
            ></input>
            <FiSearch className="bg-[#F3E349] text-[1.7rem] px-1 shadow-md rounded-md shrink-0"></FiSearch>
          </section>
        </div>
        <div className="bg-[#62BBCB] flex justify-between font-semibold rounded-md p-2 relative ">
          <div className="flex flex-col text-left  ">
            <span className="text-white text-[1.1rem] whitespace-nowrap">
              Explore Top Doctors
            </span>
            <span className="text-[0.7rem]">with ratings and reviews</span>
            <span className="bg-[#F3E349]  m-2 w-[2.5rem] flex justify-center p-1 rounded-md shadow-lg ">
              <IoMdArrowRoundForward></IoMdArrowRoundForward>
            </span>
          </div>
          <div className="flex  justify-end">
            <Image
              className="shrink-0 "
              src="/covid1.png"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
        </div>
        <h1 className="text-[#62BBCB] font-bold text-left mt-4">
          Doctor of the month
        </h1>
        <Doctordiv />
      </div>

      {/*--------------------- Ratings div ------------------ */}
      <Ratingsdiv />
      <div className=" flex items-center justify-center rounded-full bg-[#F3E349] fixed right-0 bottom-14 z-50 w-[2.5rem] h-[2.5rem]  shadow-xl">
        <BiMoon />
      </div>

      <Fixed></Fixed>
    </div>
  );
}
