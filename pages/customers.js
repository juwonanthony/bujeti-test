import React from "react";
import {
  CtaBanner, Industry, Partners, ProductSolution, Testimonials
} from "../containers";
import LayoutWarpper from "../components/layoutWarapper";
import CustomerHero from "../containers/customers/customer-hero";

const Customers = () => {
  return (
    <LayoutWarpper>
      <CustomerHero />

      <ProductSolution />
      <Industry />
      <Testimonials />
      <section className="py-40">
        <Partners />
      </section>
      <CtaBanner />
    </LayoutWarpper>
  );
};

export default Customers;
