import React from 'react'
import Ratings from "./Ratings";

export default function Ratingsdiv() {
  return (
    <div className="bg-[#62BBCB] font-semibold rounded-lg p-3 flex flex-col gap-3">
      <h1 className="ml-3 text-[#302D34]">Ratings</h1>
      <Ratings
        imagePath="/realself.png"
        text1="8 Out of 10 "
        text2="Ratings On RealSelf By Our 5768 Patients"
      ></Ratings>
      <Ratings
        imagePath="/SeekPng.png"
        text1="4.4 Out of 5 "
        text2="Ratings On RealSelf By Our 5768 Patients"
      ></Ratings>
      <Ratings
        imagePath="/Vector.png"
        text1="8.5 Out of 10 "
        text2="Ratings On RealSelf By Our 5768 Patients"
      ></Ratings>
      <Ratings
        imagePath="/vitals.png"
        text1="4 Out of 5 "
        text2="Ratings On RealSelf By Our 5768 Patients"
      ></Ratings>
    </div>
  );
}
