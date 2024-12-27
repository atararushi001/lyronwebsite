import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ProjectsCardStyle1 from "@/components/Projects/ProjectsCardStyle1";

const Projects1 = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Projects Style One" />

      <ProjectsCardStyle1 />

      <Footer />
    </>
  );
};

export default Projects1;
