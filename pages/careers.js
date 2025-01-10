import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import CareersContent from "@/components/Careers/CareersContent";

const Careers = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle="Join Our Team" />
      <CareersContent />
      <Footer />
    </>
  );
};

export default Careers;