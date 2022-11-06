import { useState } from "react";
import "./App.css";
import Navbar from "./components/block1banner/main";
import Block1Banner from "./components/block1banner/main";
import Block2Question from "./components/block2/main";
import Block3BreakQuestion from "./components/block3BreakQuestion";
import Block4Solution from "./components/block4Solution";
import Block5Directions from "./components/block5Directions";
import Block6Award from "./components/block6Award";
import Block7Sponsor from "./components/block7Sponsor";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar />
			<Block2Question />
			<Block3BreakQuestion />
			<Block4Solution />
			<Block5Directions />
			<Block6Award />
			<Block7Sponsor />
		</>
	);
}

export default App;
