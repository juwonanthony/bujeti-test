import Image from "next/image";
import React from "react";
import { CardPhone, phone_card } from "../../assets/image";

function CtaBanner() {
  return (
    <>
      <section className="gradient__bg h-full w-full">
        <div className="container mx-auto flex md:flex-row flex-col items-start px-5 pt-10 relative">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 static -mt-40">
            <Image src={phone_card} alt={phone_card} />
          </div>
          <div className="lg:flex-grow  md:w-1/2 lg:pl-24 md:pl-16 pt-14 flex flex-col md:items-start md:text-left items-start text-center max-w-3xl">
            <h1 className="sm:text-6xl text-3xl mb-4 font-bold text-accent-gray">
              Ready to take control <span className="font-normal">of your finances?</span>
            </h1>
            <p className="mb-8 leading-relaxed">Sign up and get started in minutes.</p>
            <div className="flex lg:flex-row md:flex-col space-x-4 items-center lg:text-[14px] font-medium text-sm">
              <button className="h-11 rounded-lg text-center bg-black text-white font-semibold flex justify-center items-center px-6">
                Try it today
              </button>
              <button className="h-11 text-black bg-white border border-gray-200 rounded-lg  font-semibold flex justify-center items-center px-6 ">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-gradient-to-r from-accent-green p-[0.5px]" />
    </>
  );
}

export default CtaBanner;
