import Bubbles from "./Bubbles"

/* Images */
import fig1 from './fig1.svg'
import fig2_1 from './fig2_star_L.svg'
import fig2_2 from './fig2_star_S.svg'
import fig3 from './fig3.svg'

const bubbles = [
  {
    style: { top: 40, left: 0, bottom: 0, right: 0, height: "50%", margin: "auto" },
    image: fig1,
  },
  {
    style: { top: 0, left: 0, bottom: 0, right: 0, height: "50%", margin: "auto" },
    image: fig2_1,
  },
  {
    style: { top: 50, left: 50, bottom: 0, right: 0, height: "25%", margin: "auto" },
    image: fig2_2,
  },
  {
    style: { top: 0, left: 0, bottom: 0, right: 0, height: "50%", margin: "auto" },
    image: fig3,
  },
]

export default function Content() {
  return (
    <div className="relative flex justify-between w-full">
      <div className="box w-1/3 bg-white border-4 border-black border-solid m-3 p-3">
        <div className="relative image w-full aspect-square">
          <Bubbles image={bubbles[0].image} style={bubbles[0].style} />
        </div>
        <div className="text">
          <p className="m-2 text-center">羨慕別人酷酷的<br />網頁動畫</p>
        </div>
      </div>
      <div className="box w-1/3 bg-black border-4 border-black border-solid m-3 p-3">
        <div className="relative image w-full aspect-square">
          <Bubbles image={bubbles[1].image} style={bubbles[1].style} />
          <Bubbles image={bubbles[2].image} style={bubbles[2].style} />
        </div>
        <div className="text">
          <p className="m-2 text-center text-white">滿足不了<br />同事的許願</p>
        </div>
      </div>
      <div className="box w-1/3 bg-white border-4 border-black border-solid m-3 p-3">
        <div className="relative image w-full aspect-square">
          <Bubbles image={bubbles[3].image} style={bubbles[3].style} />
        </div>
        <div className="text">
          <p className="m-2 text-center">動畫技能樹太雜<br />無從下手</p>
        </div>
      </div>
    </div>
  )
}
