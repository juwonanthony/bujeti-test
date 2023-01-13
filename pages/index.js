// import { Inter } from "@next/font/google";
import { fetchHome } from 'lib/api'
import { useComponent } from 'lib/hooks/utils'
import LayoutWarpper from '../components/layoutWarapper'
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
} from '../containers'

// const inter = Inter({ subsets: ["latin"] });

export default function Home(home) {
  const { body } = home.content

  return (
    <LayoutWarpper>
      <Hero hero={useComponent(body, 'hero')} />
      <Features features={useComponent(body, 'Features')} />
      <Partners hero={useComponent(body, 'hero')} />
      <Industry hero={useComponent(body, 'hero')} />
      <WhyUs hero={useComponent(body, 'hero')} />
      <Integration hero={useComponent(body, 'hero')} />
      <Testimonials hero={useComponent(body, 'hero')} />
      <Solution hero={useComponent(body, 'hero')} />
      <CtaBanner hero={useComponent(body, 'hero')} />
    </LayoutWarpper>
  )
}

export async function getStaticProps() {
  const home = await fetchHome()
  return { props: home }
}
