import React from 'react';
import { ListCard } from '../../components';


const ProductSolution = ({data}) => {
  return (
    <section className="container mx-auto py-37">
        {data.map((datum, i) => {
          return (
            <>
              <ListCard data={datum} key={i} />
              {data.length === i + 1 ? null : (
                <div className="my-20 w-full bg-slate-50" style={{ height: 2, color: "#D7D3D0" }}></div>
              )}
            </>
          );
        })}
      </section>
  )
}

export default ProductSolution