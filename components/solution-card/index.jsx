import Image from "next/image";
import React from "react";

const SolutionCard = ({ svg, highlighted, text }) => {
  return (
    <div className="flex gap-2 items-baseline">
      <Image src={svg} alt={svg} />
      <p className="text-accent-orange font-medium md:w-4/6">
        {highlighted} <span className="text-gray-900">{text}</span>
      </p>
    </div>
  );
};

export default SolutionCard;
