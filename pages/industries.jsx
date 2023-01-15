import { LayoutWrapper } from '../components/index'
import {
  CtaBanner,
  Industry,
  IndustryHero,
  Partners,
  ProductSolution,
  Testimonials,
} from 'containers/index'
import BujetiExpenses from '../assets/image/bujeti-expenses.png'
import BujetiOverview from '../assets/image/bujeti-overview.png'
import Cards from '../assets/image/cards.png'
import SupportImage from '../assets/image/Support-Image.png'
import PricingSection from 'containers/industries/Pricing'
import { useComponent } from 'lib/hooks/utils'
import { fetchData } from 'lib/api'

const Industries = (industry) => {
  const { body = {} } = industry.content

  const features = [
    {
      title: 'Automate your expensing',
      body: 'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
      links: [
        { name: 'Start using budgets', to: '/budgets' },
        { name: 'Discover more', to: '/industries' },
      ],
      image: BujetiExpenses,
    },
    {
      title: 'Corporate cards for employees',
      body: 'Check out your budget anytime, you’ll never be caught off guard with a surprise expense or transaction again.',
      links: [
        { name: 'Start using budgets', to: '/budgets' },
        { name: 'Discover more', to: '/industries' },
      ],
      image: Cards,
    },
    {
      title: 'Reimburse invoices with ease',
      body: 'Check out your budget anytime, you’ll never be caught off guard with a surprise expense or transaction again.',
      links: [
        { name: 'Start using spend limits', to: '/budgets' },
        { name: 'Discover more', to: '/industries' },
      ],
      image: BujetiOverview,
    },
    {
      title: 'Connect all the apps you love',
      body: 'Ensure you respect your spending policy by setting transparent and secure spending limits directly in your Bujeti corporate cards.',
      links: [
        { name: 'Start using spend limits', to: '/budgets' },
        { name: 'Discover more', to: '/industries' },
      ],
      image: SupportImage,
    },
  ]

  return (
    <LayoutWrapper navbar={useComponent(body, 'navbar')} footer={useComponent(body, 'footer')}>
      <IndustryHero />

      <ProductSolution data={features} />
      <PricingSection />
      <Industry industry={useComponent(body, 'use_case')} />
      <Testimonials />
      <section className="pb-40">
        <Partners />
      </section>
      <CtaBanner />
    </LayoutWrapper>
  )
}

export default Industries

export async function getStaticProps() {
  const data = await fetchData('/industry')

  if (!data) {
    return {
      notFound: true,
    }
  }
  return { props: data }
}
