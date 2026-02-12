import Footer from "@/components/layout/footer";
import PageLayout from "@/components/layout/page-layout";
import React from "react";
import DentalCareForYourBabyBody from "./components/body";

const DentalCareForYourBaby = () => {
  return (
    <PageLayout className="min-h-screen w-full">
      <DentalCareForYourBabyBody />
      <Footer />
    </PageLayout>
  );
};

export default DentalCareForYourBaby;
