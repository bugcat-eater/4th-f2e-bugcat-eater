import React from "react";

export default function RightMenubtn({ text }) {
	return (
		<li className=" lg:hidden  nav-item ">
			<a
				className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-900 hover:opacity-75"
				href="#pablo"
			>
				<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
				<span className="ml-2">{text}</span>
			</a>
		</li>
	);
}
