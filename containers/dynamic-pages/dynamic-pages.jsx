import PricingSection from 'containers/industries/Pricing'
import React from 'react'
import {
  BusinessExpense,
  Faqs,
  Industry,
  IndustryHero,
  ProductFeatures,
  ProductHero,
  ProductInsight,
  ProductSolution,
  Testimonials,
} from '..'

//we would pass a type property in each of the content created on storybloc
//we have two types - industry/products
const DynamicPages = ({
  type = [],
  industry,
  hero,
  pricing,
  productSolution,
  faqs,
  productFeatures,
  productInsight,
  testimonials,
  businessExpense,
}) => {
  return (
    <div>
      {type?.includes('industry') ? (
        <>
          <IndustryHero hero={hero} />
          <ProductSolution productSolution={productSolution} />
          <PricingSection pricing={pricing} />
          <Industry industry={industry} />
          {/* <Testimonials testimonials={testimonials} /> */}
        </>
      ) : type?.includes('product') ? (
        <>
          <ProductHero hero={hero} />
          <BusinessExpense businessExpense={businessExpense} />
          <ProductSolution productSolution={productSolution} />
          <ProductInsight productInsight={productInsight} />
          <Faqs faqs={faqs} />
          {/* <ProductFeatures productFeatures={productFeatures} /> */}
        </>
      ) : null}
    </div>
  )
}

export default DynamicPages
