import Image from "next/image";
import React from "react";

const PartnerLogo = ({ column, image = [] }) => {
  return (
    <div className={`grid gap-2 mb-10`} style={{ gridTemplateColumns: `repeat(${column}, minmax(0, 1fr))` }}>
      {image.map((item, index) => (
        <Image key={index} src={item} alt={item} className="h-full w-ful" />
      ))}
    </div>
  );
};

export default PartnerLogo;
