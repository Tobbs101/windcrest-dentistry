import PageLayout from "@/components/layout/page-layout";
import React from "react";
import SedationDentistryBody from "./components/body";
import Footer from "@/components/layout/footer";

const SedationDentistry = () => {
  return (
    <PageLayout className="min-h-screen w-full">
      <SedationDentistryBody />
      <Footer />
    </PageLayout>
  );
};

export default SedationDentistry;
