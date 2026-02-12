import Footer from "@/components/layout/footer";
import PageLayout from "@/components/layout/page-layout";
import React from "react";
import LifeWithBracesBody from "./components/body";

const LifeWithBraces = () => {
  return (
    <PageLayout>
      <LifeWithBracesBody />
      <Footer />
    </PageLayout>
  );
};

export default LifeWithBraces;
