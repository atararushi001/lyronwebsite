import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import BlogGridPost2 from "@/components/Blog/BlogGridPostStyle2";

const Blog3 = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Grid" />

      <BlogGridPost2 />

      <Footer />
    </>
  );
};

export default Blog3;
