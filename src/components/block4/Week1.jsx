import React from "react";

export default function Week1() {
  return (
    <section className="flex ">
      <div className=" anima w-2/4 h-screen bg-black text-white  flex justify-center content-center">
        <div className=" self-center  ">
          <h2 className="m-auto text-[100px] font-[900] ">WEEK 1</h2>
          <div className="mt-[60px] text-[52px] font-[900]">
            <span className="block ">THE F2E</span>
            <span className="block">活動網站設計</span>
          </div>
          <span className="block mt-[50px] text-[32px] font-[600]">
            視差滾動
          </span>
          <span className="block mt-[32px] text-[32px] font-[600]">
            #板塊設計
          </span>
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-block mt-[30px] text-center text-[20px] bg-[#3A3A3A] hover:bg-[#FFFF00] hover:text-gray-900 transition duration-500 delay-150 text-white font-bold py-2 px-4 rounded-full font-[600]"
            >
              查看關卡細節
            </a>
          </div>
        </div>
      </div>
      <div className="w-2/4 bg-[#3A3A3A] relative">
        <div className=" s1 border-white border-solid border-2 w-1/5 h-1/2 absolute bottom-0 "></div>
        <div className=" s2 border-white border-solid border-2 w-1/5 h-1/2 absolute top-1/4 "></div>
        <div className=" s3 border-white border-solid border-2 w-1/5 h-1/2 absolute top-0 "></div>
      </div>
    </section>
  );
}
