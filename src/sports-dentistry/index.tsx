import PageLayout from "@/components/layout/page-layout";
import React from "react";
import SportsDentistryBody from "./components/body";
import Footer from "@/components/layout/footer";

const SportsDentistry = () => {
  return (
    <PageLayout>
      <SportsDentistryBody />
      <Footer />
    </PageLayout>
  );
};

export default SportsDentistry;
