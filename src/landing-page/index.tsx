import PageLayout from "@/components/layout/page-layout";
import React from "react";
import Hero from "./components/hero";
import SearchBy from "./components/search-by";
import ExploreProducts from "./components/explore-products";
import CustomerTestimonials from "./components/customer-testimonials";
import Footer from "@/components/layout/footer";
import Welcome from "./components/welcome";

const index = () => {
  return (
    <PageLayout className="min-h-screen w-full">
      <Hero />
      {/* <SearchBy /> */}
      <Welcome />
      <ExploreProducts />
      {/* <CustomerTestimonials /> */}
      <Footer />
    </PageLayout>
  );
};

export default index;
