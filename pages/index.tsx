import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "../components/Skills";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { ProjectData } from "@/core/data/ProjectData";
import ContactMe from "@/components/ContactMe";
import HomeButton from "@/components/HomeButton";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const headerRef = useRef<HTMLElement>(null);
  const homeRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState<number>(0);

  useEffect(() => {
    const headerH = headerRef.current?.clientHeight;
    if (headerH === undefined) return;
    setNavHeight(headerH);
  }, []);
  return (
    <div className="z-0 bg-gray-100 scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
        <title>현승재 | 웹 프론트엔드 개발자</title>
        <meta name="description" content="프론트엔드 개발자 포트폴리오" />
      </Head>
      <Header ref={headerRef} />
      <main className="z-50 flex flex-col items-center dark:bg-[#2b2e33] ">
        {/* hero */}
        <section ref={homeRef} id="home" className="">
          <Hero />
        </section>
        {/* skills */}
        <section id="skills" className={`mb-24 scroll-mt-[52px] md:scroll-mt-[${navHeight}px]`}>
          <Skills />
        </section>
        {/* projects */}
        <section id="projects" className={`scroll-mt-[52px] md:scroll-mt-[${navHeight}px]`}>
          <Projects projects={ProjectData} />
        </section>
        {/* contact me*/}
        <section id="contact" className="">
          <ContactMe />
        </section>
        <HomeButton target={homeRef} className={""} />
      </main>
      <Footer />
    </div>
  );
}
