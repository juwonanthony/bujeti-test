import { product_svg } from 'assets/icons'
import { SmallHeading } from 'components/index'
import React from 'react'
import ProductSlider from './product-slider'

const ProductFeatures = ({ productFeatures }) => {
  const {
    header = '',
    header_icon: { filename } = {},
    primary_btn_label = '',
    primary_btn_link: { url } = {},
    product_list = [],
    subtitle = '',
    title = '',
  } = productFeatures

  return (
    <section className="container mx-auto py-37 px-5">
      <div className="mb-25 w-full max-w-xl">
        <SmallHeading color="#AF7421" svg={filename} title={header} />
        <h1 className="my-4 mb-7 text-5xl font-semibold leading-tight text-accent-gray">{title}</h1>
        <p className="mb-7 text-accent-gray">{subtitle}</p>
        <button className="inline-flex rounded-lg bg-accent-gray py-2 px-6 text-base font-medium text-white focus:outline-none">
          {primary_btn_label}
        </button>
      </div>
      <ProductSlider products={product_list} />
    </section>
  )
}

export default ProductFeatures
