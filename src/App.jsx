import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Block1Banner from './components/block1Banner'
import Block2Question from './components/block2Question'
import Block3BreakQuestion from './components/block3BreakQuestion'
import Block4Solution from './components/block4Solution'
import Block5Directions from './components/block5Directions'
import Block6 from './components/block6Award'
import Block7Sponsor from './components/block7Sponsor'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Block1Banner />
      <Block2Question />
      <Block3BreakQuestion />
      <Block4Solution />
      <Block5Directions />
      <Block6 />
      <Block7Sponsor />
    </>
  )
}

export default App
