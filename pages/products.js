import React from 'react';
import {
  BusinessExpense,
  CtaBanner,
  Faqs,
  Partners,
  ProductFeatures,
  ProductHero,
  ProductInsight,
  ProductSolution,
} from '../containers';

import LayoutWarpper from '../components/layoutWarapper';

const Product = () => {
  return (
    <LayoutWarpper>
      <ProductHero />
      <BusinessExpense />
      <ProductSolution />
      <ProductInsight />
      <Faqs />
      <ProductFeatures />
      <section className="py-40">
        <Partners />
      </section>
      <CtaBanner />
    </LayoutWarpper>
  );
};

export default Product;
