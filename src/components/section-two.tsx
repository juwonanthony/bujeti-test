import React from "react";

const SectionTwo = () => {
  return (
    <section className="bg-white section section--hidden flex flex-col">
      <div className="body-padding pt-24 sm:pt-32 md:pt-44 lg:pt-[200px] flex-1">
        <div className="container">
          <div className="md:max-w-[56vw]">
            <h2 className="text-accent-brown text-2xl sm:text-3xl md:text-4xl lg:text-5xl tight-spacing">
              Organized spending with <br /> our VISA™ virtual cards
            </h2>
            <p className="text-black text-lg sm:text-xl lg:text-2xl mt-5 sm:mt-7 md:mt-9 max-w-[580px] font-light follow-text">
              Issue Bujeti’s smart virtual cards with individual spending limits. Your beneficiaries can spend and buy what they need, without waiting on you.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 bg-bg h-16 sm:h-20 md:h-25 lg:h-32 w-full"></div>
    </section>
  );
};

export default SectionTwo;
