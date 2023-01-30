import React, { useEffect, useState } from 'react'
// import { useLocation, useNavigate, Link } from "react-router-dom";
import logo from '../../assets/image/logo.svg'
import white_logo from '../../assets/image/white_logo.svg'
import NextLink from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Link from 'next/link'

import { navDropdownArrow } from 'assets/icons'

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
          <span className={rotateIcon}>
            <svg
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.375 1.25L5 5.625L0.625 1.25"
                stroke="#242628"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        )}

        <div
          className={cn(
            'fixed top-0 left-0 bottom-0 right-0 z-10 mt-10 hidden  h-fit w-full bg-transparent',
            { ['group-hover:flex']: isVisible }
          )}
        >
          <div className={`z-30 mt-10 h-fit w-full ${color}`}>
            <section className="flex h-full w-full">
              <section className="lhs max-[475px] w-[475px] bg-grey-warm py-14 pl-[115px] pr-15">
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
                        <Image
                          src={navDropdownArrow}
                          height={12}
                          className="ml-[12px]"
                          alt="arrow down"
                        />
                      </Link>
                    )
                  })}
                </div>
              </section>
              <section className="rhs flex flex-1 py-14 pl-15">
                <div className="w-[369px]">
                  <div className="pb-[30px]">
                    <h1 className=" text-lg text-grey-deep">{dropDownData?.nav_one?.title}</h1>
                  </div>
                  <div className="flex flex-col gap-5">
                    {dropDownData?.nav_one.link.map((link, i) => {
                      return link.isActive ? (
                        <Link
                          href={link.to}
                          key={i}
                          className="flex items-center font-semibold text-textBaseColor"
                          onClick={() => onClick('')}
                        >
                          {link.title}
                          <Image
                            src={navDropdownArrow}
                            height={12}
                            className="ml-[12px]"
                            alt="dropdown icon"
                          />
                        </Link>
                      ) : (
                        <span key={i} className="flex items-center font-semibold text-grey-deep">
                          {link.title}
                        </span>
                      )
                    })}
                  </div>
                </div>
                <div className="w-[369px]">
                  <div className="pb-[30px]">
                    <h1 className="text-lg text-grey-deep">{dropDownData?.nav_two?.title}</h1>
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
                          className="flex items-center font-semibold text-textBaseColor"
                          onClick={() => onClose(text)}
                        >
                          {link.title}
                          <Image
                            src={navDropdownArrow}
                            height={12}
                            className="ml-[12px]"
                            alt="dropdown icon"
                          />
                        </Link>
                      ) : (
                        <span key={i} className="flex items-center font-semibold text-grey-deep">
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

        {/* <div
          className={cn('fixed top-0 left-0 bottom-0 right-0 z-10 mt-20 h-96 w-full bg-black ', {
            ['flex']: isVisible,
            ['hidden']: !isVisible,
          })}
        ></div> */}

        {/* <div
          className={isVisible ? `fixed top-0 left-0 bottom-0 right-0 z-10  bg-black/50` : 'hidden'}
          onClick={() => onClose(text)}
        >
          <div className="z-30 mt-20 h-[400px] w-full bg-[#FDFDFC]">
            <section className="flex h-full w-full">
              <section className="lhs max-[475px] w-[475px] bg-grey-warm pl-[115px] pr-15 pt-14">
                <h1 className="text-3xl font-semibold text-textBaseColor">{dropDownData?.title}</h1>
                <p className="pt-5 pb-10 text-lg text-grey-deep">{dropDownData?.description}</p>

                <div className="flex flex-col gap-5">
                  {dropDownData?.links.map((link, i) => {
                    return (
                      <Link
                        href={link.to}
                        key={i}
                        className="flex items-center font-semibold text-textBaseColor"
                      >
                        {link.title}
                        <Image
                          src={navDropdownArrow}
                          height={12}
                          className="ml-[12px]"
                          alt="arrow down"
                        />
                      </Link>
                    )
                  })}
                </div>
              </section>
              <section className="rhs flex flex-1 pt-14 pl-15">
                <div className="w-[369px]">
                  <div className="pb-[30px]">
                    <h1 className=" text-lg text-grey-deep">{dropDownData?.nav_one?.title}</h1>
                  </div>
                  <div className="flex flex-col gap-5">
                    {dropDownData?.nav_one.link.map((link, i) => {
                      return link.isActive ? (
                        <Link
                          href={link.to}
                          key={i}
                          className="flex items-center font-semibold text-textBaseColor"
                        >
                          {link.title}
                          <Image
                            src={navDropdownArrow}
                            height={12}
                            className="ml-[12px]"
                            alt="dropdown icon"
                          />
                        </Link>
                      ) : (
                        <span key={i} className="flex items-center font-semibold text-grey-deep">
                          {link.title}
                        </span>
                      )
                    })}
                  </div>
                </div>
                <div className="w-[369px]">
                  <div className="pb-[30px]">
                    <h1 className="text-lg text-grey-deep">{dropDownData?.nav_two?.title}</h1>
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
                          className="flex items-center font-semibold text-textBaseColor"
                        >
                          {link.title}
                          <Image
                            src={navDropdownArrow}
                            height={12}
                            className="ml-[12px]"
                            alt="dropdown icon"
                          />
                        </Link>
                      ) : (
                        <span key={i} className="flex items-center font-semibold text-grey-deep">
                          {link.title}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div> */}
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
        className={`${color} fixed top-0 left-0 right-0 z-50 flex h-20 justify-center py-4 px-6 lg:py-4 lg:px-16`}
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
          <div className="flex flex-row items-center space-x-4 text-sm font-medium lg:text-[14px]">
            <button
              className={`h-11 ${textColor} flex items-center justify-center px-6 font-semibold `}
            >
              Contact Sales
            </button>
            <button
              className={`${buttonText} ${buttonBg} flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-center font-semibold`}
            >
              Sign In
              <Image src={navDropdownArrow} className="rotate-[-45deg]" />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
