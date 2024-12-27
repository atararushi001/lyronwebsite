import React from "react";
import Navbar from "@/components/_App/Navbar";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import AboutUsContent1 from "@/components/AboutUs/AboutUsContent1";

const About = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="About Us" />

      <AboutUsContent1 />

      <Team />

      <Partner />

      <FunFactsArea />

      <Footer />
    </>
  );
};

export default About;
