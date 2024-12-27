import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import FeatureDetailsContent from "@/components/Features/FeatureDetailsContent";

const FeatureDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Feature Details" />

      <FeatureDetailsContent />

      <Footer />
    </>
  );
};

export default FeatureDetails;
