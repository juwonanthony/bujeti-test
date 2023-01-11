import React from "react";
import logo from "../../assets/image/logo.svg";
import LinkArror from "../../assets/icons/linkArror.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Image from "next/image";
import Link from "next/link";

const productLink = [
  { title: "Expense Management", link: "/" },
  { title: "Corporate Cards", link: "/" },
  { title: "Bank Payments", link: "/" },
  { title: "Reimbursements", link: "/" },
  { title: "Reporting & Insights", link: "/" },
  { title: "Pricing", link: "/" },
  { title: "Get Mobile App", link: "/", icon: true },
];

const usingBujeti = [
  { title: "For Startups", link: "/" },
  { title: "For Employees", link: "/" },
  { title: "For Financial Services", link: "/" },
  { title: "For Travel & Hospitality", link: "/" },
  { title: "For Technology", link: "/" },
  { title: "For Healthcare", link: "/" },
  { title: "For Marketing", link: "/" },
  { title: "For Restaurants", link: "/" },
  { title: "For Non-Profit", link: "/" },
];

const companyLink = [
  { title: "About Us", link: "/" },
  { title: "Blog", link: "/" },
  { title: "Careers", link: "/" },
  { title: "Contact", link: "/" },
];

const resourceLink = [
  { title: "Help", link: "/" },
  { title: "FAQ", link: "/" },
  { title: "Terms of Use", link: "/" },
  { title: "Privacy Policy", link: "/" },
];

const comingSoon = [
  { title: "Business Credit", link: "/" },
  { title: "Payroll ", link: "/" },
  { title: "Invoice Payment", link: "/" },
  { title: "Bank Sync", link: "/" },
];

const Footer = () => {
  const year = new Date();
  return (
    <footer className="md:bg-footer bg-no-repeat">
      <div className="container py-24 mx-auto md:px-0 px-6">
        <div className="flex flex-wrap justify-between">
          <div className="md:w-4/12 space-y-4">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
            <div className="lg:w-4/12 w-8/12 text-sm font-normal md:space-y-8 space-y-3 text-[#586068]">
              <p>7, 7/9 Molade Okoya Thomas Street, Lagos, Lagos, Nigeria</p>
              <p>
                Talk to a product expert today, use our <span className="text-black">chat box</span>,{" "}
                <span className="text-black">
                  <a href="mailto:info@bujeti.com">email us</a>
                </span>
                , or call <br />
                <span className="text-black">
                  <a href="tel:+234-802-345-6789">+234-802-345-6789</a>
                </span>
                .
              </p>
            </div>
          </div>
          <div className="md:w-8/12 grid md:grid-cols-3 md:mt-0 mt-10">
            <div>
              <h2 className="font-semibold text-black text-sm mb-3">Products</h2>
              <nav className="list-none mb-10 space-y-2 text-sm font-normal">
                {productLink.map(({ title, link, icon }, index) => (
                  <li key={index}>
                    <a className="text-gray-600 hover:text-gray-800 flex" href={link}>
                      {title}
                      {icon && (
                        <span className="ml-1">
                          {/* <LinkArror /> */}
                          <Image src={LinkArror} alt="link" />
                          {/* <SVG src={LinkArror} /> */}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </nav>
              <h2 className="font-semibold text-gray-500 text-sm mb-3">Coming ‘23</h2>
              <nav className="list-none mb-10 space-y-2 text-sm font-normal">
                {comingSoon.map(({ title, link }, index) => (
                  <li key={index}>
                    <a className="text-gray-400" href={link}>
                      {title}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
            <div>
              <h2 className="font-semibold text-black text-sm mb-3">Using Bujeti</h2>
              <nav className="list-none mb-10 space-y-2 text-sm font-normal">
                {usingBujeti.map(({ title, link }, index) => (
                  <li key={index}>
                    <a className="text-gray-500 hover:text-gray-800" href={link}>
                      {title}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
            <div>
              <h2 className="font-semibold text-black text-sm mb-3">Company</h2>
              <nav className="list-none mb-10 space-y-2 text-sm font-normal">
                {companyLink.map(({ title, link }, index) => (
                  <li key={index}>
                    <a className="text-gray-500 hover:text-gray-800" href={link}>
                      {title}
                    </a>
                  </li>
                ))}
              </nav>
              <h2 className="font-semibold text-black text-sm mb-3">Resources</h2>
              <nav className="list-none mb-10 space-y-2 text-sm font-normal">
                {resourceLink.map(({ title, link }, index) => (
                  <li key={index}>
                    <a className="text-gray-500 hover:text-gray-800" href={link}>
                      {title}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center mt-10">
          <p className="text-gray-500 text-xs text-center sm:text-left md:mr-10">
            <span className="font-medium"> © Bujeti Ltd {year.getFullYear()}, </span>
            All Right Reserved
          </p>
          <div className="inline-flex w-full space-x-1 justify-center md:justify-start md:w-auto">
            <Link href="/">
              {/* <Twitter /> */}
              <Image src={Twitter} alt={Twitter} />
            </Link>
            <Link href="/">
              <Image src={Linkedin} alt={Linkedin} />

              {/* <Linkedin /> */}
            </Link>
            <Link href="/">
              <Image src={Instagram} alt={Instagram} />

              {/* <Instagram /> */}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;