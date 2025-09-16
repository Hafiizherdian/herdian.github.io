"use client";

import Hero from "@/components/Hero"
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* KONTEN UTAMA */}
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
      </main>
    </div>
  );
}
