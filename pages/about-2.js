import React from "react";
import Navbar from "@/components/_App/Navbar";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import FeedbackStyleFour from "@/components/Common/FeedbackStyleFour";
import Partner from "@/components/MachineLearning/Partner";
import AboutUsContent2 from "@/components/AboutUs/AboutUsContent2";

const About2 = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="About Us" />

      <AboutUsContent2 />

      <Team />

      <FeedbackStyleFour />

      <FunFactsArea />

      <div className="pb-80">
        <Partner />
      </div>

      <Footer />
    </>
  );
};

export default About2;
