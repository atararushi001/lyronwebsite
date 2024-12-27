import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";

const ServiceDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Services Style Five" />

      <ServiceDetailsContent />

      <Footer />
    </>
  );
};

export default ServiceDetails;
