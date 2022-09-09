import React from 'react'
import Doctor from "./Doctor";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill, BsFillPersonFill, BsArrowRight } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import Image from 'next/image';

export default function Docordiv() {
  return (
    <div className="text border-2 border-[#62BBCB] p-2 rounded-md">
      <div className="flex mb-3">
        <Image
          className="absolute z-10"
          src="/Frame3.png"
          width={80}
          height={80}
        ></Image>

        <section className="flex flex-col text-left pl-4 font-bold">
          <p className="text-[#62BBCB] text-lg ">Dr.John Gibbs</p>
          <p className="text-sm text-[#302D34]">BDS , MDS</p>
          <p className="text-sm text-[#302D34]">Dental Surgeon</p>
        </section>
      </div>
      <div className="flex justify-around">
        <Doctor icon={<AiFillStar />} num="4.7" text="Rating"></Doctor>
        <Doctor icon={<BsFillBagFill />} num="4+" text="Years Exp"></Doctor>
        <Doctor icon={<BsFillPersonFill />} num="5K+" text="Patients"></Doctor>
        <Doctor icon={<FaMedal />} num="15+" text="Awards"></Doctor>
      </div>
    </div>
  );
}
