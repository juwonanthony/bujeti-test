import React from "react";

const SectionThree = () => {
  return (
    <section className="bg-bg section section--hidden">
      <div className="body-padding pt-32 sm:pt-36 md:pt-44 lg:pt-[200px]">
        <div className="container">
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tight-spacing">
            Full, real-time visibility into <br /> how money is spent.
          </h2>
          <p className="text-black text-lg sm:text-xl lg:text-2xl mt-9 max-w-[580px] font-light follow-text">
            Budgets in Divvy are more than just wishful thinking — they’re a powerful tool to control spend. Set spend
            limits in Divvy which are directly tied to employee cards. That’s it. No nagging or pleading involved.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 bg-white h-16 sm:h-20 md:h-25 lg:h-32 w-full"></div>
    </section>
  );
};

export default SectionThree;
