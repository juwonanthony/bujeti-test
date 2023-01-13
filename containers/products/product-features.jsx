import React from 'react';
import { product_svg } from '../../assets/icons';
import { SmallHeading } from '../../components';
import ProductSlider from './product-slider';

const ProductFeatures = () => {
  return (
    <section className="container py-37 px-5 mx-auto">
      <div className="w-full mb-20 max-w-xl">
        <SmallHeading color="#AF7421" svg={product_svg} title="Products" />
        <h1 className="leading-tight font-semibold text-5xl my-4 text-accent-gray mb-7">You also get...</h1>
        <p className="mb-7 text-accent-gray">
          More from our fully integrated expense solution products to save you time and money on your business expenses.
        </p>
        <button className="inline-flex text-white bg-accent-gray py-2 px-6 focus:outline-none rounded-lg font-medium text-base">
          Start Now
        </button>
      </div>
      <ProductSlider />
    </section>
  );
};

export default ProductFeatures;
