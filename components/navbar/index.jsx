import React, { useEffect, useState } from 'react'
// import { useLocation, useNavigate, Link } from "react-router-dom";
import logo from '../../assets/image/logo.svg'
import white_logo from '../../assets/image/white_logo.svg'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Image from 'next/image'

const colorListByPage = {
  industries: 'bg-secondary-900',
  products: 'bg-white',
  customers: 'bg-grey-warm-800',
  '/': 'bg-white',
}

const Navbar = ({ bg }) => {
  const [click, setClick] = useState(false)
  // const navigate = useNavigate();
  // const { pathname } = useLocation();
  const handleClick = () => {
    setClick(!click)
  }
  const [color, setColor] = useState('')

  // const handleNavClick = () => {
  //   if (pathname !== "/") navigate("/");
  //   setClick(false);

  //   return;
  // };
  const textColor = color === 'bg-white' ? 'text-gray-800' : 'text-white'
  const textColorInactive = color === 'bg-white' ? 'text-gray-600' : 'text-white'
  const buttonBg = color === 'bg-white' ? 'bg-black' : 'bg-white'
  const buttonText = color === 'bg-white' ? 'text-white' : 'text-accent-gray'

  const NavItem = ({ href, text }) => {
    useEffect(() => {
      getColorByPathname(router.asPath)
    }, [href, router.asPath])

    const router = useRouter()
    const isActive = router.asPath === href

    return (
      <NextLink
        href={href}
        className={cn(
          isActive ? `font-semibold ${textColor} ` : `font-normal ${textColorInactive} `,
          'hidden rounded-lg p-1 transition-all sm:px-3 sm:py-2   md:inline-block'
        )}
      >
        <span className="">{text}</span>
      </NextLink>
    )
  }

  const getColorByPathname = (pathname) => {
    let path = pathname.split('/').filter((item) => item !== '')[0]
    setColor(colorListByPage[path ?? '/'])
  }

  return (
    <header
      className={`${color} top-0 left-0 right-0 z-50 flex justify-center py-4 px-6 lg:py-4 lg:px-16`}
    >
      <div className="container flex w-screen flex-row items-center justify-between">
        <div className="z-50">
          <NextLink href="/">
            <Image src={color === 'bg-white' ? logo : white_logo} alt="" />
          </NextLink>
        </div>
        <div className="hidden w-full md:flex">
          <div className="flex md:ml-auto md:mr-auto">
            <button
              className="absolute z-50 block -translate-y-4 -translate-x-8 md:hidden"
              onClick={handleClick}
            ></button>
            <nav
              className={`${textColor} flex flex-row items-center space-x-8 text-sm font-normal lg:text-base`}
            >
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
          <div className="flex flex-row items-center space-x-4 text-sm font-medium lg:text-[14px]">
            <button
              className={`h-11 ${textColor} flex items-center justify-center px-6 font-semibold `}
            >
              Contact Sales
            </button>
            <button
              className={`${buttonText} ${buttonBg} flex h-11 items-center justify-center rounded-lg px-6 text-center font-semibold`}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
