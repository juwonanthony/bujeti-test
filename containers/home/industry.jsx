import React from "react";
import { usecase } from "../../assets/image";
import MoreArrow from "../../assets/icons/more-arrow.svg";
import { SmallHeading } from "../../components";
import { case_svg } from "../../assets/icons";
import Image from "next/image";

const theIndustry = [
  "Financial Services",
  "Travel & Hospitality",
  "Technology",
  "Healthcare",
  "Marketing",
  "Non-Profit",
];
const Industry = () => {
  return (
    <section className="pt-37 px-0">
      <div className="bg-accent-light_yellow flex flex-wrap h-full w-full">
        <div className="flex flex-wrap lg:w-7/12 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:pl-28 sm:pr-20 px-4 pt-36 mb-6">
            <SmallHeading color="#AF7421" svg={case_svg} title="Use Cases" />
            <h1 className="leading-tight font-normal text-5xl my-4 text-accent-gray">
              The expense solution <br /> <span className="font-semibold">for every industry</span>
            </h1>
            <h1 className="font-semibold text-5xl text-accent-brown flex items-center mt-12 mb-4">
              Startups <Image src={MoreArrow} alt={MoreArrow} className="ml-3 h-7 w-7" />
              {/* <MoreArrow className="ml-3 h-7 w-7" /> */}
            </h1>
            <p className=" leading-relaxed md:w-10/12 w-full text-gray-500">
              Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.
            </p>
            <div className="mt-8">
              {theIndustry.map((item, index) => {
                const number = (index + 1) * 10;
                const percent = 100 - number + "%";
                return (
                  <h4 key={index} className="text-gray-700 font-medium text-3xl mb-5" style={{ opacity: percent }}>
                    {item}
                  </h4>
                );
              })}
            </div>
          </div>
        </div>
        <div className="lg:w-5/12 sm:w-1/3 w-full h-full flex overflow-hidden ">
          <Image src={usecase} className="w-fit h-fit ml-auto " alt="" />
        </div>
      </div>
    </section>
  );
};

export default Industry;
