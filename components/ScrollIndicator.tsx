import React, { useEffect, useState } from "react";

type Props = {};

const ScrollIndicator = (props: Props) => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const windowScroll = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    const height =
      Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) -
      document.documentElement.clientHeight;
    const scrolled = (windowScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-gray-200 dark:bg-gray-500 h-[3px] sticky left-0 z-20 w-full">
      <div className={`h-[3px] bg-green-400 dark:bg-yellow-400`} style={{ width: `${scrollTop}%` }} />
    </div>
  );
};

export default ScrollIndicator;
