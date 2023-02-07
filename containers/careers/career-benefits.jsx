const CareerBenefits = ({ benefits }) => {
  return (
    <section className="md:py-35 lg:py-35 py-[50px]">
      <section className="container mx-auto">
        <header className="w-full px-4 md:w-[580px] lg:w-[580px]">
          <h1 className="text-2xl font-semibold text-textBaseColor md:text-5xl md:leading-[60px] lg:text-5xl lg:leading-[60px]">
            Benefits
          </h1>
          <p className="mt-[10px] text-base text-textBaseColor md:text-xl lg:text-xl">
            From a competitive salary and employee stock purchasing plan to professional development
            resources and flexible PTO, Okta offers everything you need to support your work, your
            life, and your work-life balance.
          </p>
        </header>
        <main className="px-4 pt-10 md:px-0 md:pt-20 lg:px-0 lg:pt-20">
          {benefits?.map((benefit) => {
            return <BenefitListItem benefit={benefit} key={benefit} />
          })}
        </main>
      </section>
    </section>
  )
}

export default CareerBenefits

const BenefitListItem = ({ benefit }) => {
  return (
    <div className="flex items-center gap-3 border-t-[1px] py-5 md:py-10 lg:py-10">
      <p className="text-base font-medium md:text-3xl lg:text-3xl">{benefit}</p>
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-moss/400 md:h-[26px] md:w-[26px] lg:h-[26px] lg:w-[26px]">
        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6654 1.5L4.2487 7.91667L1.33203 5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
  )
}
