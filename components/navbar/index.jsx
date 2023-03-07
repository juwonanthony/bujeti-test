import React, { useEffect, useState } from 'react'
// import { useLocation, useNavigate, Link } from "react-router-dom";
import logo from '../../assets/image/logo.svg'
import white_logo from '../../assets/image/white_logo.svg'
import NextLink from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Link from 'next/link'
import { ArrowRightIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

import { navDropdownArrow, whiteUpArrow, hambuggerBlack, hambuggerWhite } from 'assets/icons'

import { dropdownData } from 'utils'

const navItem = [
  {
    id: 1,
    title: 'Why Bujeti',
    hasIcon: true,
    link: '#',
    isVisible: false,
  },
  {
    id: 2,
    title: 'Products',
    hasIcon: true,
    link: '#',
    isVisible: false,
  },
  {
    id: 3,
    title: 'Pricing',
    hasIcon: false,
    link: '/pricing',
    isVisible: false,
  },
  {
    id: 4,
    title: 'Company',
    hasIcon: true,
    link: '#',
    isVisible: false,
  },
]

const colorListByPage = {
  industries: 'bg-secondary-900',
  startup: 'bg-secondary-900',
  finance: 'bg-secondary-900',
  employees: 'bg-secondary-900',
  healthcare: 'bg-secondary-900',
  hospitality: 'bg-secondary-900',
  technology: 'bg-secondary-900',
  marketing: 'bg-secondary-900',
  restaurants: 'bg-secondary-900',
  'non-profits': 'bg-secondary-900',
  products: 'bg-white',
  'expense-mangement': 'bg-white',
  'corporate-cards': 'bg-white',
  'bank-payments': 'bg-white',
  reimbursements: 'bg-white',
  'reporting-insights': 'bg-white',
  'business-credit': 'bg-white',
  payroll: 'bg-white',
  'invoice-payment': 'bg-white',
  'bank-sync': 'bg-white',
  customers: 'bg-grey-warm-800',
  about: 'bg-grey-warm',
  '/': 'bg-white',
}

const NavItem = ({
  href,
  text,
  hasIcon,
  textColor,
  textColorInactive,
  getColorByPathname,
  onClick,
  isVisible,
  dropDownData,
  onClose,
  color,
}) => {
  const router = useRouter()

  useEffect(() => {
    getColorByPathname(router.asPath)
  }, [router.asPath, getColorByPathname])

  const isActive = router.asPath === href

  if (href === '#') {
    return (
      <>
        <span
          onMouseEnter={() => onClick(text)}
          onMouseLeave={() => onClick('')}
          className={cn(
            isActive ? `font-semibold ${textColor} ` : `font-normal ${textColorInactive}`,
            'group   cursor-pointer items-center gap-2 rounded-lg transition-all sm:py-2 md:flex'
          )}
        >
          {text}
          {hasIcon && (
            <span>
              {isVisible ? (
                <ChevronUpIcon className={`ml-[12px] h-4 w-4 ${textColor}`} />
              ) : (
                <ChevronDownIcon className={`ml-[12px] h-4 w-4 ${textColor}`} />
              )}
            </span>
          )}

          <div
            className={cn(
              'fixed top-0 left-0 bottom-0 right-0 z-10 mt-10 hidden  h-fit w-full bg-transparent transition-all duration-500',
              { ['group-hover:flex']: isVisible }
            )}
          >
            <div
              className={`z-30 mt-10 h-fit w-full !rounded-b-xl shadow-lg shadow-grey-warm-900/10 ${color}`}
            >
              <section className="flex h-full w-full">
                <section className="lhs max-[475px] w-[475px] rounded-bl-xl bg-grey-warm py-14 pl-[115px] pr-15 ">
                  <h1 className="text-3xl font-semibold text-textBaseColor">
                    {dropDownData?.title}
                  </h1>
                  <p className="pt-5 pb-10 text-lg text-grey-deep">{dropDownData?.description}</p>

                  <div className="flex flex-col gap-5">
                    {dropDownData?.links.map((link, i) => {
                      return (
                        <Link
                          href={link.to}
                          key={i}
                          className="flex items-center font-semibold text-textBaseColor"
                          onClick={() => onClick('')}
                        >
                          {link.title}
                          <ArrowRightIcon className={`ml-[12px] h-4 w-4 text-black`} />
                        </Link>
                      )
                    })}
                  </div>
                </section>
                <section className="rhs flex flex-1 py-14 pl-15">
                  <div className="w-[369px]">
                    <div className="pb-[30px]">
                      <h1 className={`text-lg ${textColor}`}>{dropDownData?.nav_one?.title}</h1>
                    </div>
                    <div className="flex flex-col gap-5">
                      {dropDownData?.nav_one.link.map((link, i) => {
                        return link.isActive ? (
                          <Link
                            href={link.to}
                            key={i}
                            className={`flex items-center  font-semibold ${textColor}`}
                            onClick={() => onClick('')}
                          >
                            {link.title}
                            <ArrowRightIcon className={`ml-[12px] h-5 w-5 ${textColor}`} />
                          </Link>
                        ) : (
                          <span
                            key={i}
                            className={`flex cursor-not-allowed items-center font-semibold ${textColorInactive}`}
                          >
                            {link.title}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                  <div className="w-[369px]">
                    <div className="pb-[30px]">
                      <h1 className={`text-lg ${textColor}`}>{dropDownData?.nav_two?.title}</h1>
                    </div>
                    <div
                      className={`${
                        !dropDownData?.nav_two?.title ? 'pt-[30px]' : ''
                      } flex flex-col gap-5`}
                    >
                      {dropDownData?.nav_two.link.map((link, i) => {
                        return link.isActive ? (
                          <Link
                            href={link.to}
                            key={i}
                            className={`flex items-center font-semibold ${textColor}`}
                            onClick={() => onClose(text)}
                          >
                            {link.title}
                            <ArrowRightIcon className={`ml-[12px] h-5 w-5 ${textColor}`} />
                          </Link>
                        ) : (
                          <span
                            key={i}
                            className={`flex  cursor-not-allowed  items-center font-semibold ${textColorInactive}`}
                          >
                            {link.title}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </span>
        <div
          className={cn(
            'fixed inset-0 -z-50 mt-20  h-full w-full -translate-x-8 bg-black opacity-40',
            isVisible ? 'flex' : 'hidden'
          )}
        ></div>
      </>
    )
  }
  return (
    <NextLink
      href={href}
      className={cn(
        isActive ? `font-semibold ${textColor} ` : `font-normal ${textColorInactive}`,
        'hidden items-center rounded-lg transition-all sm:py-2 md:flex'
      )}
    >
      <span className="">{text}</span>
    </NextLink>
  )
}

const Navbar = ({ bg }) => {
  const [click, setClick] = useState(false)
  const [active, setActive] = useState(false)
  const [dropdownVisible, setDropdownVisible] = useState(false)
  // const [dropDownData, setDropDownData] = useState(null)
  const [navLinks, setNavLinks] = useState(navItem)
  const handleClick = () => {
    setClick(!click)
  }
  const [color, setColor] = useState('')

  const textColor =
    color === 'bg-white' || color === 'bg-grey-warm' ? 'text-gray-800' : 'text-white'
  const textColorInactive =
    color === 'bg-white' || color === 'bg-grey-warm' ? 'text-gray-600' : 'text-white'
  const buttonBg = color === 'bg-white' ? 'bg-black' : 'bg-white'
  const buttonText = color === 'bg-white' ? 'text-white' : 'text-accent-gray'

  const getColorByPathname = (pathname) => {
    let path = pathname.split('/').filter((item) => item !== '')[0]
    const keys = Object.keys(colorListByPage)
    if (path === undefined) {
      setColor(colorListByPage['/'])
    } else if (keys.includes(path)) {
      console.log(path)
      setColor(colorListByPage[path])
    } else {
      setColor(colorListByPage['about'])
    }
  }

  let dropDownData = dropdownData[active]

  const variants = {
    open: {
      //   scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      //   scale: 0,
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: 'hidden',
      },
    },
  }

  return (
    <>
      <header
        className={`${color} !md:hidden fixed top-0 left-0 right-0 z-50 !flex justify-center bg-white py-4 px-6 lg:py-4 lg:px-16`}
      >
        <nav className="flex w-screen max-w-[110rem] flex-row items-center">
          <div className="z-50 flex w-full items-center justify-between md:block md:w-fit ">
            <NextLink href="/">
              <Image
                src={color === 'bg-white' || color === 'bg-grey-warm' ? logo : white_logo}
                alt="logo"
              />
            </NextLink>
            <button className="z-50 block md:hidden" onClick={handleClick}>
              <Image src={click ? hambuggerBlack : hambuggerBlack} alt="humbu" />
            </button>
          </div>

          {/* <aside className="w-full"> */}
          <nav class="hidden flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto md:flex">
            <div
              className={`${textColor} flex flex-row items-center  space-x-8 text-sm font-normal lg:text-base`}
            >
              {navLinks.map((nav) => {
                return (
                  <NavItem
                    href={nav.link}
                    text={nav.title}
                    hasIcon={nav.hasIcon}
                    key={nav.id}
                    onClick={setActive}
                    textColorInactive={textColorInactive}
                    getColorByPathname={getColorByPathname}
                    isVisible={active === nav.title}
                    textColor={textColor}
                    dropDownData={dropDownData}
                    color={color}
                  />
                )
              })}
            </div>
          </nav>

          <div className="hidden flex-row items-center space-x-4 text-xs font-medium md:flex md:text-[14px]">
            <Link
              href="/contact-us"
              className={`h-11 ${textColor} flex items-center justify-center px-4 font-semibold`}
            >
              Contact Sales
            </Link>
            <Link
              target="_blank"
              href="https://dashboard.bujeti.com/login"
              className={`${buttonText} ${buttonBg} flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-center font-semibold`}
            >
              {console.log(buttonBg)}
              Sign In
              <Image
                src={buttonBg === 'bg-black' ? whiteUpArrow : navDropdownArrow}
                className="rotate-[-45deg]"
                alt="sign-in"
              />
            </Link>
          </div>

          <div>
            <motion.nav
              initial={false}
              animate={click ? 'open' : 'closed'}
              variants={variants}
              className={`absolute top-0 left-0 right-0 bottom-0 block min-h-screen bg-white md:hidden`}
            >
              <div className="mt-25 flex h-full min-w-full flex-col">
                <div className="w-full">
                  <ul className="flex flex-col space-y-10  ">
                    <li className="relative">
                      <a
                        className="flex cursor-pointer items-center justify-between px-6 font-semibold text-black"
                        href="#eligibility"
                      >
                        About us
                        <ChevronUpIcon className={`ml-[12px] h-4 w-4 ${textColor}`} />
                      </a>
                      <div className="mt-5 w-full">
                        <div className="w-full bg-gray-100 p-6">
                          <h4 className="text-xl font-semibold">Why us</h4>
                          <p className="mt-2 mb-3 text-sm">
                            Best-in-class, fully integrated and easy-to-use accounting and expense
                            management solution for ambitious businesses.
                          </p>
                          <div className="mb-1 text-sm font-semibold">Customers</div>
                          <div className="text-sm font-semibold">Schedule a demo</div>
                        </div>

                        <div className="space-y-3 p-6">
                          <div>Using Bujeti</div>
                          <ul className="space-y-2 text-sm font-semibold">
                            <li className="flex items-center">
                              For Startups
                              <ArrowRightIcon className={`ml-[12px] h-5 w-5 ${textColor}`} />
                            </li>
                            <li className="flex items-center">
                              For Employees
                              <ArrowRightIcon className={`ml-[12px] h-5 w-5 ${textColor}`} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a className="cursor-pointer" href="#contact">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a className="cursor-pointer" href="#testimonial">
                        Testimonial
                      </a>
                    </li>
                    <li>
                      <a className="cursor-pointer" href="#ourcar">
                        Our Cars
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.nav>
            {/* </aside> */}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
// className={`${color} static top-0 left-0 right-0 z-50 flex justify-center py-4 px-6 md:h-20 lg:h-20 lg:py-4 lg:px-16`}
