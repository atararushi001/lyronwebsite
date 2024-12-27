import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ProjectsCardStyle2 from "@/components/Projects/ProjectsCardStyle2";

const Projects2 = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Projects Style Two" />

      <ProjectsCardStyle2 />

      <Footer />
    </>
  );
};

export default Projects2;
