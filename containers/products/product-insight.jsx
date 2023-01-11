import React from 'react'

const ProductInsight = () => {
  return (
     <section className="w-full bg-grey-warm-900 py-40">
      <div className="container mx-auto ">
        <div className="flex justify-between">
          <div className="w-[580px]">
            <span className="text-accent-green font-medium text-base flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 5.45455C16 6.25455 15.3455 6.90909 14.5455 6.90909C14.4145 6.90909 14.2909 6.89455 14.1745 6.85818L11.5855 9.44C11.6218 9.55636 11.6364 9.68727 11.6364 9.81818C11.6364 10.6182 10.9818 11.2727 10.1818 11.2727C9.38182 11.2727 8.72727 10.6182 8.72727 9.81818C8.72727 9.68727 8.74182 9.55636 8.77818 9.44L6.92364 7.58545C6.80727 7.62182 6.67636 7.63636 6.54545 7.63636C6.41455 7.63636 6.28364 7.62182 6.16727 7.58545L2.85818 10.9018C2.89455 11.0182 2.90909 11.1418 2.90909 11.2727C2.90909 12.0727 2.25455 12.7273 1.45455 12.7273C0.654545 12.7273 0 12.0727 0 11.2727C0 10.4727 0.654545 9.81818 1.45455 9.81818C1.58545 9.81818 1.70909 9.83273 1.82545 9.86909L5.14182 6.56C5.10545 6.44364 5.09091 6.31273 5.09091 6.18182C5.09091 5.38182 5.74545 4.72727 6.54545 4.72727C7.34545 4.72727 8 5.38182 8 6.18182C8 6.31273 7.98546 6.44364 7.94909 6.56L9.80364 8.41455C9.92 8.37818 10.0509 8.36364 10.1818 8.36364C10.3127 8.36364 10.4436 8.37818 10.56 8.41455L13.1418 5.82545C13.1055 5.70909 13.0909 5.58545 13.0909 5.45455C13.0909 4.65455 13.7455 4 14.5455 4C15.3455 4 16 4.65455 16 5.45455Z"
                  fill="#BFFF0B"
                />
              </svg>
              Numbers
            </span>
            <h1 className="text-white font-semibold text-6xl py-6">
              Saving time. Selling <br /> even faster.
            </h1>
            <p className="text-white text-xl">
              <b>Connect your tools, connect your teams.</b> With over 100 apps available in our directory, your team’s
              favourite tolls are just a click away.
            </p>
            <button className="inline-flex text-black bg-accent-green border-0 py-3 px-6 focus:outline-none rounded-lg font-semibold text-base mt-[25px]">
              Start Now
            </button>
          </div>
          <div className="w-[420px]">
            <div className="pb-[30px]">
              <h1 className="text-accent-green text-6xl font-semibold">25.2 sec</h1>
              <p className="text-grey-semi text-base pt-[5px]">
                Average processing time for invoice reimbursements after an approval.
              </p>
            </div>
            <div className="py-[30px] border-y border-grey-accent">
              <h1 className="text-accent-green text-6xl font-semibold">₦987,843.32</h1>
              <p className="text-grey-semi text-base pt-[5px]">
                Our insights and pricing intelligence save thousands for 100+ companies just like yours.
              </p>
            </div>
            <div className="pt-[30px]">
              <h1 className="text-accent-green text-6xl font-semibold">95%</h1>
              <p className="text-grey-semi text-base pt-[5px]">Users are satisfied and feels Bujeti is easy to use.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInsight