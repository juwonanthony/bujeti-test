import React from "react";
import { cup_svg, globe_svg, integrate_svg, mobile_svg, statics_svg, world_svg } from "../../assets/icons";
import { SolutionCard } from "../../components";

const solutionList = [
  { svg: integrate_svg, highlighted: "Fully integrated.", text: "Manage all your business expenses in 1 place." },
  { svg: globe_svg, highlighted: "Multi-currency.", text: "Payment cards that works anywhere in the world." },
  { svg: cup_svg, highlighted: "Capital.", text: "Keep your business afloat with flexible cash advance." },
  { svg: statics_svg, highlighted: "Stay informed.", text: "Instant activity reporting and insights." },
  { svg: mobile_svg, highlighted: "Go Mobile.", text: "Smooth user-friendly experience on the go." },
  { svg: world_svg, highlighted: "For Africans.", text: "Unique finance platform made by Africans." },
];
const Solutions = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 pb-37">
      <h1 className="text-6xl font-normal max-w-2xl w-full mb-16">
        Total expense solutions, <span className="font-semibold">all in one place.</span>
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {solutionList.map(({ svg, highlighted, text }, index) => (
          <SolutionCard svg={svg} highlighted={highlighted} text={text} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Solutions;
