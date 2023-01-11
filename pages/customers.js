import React from "react";
import {
  CtaBanner,
  Features,
  Hero,
  Industry,
  Integration,
  Partners,
  Solution,
  Testimonials,
  WhyUs,
} from "../containers";

import { fraud } from "../assets/icons";

import HeroWithImages from "../components/hero-with-image";
import BujetiImage from "../assets/image/bujeti-product.png";

import BujetiOverview from "../assets/image/bujeti-overview.png";
import BujetiExpenses from "../assets/image/bujeti-expenses.png";
import { ListCard } from "../components";

const features = [
  {
    title: "Customized budgets",
    body: "Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.",
    links: [{ name: "Start using budgets", to: "/budgets" }],
    image: BujetiExpenses,
  },
  {
    title: "Track budgets in Real-time",
    body: "Check out your budget anytime, you’ll never be caught off guard with a surprise expense or transaction again.",
    links: [{ name: "Start using budgets", to: "/budgets" }],
    image: BujetiOverview,
  },
  {
    title: "Spending control is easier ",
    body: "Ensure you respect your spending policy by setting transparent and secure spending limits directly in your Bujeti corporate cards.",
    links: [{ name: "Start using spend limits", to: "/budgets" }],
    image: BujetiExpenses,
  },
];

const Customers = () => {
  return (
    <>
      <HeroWithImages
        slug="For startup"
        title={
          <h1 className="text-6xl py-4">
            Get your startup
            <br /> <b>finances in order.</b>
          </h1>
        }
        body="Supercharge your finance, empower your teams and track the pulse of your
         business with an end-to-end expense management platform tailored for African SMBs."
        image={BujetiImage}
        bg="grey-warm-800"
      />

      <section className="container mx-auto py-40">
        <section>
          {features.map((feature, i) => {
            return (
              <>
                <ListCard data={feature} key={i} />
                {features.length === i + 1 ? null : (
                  <div className="my-20 w-full bg-slate-50" style={{ height: 2, color: "#D7D3D0" }}></div>
                )}
              </>
            );
          })}
        </section>
      </section>
      <Industry />
      <Testimonials />
      <section className="py-40">
        <Partners />
      </section>
      <CtaBanner />
    </>
  );
};

export default Customers;
