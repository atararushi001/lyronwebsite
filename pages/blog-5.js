import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import BlogGridPost3 from "@/components/Blog/BlogGridPostStyle3";

const Blog5 = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Grid" />

      <BlogGridPost3 />

      <Footer />
    </>
  );
};

export default Blog5;
