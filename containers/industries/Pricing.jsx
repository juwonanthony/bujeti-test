import { checkPricing } from 'assets/icons'
import classNames from 'classnames'
import HTMLReactParser from 'html-react-parser'
import Image from 'next/image'

const price = [
  {
    name: 'Starter plan',
    cost: '0',
    currency: '₦',
    users: 'Basic features for up to 5 users.',
    aboutFeature: 'All the benefits of our <span className="font-semibold">Starter plan....</span>',
    features: [
      'Access to basic features',
      'Basic reporting and analytics',
      'Up to 5 budgets',
      'Up to 5 corporate cards',
      'Basic chat and email support',
    ],
  },
  {
    name: 'Growth plan',
    cost: '50,000',
    currency: '₦',
    users: 'Growing teams up to 25 users.',
    aboutFeature: 'Everything in <span className="font-semibold">Starter plus....</span>',
    features: [
      'Multiple integrations',
      'Advanced reporting and analytics',
      'Up to 25 budgets',
      'Up to 25 corporate cards',
      'Up to 3 approval levels',
      'Custom role management',
      'Priority chat and email support',
    ],
  },
  {
    name: 'Scale plan',
    users: 'Advanced features + unlimited users.',
    aboutFeature: 'Everything in <span className="font-semibold">Growth plus....</span>',
    features: [
      'Advanced custom fields',
      'Unlimited budgets',
      'Unlimited corporate cards',
      'Unlimited approval levels',
      'Custom role management',
      'Personalised+priotity service',
    ],
  },
]

const PricingSection = () => {
  return (
    <section className="bg-grey-warm-900 px-4 py-20 md:px-0 md:py-37 lg:px-0 lg:py-37">
      <section className="container mx-auto  px-4 md:px-14 xl:px-0">
        <div className="md:w-[580px] lg:w-[580px]">
          <span className="flex items-center gap-2 text-base font-medium text-accent-green">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.587 6.706L7.287 0.406C7.035 0.154 6.685 0 6.3 0H1.4C0.63 0 0 0.63 0 1.4V6.3C0 6.685 0.154 7.035 0.413 7.294L6.713 13.594C6.965 13.846 7.315 14 7.7 14C8.085 14 8.435 13.846 8.687 13.587L13.587 8.687C13.846 8.435 14 8.085 14 7.7C14 7.315 13.839 6.958 13.587 6.706ZM2.45 3.5C1.869 3.5 1.4 3.031 1.4 2.45C1.4 1.869 1.869 1.4 2.45 1.4C3.031 1.4 3.5 1.869 3.5 2.45C3.5 3.031 3.031 3.5 2.45 3.5Z"
                fill="#BFFF0B"
              />
            </svg>
            Pricing
          </span>
          <h1 className="py-4 text-2xl font-semibold text-white md:py-6 md:text-6xl lg:py-6 lg:text-6xl">
            Pay fair. Spend less.
          </h1>
          <p className="text-xl text-white">
            With over 100 apps available in our directory, your team’s favourite tolls are just a
            click away.
          </p>
          <button className="mt-[25px] inline-flex rounded-lg border-0 bg-accent-green py-3 px-6 text-base font-semibold text-black focus:outline-none">
            Start Now
          </button>
          <span className="ml-[28px] mt-[25px] inline-flex rounded-lg text-base font-semibold text-white focus:outline-none">
            Contact Sales
          </span>
        </div>
        <section className="mt-6 grid w-full gap-10 md:mt-25 md:grid-cols-2 xl:grid-cols-3">
          {price.map((item, index) => (
            <div
              key={index}
              className={classNames(
                'h-full w-full rounded-lg border ',
                index === 1
                  ? 'border-[#575855] bg-grey-accent md:scale-[1.05]'
                  : ' border-[#414240] bg-grey-warm-800'
              )}
            >
              <div
                className={classNames(
                  'space-y-5 border-b p-10 text-white',
                  index === 1 ? 'border-[#575855]' : 'border-[#414240]'
                )}
              >
                <h6 className="text-lg font-semibold">{item.name}</h6>
                <h3 className="mb-2 text-3xl">
                  {item.currency ? (
                    <>
                      {item.currency}
                      {item.cost} <span className="text-sm font-medium">per month</span>
                    </>
                  ) : (
                    'Custom'
                  )}
                </h3>
                <p>{item.users}</p>
                <a
                  href="/"
                  target="_blank"
                  className="inline-flex justify-center rounded-lg border-0 bg-accent-green py-3 px-6 text-base font-semibold text-black focus:outline-none md:justify-start lg:justify-start"
                  rel="noreferrer"
                >
                  Get started
                </a>
              </div>
              <div className="p-10">
                <h2 className="mb-4 text-base font-semibold text-white">FEATURES</h2>
                <p className="text-base text-white">{HTMLReactParser(item.aboutFeature)}</p>
                <div className="mt-6 space-y-4">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center text-white">
                      <Image src={checkPricing} alt="icons" className="mr-3" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </section>
  )
}

export default PricingSection
