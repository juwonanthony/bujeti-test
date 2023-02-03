import React from 'react'
import Image from 'next/image'

import { valuesEmpower, valuesInnovate, valuesLove, valuesTransparent } from 'assets/icons'

const data = [
  {
    title: 'Empower our people',
    description:
      ' We take care of your expense management so you can focus on growing your business.',
    icon: valuesEmpower,
  },
  {
    title: 'Be transparent',
    description: 'No more chasing receipt papers. Pay with your card and easily get reimbursement.',
    icon: valuesTransparent,
  },
  {
    title: 'Never stop innovating',
    description: 'Define and enforce spending limits. Nothing falls through the cracks.',
    icon: valuesInnovate,
  },
  {
    title: 'Love our customers',
    description: 'Define and enforce spending limits. Nothing falls through the cracks.',
    icon: valuesLove,
  },
]

const Values = () => {
  return (
    <section className="w-full bg-grey-warm-900 py-37">
      <div className="container mx-auto ">
        <div className="flex justify-between">
          <div className="w-[580px]">
            <span className="flex items-center gap-2 text-base font-medium text-accent-green">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.587V-2H3V5.587C3 5.902 3.162 6.199 3.441 6.361L7.203 8.62L6.312 10.726L3.243 10.987L5.574 13.003L4.863 16L7.5 14.407L10.137 16L9.435 13.003L11.766 10.987L8.697 10.726L7.806 8.62L11.568 6.361C11.838 6.199 12 5.911 12 5.587ZM8.4 7.207L7.5 7.747L6.6 7.207V-1.1H8.4V7.207Z"
                  fill="#BFFF0B"
                />
              </svg>
              Values
            </span>
            <h1 className="py-6 text-5xl text-white">
              Empowering each other to bring unique perspectives and experiences to work, <br /> and
              we continually seek new ways to do so.
            </h1>
          </div>
          <div className="w-[420px]">
            {data.map((datum, i) => {
              return (
                <div className="flex gap-2 pb-[30px]" key={i}>
                  <Image src={datum.icon} height={30} alt="" />
                  <section>
                    <h1 className="text-xl font-semibold text-accent-green">{datum.title}</h1>
                    <p className="pt-[5px] text-base text-grey-semi">{datum.description}</p>
                  </section>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
