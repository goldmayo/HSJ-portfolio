export interface IProjectData {
  coverImage: string;
  title: string;
  duration: string;
  projectType: string;
  description: string;
  Links: {
    githubLink: string;
  };
  teck: string;
}

export const ProjectData: IProjectData[] = [
  {
    coverImage: "/project_logo/allcamping.png",
    title: "올캠핑(All Camping)",
    duration: "2022-07-06 ~ 2022-11-22",
    projectType: "1인 개발",
    description: "아토믹 디자인 시스템을 적용한 전국의 캠핑장 정보 조회 토이 프로젝트",
    Links: {
      githubLink: "https://github.com/goldmayo/allcamp-graphql-client",
    },
    teck: "Next.js,React,Typescript,Storybook,GraphQL,Relay,Apollo,TailwindCss,Figma,Java,SpringBoot,Querydsl,MariaDB",
  },
  {
    coverImage: "/project_logo/igobada.png",
    title: "이고바다(IGOBADA)",
    duration: "2022-02-14 ~ 2022-06-28",
    projectType: "1인 개발",
    description: "명함관리 웹앱 토이 프로젝트 lighthouse로 최적화 작업 완료",
    Links: {
      githubLink: "https://github.com/goldmayo/IGOBADA",
    },
    teck: "React,Firebase,Typescript",
  },
  {
    coverImage: "/project_logo/javic.png",
    title: "자빅(JAVIC)",
    duration: "2021-08-30 ~ 2022-01-14",
    projectType: "팀프로젝트",
    description: "캡스톤 디자인 사내 문서작성 웹 챗봇 프로젝트에서 Front end를 React로 변경한 프로젝트",
    Links: {
      githubLink: "https://github.com/goldmayo/JAVIC_2021",
    },
    teck: "React,Python,Flask",
  },
];
