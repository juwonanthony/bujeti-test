import Image from "next/image";
import React from "react";
import { integration_svg } from "../../assets/icons";
import { integrations } from "../../assets/image";

const Integration = () => {
  return (
    <section className="bg-[#F5F5F4]">
      <div className="container mx-auto flex flex-col items-center text-center px-5 pt-37 relative">
        <div className="flex gap-2 justify-center items-center mb-4">
          <Image src={integration_svg} alt={integration_svg}/>
          <h6 className="font-medium text-accent-orange">Integration</h6>
        </div>
        <div className="space-y-6 max-w-3xl w-full">
          <h1 className="font-bold text-6xl">
            Get more value <br />
            <span className="font-normal">from the tools you love.</span>
          </h1>
          <p>
            <span className="font-semibold">Connect your tools, connect your teams. </span>With over 100 apps available in our directory, your
            team’s favourite tolls are just a click away.
          </p>
          <button className="inline-flex text-black bg-white border border-gray-200 py-2 px-6 focus:outline-none rounded-lg font-semibold text-base">
            See Integrations
          </button>
        </div>
        <div className="flex justify-center items-center pt-24 ">
          <Image src={integrations} alt={integrations}/>
        </div>
      </div>
    </section>
  );
};

export default Integration;
