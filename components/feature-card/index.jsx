import Image from "next/image";
import Link from "next/link";
import React from "react";
import MoreArrow from "../../assets/icons/more-arrow.svg";

const FeatureCard = ({ title, description, link, index, image }) => {
  const textPosition = index % 2 === 0 ? "mt-auto" : "mb-auto";
  return (
    <div className="w-full h-[500px]">
      <div
        className="h-full px-6 py-10 flex flex-col relative overflow-hidden bg-contain bg-no-repeat"
        style={{ background: `url(${image.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
        <div className={`${textPosition}`}>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="md:text-base text-sm text-accent-gray mt-3">{description}</p>
          <Link href="/" className="flex text-sm font-semibold text-accent-brown items-center group mt-5">
            <span className="mr-2">Discover more </span>{" "}
            <Image
              src={MoreArrow}
              alt={MoreArrow}
              className="group-hover:translate-x-1 ease-in-out duration-700 transition-all"
            />
            {/* <MoreArrow className="group-hover:translate-x-1 ease-in-out duration-700 transition-all" /> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
