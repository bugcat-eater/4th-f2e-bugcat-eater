import Bubbles from "./Bubbles"
import Content from "./Content"

/* Images */
import bubble1 from './left_bubble.svg'
import bubble2 from './bottom_bubble.svg'
import bubble3 from './right_bubble.svg'

const bubbles = [
  {
    style: { top: -35, left: 205, height: "50%" },
    image: bubble1,
  },
  {
    style: { top: 240, left: 465, height: "40%" },
    image: bubble2,
  },
  {
    style: { top: -25, left: 785, height: "40%" },
    image: bubble3,
  },
]

export default function Background() {
  return (
    <section className='bg-green-50 m-3 p-5 relative'>
      {bubbles.map(({ image, style }) => <Bubbles key={image} image={image} style={style} />)}
      <Content />
    </section>
  )
}
