import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import BlogGridPost from "@/components/Blog/BlogGridPost";

const Blog = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Grid" />

      <BlogGridPost />

      <Footer />
    </>
  );
};

export default Blog;
