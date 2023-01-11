import React from "react";
import {
  BusinessExpense,
  CtaBanner, Partners,
  ProductHero,
  ProductInsight
} from "../containers";

import LayoutWarpper from "../components/layoutWarapper";
import ProductSolution from "../containers/products/product-solution";

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
