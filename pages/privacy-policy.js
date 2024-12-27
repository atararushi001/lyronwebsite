import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import PrivacyPolicyContent from "@/components/PrivacyPolicy/PrivacyPolicyContent";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Privacy Policy" />

      <PrivacyPolicyContent />

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
