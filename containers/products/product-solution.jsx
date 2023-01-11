import React from 'react';
import { ListCard } from '../../components';
import BujetiExpenses from "../../assets/image/bujeti-expenses.png";
import BujetiOverview from "../../assets/image/bujeti-overview.png";

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


const ProductSolution = () => {
  return (
    <section className="container mx-auto py-37">
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
  )
}

export default ProductSolution