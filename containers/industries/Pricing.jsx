const PricingSection = () => {
  return (
    <section className="bg-grey-warm-900 py-[150px]">
      <section className="container mx-auto">
        <div className="w-[580px]">
          <span className="text-accent-green font-medium text-base flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.587 6.706L7.287 0.406C7.035 0.154 6.685 0 6.3 0H1.4C0.63 0 0 0.63 0 1.4V6.3C0 6.685 0.154 7.035 0.413 7.294L6.713 13.594C6.965 13.846 7.315 14 7.7 14C8.085 14 8.435 13.846 8.687 13.587L13.587 8.687C13.846 8.435 14 8.085 14 7.7C14 7.315 13.839 6.958 13.587 6.706ZM2.45 3.5C1.869 3.5 1.4 3.031 1.4 2.45C1.4 1.869 1.869 1.4 2.45 1.4C3.031 1.4 3.5 1.869 3.5 2.45C3.5 3.031 3.031 3.5 2.45 3.5Z"
                fill="#BFFF0B"
              />
            </svg>
            Pricing
          </span>
          <h1 className="text-white font-semibold text-6xl py-6">Pay fair. Spend less.</h1>
          <p className="text-white text-xl">
            With over 100 apps available in our directory, your team’s favourite tolls are just a click away.
          </p>
          <button className="inline-flex text-black bg-accent-green border-0 py-3 px-6 focus:outline-none rounded-lg font-semibold text-base mt-[25px]">
            Start Now
          </button>
          <span className="inline-flex text-white ml-[28px] focus:outline-none rounded-lg font-semibold text-base mt-[25px]">
            Contact Sales
          </span>
        </div>
        <section className="flex w-full mt-25 gap-5">
          <div className="bg-grey-warm-800 w-[390px] h-[680px] rounded-lg"></div>
          <div className="bg-grey-accent w-[390px] h-[680px] rounded-lg scale-[1.05]"></div>
          <div className="bg-grey-warm-800 w-[390px] h-[680px] rounded-lg"></div>
        </section>
      </section>
    </section>
  );
};

export default PricingSection;
