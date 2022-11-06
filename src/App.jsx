import { useState } from "react";
import "./App.css";
import Navbar from "./components/block1banner/main";
import Block1Banner from "./components/block1banner/main";
import Block2Question from "./components/block2/main";
import Block3BreakQuestion from "./components/block3BreakQuestion";
import Block4Solution from "./components/block4Solution";
import Block5 from "./components/block5Directions";
import Block6 from "./components/block6Award";
import Block7 from "./components/block7Sponsor";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar />
			<Block2Question />
			<Block3BreakQuestion />
			<Block4Solution />
			<Block5 />
			<Block6 />
			<Block7 />
		</>
	);
}

export default App;
