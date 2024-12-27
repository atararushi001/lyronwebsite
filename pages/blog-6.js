import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import BlogWithRightSidebarStyle3 from "@/components/Blog/BlogWithRightSidebarStyle3";

const Blog6 = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Grid" />

      <BlogWithRightSidebarStyle3 />

      <Footer />
    </>
  );
};

export default Blog6;
