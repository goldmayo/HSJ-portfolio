import { IProjectData } from "@/core/data/ProjectData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
  data: IProjectData;
};

const ProjectItem = (props: Props) => {
  const coverImage = props.data.coverImage;
  const title = props.data.title;
  const duration = props.data.duration;
  const projectType = props.data.projectType;
  const teck = props.data.teck;
  const description = props.data.description;
  const githubLink = props.data.Links.githubLink;

  return (
    <div
      className="flex flex-col rounded-xl border text-gray-600 body-font dark:text-white bg-gray-100 dark:bg-[#3E4756] dark:hover:bg-[#3e4756]/70 max-w-[350px] hover:bg-gray-200
    hover:scale-105 hover:shadow-lg transition duration-200 transform dark:border-gray-400/40 dark:hover:shadow-gray-400/40"
    >
      <Image
        className="rounded-t-xl max-h-[250px]"
        src={coverImage}
        width={350}
        height={200}
        alt={title}
        style={{ width: "100%", height: "60%", objectFit: "fill" }}
        quality={100}
      />
      <div className="flex flex-col p-4 space-y-1">
        <h1 className="mb-4 text-2xl font-medium">{title}</h1>
        <h3 className="text-sm">{duration}</h3>
        <h3 className="text-sm">{projectType}</h3>
        <p className="text-base">{description}</p>
        <div className="flex flex-row flex-wrap">
          {teck.split(",").map((skill: string, index) => (
            <span
              key={`skill_${index}`}
              className="px-2 py-1 my-1 mr-1 text-sm text-gray-900 rounded-md bg-sky-200 dark:text-white dark:bg-sky-700"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="flex flex-row space-x-2">
          <Link
            className="px-2 py-1 text-lg text-white bg-gray-700 rounded-md hover:bg-gray-600 active:bg-slate-500 dark:text-black dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:active:bg-yellow-200"
            href={`${githubLink}`}
            target={"_blank"}
          >
            README.md
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
