import Bubbles from "./Bubbles"
import Content from "./Content"

/* Images */
import bubble1 from './left_bubble.svg'
import bubble2 from './bottom_bubble.svg'
import bubble3 from './right_bubble.svg'

const bubbles = [
  {
    style: { top: -65, left: 65, height: "50%" },
    image: bubble1,
  },
  {
    style: { top: 340, left: 445, height: "40%" },
    image: bubble2,
  },
  {
    style: { top: -25, left: 900, height: "50%" },
    image: bubble3,
  },
]

export default function Background() {
  return (
    <section className='m-auto pt-5 px-36 relative'>
      {bubbles.map(({ image, style }) => <Bubbles key={image} image={image} style={style} />)}
      <Content />
    </section>
  )
}
