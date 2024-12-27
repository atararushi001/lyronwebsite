import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import BlogWithRightSidebarStyle2 from './../components/Blog/BlogWithRightSidebarStyle2';

const Blog4 = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Right Sidebar" />

      <BlogWithRightSidebarStyle2 />

      <Footer />
    </>
  );
};

export default Blog4;
