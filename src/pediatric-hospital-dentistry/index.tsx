import Footer from "@/components/layout/footer";
import PageLayout from "@/components/layout/page-layout";
import React from "react";
import PediatricHospitalDentistryBody from "./components/body";

const PediatricHospitalDentistry = () => {
  return (
    <PageLayout>
      <PediatricHospitalDentistryBody />
      <Footer />
    </PageLayout>
  );
};

export default PediatricHospitalDentistry;
