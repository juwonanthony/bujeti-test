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

import { navDropdownArrow, whiteUpArrow, hambuggerBlack } from 'assets/icons'

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

  const rotateIcon = isVisible ? `ease-in-out rotate-180` : ''

  if (href === '#') {
    return (
      <span
        onMouseEnter={() => onClick(text)}
        onMouseLeave={() => onClick('')}
        className={cn(
          isActive ? `font-semibold ${textColor} ` : `font-normal ${textColorInactive}`,
          'group  relative cursor-pointer items-center gap-2 rounded-lg transition-all sm:py-2 md:flex'
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
                <h1 className="text-3xl font-semibold text-textBaseColor">{dropDownData?.title}</h1>
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
                          className={`flex items-center font-semibold ${textColor}`}
                          onClick={() => onClick('')}
                        >
                          {link.title}
                          <ArrowRightIcon className={`ml-[12px] h-5 w-5 ${textColor}`} />
                        </Link>
                      ) : (
                        <span
                          key={i}
                          className={`flex items-center font-semibold ${textColorInactive}`}
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
                          className={`flex items-center font-semibold ${textColorInactive}`}
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
    // console.log(pathname)
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

  // const toggleDropdown = (text) => {
  //   const newLink = navLinks.map((navLink) => {
  //     console.log(text)
  //     if (navLink.title === text) {
  //       return {
  //         ...navLink,
  //         isVisible: !navLink.isVisible,
  //       }
  //     }
  //     return navLink
  //   })
  //   setNavLinks(newLink)
  //   let path = text.split('/').filter((item) => item !== '')[0]
  //   console.log(path)
  //   setDropDownData(dropdownData[path])
  // }

  let dropDownData = dropdownData[active]

  return (
    <>
      <header
        className={`${color} static top-0 left-0 right-0 z-50 flex h-20 justify-center py-4 px-6 lg:py-4 lg:px-16`}
      >
        <div className="container flex w-screen flex-row items-center justify-between">
          <div className="z-50">
            <NextLink href="/">
              <Image
                src={color === 'bg-white' || color === 'bg-grey-warm' ? logo : white_logo}
                alt=""
              />
            </NextLink>
          </div>
          <div className="z-50 hidden md:flex">
            <div className="flex md:ml-auto md:mr-auto">
              <button
                className="absolute z-50 block -translate-y-4 -translate-x-8 md:hidden"
                onClick={handleClick}
              ></button>
              <nav
                className={`${textColor} flex flex-row items-center gap-3 space-x-8 text-sm font-normal lg:text-base`}
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
              </nav>
            </div>
          </div>
          <div className="hidden flex-row items-center space-x-4 text-sm font-medium md:flex lg:text-[14px]">
            <Link
              href="/contact-us"
              className={`h-11 ${textColor} flex items-center justify-center px-6 font-semibold `}
            >
              Contact Sales
            </Link>
            <Link
              target="_blank"
              href="https://dashboard.bujeti.com/login"
              className={`${buttonText} ${buttonBg} flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-center font-semibold`}
            >
              {console.log(buttonBg)}
              Sign In
              <Image
                src={buttonBg === 'bg-black' ? whiteUpArrow : navDropdownArrow}
                className="rotate-[-45deg]"
              />
            </Link>
          </div>
          <div className="flex md:hidden">
            <Image src={hambuggerBlack} alt="show menu" className="" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
