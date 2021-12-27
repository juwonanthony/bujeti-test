import React from "react";
import EarlyAccessFrom from "./early-access-form";

const Footer = () => {
  return (
    <section className="bg-black section section--hidden">
      {/* <div className="bg-white h-16 sm:h-20 md:h-25 lg:h-32 w-full"></div> */}
      <div className="body-padding bg-black py-16 sm:py-20 lg:py-25 xl:py-30 flex-1 min-h-full flex md:items-center overflow-hidden">
        <div className="container flex flex-col md:flex-row md:items-center justify-between flex-wrap h-full">
          <div className=" mb-8 mt-5 md:mb-0 md:mt-0 md:mr-5 flex-1 lg:min-w-[420px]">
            <h2 className="text-white text-2xl sm:text-3xl md:text-[32px] lg:text-[42px] xl:text-5xl tight-spacing">
              Enjoy the best-in-class <br /> budgeting experience.
            </h2>
            <ul className="mt-6 sm:mt-8 lg:mt-11 flex flex-col text-white space-y-2.5 sm:space-y-3.5">
              <li className="flex items-start">
                <figure className="w-5 sm:w-6 xl:w-7.5 mr-3 lg:mr-3.5 flex-shrink-0 mt-1">
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
                <span className="inline text-lg sm:text-xl lg:text-[22px] xl:text-2xl font-light">
                  No hidden fees or contracts
                </span>
              </li>
              <li className="flex items-start">
                <figure className="w-5 sm:w-6 xl:w-7.5 mr-3 lg:mr-3.5 flex-shrink-0 mt-1">
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
                <span className="inline text-lg sm:text-xl lg:text-[22px] xl:text-2xl font-light">
                  As many budgets and virtual cards as needed
                </span>
              </li>
              <li className="flex items-start">
                <figure className="w-5 sm:w-6 xl:w-7.5 mr-3 lg:mr-3.5 flex-shrink-0 mt-1">
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
                <span className="inline text-lg sm:text-xl lg:text-[22px] xl:text-2xl font-light">
                  Funds are safe, you are in full control
                </span>
              </li>
            </ul>

            <FootCopy className="hidden md:flex mt-25" />
          </div>
          <EarlyAccessFrom />
          <FootCopy className="flex md:hidden mt-10 " />
        </div>
      </div>
    </section>
  );
};

const FootCopy: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={`items-center space-x-3.75 text-grey-divider ${className}`}>
      <span className="text-1sm inline-block pt-1">© 2021 Bujeti Inc.</span>
      <span>&bull;</span>
      <div className="flex items-center space-x-3.75">
        <a href="https://www.twitter.com/bujetihq/" className="hover:text-accent-green">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M18.1648 3.00785C17.4177 3.53487 16.5904 3.93795 15.7149 4.20158C15.245 3.66129 14.6205 3.27834 13.9259 3.10454C13.2313 2.93073 12.5 2.97445 11.8311 3.22978C11.1621 3.48511 10.5877 3.93974 10.1855 4.53217C9.78333 5.1246 9.57281 5.82626 9.58241 6.54224V7.32246C8.21128 7.35801 6.85264 7.05392 5.62749 6.43726C4.40233 5.8206 3.34871 4.91052 2.56044 3.78806C2.56044 3.78806 -0.560438 10.81 6.46153 13.9309C4.85469 15.0216 2.94053 15.5685 1 15.4913C8.02197 19.3924 16.6044 15.4913 16.6044 6.51883C16.6037 6.3015 16.5828 6.08471 16.542 5.87125C17.3383 5.08595 17.9002 4.09447 18.1648 3.00785Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/bujetihq/" className="hover:text-accent-green">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M13.5 3H6.5C4.567 3 3 4.567 3 6.5V13.5C3 15.433 4.567 17 6.5 17H13.5C15.433 17 17 15.433 17 13.5V6.5C17 4.567 15.433 3 13.5 3Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.8002 9.55897C12.8866 10.1415 12.7871 10.7365 12.5158 11.2593C12.2446 11.782 11.8154 12.206 11.2893 12.4707C10.7633 12.7355 10.1671 12.8277 9.58564 12.7341C9.00417 12.6406 8.46702 12.366 8.05057 11.9496C7.63413 11.5331 7.3596 10.996 7.26603 10.4145C7.17247 9.83305 7.26463 9.23689 7.52941 8.71083C7.7942 8.18476 8.21812 7.75559 8.74088 7.48434C9.26363 7.21309 9.85861 7.11358 10.4412 7.19997C11.0354 7.28809 11.5856 7.56499 12.0104 7.98978C12.4352 8.41457 12.7121 8.96472 12.8002 9.55897Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.8516 6.15002H13.8586"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
