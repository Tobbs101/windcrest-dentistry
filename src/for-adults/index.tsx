import Footer from "@/components/layout/footer";
import PageLayout from "@/components/layout/page-layout";
import React from "react";
import ForAdultsBody from "./components/body";

const ForAdults = () => {
  return (
    <PageLayout>
      <ForAdultsBody />
      <Footer />
    </PageLayout>
  );
};

export default ForAdults;
