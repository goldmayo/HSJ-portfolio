import Link from "next/link";
import React, { ForwardedRef, forwardRef } from "react";
import { motion } from "framer-motion";
import DarkmodeToggleButton from "./DarkmodeToggleButton";
import { RiCodeSSlashFill } from "react-icons/ri";
import ScrollIndicator from "./ScrollIndicator";
type Props = {};

const Header = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  return (
    <header
      ref={ref}
      className="sticky top-0 z-50 text-gray-600 body-font dark:text-white dark:bg-[#2b2e33] border-b border-gray-200 dark:border-gray-500 bg-white "
    >
      <div className="container flex flex-col items-center p-2 mx-auto max-w-7xl md:flex-row">
        <div className="container flex flex-row items-center">
          <Link href={"/"}>
            <div className="flex flex-row ml-4">
              <span className="px-2 font-semibold">HSJ's portfolio</span>
              <RiCodeSSlashFill size={"1.5rem"} />
            </div>
          </Link>
          <DarkmodeToggleButton className={"ml-auto mr-4"} />
        </div>
        <nav className="self-end">
          <ul className="flex flex-row items-center justify-center gap-4 mr-4 text-base font-medium align-middle">
            <li>
              <Link
                href={"#home"}
                scroll={false}
                className=" hover:text-gray-900 hover:underline active:text-gray-400 dark:hover:text-yellow-400 dark:active:text-yellow-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"#skills"}
                scroll={false}
                className=" hover:text-gray-900 hover:underline active:text-gray-400 dark:hover:text-yellow-400 dark:active:text-yellow-500"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href={"#projects"}
                scroll={false}
                className=" hover:text-gray-900 hover:underline active:text-gray-400 dark:hover:text-yellow-400 dark:active:text-yellow-500"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                href={"#contact"}
                scroll={false}
                className=" hover:text-gray-900 hover:underline active:text-gray-400 dark:hover:text-yellow-400 dark:active:text-yellow-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <ScrollIndicator />
    </header>
  );
});

export default Header;
