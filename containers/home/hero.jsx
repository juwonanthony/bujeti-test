import Image from "next/image";
import React from "react";
import Playicon from "../../assets/icons/play.svg";

const Hero = () => {
  return (
    <section className="container mx-auto flex px-5 py-24 items-center justify-center flex-col min-h-[610px]">
      <div className="text-center max-w-3xl w-full">
        <h1 className="title-font lg:text-7xl sm:text-4xl text-3xl mb-4 font-normal text-gray-900">
          Take control of your business <span className="text-accent-orange font-bold">expensing.</span>
        </h1>
        <p className="mb-8 md:text-xl font-light text-gray-900 leading-relaxed">
          Supercharge your finance, empower your teams and track the pulse of your business with an end-to-end expense
          management platform tailored for African SMBs.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-accent-orange border-0 py-3 px-6 focus:outline-none hover:bg-black rounded-lg font-semibold text-base">
            Try it today
          </button>
          <button className="ml-4 inline-flex text-gray-700 items-center bg-white border-2 border-gray-200 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded-lg font-semibold text-base">
            {/* <ReactSVG src={Playicon} className="mr-1 p-0.5" /> Demo */}
            <Image src={Playicon} alt={Playicon} className="mr-1 p-0.5" /> Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
