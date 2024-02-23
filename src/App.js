import { useGSAP } from "@gsap/react";
import Navbar from "./components/navbar";
// import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import gsap from "gsap";

import "./App.css";
import Storyline from "./components/storyline";
import Review from "./components/review";
import DropDown from "./components/dropdown";
function App() {
  const product = useRef(null);
  const section1 = useRef(null);
  const { innerWidth } = window;
  const [packActive, setPackActive] = useState(1);

  useGSAP(() => {
    if (innerWidth > 767) {
      gsap.to(product.current, {
        scrollTrigger: {
          trigger: product.current,
          pin: true,
          start: "-70% top",
          end: "65% top",
          scrub: 1,

          toggleActions: "play none none none", // Animation continues after reaching end
        },
        rotate: "360deg",
        y: "39%",
        x: "-100%",
        scale: 1.5,
        duration: 3,
        stagger: 2,
        ease: "power1.in",
      });

      gsap.to(".product_info", {
        scrollTrigger: {
          trigger: section1.current,
          start: "30% top",
          // markers:true,
          end: "bottom bottom",
          scrub: 1,
        },
        opacity: 1,
        ease: "elastic.inOut",
        duration: 1,
      });
    }
  }, []);
  return (
    <div className="bg-[#161616]">
      {/* canvas components */}

      {/* layout */}
      <div className="w-full ">
        <section className="w-full h-[100vh] flex flex-col " ref={section1}>
          <Navbar />

          <div className="self-center w-fit h-fit ">
            <img
              src={`./assets/images/product${packActive}.svg`}
              className=""
              ref={product}
              alt=""
            />
          </div>
        </section>
        <section className="w-full  bg-[#161616] flex justify-end">
          <div className="self-end  lg:px-0 pl-8 lg:-translate-y-0 -translate-y-28  product_info  lg:right-0">
            <h1 className="text-[#FFFFFF] font-bold text-3xl mb-5">
              DAWN PATROL
            </h1>
            <p className="text-[#666666] text-base w-[62%] mb-2">
              The easiest way to make a single coffee on the go. All you need is
              hot water and a mug.
            </p>
            <p className="text-[#666666] text-base mb-1">
              Single-serving packs
            </p>
            <p className="text-[#666666] text-base mb-1">Delivered monthly</p>
            <p className="text-[#666666] text-base">
              No Commitment, Pause or Cancel Anytime
            </p>
            <span className="flex justify-start flex-wrap mt-4 w-96 gap-4 items-start">
              <div
                className={
                  packActive === 1
                    ? "text-white border-[#666666] border p-3 rounded hover:bg-[#666666] bg-[#666666] cursor-pointer"
                    : "text-white border-[#666666] border p-3 rounded hover:bg-[#666666] cursor-pointer"
                }
                onClick={() => setPackActive(1)}
              >
                6 Packs
              </div>
              <div
                className={
                  packActive === 2
                    ? "text-white border-[#666666] border p-3 rounded hover:bg-[#666666] bg-[#666666] cursor-pointer"
                    : "text-white border-[#666666] border p-3 rounded hover:bg-[#666666] cursor-pointer"
                }
                onClick={() => setPackActive(2)}
              >
                {" "}
                12 Packs
              </div>
              <div
                className={
                  packActive === 3
                    ? "text-white border-[#666666] border p-3 rounded hover:bg-[#666666] bg-[#666666] cursor-pointer"
                    : "text-white border-[#666666] border p-3 rounded hover:bg-[#666666] cursor-pointer"
                }
                onClick={() => setPackActive(3)}
              >
                24 Packs
              </div>
              <button className="mt-2 bg-white text-black px-14 py-4 rounded">
                Start Now — $48/MONTH
              </button>
            </span>
          </div>
        </section>
        <section className="w-full  mt-32 flex flex-col gap-[12.3em]">
          <Storyline
            img={
              "https://images.pexels.com/photos/3873209/pexels-photo-3873209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            number={1}
          />
          <Storyline
            direction={"self-end"}
            number={2}
            img={
              "https://images.pexels.com/photos/5692652/pexels-photo-5692652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            title="Take with water"
          />
          <Storyline
            number={3}
            img={
              "https://images.pexels.com/photos/3807624/pexels-photo-3807624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            title="Take a nice nap"
          />
          <Storyline
            direction={"self-end"}
            number={4}
            img={
              "https://images.pexels.com/photos/3807632/pexels-photo-3807632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            title="Feel Good"
          />
        </section>
        <section className="w-full pt-10 pb-9 lg:py-[12.9em] flex justify-center items-center flex-col gap-4">
          <h2 className="text-center text-white font-semibold text-[1.4rem]">
            Custormer Reviews
          </h2>
          <div className="flex flex-wrap gap-32 justify-center items-center lg:w-[70em] mt-28">
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </section>
        <section className="w-full h-screen">
          <video
            src="./assets/video/pexels-darina-belonogova-7214681 (720p).mp4"
            className="w-full h-full object-cover"
            muted
            autoPlay
            preload="auto"
            loop
          ></video>
        </section>
        <section className="lg:py-44 flex  flex-col py-28">
          <p className="font-bold text-center text-white text-2xl pb-8 lg:pb-[2.4em]">
            Common Quetions
          </p>
          <div className="flex justify-center items-center flex-col">
            <DropDown />
            <DropDown />
            <DropDown />
            <DropDown />
          </div>
          <button className="border-2 rounded-full p-5 w-fit self-center text-[21px] hover:text-black hover:bg-[#666666] hover:border-[#666666] text-[#666666] font-medium mt-28">
            Subscribe Now
          </button>
          <footer></footer>
        </section>
      </div>
    </div>
  );
}

export default App;
