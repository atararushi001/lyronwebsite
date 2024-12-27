import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ServicesStyle5 from "@/components/Services/ServicesStyle5";

const Services5 = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Services Style Five" />

      <ServicesStyle5 />

      <Footer />
    </>
  );
};

export default Services5;
