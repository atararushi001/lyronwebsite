import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ForgotPasswordForm from "@/components/Auth/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Forgot Password" />

      <ForgotPasswordForm />

      <Footer />
    </>
  );
};

export default ForgotPassword;
