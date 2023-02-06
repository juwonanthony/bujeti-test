import { LayoutWrapper } from 'components/index'
import Values from 'components/values'
import CareerBenefits from 'containers/careers/career-benefits'
import CareerHero from 'containers/careers/career-hero'
import CareerLists from 'containers/careers/career-list'
import CareerUsp from 'containers/careers/career-usp'
import { fetchData } from 'lib/api'
import { useComponent } from 'lib/hooks/utils'
import jobs from '../containers/careers/jobs'

const benefits = [
  'Competitive salary and equity',
  'Comprehensive medical insurance',
  'Competitive pension plan',
  'Parental leave',
  'Learning & development grants',
  'Fully remote, work from anywhere',
  '& much more',
]

const Careers = () => {
  return (
    <LayoutWrapper navbar={useComponent([], 'navbar')} footer={useComponent([], 'footer')}>
      <CareerHero />
      <CareerUsp />
      <Values />
      <CareerBenefits benefits={benefits} />
      <CareerLists jobs={jobs} />
    </LayoutWrapper>
  )
}

// export async function getStaticProps() {
//   const data = await fetchData('/careers')

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }
//   return { props: data, revalidate: 10 }
// }

export default Careers
