import React from "react";
import block2left1 from "../../assets/block2left1.svg";
import block2left2 from "../../assets/block2left2.svg";
import block2right1 from "../../assets/block2right1.svg";
import block2right2 from "../../assets/block2right2.svg";
import Block2BottomSquare from './Block2BottomSquare';
import "./block2.scss"

export default function Block2Question() {
  const squareData = [["Total", 1182], ["Personal", 1076], ["Team", 41]]
  return (
    <div className="h-screen w-full ">
      <section className=" flex justify-center pt-20     ">
        <div className=" absolute w-[706px]  top-40 -z-20 bg-white flex justify-between border-4 border-gray-900 border-solid ">
          <div className="absolute -left-72">
            <img
              src={block2left1}
              alt="block2left1"
              className=" block w-2/5 relative left-28 top-10"
            />
            <img src={block2left2} alt="block2left2" className=" block w-4/5" />
          </div>
          <div className="absolute  -right-64 top-16 ">
            <div>
              <img src={block2right1} alt="block2right1" className="" />
              <img
                src={block2right2}
                alt="block2right2"
                className="relative left-48 bottom-20 "
              />
            </div>
          </div>
        </div>
        <div className=" relative bg-white w-[706px] h-[419px]  border-4 border-gray-900 border-solid mx-auto absolute max-md:w-4/5 max-lg:h-80 before:w-full before:h-full  before:block before:absolute before:-right-6 before:top-6  before:bg-black before:-z-10 flex items-center justify-center">
          <div className=" w-full border-b-4 border-gray-900 border-solid h-12 absolute top-0 flex items-center ">
            <div className="flex absolute right-5  justify-between">
              <div className="w-3 h-3 bg-[#FF7373] rounded-full mx-1   "></div>
              <div className="w-3 h-3 bg-[#FDEE6D] rounded-full mx-1  "></div>
              <div className="w-3 h-3 bg-[#A1E396] rounded-full mx-1  "></div>
            </div>
          </div>
          <div className="text-center">
            <span className="block font-noto text-[58px] font-bold">
              THE F2E 4TH
            </span>
            <h1 className="block font-noto text-[88px] font-bold">
              互動式網頁設計
            </h1>

            <div className="container1 mt-7 m-auto w-[500px] text-center">
              <div className="progress2 progress-moved p-[5px] rounded-[30px] bg-[#000000] ">
                <div className="progress-bar2" >
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
      <section className=" mt-9 flex justify-center ">
        <div className="w-[706px] flex justify-between ">
          {
            squareData.map((value) => {
              return (
                <Block2BottomSquare key={value[0]} title={value[0]} data={value[1]} />
              )
            })
          }

        </div>
      </section>
    </div>
  );
}
