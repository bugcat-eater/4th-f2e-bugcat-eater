import React from "react";

export default function LeftMenubtn({ text }) {
  return (
    <a
      href="#"
      className="inline-block mx-5 max-lg:hidden text-xs  align-middle   "
    >
      {text}
    </a>
  );
}
