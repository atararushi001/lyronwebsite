import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import CheckoutForm from "@/components/Checkout/CheckoutForm";

const Checkout = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Checkout" />

      <CheckoutForm />

      <Footer />
    </>
  );
};

export default Checkout;
