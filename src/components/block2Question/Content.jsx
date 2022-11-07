import Bubbles from "./Bubbles";

export default function Content() {
  return (
    <div className=" relative flex justify-center">
      <div className="box max-w-[460px] lg:max-w-[200px] flex-grow bg-white border border-violet-700 border-solid m-3 p-3">
        <div className="image w-full aspect-square bg-rose-500">
          {/* <Bubbles /> */}
        </div>
        <div className="text">
          <p className="m-2 text-center">羨慕別人酷酷的<br />網頁動畫</p>
        </div>
      </div>
      <div className="box max-w-[460px] lg:max-w-[200px] flex-grow bg-black border border-violet-700 border-solid m-3 p-3">
        <div className="image w-full aspect-square bg-rose-500"></div>
        <div className="text">
          <p className="m-2 text-center text-white">滿足不了<br />同事的許願</p>
        </div>
      </div>
      <div className="box max-w-[460px] lg:max-w-[200px] flex-grow bg-white border border-violet-700 border-solid m-3 p-3">
        <div className="image w-full aspect-square bg-rose-500"></div>
        <div className="text">
          <p className="m-2 text-center">動畫技能樹太雜<br />無從下手</p>
        </div>
      </div>
    </div>
  )
}
