import { ListCard } from 'components/index'
import React from 'react'

const ProductSolution = ({ data, productSolution }) => {
  const { feature_list = [] } = productSolution || {}
  return (
    <section className="container mx-auto px-5 py-16 pb-37 sm:px-0 md:px-16 xl:px-0">
      {feature_list.map((list, i) => {
        return (
          <>
            <ListCard data={list} key={i} />
            {feature_list.length === i + 1 ? null : (
              <div
                key={list}
                className="mb:my-20 my-5 w-full bg-slate-50 lg:my-20"
                style={{ height: 2, color: '#D7D3D0' }}
              ></div>
            )}
          </>
        )
      })}
    </section>
  )
}

export default ProductSolution
