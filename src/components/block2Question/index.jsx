import Content from './Content'
import Bubbles from './Bubbles'
import Background from "./Background"

/* Images */
import bubble1 from './left_bubble.svg'
import bubble2 from './bottom_bubble.svg'
import bubble3 from './right_bubble.svg'


export default function Block6Award() {
  return (
    <section className='d-flex bg-red-200 p-5'>
      <Background>
        <Bubbles image={bubble1} attributes={{ "top": 0, "left": 0, "size": 0.5 }} />
        {/* <Bubbles image={bubble2} />
        <Bubbles image={bubble3} /> */}
        <Content />
      </Background>
    </section>
  )
}
