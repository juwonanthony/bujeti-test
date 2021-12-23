import React from "react";

const SectionTwo = () => {
  return (
    <section className="bg-white section section--hidden flex flex-col">
      <div className="body-padding pt-28 sm:pt-32 md:pt-44 lg:pt-[200px] flex-1">
        <div className="container">
          <div className="md:max-w-[56vw]">
            <h2 className="text-accent-brown text-2xl sm:text-3xl md:text-4xl lg:text-5xl tight-spacing">
              Organized spending with <br /> our VISA™ virtual cards
            </h2>
            <p className="text-black text-lg sm:text-xl lg:text-2xl mt-5 sm:mt-7 md:mt-9 max-w-[580px] font-light follow-text">
              Budgets in Divvy are more than just wishful thinking — they’re a powerful tool to control spend. Set spend
              limits in Divvy which are directly tied to employee cards. That’s it. No nagging or pleading involved.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 bg-bg h-16 sm:h-20 md:h-25 lg:h-32 w-full"></div>
    </section>
  );
};

export default SectionTwo;
