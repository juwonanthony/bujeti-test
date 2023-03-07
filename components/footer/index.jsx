import React from 'react'
import logo from '../../assets/image/logo.svg'
import LinkArror from '../../assets/icons/linkArror.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Linkedin from '../../assets/icons/linkedin.svg'
import Twitter from '../../assets/icons/twitter.svg'
import Image from 'next/image'
import Link from 'next/link'

const productLink = [
  { title: 'Expense Management', link: '/expense-management' },
  { title: 'Corporate Cards', link: '/corporate-cards' },
  { title: 'Bank Payments', link: '/bank-payments' },
  { title: 'Reimbursements', link: '/reimbursements' },
  { title: 'Reporting & Insights', link: '/reporting' },
  { title: 'Pricing', link: '/pricing' },
  { title: 'Get Mobile App', link: '/', icon: true },
]

const usingBujeti = [
  { title: 'For Startups', link: '/startup' },
  { title: 'For Employees', link: '/employees' },
  { title: 'For Financial Services', link: '/finance' },
  { title: 'For Travel & Hospitality', link: '/hospitality' },
  { title: 'For Technology', link: '/technology' },
  { title: 'For Healthcare', link: '/healthcare' },
  { title: 'For Marketing', link: '/marketing' },
  { title: 'For Restaurants', link: '/restaurants' },
  { title: 'For Non-Profit', link: '/non-profits' },
]

const companyLink = [
  { title: 'About Us', link: '/about' },
  { title: 'Blog', link: '/' },
  { title: 'Careers', link: '/careers' },
  { title: 'Contact', link: '/contact' },
]

const resourceLink = [
  // { title: 'Help', link: '/' },
  // { title: 'FAQ', link: '/' },
  { title: 'Terms of Use', link: '/terms-of-use' },
  { title: 'Privacy Policy', link: '/privacy-policy' },
]

const comingSoon = [
  { title: 'Business Credit', link: '/' },
  { title: 'Payroll ', link: '/' },
  { title: 'Invoice Payment', link: '/' },
  { title: 'Bank Sync', link: '/' },
]

const Footer = () => {
  const year = new Date()
  return (
    <footer className="bg-no-repeat md:bg-footer">
      <div className="container mx-auto py-24 px-6 sm:px-16 xl:px-0">
        <div className="flex flex-wrap justify-between">
          <div className="space-y-4 md:w-4/12">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
            <div className="w-8/12 space-y-3 text-sm font-normal text-[#586068] md:space-y-8 lg:w-4/12">
              <p>7, 7/9 Molade Okoya Thomas Street, Lagos, Lagos, Nigeria</p>
              <p>
                Talk to a product expert today, use our <span className="text-black">chat box</span>
                ,{' '}
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
          <div className="mt-10 grid grid-cols-2 gap-10 md:mt-0 md:w-8/12 md:grid-cols-3">
            <div>
              <h2 className="mb-3 text-sm font-semibold text-black">Products</h2>
              <nav className="mb-10 list-none space-y-2 text-sm font-normal">
                {productLink.map(({ title, link, icon }, index) => (
                  <li key={index}>
                    <a className="flex text-gray-600 hover:text-gray-800" href={link}>
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
              <h2 className="mb-3 text-sm font-semibold text-gray-500">Coming ‘23</h2>
              <nav className="mb-10 list-none space-y-2 text-sm font-normal">
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
              <h2 className="mb-3 text-sm font-semibold text-black">Using Bujeti</h2>
              <nav className="mb-10 list-none space-y-2 text-sm font-normal">
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
              <h2 className="mb-3 text-sm font-semibold text-black">Company</h2>
              <nav className="mb-10 list-none space-y-2 text-sm font-normal">
                {companyLink.map(({ title, link }, index) => (
                  <li key={index}>
                    <a className="text-gray-500 hover:text-gray-800" href={link}>
                      {title}
                    </a>
                  </li>
                ))}
              </nav>
              <h2 className="mb-3 text-sm font-semibold text-black">Resources</h2>
              <nav className="mb-10 list-none space-y-2 text-sm font-normal">
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
        <div className="mt-10 flex w-full flex-wrap items-center justify-center">
          <p className="text-center text-xs text-gray-500 sm:text-left md:mr-10">
            <span className="font-medium"> © Bujeti Ltd {year.getFullYear()}, </span>
            All Right Reserved
          </p>
          <div className="inline-flex w-full justify-center space-x-1 md:w-auto md:justify-start">
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
  )
}

export default Footer
