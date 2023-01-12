import React from 'react';
import { CtaBanner, Industry, Partners, ProductSolution, Testimonials } from '../containers';
import LayoutWarpper from '../components/layoutWarapper';
import CustomerHero from '../containers/customers/customer-hero';
import CaseStudies from '../containers/case-studies';

import { chevron_left, chevron_right, partner_svg, raap_logo, voltron_svg } from '../assets/icons';
import { olumide, CardPhone, raap, raap_lady, fliqpayLogo, sozoLogo } from '../assets/image';

const caseStudyData = [
  {
    id: 1,
    logo: raap_logo,
    image: olumide,
    title: 'Flawless automation for our business operation with Bujeti.',
    description: 'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    link: '/blog/voltron',
    link_tag: "See case study"
  },
  {
    id: 1,
    logo: raap_logo,
    image: raap_lady,
    title: 'Providing a seamless, personalized expense experience for',
    description: 'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    link: '/blog/voltron',
    link_tag: "See case study"
  },
];

const customerStoriesData = [
  {
    id: 1,
    logo: fliqpayLogo,
    image: raap_lady,
    title: 'Flawless automation for our business operation with Bujeti.',
    description: 'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    link: '/blog/voltron',
    link_tag: "Continue Watching"
  },
  {
    id: 1,
    logo: sozoLogo,
    image: olumide,
    title: 'Flawless automation for our business operation with Bujeti.',
    description: 'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    link: '/blog/voltron',
    link_tag: "Continue Watching"
  },
];

const Customers = () => {
  return (
    <LayoutWarpper>
      <CustomerHero />
      <CaseStudies
        slug="Case Study"
        type="case-study"
        bg="bg-grey-warm"
        title={
          <h1 className="text-6xl py-4">
            Everything other details <br /> you need to know
          </h1>
        }
        data={caseStudyData}
      />
      <CaseStudies
        slug="Customer stories"
        type="customer-stories"
        bg="bg-white"
        title={
          <h1 className="text-6xl py-4">
            Everything other details <br /> you need to know
          </h1>
        }
        data={customerStoriesData}
      />
      <Industry />
      <Testimonials />
      <section className="py-40">
        <Partners />
      </section>
      <CtaBanner />
    </LayoutWarpper>
  );
};

export default Customers;
