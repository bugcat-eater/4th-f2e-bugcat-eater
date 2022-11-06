import React from 'react'

export default function Block2BottomSquare({title , data}) {
  return (
  <div className=" w-[211px]  ">
    <div className="border-4 border-gray-900 border-solid  h-[50px] flex items-center justify-center bg-white">
      <span className="inline-block  text-[30px] font-[700]">
        {title}
      </span>
    </div>
    <div className="border-l-4 border-r-4 border-b-4 border-gray-900 border-solid  h-[100px] flex items-center justify-center bg-white">
      <span className="inline-block  text-[60px] font-[900] ">
        {data}
      </span>
    </div>
  </div>
  )
}
