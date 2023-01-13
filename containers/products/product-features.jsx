import React from 'react'
import { product_svg } from '../../assets/icons'
import { SmallHeading } from '../../components'
import ProductSlider from './product-slider'

const ProductFeatures = () => {
  return (
    <section className="container mx-auto py-37 px-5">
      <div className="mb-25 w-full max-w-xl">
        <SmallHeading color="#AF7421" svg={product_svg} title="Products" />
        <h1 className="my-4 mb-7 text-5xl font-semibold leading-tight text-accent-gray">
          You also get...
        </h1>
        <p className="mb-7 text-accent-gray">
          More from our fully integrated expense solution products to save you time and money on
          your business expenses.
        </p>
        <button className="inline-flex rounded-lg bg-accent-gray py-2 px-6 text-base font-medium text-white focus:outline-none">
          Start Now
        </button>
      </div>
      <ProductSlider />
    </section>
  )
}

export default ProductFeatures
