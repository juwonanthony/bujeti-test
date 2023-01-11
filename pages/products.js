import React from "react";
import { BusinessExpense, CtaBanner, Partners, ProductHero, ProductInsight, ProductSolution } from "../containers";

import LayoutWarpper from "../components/layoutWarapper";

const Product = () => {
  return (
    <LayoutWarpper>
      <ProductHero />
      <BusinessExpense />
      <ProductSolution />
      <ProductInsight />
      <section className="py-40">
        <Partners />
      </section>
      <CtaBanner />
    </LayoutWarpper>
  );
};

export default Product;
