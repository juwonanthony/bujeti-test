import Image from "next/image";
import React from "react";

const ListItems = ({svg, title, description}) => {
  return (
    <div className="space-y-4 flex justify-center items-center">
      <div className="flex items-start gap-2 w-7/12">
        <Image src={svg} alt={svg} />
        <div>
          <p className="text-xl font-semibold text-accent-green mb-2">{title}</p>
          <p className="text-base text-white ">
           {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
