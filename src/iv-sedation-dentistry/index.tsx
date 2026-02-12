import Footer from "@/components/layout/footer";
import PageLayout from "@/components/layout/page-layout";
import React from "react";
import IVSedationDentistryBody from "./components/body";

const IVSedationDentistry = () => {
  return (
    <PageLayout className="min-h-screen w-full">
      <IVSedationDentistryBody />
      <Footer />
    </PageLayout>
  );
};

export default IVSedationDentistry;
