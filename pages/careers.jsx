import { LayoutWrapper } from 'components/index'
import Values from 'components/values'
import CareerHero from 'containers/careers/career-hero'
import CareerUsp from 'containers/careers/career-usp'
import { fetchData } from 'lib/api'
import { useComponent } from 'lib/hooks/utils'

const Careers = () => {
  return (
    <LayoutWrapper navbar={useComponent([], 'navbar')} footer={useComponent([], 'footer')}>
      <CareerHero />
      <CareerUsp />
      <Values />
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
