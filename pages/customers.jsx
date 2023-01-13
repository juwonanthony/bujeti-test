import { raap_logo } from 'assets/icons'
import { fliqpayLogo, olumide, raap_lady, sozoLogo } from 'assets/image'
import { LayoutWrapper } from 'components/index'
import CaseStudies from 'containers/case-studies'
import CustomerHero from 'containers/customers/customer-hero'
import { CtaBanner, Industry, Partners, Testimonials } from 'containers/index'

const caseStudyData = [
  {
    id: 1,
    logo: raap_logo,
    image: olumide,
    title: 'Flawless automation for our business operation with Bujeti.',
    description:
      'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    link: '/blog/voltron',
    link_tag: 'See case study',
  },
  {
    id: 1,
    logo: raap_logo,
    image: raap_lady,
    title: 'Providing a seamless, personalized expense experience for',
    description:
      'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    link: '/blog/voltron',
    link_tag: 'See case study',
  },
]

const customerStoriesData = [
  {
    id: 1,
    logo: fliqpayLogo,
    image: raap_lady,
    title: 'Flawless automation for our business operation with Bujeti.',
    description:
      'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    link: '/blog/voltron',
    link_tag: 'Continue Watching',
  },
  {
    id: 1,
    logo: sozoLogo,
    image: olumide,
    title: 'Flawless automation for our business operation with Bujeti.',
    description:
      'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    link: '/blog/voltron',
    link_tag: 'Continue Watching',
  },
]

const Customers = () => {
  return (
    <LayoutWrapper>
      <CustomerHero />
      <CaseStudies
        slug="Case Study"
        type="case-study"
        bg="bg-grey-warm"
        title={
          <h1 className="py-4 text-6xl">
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
          <h1 className="py-4 text-6xl">
            Everything other details <br /> you need to know
          </h1>
        }
        data={customerStoriesData}
      />

      <Industry />
      <Testimonials />
      <section className="disabled py-40">
        <Partners />
      </section>
      <CtaBanner />
    </LayoutWrapper>
  )
}

export default Customers
