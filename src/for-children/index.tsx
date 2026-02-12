import Footer from "@/components/layout/footer";
import PageLayout from "@/components/layout/page-layout";
import React from "react";
import ForChildrenBody from "./components/body";

const ForChildren = () => {
  return (
    <PageLayout>
      <ForChildrenBody />
      <Footer />
    </PageLayout>
  );
};

export default ForChildren;
