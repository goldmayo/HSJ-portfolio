import React from "react";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="relative min-h-screen mx-4 max-w-7xl">
      <div className="max-w-7xl absolute inset-0 z-0 w-full h-full bg-white rounded-lg dark:bg-[#242629] drop-shadow-2xl opacity-60 dark:opacity-100"></div>
      <div className="relative z-10 flex flex-col p-10 ">
        <h1 className="text-2xl font-medium text-center uppercase text-gray-500 pb-2 tracking-[15px] dark:text-gray-400">
          skills
        </h1>
        <div>
          <h3 className="p-4 text-lg text-left ">Frontend</h3>
          <div className="flex flex-row flex-wrap">
            <Skill path={"/assets/js.webp"} iconName={"Javascript"} nowUse={true} />
            <Skill path={"/assets/typescript.png"} iconName={"Typescript"} nowUse={true} />
            <Skill path={"/assets/react.png"} iconName={"React"} nowUse={true} />
            <Skill path={"/assets/next.png"} iconName={"Next.js"} nowUse={true} />
            <Skill path={"/assets/apollo.png"} iconName={"Apollo"} nowUse={true} />
            <Skill path={"/assets/tailwind.png"} iconName={"TailwindCss"} nowUse={true} />
            <Skill path={"/assets/storybook.png"} iconName={"Storybook"} nowUse={true} />
            <Skill path={"/assets/graphql.png"} iconName={"GraphQL"} nowUse={true} />
          </div>
        </div>
        <div className="">
          <h3 className="p-4 text-lg text-left ">Backend</h3>
          <div className="flex flex-row flex-wrap ">
            <Skill path={"/assets/springboot.png"} iconName={"Springboot"} nowUse={true} />
            <Skill path={"/assets/firebase.png"} iconName={"Firebase"} />
            <Skill path={"/assets/mariadb.png"} iconName={"Mariadb"} nowUse={true} />
            <Skill path={"/assets/mysql.png"} iconName={"MySQL"} />
          </div>
        </div>
        <div>
          <div>
            <h3 className="p-4 text-lg text-left ">Version control</h3>
          </div>
          <div className="flex flex-row flex-wrap ">
            <Skill path={"/assets/git.png"} iconName={"Git"} nowUse={true} />
            <Skill path={"/assets/github.png"} iconName={"Github"} nowUse={true} />
          </div>
        </div>
        <div>
          <div>
            <h3 className="p-4 text-lg text-left ">Deployment</h3>
          </div>
          <div className="flex flex-row flex-wrap ">
            <Skill path={"/assets/vercel.png"} iconName={"Vercel"} nowUse={true} />
            <Skill path={"/assets/firebase.png"} iconName={"Firebase"} />
          </div>
        </div>
        <div>
          <div>
            <h3 className="p-4 text-lg text-left ">Interest</h3>
          </div>
          <div className="flex flex-row flex-wrap ">
            <Skill path={"/assets/jest.png"} iconName={"Jest"} />
            <Skill path={"/assets/docker.png"} iconName={"Docker"} />
            <Skill path={"/assets/aws.png"} iconName={"AWS"} />
            <Skill path={"/assets/babel.png"} iconName={"Babel"} />
            <Skill path={"/assets/webpack.png"} iconName={"Webpack"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
