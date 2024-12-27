import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ServicesStyle2 from "@/components/Services/ServicesStyle2";

const Services2 = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Services Style Two" />

      <ServicesStyle2 />

      <Footer />
    </>
  );
};

export default Services2;
