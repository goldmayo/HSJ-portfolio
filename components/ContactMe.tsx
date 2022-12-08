import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { SiKakaotalk } from "react-icons/si";

type ContactInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};
const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<ContactInput>();

  const onSubmit: SubmitHandler<ContactInput> = (formData) => {
    window.location.href = `mailto:dudtod1596@gmail.com?subject=[${formData.name}] ${formData.subject}&body=${formData.message} (${formData.email})`;
  };

  return (
    <div className="z-10 flex flex-col items-center justify-center min-h-screen p-10 space-y-8 text-center md:text-left max-w-7xl">
      <h1 className=" text-2xl font-medium text-center uppercase text-gray-500 pb-2 tracking-[15px]">Contact</h1>
      <div className="flex flex-row items-center justify-center space-x-4">
        <Link href={"https://open.kakao.com/o/sjtkUiRe"} target={"_blank"} className="flex flex-row">
          <SiKakaotalk
            className="rounded 
            text-black hover:text-[#f7e111] hover:bg-black active:text-[#fdea43] active:bg-black
            dark:text-white dark:hover:text-[#f7e111] dark:active:text-[#fdea43]"
            size={"2rem"}
          />
        </Link>
        <Link href={"mailto:dudtod1596@gmail.com"} className="flex flex-row">
          <MdEmail
            size={"2rem"}
            className="
           text-black hover:text-[#4285f4] active:text-[#4285f4]/80
          dark:text-white dark:hover:text-[#4285f4] dark:active:text-[#70a7ff]
          "
          />
          <span className="ml-1 text-lg font-medium">dudtod1596@gmail.com</span>
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 sm:w-3/5 md:w-fit min-w-[350px]">
        <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
          <input
            {...register("name")}
            autoComplete={"off"}
            type="text"
            className="contactInput"
            placeholder="보내는 사람"
          />
          <input
            {...register("email")}
            autoComplete={"off"}
            type="email"
            className="contactInput"
            placeholder="이메일"
          />
        </div>
        <input {...register("subject")} autoComplete={"off"} type="text" className="contactInput" placeholder="제목" />
        <textarea {...register("message")} autoComplete={"off"} className="contactInput" placeholder="본문" />
        <button
          type="submit"
          className="px-10 py-5 font-bold text-black bg-yellow-400 rounded-md hover:bg-yellow-300 active:bg-yellow-200 "
        >
          보내기
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
