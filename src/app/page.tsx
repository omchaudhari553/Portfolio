"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
// import VideoSection from "../components/VideoSection";
import About from "../components/About";
import DeveloperInAction from "../components/DeveloperInAction";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {/* <VideoSection /> */}
      <About />
      <DeveloperInAction />
      <Education />
      <Experience />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
