import React from "react";
import LayoutWarpper from "../components/layoutWarapper";
import {
  CtaBanner, Industry,
  IndustryHero, Partners,
  ProductSolution, Testimonials
} from "../containers";

const Industries = () => {
  return (
    <LayoutWarpper>
     <IndustryHero />

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

export default Industries;
