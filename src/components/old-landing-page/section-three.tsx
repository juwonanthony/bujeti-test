import React from "react";

const SectionThree = () => {
  return (
    <section className="bg-bg section section--hidden flex flex-col">
      <div className="body-padding pt-24 sm:pt-32 md:pt-44 lg:pt-[200px] flex-1">
        <div className="container">
          <div className="md:max-w-[56vw]">
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tight-spacing">
              Full, real-time visibility into <br /> how your money is spent.
            </h2>
            <p className="text-black text-lg sm:text-xl lg:text-2xl mt-5 sm:mt-7 md:mt-9 max-w-[580px] font-light follow-text">
              You get the details you need on every expense. Something doesn’t look right? You can flag it, pause the beneficiary or if you need, freeze the card.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 bg-white h-16 sm:h-20 md:h-25 lg:h-32 w-full"></div>
    </section>
  );
};

export default SectionThree;
