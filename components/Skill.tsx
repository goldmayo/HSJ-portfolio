import React from "react";
import Image from "next/image";

type Props = {
  path: string;
  iconName: string;
  nowUse?: boolean;
};

const Skill = (props: Props) => {
  return (
    <div className="flex flex-col p-2 text-sm text-center ">
      <div className="relative w-20 h-20 bg-white rounded-md">
        <Image className="rounded-md" src={props.path} fill={true} sizes={"80px"} alt={props.iconName} />
      </div>
      <div className="flex flex-row items-center justify-center">
        {props.nowUse && <div className="w-1 h-1 mr-1 bg-green-500 rounded-full animate-pulse" />}
        <span className="">{props.iconName}</span>
      </div>
    </div>
  );
};

export default Skill;
