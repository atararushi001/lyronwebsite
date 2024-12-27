import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import SignUpForm from "@/components/Auth/SignUpForm";

const SignUp = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Sign Up" />

      <SignUpForm />

      <Footer />
    </>
  );
};

export default SignUp;
