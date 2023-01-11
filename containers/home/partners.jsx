import React, { useEffect, useState } from "react";
import { antler, sleep, webflow } from "../../assets/image";
import { PartnerLogo } from "../../components";

const partners = [
  { image: [antler, sleep, webflow, antler, sleep] },
  { image: [antler, sleep, webflow, antler, sleep, webflow] },
];
const Partners = () => {
  return (
    <section className="container mx-auto flex flex-col items-center px-5">
      <div className="text-center max-w-3xl w-full mb-10">
        <h1 className="title-font lg:text-5xl sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
          Powering Africa’s industry leaders
        </h1>
        <p className="mb-8 md:text-sm font-light text-gray-900 leading-relaxed">
          {" "}
          From ambitious new-generation to leading edge enterprise
        </p>
      </div>
      <div className="flex flex-col items-center">
        {partners?.map(({ image }, index) => (
          <PartnerLogo column={image.length} image={image} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Partners;
