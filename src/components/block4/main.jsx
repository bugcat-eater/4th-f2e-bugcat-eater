import React from "react";
import { useRef, useLayoutEffect } from "react";
import Week1 from "./Week1";
import Week2 from "./Week2";
import Week3 from "./Week3";
import "./block4css.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Block4() {
  const blockAnimation = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.defaults({ duration: 3 });
    const ctx = gsap.context(() => {
      // Target the two specific elements we have asigned the animate class
      let t1 = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".anima",
            start: "top 50%",
            end: "bottom top",
            tooggleActions: "play complete  reverse reset",
          },
        })
        .to(".anima", { rotationX: 50, duration: 10 });

      // gsap.to(".anima", {
      //   duration: 3,
      //   y: "-100%",
      //   scrollTrigger: {
      //     trigger: ".anima",
      //     markers: true,
      //     start: "top 75%",
      //     end: "bottom 25%",
      //     toggleActions: "restart none  none reset",
      //   },
      // });
    }, blockAnimation); // <- Scope!

    return () => ctx.revert();
  }, []);

  return (
    <div className=" -z-10 block4" ref={blockAnimation}>
      <Week1 />
      <Week2 />
      <Week3 />
    </div>
  );
}
