import React from "react";
import { FiChevronsUp } from "react-icons/fi";
import { RefObject, useEffect, useState } from "react";

type Props = {
  target: RefObject<HTMLElement>;
  className: string;
};

const HomeButton = (props: Props) => {
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);
  useEffect(() => {
    const targetHeight = props.target?.current?.getBoundingClientRect().height;
    document.addEventListener("scroll", () => {
      if (targetHeight && window.scrollY > targetHeight / 2) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    });
  }, [props.target]);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      type="button"
      className={`sticky z-50 bottom-8 right-14 overflow-hidden self-end ${showScrollButton ? "visible" : "invisible"}`}
      onClick={handleScrollTop}
    >
      <div
        className="flex items-center justify-center transition-all border border-gray-400 rounded-md cursor-pointer 
      text-white bg-gray-400 hover:border-white hover:bg-green-400 active:bg-green-500 
      dark:hover:text-black dark:bg-[#242629] dark:hover:bg-yellow-400 dark:active:bg-yellow-300"
      >
        <FiChevronsUp size={"2rem"} className="" />
      </div>
    </button>
  );
};

export default HomeButton;
