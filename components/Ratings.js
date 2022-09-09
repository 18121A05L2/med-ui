import React from "react";
import Image from "next/image";

export default function Ratings({ imagePath, text1, text2 }) {
  return (
    <div className="flex items-center gap-1  ">
      <div className="bg-[#F3E349] rounded-lg p-2 px-6 scale-75">
        <Image
          src={imagePath}
          width={100}
          height={100}
          objectFit="contain"
        ></Image>
      </div>
      <div>
        <p className="text-white">{text1}</p>
        <p className="whitespace-nowrap text-[0.6rem] tracking-tight text-[#302D34]">
          {text2}
        </p>
      </div>
      <Image
        src="/Ellipse.png"
        width={50}
        height={50}
        objectFit="contain"
      ></Image>
    </div>
  );
}
