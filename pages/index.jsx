// import { Inter } from "@next/font/google";
import { LayoutWrapper } from '../components/index'
import {
  CtaBanner,
  Features,
  Hero,
  Industry,
  Integration,
  Partners,
  Solution,
  Testimonials,
  WhyUs,
} from 'containers/index'
import { fetchData } from 'lib/api'
import { useComponent } from 'lib/hooks/utils'

// const inter = Inter({ subsets: ["latin"] });

export default function Home(home) {
  const { body = [] } = home.content

  return (
    <LayoutWrapper navbar={useComponent(body, 'navbar')} footer={useComponent(body, 'footer')}>
      <Hero hero={useComponent(body, 'hero')} />
      <Features features={useComponent(body, 'Features')} />
      <Partners partners={useComponent(body, 'hero')} />
      <Industry industry={useComponent(body, 'use_case')} />
      <WhyUs whyUs={useComponent(body, 'why_us')} />
      <Integration integration={useComponent(body, 'integration')} />
      <Testimonials testimonials={useComponent(body, 'testimonials')} />
      <Solution solution={useComponent(body, 'solution')} />
      <CtaBanner ctaBanner={useComponent(body, 'cta')} />
    </LayoutWrapper>
  )
}

export async function getStaticProps() {
  const data = await fetchData('/home')

  if (!data) {
    return {
      notFound: true,
    }
  }
  return { props: data }
}
