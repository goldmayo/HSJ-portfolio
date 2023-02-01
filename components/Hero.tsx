import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SiGithub, SiNotion } from "react-icons/si";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["프론트엔드", "성장하고 싶은"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 text-center text-gray-600 max-w-7xl body-font dark:text-white">
      <div className="z-10 p-5 space-y-5">
        <div className="flex flex-row">
          <Image
            className="z-10 object-cover w-32 h-32 mx-auto rounded-full"
            src={"/HyunSeungJai.jpg"}
            width={250}
            height={250}
            alt={"profile image"}
          />
          <div className="flex flex-col items-start justify-start space-y-2">
            <h1 className="text-2xl font-semibold md:text-3xl sm:text-4xl">안녕하세요.</h1>
            <h2 className="text-xl font-semibold md:text-2xl sm:text-2xl">
              {text}
              <Cursor />
            </h2>
            <h2 className="text-xl font-semibold md:text-2xl sm:text-2xl"> 개발자 현승재입니다.</h2>
          </div>
        </div>
        <p className="p-4 text-sm bg-white shadow-md md:text-lg sm:text-base rounded-xl dark:bg-[#3E4756]">
          프론트엔드 개발 직무를 목표로 취업 활동 중 입니다.
          <br />
          개발 트렌드와 효율 사이에서 하루하루 발전하고 싶습니다.
          <br />
          다양한 개발방법을 경험하고 프로젝트에 적용하는 것을 좋아합니다. <br />
          Next.js와 GraphQL을 사용하여 프로젝트를 진행중입니다.
        </p>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] dark:text-gray-400">Frontend Developer</h2>

        <div className="flex flex-row items-center space-x-3">
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
          <Link
            className="px-2 py-1 text-lg text-white dark:text-black"
            href={"https://harmless-hibiscus-5de.notion.site/adb0c28465d44c7186f28327775b33a9"}
            target={"_blank"}
          >
            <SiNotion
              size={"1.5rem"}
              className="text-gray-700 hover:text-gray-600 active:text-gray-500 dark:text-white dark:hover:text-gray-200 dark:active:text-gray-300"
            />
          </Link>
          <p className="flex flex-col sm:flex-row">
            <span className="text-sm sm:text-base">한양대학교 ERICA</span>{" "}
            <span className="text-sm sm:text-base">소프트웨어학부 컴퓨터전공</span>
          </p>
          <p className="">2014.03 ~ 2021.08</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
