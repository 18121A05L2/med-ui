import React from 'react'

export default function Doctor({ icon, num, text }) {
  console.log(icon)
  return (
    <div className="flex flex-col items-center font-semibold scale-90">
      <span className="bg-[#62BBCB] p-3 rounded-md text-white ">{icon}</span>
      <p className="text-[#62BBCB] text-[0.8rem]">{num}</p>
      <p className="text-[0.7rem]">{text}</p>
    </div>
  );
}
