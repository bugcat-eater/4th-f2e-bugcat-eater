import { useState } from "react";
import "./App.css";
import Navbar from "./components/block1banner/main";
import Block1 from "./components/block2/main";
import Block2 from './components/block2Question'
import Block3 from "./components/blockDesign";
import Block4 from "./components/block4/main";
import Block5 from "./components/block5Directions";
import Block6 from "./components/block6Award";
import Block7 from "./components/block7Sponsor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
      <Block6 />
      <Block7 />
    </>
  );
}

export default App;
