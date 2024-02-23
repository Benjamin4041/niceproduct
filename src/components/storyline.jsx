import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

export default function Storyline({
  direction='self-start',
  img,
  number,
  title = "JUST ADD WATER",
  disc='Similar to how a tea bag works, just drop your filter bag in a mug and add hot water. Perfect for a single quick cup.',
}) {
  const image = useRef(null);
  const storyLine = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(image.current, {
      scrollTrigger: {
        trigger: storyLine.current,
        start: "top top",
        end: "bottom botoom",
        scrub: 1,
      },
      transform: "scale(1.5)",
      ease:'power1.inOut'
    });
  }, []);

  return (
    <div
      className="lg:px-10  relative flex justify-center items-center flex-col"
      ref={storyLine}
    >
      <div className={"mb-[13.3em] lg:" + direction}>
        <p className="text-white font-semibold text-base mb-3">0{number}</p>
        <h2 className="text-white text-2xl mb-3">{title}</h2>
        <p className="text-[#666666] text-base w-80">
      {disc}
        </p>
      </div>
      <div
        className={
          direction === "self-end"
          ? " lg:w-[57.3em] h-[34.4em] self-center lg:self-start overflow-hidden"
          : " lg:w-[57.3em] h-[34.4em] self-center lg:self-end overflow-hidden"
        }
      >
        <img src={img} className="w-full h-full object-cover" alt="" ref={image} />
      </div>
    </div>
  );
}
