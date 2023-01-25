import { LayoutWrapper } from 'components/index'
import {
  BusinessExpense,
  CtaBanner,
  Faqs,
  Partners,
  ProductFeatures,
  ProductHero,
  ProductInsight,
  ProductSolution,
} from 'containers/index'
import { fetchData } from 'lib/api'
import { useComponent } from 'lib/hooks/utils'
import BujetiExpenses from '../assets/image/bujeti-expenses.png'
import BujetiOverview from '../assets/image/bujeti-overview.png'

const features = [
  {
    title: 'Customized budgets',
    body: 'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    links: [{ name: 'Start using budgets', to: '/budgets' }],
    image: BujetiExpenses,
  },
  {
    title: 'Track budgets in Real-time',
    body: 'Check out your budget anytime, you’ll never be caught off guard with a surprise expense or transaction again.',
    links: [{ name: 'Start using budgets', to: '/budgets' }],
    image: BujetiOverview,
  },
  {
    title: 'Spending control is easier ',
    body: 'Ensure you respect your spending policy by setting transparent and secure spending limits directly in your Bujeti corporate cards.',
    links: [{ name: 'Start using spend limits', to: '/budgets' }],
    image: BujetiExpenses,
  },
]
const Product = (product) => {
  const { body = [] } = product.content || {}

  return (
    <LayoutWrapper navbar={useComponent(body, 'navbar')} footer={useComponent(body, 'footer')}>
      <ProductHero />
      <BusinessExpense />
      <ProductSolution data={features} />
      <ProductInsight />
      <Faqs />
      <ProductFeatures />
      <section className="py-40">
        <Partners />
      </section>
      <CtaBanner />
    </LayoutWrapper>
  )
}

export default Product

export async function getStaticProps() {
  const data = await fetchData('/product')

  if (!data) {
    return {
      notFound: true,
    }
  }
  return { props: data, revalidate: 10 }
}
