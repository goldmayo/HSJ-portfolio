import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type Props = {
  className: string;
};

const DarkmodeToggleButton = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`${props.className} inline-flex items-center p-1.5 text-base border-0 rounded-full focus:outline-none md:mt-0
       hover:bg-gray-200 
      text-gray-800 
      dark:bg-slate-700 dark:hover:bg-slate-600 
      dark:text-yellow-400
      `}
    >
      {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
};

export default DarkmodeToggleButton;
