import Footer from "@/components/layout/footer";
import PageLayout from "@/components/layout/page-layout";
import React from "react";
import PediatricDentalEmergenciesBody from "./components/body";

const PediatricDentalEmergencies = () => {
  return (
    <PageLayout>
      <PediatricDentalEmergenciesBody />
      <Footer />
    </PageLayout>
  );
};

export default PediatricDentalEmergencies;
