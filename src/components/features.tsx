import React from "react";

const Features = () => {
  return (
    <section className="bg-white section section--hidden flex flex-col">
      <div className="body-padding pt-32 sm:pt-36 md:pt-44 lg:pt-[200px] flex-1">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-12 md:gap-y-20 lg:gap-y-25 md:gap-x-24 lg:gap-x-32">
            {features.map((feature, index) => (
              <div className="flex items-start" key={index}>
                <figure className="w-5 h-5 sm:h-7 sm:w-7 lg:h-9 lg:w-9 text-accent-orange mr-4 sm:mr-6 lg:mr-8 xl:mr-12 flex-shrink-0">
                  {feature.icon}
                </figure>
                <div className="text-1sm sm:text-base lg:text-lg text-black lg:max-w-[350px]">
                  <h6>{feature.title}</h6>
                  <p className="mt-2.5 font-light">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 bg-black h-16 sm:h-20 md:h-25 lg:h-32 w-full"></div>
    </section>
  );
};

const features = [
  {
    title: "Targeted budgets for your needs",
    description:
      "Set up budgets, add beneficiaries to spend directly with our VISA™ virutal cards, no bank account needed.",
    icon: (
      <svg width="100%" viewBox="0 0 35 35" fill="none">
        <path
          d="M29.9009 22.4505C29.01 24.5573 27.6166 26.4138 25.8426 27.8576C24.0685 29.3015 21.9677 30.2888 19.7239 30.7332C17.4801 31.1776 15.1616 31.0655 12.9711 30.4069C10.7806 29.7483 8.7848 28.5631 7.15817 26.9549C5.53154 25.3467 4.32361 23.3646 3.64 21.1818C2.95639 18.9989 2.81791 16.6818 3.23666 14.4331C3.65541 12.1844 4.61864 10.0725 6.04214 8.28204C7.46565 6.49158 9.30608 5.07709 11.4025 4.16223"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.0072 17.0033C31.0072 15.1643 30.645 13.3434 29.9413 11.6445C29.2375 9.9455 28.206 8.40179 26.9057 7.10147C25.6054 5.80114 24.0617 4.76967 22.3627 4.06594C20.6638 3.36221 18.8428 3 17.0039 3V17.0033H31.0072Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Total transparency on spendings",
    description:
      "Set up budgets, add beneficiaries to spend directly with our VISA™ virutal cards, no bank account needed.",
    icon: (
      <svg width="100%" viewBox="0 0 35 35" fill="none">
        <path
          d="M3 20.5C3 20.5 8.45455 10 18 10C27.5455 10 33 20.5 33 20.5C33 20.5 27.5455 31 18 31C8.45455 31 3 20.5 3 20.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.0011 24.5455C20.2604 24.5455 22.092 22.7139 22.092 20.4546C22.092 18.1952 20.2604 16.3636 18.0011 16.3636C15.7417 16.3636 13.9102 18.1952 13.9102 20.4546C13.9102 22.7139 15.7417 24.5455 18.0011 24.5455Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="17.75" y1="2.75" x2="17.75" y2="5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line
          x1="24.295"
          y1="4.33038"
          x2="22.9817"
          y2="6.45767"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="29.4571"
          y1="7.31699"
          x2="27.7291"
          y2="9.12357"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="31.5848"
          y1="11.976"
          x2="30.9763"
          y2="12.2213"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="0.75"
          y1="-0.75"
          x2="3.25"
          y2="-0.75"
          transform="matrix(0.525302 0.850916 0.850916 -0.525302 10.9492 3.29822)"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="0.75"
          y1="-0.75"
          x2="3.25"
          y2="-0.75"
          transform="matrix(0.691235 0.72263 0.72263 -0.691235 5.56641 6.25659)"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="0.75"
          y1="-0.75"
          x2="1.40606"
          y2="-0.75"
          transform="matrix(0.927491 0.373847 0.373847 -0.927491 3 11)"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Manage funds with spending limits",
    description:
      "Set up budgets, add beneficiaries to spend directly with our VISA™ virutal cards, no bank account needed.",
    icon: (
      <svg width="100%" viewBox="0 0 35 35" fill="none">
        <path
          d="M17.9991 21.0909C20.2585 21.0909 22.09 19.2594 22.09 17C22.09 14.7407 20.2585 12.9091 17.9991 12.9091C15.7398 12.9091 13.9082 14.7407 13.9082 17C13.9082 19.2594 15.7398 21.0909 17.9991 21.0909Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.0909 21.0909C27.9094 21.5022 27.8552 21.9584 27.9354 22.4008C28.0157 22.8432 28.2265 23.2513 28.5409 23.5727L28.6227 23.6545C28.8763 23.9078 29.0775 24.2086 29.2147 24.5397C29.352 24.8708 29.4226 25.2257 29.4226 25.5841C29.4226 25.9425 29.352 26.2974 29.2147 26.6285C29.0775 26.9596 28.8763 27.2603 28.6227 27.5136C28.3694 27.7672 28.0687 27.9684 27.7376 28.1056C27.4065 28.2429 27.0516 28.3135 26.6932 28.3135C26.3348 28.3135 25.9799 28.2429 25.6488 28.1056C25.3177 27.9684 25.0169 27.7672 24.7636 27.5136L24.6818 27.4318C24.3604 27.1174 23.9523 26.9066 23.5099 26.8264C23.0675 26.7462 22.6113 26.8003 22.2 26.9818C21.7967 27.1547 21.4527 27.4417 21.2104 27.8075C20.9681 28.1734 20.8381 28.6021 20.8364 29.0409V29.2727C20.8364 29.996 20.549 30.6897 20.0376 31.2012C19.5261 31.7127 18.8324 32 18.1091 32C17.3858 32 16.6921 31.7127 16.1806 31.2012C15.6692 30.6897 15.3818 29.996 15.3818 29.2727V29.15C15.3713 28.6986 15.2252 28.2609 14.9625 27.8937C14.6999 27.5265 14.3328 27.2468 13.9091 27.0909C13.4978 26.9094 13.0416 26.8552 12.5992 26.9354C12.1568 27.0157 11.7487 27.2265 11.4273 27.5409L11.3455 27.6227C11.0922 27.8763 10.7914 28.0775 10.4603 28.2147C10.1292 28.352 9.77431 28.4226 9.41591 28.4226C9.0575 28.4226 8.70261 28.352 8.37153 28.2147C8.04044 28.0775 7.73965 27.8763 7.48636 27.6227C7.23279 27.3694 7.03163 27.0687 6.89438 26.7376C6.75713 26.4065 6.68649 26.0516 6.68649 25.6932C6.68649 25.3348 6.75713 24.9799 6.89438 24.6488C7.03163 24.3177 7.23279 24.0169 7.48636 23.7636L7.56818 23.6818C7.88255 23.3604 8.09343 22.9523 8.17364 22.5099C8.25385 22.0675 8.1997 21.6113 8.01818 21.2C7.84532 20.7967 7.5583 20.4527 7.19245 20.2104C6.8266 19.9681 6.39789 19.8381 5.95909 19.8364H5.72727C5.00396 19.8364 4.31026 19.549 3.7988 19.0376C3.28734 18.5261 3 17.8324 3 17.1091C3 16.3858 3.28734 15.6921 3.7988 15.1806C4.31026 14.6692 5.00396 14.3818 5.72727 14.3818H5.85C6.30136 14.3713 6.7391 14.2252 7.10632 13.9625C7.47354 13.6999 7.75325 13.3328 7.90909 12.9091C8.09061 12.4978 8.14476 12.0416 8.06455 11.5992C7.98434 11.1568 7.77346 10.7487 7.45909 10.4273L7.37727 10.3455C7.1237 10.0922 6.92254 9.79138 6.78529 9.46029C6.64804 9.12921 6.5774 8.77431 6.5774 8.41591C6.5774 8.0575 6.64804 7.70261 6.78529 7.37153C6.92254 7.04044 7.1237 6.73965 7.37727 6.48636C7.63056 6.23279 7.93135 6.03163 8.26244 5.89438C8.59352 5.75713 8.94841 5.68649 9.30682 5.68649C9.66522 5.68649 10.0201 5.75713 10.3512 5.89438C10.6823 6.03163 10.9831 6.23279 11.2364 6.48636L11.3182 6.56818C11.6396 6.88255 12.0477 7.09343 12.4901 7.17364C12.9325 7.25385 13.3887 7.1997 13.8 7.01818H13.9091C14.3124 6.84532 14.6564 6.5583 14.8987 6.19245C15.141 5.8266 15.271 5.39789 15.2727 4.95909V4.72727C15.2727 4.00396 15.5601 3.31026 16.0715 2.7988C16.583 2.28734 17.2767 2 18 2C18.7233 2 19.417 2.28734 19.9285 2.7988C20.4399 3.31026 20.7273 4.00396 20.7273 4.72727V4.85C20.729 5.2888 20.859 5.71751 21.1013 6.08336C21.3436 6.44921 21.6876 6.73623 22.0909 6.90909C22.5022 7.09061 22.9584 7.14476 23.4008 7.06455C23.8432 6.98434 24.2513 6.77346 24.5727 6.45909L24.6545 6.37727C24.9078 6.1237 25.2086 5.92254 25.5397 5.78529C25.8708 5.64804 26.2257 5.5774 26.5841 5.5774C26.9425 5.5774 27.2974 5.64804 27.6285 5.78529C27.9596 5.92254 28.2603 6.1237 28.5136 6.37727C28.7672 6.63056 28.9684 6.93135 29.1056 7.26244C29.2429 7.59352 29.3135 7.94841 29.3135 8.30682C29.3135 8.66522 29.2429 9.02012 29.1056 9.3512C28.9684 9.68229 28.7672 9.98307 28.5136 10.2364L28.4318 10.3182C28.1174 10.6396 27.9066 11.0477 27.8264 11.4901C27.7462 11.9325 27.8003 12.3887 27.9818 12.8V12.9091C28.1547 13.3124 28.4417 13.6564 28.8075 13.8987C29.1734 14.141 29.6021 14.271 30.0409 14.2727H30.2727C30.996 14.2727 31.6897 14.5601 32.2012 15.0715C32.7127 15.583 33 16.2767 33 17C33 17.7233 32.7127 18.417 32.2012 18.9285C31.6897 19.4399 30.996 19.7273 30.2727 19.7273H30.15C29.7112 19.729 29.2825 19.859 28.9166 20.1013C28.5508 20.3436 28.2638 20.6876 28.0909 21.0909V21.0909Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Spend in multiple currency",
    description:
      "Set up budgets, add beneficiaries to spend directly with our VISA™ virutal cards, no bank account needed.",
    icon: (
      <svg width="100%" viewBox="0 0 35 35" fill="none">
        <path
          d="M18 4L5 10.5L18 17L31 10.5L18 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 23.5L18 30L31 23.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 17L18 23.5L31 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default Features;
