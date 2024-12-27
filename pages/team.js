import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import TeamMembers from "@/components/Team/TeamMembers";

const Team = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Team" />

      <TeamMembers />

      <Footer />
    </>
  );
};

export default Team;
