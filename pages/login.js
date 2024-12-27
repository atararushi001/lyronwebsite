import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import LoginForm from "@/components/Auth/LoginForm";

const Login = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Login" />

      <LoginForm />

      <Footer />
    </>
  );
};

export default Login;
