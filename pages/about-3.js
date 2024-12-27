import React from "react";
import Navbar from "@/components/_App/Navbar";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import FeedbackStyleThree from "@/components/Common/FeedbackStyleThree";
import Partner from "@/components/MachineLearning/Partner";
import AboutUsContent3 from "@/components/AboutUs/AboutUsContent3";

const About3 = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="About Us" />

      <AboutUsContent3 />

      <Team />

      <FeedbackStyleThree />

      <FunFactsArea />

      <div className="pb-80">
        <Partner />
      </div>

      <Footer />
    </>
  );
};

export default About3;
