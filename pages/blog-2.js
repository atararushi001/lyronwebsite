import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import BlogWithRightSidebar from "@/components/Blog/BlogWithRightSidebar";

const Blog2 = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Right Sidebar" />

      <BlogWithRightSidebar />

      <Footer />
    </>
  );
};

export default Blog2;
