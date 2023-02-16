import { raap_logo } from 'assets/icons'
import { fliqpayLogo, olumide, raap_lady, sozoLogo } from 'assets/image'
import { spiralPattern } from 'assets/icons'
import { LayoutWrapper } from 'components/index'
import CaseStudies from 'containers/case-studies'
import CustomerHero from 'containers/customers/customer-hero'
import { CtaBanner, Industry, Partners, Testimonials } from 'containers/index'
import { fetchData } from 'lib/api'
import { useComponent } from 'lib/hooks/utils'

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

const Customers = (customer) => {
  const { body = [] } = customer.content || {}
  return (
    <LayoutWrapper navbar={useComponent(body, 'navbar')} footer={useComponent(body, 'footer')}>
      <CustomerHero
        slug="For startups"
        title={
          <h1 className="py-4 text-3xl md:text-6xl lg:text-6xl">
            Get your startup
            <br /> <b>finances in order.</b>
          </h1>
        }
        body="Supercharge your finance, empower your teams and track the pulse of your
                business with an end-to-end expense management platform tailored for African SMBs."
        image={spiralPattern}
        bg="grey-warm-800"
      />
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

      <Industry industry={useComponent(body, 'use_case')} />
      <Testimonials testimonials={useComponent(body, 'testimonials')} />
      <section className="disabled py-40">
        <Partners partners={useComponent(body, 'industry_leaders')} />
      </section>
      <CtaBanner ctaBanner={useComponent(body, 'cta')} />
    </LayoutWrapper>
  )
}

export default Customers
export async function getStaticProps() {
  const data = await fetchData('/customer')

  if (!data) {
    return {
      notFound: true,
    }
  }
  return { props: data, revalidate: 5 }
}
