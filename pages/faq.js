import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import FaqContent from "@/components/FAQ/FaqContent";

const FAQ = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="FAQ" />

      <FaqContent />

      <Footer />
    </>
  );
};

export default FAQ;
