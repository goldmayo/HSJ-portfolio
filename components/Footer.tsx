import React from "react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="text-gray-600 bg-white dark:text-white dark:bg-[#2b2e33]">
      <div className="container flex flex-col items-center justify-center px-5 py-3 mx-auto sm:flex-row max-w-7xl">
        <span className="mt-4 text-sm sm:ml-6 sm:mt-0">© 2020 Hyun Seung Jai All Rights Reserved.</span>
        <Link
          className="px-2 py-1 text-lg text-white dark:text-black"
          href={"https://github.com/goldmayo"}
          target={"_blank"}
        >
          <SiGithub
            size={"1.5rem"}
            className="text-gray-700 hover:text-gray-600 active:text-gray-500 dark:text-white dark:hover:text-gray-200 dark:active:text-gray-300"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
