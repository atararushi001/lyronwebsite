import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ServicesStyle1 from "@/components/Services/ServicesStyle1";

const Services = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Services Style One" />

      <ServicesStyle1 />

      <Footer />
    </>
  );
};

export default Services;
