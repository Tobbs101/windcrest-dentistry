import Footer from "@/components/layout/footer";
import PageLayout from "@/components/layout/page-layout";
import React from "react";
import ThumbSuckingBody from "./components/body";

const ThumbSucking = () => {
  return (
    <PageLayout className="min-h-screen w-full">
      <ThumbSuckingBody />
      <Footer />
    </PageLayout>
  );
};

export default ThumbSucking;
