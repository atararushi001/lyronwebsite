import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Details" />

      <BlogDetailsContent />

      <Footer />
    </>
  );
};

export default BlogDetails;
