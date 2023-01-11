import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate, Link } from "react-router-dom";
import logo from "../../assets/image/logo.svg";
import white_logo from "../../assets/image/white_logo.svg";
import NextLink from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import Image from "next/image";

const colorListByPage = {
  industries: "bg-secondary-900",
  products: "bg-white",
  customers: "bg-grey-warm-800",
  "/": "bg-white",
};

const Navbar = ({ bg }) => {
  const [click, setClick] = useState(false);
  // const navigate = useNavigate();
  // const { pathname } = useLocation();
  const handleClick = () => {
    setClick(!click);
  };
  const [color, setColor] = useState("");

  // const handleNavClick = () => {
  //   if (pathname !== "/") navigate("/");
  //   setClick(false);

  //   return;
  // };
  const textColor = color === "bg-white" ? "text-gray-800" : "text-white";
  const textColorInactive = color === "bg-white" ? "text-gray-600" : "text-white";
  const buttonBg = color === "bg-white" ? "bg-black" : "bg-white";
  const buttonText = color === "bg-white" ? "text-white" : "text-gray-900";

  const NavItem = ({ href, text }) => {
    useEffect(() => {
      getColorByPathname(router.asPath);
    }, [href]);

    const router = useRouter();
    const isActive = router.asPath === href;

    return (
      <NextLink
        href={href}
        className={cn(
          isActive ? `font-semibold ${textColor} ` : `font-normal ${textColorInactive} `,
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200  transition-all"
        )}
      >
        <span className="">{text}</span>
      </NextLink>
    );
  };

  const getColorByPathname = (pathname) => {
    let path = pathname.split("/").filter((item) => item !== "")[0];
    setColor(colorListByPage[path ?? "/"]);
  };

  return (
    <header className={`${color} py-4 px-6 lg:py-4 lg:px-16 top-0 left-0 right-0 z-50 flex justify-center`}>
      <div className="flex flex-row justify-between items-center w-screen container">
        <div className="z-50">
          <NextLink href="/">
            <Image src={color === "bg-white" ? logo : white_logo} alt="" />
          </NextLink>
        </div>
        <div className="w-full md:flex hidden">
          <div className="md:ml-auto md:mr-auto flex">
            <button
              className="-translate-y-4 -translate-x-8 md:hidden block absolute z-50"
              onClick={handleClick}
            ></button>
            <nav className={`${textColor} flex flex-row space-x-8 items-center font-normal lg:text-base text-sm`}>
              <NavItem href="/why-bujeti" text="Why Bujeti" />
              <NavItem href="/products" text="Products" />
              <NavItem href="/customers" text="Pricing" />
              <NavItem href="/industries" text="Company" />
              {/* <Link className={`cursor-pointer ${textColor}`} to="/" onClick={handleNavClick}>
                
              </Link>

              <Link className={`cursor-pointer  ${textColor}`} to="/products" onClick={handleNavClick}>
                
              </Link>

              <Link className={`cursor-pointer  ${textColor}`} to="/industry" onClick={handleNavClick}>
                
              </Link>

              <Link className={`cursor-pointer  ${textColor}`} to="/customers" onClick={handleNavClick}>
                
              </Link> */}
            </nav>
          </div>
          <div className="flex flex-row space-x-4 items-center lg:text-[14px] font-medium text-sm">
            <button className={`h-11 ${textColor} font-semibold flex justify-center items-center px-6 `}>
              Contact Sales
            </button>
            <button
              className={`${buttonText} ${buttonBg} h-11 rounded-lg text-center font-semibold flex justify-center items-center px-6`}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
