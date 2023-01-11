import Image from "next/image";
import React from "react";
import { chevron_left, chevron_right, partner_svg, voltron_svg } from "../../assets/icons";
import { olumide } from "../../assets/image";
import { SmallHeading } from "../../components";

const Testimonials = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-24">
      <div className="space-y-3 mb-20">
        <SmallHeading svg={partner_svg} title="Partners" color="#D28B28" />
        <h1 className="text-5xl font-semibold text-gray-900">Here’s what they say {'"'}</h1>
      </div>

      <div className="grid md:grid-cols-2 items-center bg-[#FBF5EC] rounded-3xl">
        {/* <div className="min-h-full w-full"> */}
        <Image
          className="object-cover w-full max-w-xl rounded-t-3xl h-full md:rounded-none md:rounded-l-3xl"
          src={olumide}
          alt=""
        />
        {/* </div> */}

        <div className="flex flex-col justify-between pr-28 py-20 leading-normal">
          <Image src={voltron_svg} alt="" className="mb-10" />

          <h5 className="text-[42px] font-semibold tracking-tighter text-gray-900">
            Since we started using Bujeti, we’ve had peace of mind.{" "}
            <span className="font-normal">All my expenses are tracked easily and I can see them in real time.</span>
          </h5>
          <div className="my-8">
            <p className="mb-3 font-semibold text-gray-800 ">
              Olumide Soyombo <br /> <span className="font-normal mt-2">Co-Founder, Voltron Capital</span>
            </p>
          </div>
          <div className="flex gap-4">
            <Image
              src={chevron_left}
              alt=""
              className="bg-gray-200 flex justify-center items-center p-2 h-8 w-8 rounded-full cursor-pointer"
            />
            <Image
              src={chevron_right}
              alt=""
              className="bg-black flex justify-center items-center p-2 h-8 w-8 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
