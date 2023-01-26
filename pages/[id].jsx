import { LayoutWrapper } from 'components/index'
import { CtaBanner, DynamicPages, Partners } from 'containers/index'

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
  const { body = [] } = product.content || {}
  const hero = useComponent(body, 'hero')
  const industry = useComponent(body, 'use_case')
  const testimonials = useComponent(body, 'testimonials')
  const businessExpense = useComponent(body, 'use_case')
  const faqs = useComponent(body, 'faqs')
  const pricing = useComponent(body, 'pricing')
  const productFeatures = useComponent(body, 'products')
  const productInsight = useComponent(body, 'numbers')
  const productSolution = useComponent(body, 'features')

  console.log(productInsight)

  return (
    <LayoutWrapper navbar={useComponent(body, 'navbar')} footer={useComponent(body, 'footer')}>
      <DynamicPages
        type={product?.tag_list}
        industry={industry}
        hero={hero}
        testimonials={testimonials}
        businessExpense={businessExpense}
        faqs={faqs}
        pricing={pricing}
        productFeatures={productFeatures}
        productInsight={productInsight}
        productSolution={productSolution}
      />
      <section className="py-40">
        <Partners partners={useComponent(body, 'industry_leaders')} />
      </section>
      <CtaBanner ctaBanner={useComponent(body, 'cta')} />
    </LayoutWrapper>
  )
}

export default ProductPages

//this would be updated to be accept a param
// then the fetchData would accept a params.id so as to make use of the dynamic links
export async function getStaticProps({ params }) {
  const data = await fetchData(`/${params.id}`)
  if (!data) {
    return {
      notFound: true,
    }
  }
  return { props: data, revalidate: 10 }
}

export async function getStaticPaths() {
  return {
    paths: pages,
    fallback: true,
  }
}
