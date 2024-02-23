import { React, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function DropDown() {
  const [text, setText] = useState(true);

  const displayText = () => {
    setText((prev) => !prev);
  };

  return (
    <div className="lg:w-[50%] flex justify-center items-center flex-col pb-8">
      <div
        className="border-gray-400 border-t-[0.7px] w-full border-solid flex justify-between items-center text-[#666666] text-2xl pt-5 cursor-pointer"
        onClick={displayText}
      >
        Where is your coffee sourced?{" "}
        <IoIosArrowForward className={text ? "" : "rotate-[88deg]"} />
      </div>
      <p
        className={
          text
            ? "hidden"
            : "pt-3 text-[#666666] lg:w-[90%]   text-left self-start text-[1.13rem]"
        }
      >
        Dawn Patrol is a Columbia / Brazil blend. Versatile for everyday
        drinking. Smooth as is or excellent with cream. Notes: milk chocolate,
        nut, stone fruit.
      </p>
    </div>
  );
}
