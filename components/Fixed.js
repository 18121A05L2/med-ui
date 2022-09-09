import React from 'react';
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdOutlineCall } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

export default function Fixed() {
  return (
    <div className="fixed bottom-0 right-0 left-0 bg-white shadow-lg z-10 w-full h-12 flex items-center justify-around">
      <section className="flex items-center gap-2  bg-[#F3E349] p-2 px-3 rounded-md">
        <BiHomeAlt className=""></BiHomeAlt>
        <span className="font-bold text-[0.7rem]">Home</span>
      </section>
      <AiOutlineMenuFold></AiOutlineMenuFold>
      <MdOutlineCall></MdOutlineCall>
      <BsPerson ></BsPerson>
    </div>
  );
}
