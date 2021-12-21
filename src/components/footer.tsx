import React from "react";
import EarlyAccessFrom from "./early-access-form";

const Footer = () => {
  return (
    <section className="bg-black flex flex-col section section--hidden">
      {/* <div className="bg-white h-16 sm:h-20 md:h-25 lg:h-32 w-full"></div> */}
      <div className="body-padding py-16 sm:py-20 lg:py-25 xl:py-30 flex-1">
        <div className="container flex items-center justify-between flex-wrap h-full">
          <div>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tight-spacing">
              Enjoy the best-in-class <br /> budgeting experience.
            </h2>
            <ul className="mt-6 sm:mt-8 lg:mt-11 flex flex-col text-white space-y-2.5 sm:space-y-3.5">
              <li className="flex items-start">
                <figure className="w-5 sm:w-6 lg:w-7.5 mr-3 lg:mr-3.5 flex-shrink-0 mt-1">
                  <svg width="100%" viewBox="0 0 30 30" fill="none">
                    <path
                      d="M25 7.5L11.25 21.25L5 15"
                      stroke="#BFFF0B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </figure>
                <span className="inline text-lg sm:text-xl lg:text-2xl font-light">No hidden fees or contracts</span>
              </li>
              <li className="flex items-start">
                <figure className="w-5 sm:w-6 lg:w-7.5 mr-3 lg:mr-3.5 flex-shrink-0 mt-1">
                  <svg width="100%" viewBox="0 0 30 30" fill="none">
                    <path
                      d="M25 7.5L11.25 21.25L5 15"
                      stroke="#BFFF0B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </figure>
                <span className="inline text-lg sm:text-xl lg:text-2xl font-light">
                  As many budgets and virtual cards as needed
                </span>
              </li>
              <li className="flex items-start">
                <figure className="w-5 sm:w-6 lg:w-7.5 mr-3 lg:mr-3.5 flex-shrink-0 mt-1">
                  <svg width="100%" viewBox="0 0 30 30" fill="none">
                    <path
                      d="M25 7.5L11.25 21.25L5 15"
                      stroke="#BFFF0B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </figure>
                <span className="inline text-lg sm:text-xl lg:text-2xl font-light">
                  Funds are safe, you are in full control
                </span>
              </li>
            </ul>
          </div>
          <EarlyAccessFrom />
        </div>
      </div>
    </section>
  );
};

export default Footer;
