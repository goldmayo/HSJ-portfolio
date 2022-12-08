import { IProjectData } from "@/core/data/ProjectData";
import React from "react";
import ProjectItem from "./ProjectItem";

type Props = {
  projects: IProjectData[];
};

const Projects = (props: Props) => {
  return (
    <div className="relative min-h-screen mx-4 max-w-7xl">
      <div className="max-w-7xl absolute inset-0 z-0 w-full h-full bg-white rounded-lg dark:bg-[#242629] drop-shadow-2xl opacity-60 dark:opacity-100"></div>
      <div className="relative z-10 flex flex-col p-10">
        <h1 className=" text-2xl font-medium text-center uppercase text-gray-500 pb-2 tracking-[15px] dark:text-gray-400">
          project
        </h1>
        <div className="grid grid-cols-1 gap-6 m-6 md:grid-cols-2 max-w-7xl">
          {props.projects.map((project: IProjectData, index) => (
            <ProjectItem key={index} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
