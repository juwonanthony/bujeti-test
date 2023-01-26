import { ListCard } from 'components/index'
import React from 'react'

const ProductSolution = ({ data, productSolution }) => {
  const { feature_list = [] } = productSolution || {}
  console.log(productSolution)
  return (
    <section className="container mx-auto py-37">
      {feature_list.map((list, i) => {
        return (
          <>
            <ListCard data={list} key={i} />
            {feature_list.length === i + 1 ? null : (
              <div
                key={list}
                className="my-20 w-full bg-slate-50"
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
