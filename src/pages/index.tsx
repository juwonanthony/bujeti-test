import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import EarlyAccessModal from "../components/early-access-modal";

const Home = () => {
  const contentRef = useRef<HTMLSpanElement>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const typed = new Typed(contentRef.current, {
      strings: ["business", "personal", "spending"].map((t) => stringWithHTML(t)), // Strings to display: ;
      startDelay: 500,
      typeSpeed: 200,
      backSpeed: 200,
      backDelay: 350,
      smartBackspace: true,
      loop: true,
    });

    document.documentElement.classList.add("full-screen");

    // Destropying
    return () => {
      typed.destroy();
      document.documentElement.classList.remove("full-screen");
    };
  }, []);

  return (
    <main className="bg-grey-bg min-h-screen px-5 relative">
      <div className="h-full w-full relative new-container py-12.5 flex flex-col items-center">
        <figure className="h-7 sm:h-8 md:h-10 font-medium">
          <svg height="100%" viewBox="0 0 380 159" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M152.018 122.764V112.27C144.843 120.182 135.661 124.116 124.619 124.116C115.321 124.116 107.597 121.447 102.209 115.887C96.8303 110.336 94.1039 102.239 94.1039 92.0404V33.9521H117.684V90.858C117.684 96.1808 118.955 99.7685 121.075 102.025C123.17 104.255 126.461 105.572 131.367 105.572C139.15 105.572 145.597 101.767 150.616 93.4251V33.9521H174.196V122.764H152.018ZM206.768 33.9521V122.445C206.768 133.059 204.046 141.64 198.276 147.859C192.516 154.067 184.019 157.596 173.122 158.731L170.536 159V140.93L172.456 140.577C176.051 139.915 178.582 138.283 180.273 135.752C182.011 133.15 183.02 129.358 183.02 124.134V33.9521H206.768ZM204.26 3.0956L204.281 3.11421C206.913 5.42042 208.113 8.86233 208.139 12.1039C208.164 15.3364 207.02 18.7649 204.444 21.008L204.426 21.0242L204.407 21.0399C201.837 23.1843 198.207 24.1174 194.831 24.1174C191.462 24.1174 187.846 23.1871 185.343 21.008C182.767 18.7649 181.624 15.3364 181.649 12.1039C181.674 8.86233 182.874 5.42042 185.507 3.11421L185.509 3.11183L185.512 3.10945C188.001 0.942717 191.52 0 194.83 0C198.147 0 201.682 0.945018 204.238 3.07751L204.26 3.0956ZM270.468 93.4105H294.391L293.564 96.3856C288.679 113.959 273.779 124.116 253.351 124.116C241.64 124.116 231.763 120.184 223.878 112.468C215.855 104.616 212.039 93.1009 212.039 78.3582C212.039 63.6249 215.85 51.936 223.878 44.0796C231.782 36.3457 241.668 32.6008 253.351 32.6008C265.006 32.6008 274.865 36.1572 282.932 43.5165C291.135 51.0003 294.999 61.5034 294.999 74.9799V83.5758H236.294V85.2837C236.294 93.384 238.237 99.0338 241.214 102.618C244.146 106.149 248.297 107.937 253.351 107.937C257.937 107.937 261.445 106.814 264.086 104.773C266.732 102.728 268.738 99.5837 269.988 95.1225L270.468 93.4105ZM349.603 50.1305H327.167V96.2633C327.167 100.659 328.055 103.493 329.431 105.199C330.727 106.807 332.75 107.768 335.958 107.768C338.729 107.768 342.907 107.141 348.461 105.961L351.29 105.36V120.741L349.709 121.286C344.04 123.237 338.212 124.116 332.078 124.116C322.925 124.116 315.653 122.07 310.705 117.115C305.758 112.162 303.587 104.755 303.587 95.0809V50.1305H291.948V33.9521H303.587V18.6041L327.167 12.4906V33.9521H349.603V50.1305ZM378.313 33.9521V122.764H354.565V33.9521H378.313ZM376.142 3.0956L376.163 3.11421C378.796 5.42057 380 8.86663 380 12.1221C380 15.3737 378.796 18.8075 376.12 21.0399C373.549 23.1852 369.918 24.1174 366.523 24.1174C363.136 24.1174 359.514 23.1896 356.944 21.0549C354.184 18.8333 352.92 15.3998 352.92 12.1221C352.92 8.83439 354.189 5.37966 356.919 3.08341L356.922 3.08045L356.926 3.07751C359.497 0.932188 363.128 0 366.523 0C369.918 0 373.549 0.932188 376.12 3.07751L376.142 3.0956ZM240.873 53.3668C238.021 56.6925 236.321 61.6198 236.294 67.9042H270.407C270.381 61.3515 268.672 56.4393 265.84 53.1912C263.024 49.9603 258.861 48.1035 253.351 48.1035C247.882 48.1035 243.711 50.0575 240.873 53.3668ZM0 125.11H49.5223C62.324 125.11 71.9253 122.068 78.4946 115.984C84.8954 110.069 88.0958 102.634 88.0958 93.8457C88.0958 80.4948 79.3587 70.2704 66.3885 67.3974C78.4946 63.8972 85.0639 52.7791 85.0639 40.6112C85.0639 31.9923 81.8634 24.5564 75.4626 18.6414C69.0617 12.7265 59.4605 9.68452 46.6588 9.68452H0V37.3679H26.2413V21.4148L68.4149 44.4061L26.2413 67.3974V51.4443H0V83.3506H26.2413V67.3974L68.4149 90.3888L26.2413 113.38V97.4269H0V125.11Z"
              fill="currentColor"
            />
          </svg>
        </figure>
        <div className="flex flex-col items-center">
          <h1 className="mt-8 md:mt-10 lg:mt-12.5 text-[31px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8lg header-text text-center">
            Simple budgeting tool <br /> for your{" "}
            <span className="relative inline-block" ref={contentRef}>
              {/* <span className="content inline-block relative z-10" ref={contentRef}></span> */}
            </span>{" "}
            needs.
          </h1>
          <p className="mt-6 text-center text-lg sm:text-xl lg:text-2xl max-w-[760px] font-light">
            Bujeti helps re more than just wishful thinking— they’re a powerful tool to control spend. Set spend limits
            in Bujeti which are directly tied to
          </p>

          <button
            className="bg-black h-12.5 sm:h-15 text-accent-green px-16 sm:px-20 lg:px-25 py-3.75 text-base sm:text-lg rounded-[10px] font-medium hover:shadow-none transition-all duration-150 shadow-card mt-6 sm:mt-8 flex items-center"
            onClick={() => setShowModal(true)}
          >
            Get early access
          </button>
        </div>
      </div>
      <div className="fixed-stuff">
        <figure className="card-fixed">
          <img src="/images/card.png" alt="" className="w-full" />
        </figure>
        <figure className="dashboard bg-grey-light rounded-[5px]">
          <img src="/images/dashboard.png" alt="" className="w-full" />
        </figure>
        <figure className="app">
          <img src="/images/app.png" alt="" className="w-full" />
        </figure>
      </div>
      <EarlyAccessModal {...{ showModal, setShowModal }} />
    </main>
  );
};

const stringWithHTML = (text: string) => {
  return `<span class='relative display-text inline-block'><span class='font-medium relative z-10 inline-block'>${text}</span></span>`;
};

export default Home;
