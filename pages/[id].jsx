import { GetStaticProps, GetStaticPaths } from 'next'
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
  Industry,
  IndustryHero,
  Testimonials,
  PricingSection,
} from 'containers/index'

import { fetchData } from 'lib/api'
import { useComponent } from 'lib/hooks/utils'
import BujetiExpenses from '../assets/image/bujeti-expenses.png'
import BujetiOverview from '../assets/image/bujeti-overview.png'

import { pages } from 'utils'

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
const ProductPages = (product) => {
  const { body = {} } = product.content

  const hero = useComponent(body, 'hero')
  const industry = useComponent(body, 'use_case')
  return (
    <LayoutWrapper navbar={useComponent(body, 'navbar')} footer={useComponent(body, 'footer')}>
      <RenderBasedOnSlug type="products" body={body} industry={industry} hero={hero} />
      <section className="py-40">
        <Partners />
      </section>
      <CtaBanner />
    </LayoutWrapper>
  )
}

export default ProductPages

//we would pass a type property in each of the content created on storybloc
//we have two types - industry/products
const RenderBasedOnSlug = ({ type, body, industry, hero }) => {
  if (type === 'industry') {
    return (
      <>
        <IndustryHero />
        <ProductSolution data={features} />
        <PricingSection />
        <Industry industry={industry} />
        <Testimonials />
      </>
    )
  }
  if (type === 'products') {
    return (
      <>
        <ProductHero hero={hero} />
        <BusinessExpense />
        <ProductSolution data={features} />
        <ProductInsight />
        <Faqs />
        <ProductFeatures />
      </>
    )
  }
}

//this would be updated to be accept a param
// then the fetchData would accept a params.id so as to make use of the dynamic links
export async function getStaticProps({ params }) {
  const data = await fetchData(`/${params.id}`)
  if (!data) {
    return {
      notFound: true,
    }
  }
  return { props: data }
}

export async function getStaticPaths() {
  return {
    paths: pages,
    fallback: true,
  }
}
