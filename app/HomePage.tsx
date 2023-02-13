"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "../components/Skills";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { ProjectData } from "@/core/data/ProjectData";
import ContactMe from "@/components/ContactMe";
import HomeButton from "@/components/HomeButton";
import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "next-themes";

export default function HomePage() {
  const headerRef = useRef<HTMLElement>(null);
  const homeRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState<number>(0);

  useEffect(() => {
    const headerH = headerRef.current?.clientHeight;
    if (headerH === undefined) return;
    setNavHeight(headerH);
  }, []);

  return (
    <ThemeProvider attribute="class">
      <div className="z-0 bg-gray-100 scroll-smooth">
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
    </ThemeProvider>
  );
}
