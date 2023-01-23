import { LayoutWrapper } from 'components/index'
import { useComponent } from 'lib/hooks/utils'
import { fetchData } from 'lib/api'
import AboutHero from 'containers/about/about-hero'
import MisionVision from '../containers/about/mission-vission'
import Values from 'containers/about/values'
import LearnMore from 'containers/about/learn-more'
import { CtaBanner } from 'containers/index'

const About = (home) => {
  const { body = {} } = home.content
  return (
    <LayoutWrapper navbar={useComponent([], 'navbar')} footer={useComponent(body, 'footer')}>
      <AboutHero
        hero={{
          tag: 'Our Story',
          title: '<b>Pioneering growth</b><br /> for African Businesses',
          subtitle:
            'We are supporting African business growth by streamlining their process and leveraging financial capacity and activities. We developed Bujeti to automate these processes and allow companies and employees to focus on their core business.',
        }}
        bg="grey-warm"
      />
      <MisionVision />
      <Values />
      <LearnMore />
      <CtaBanner ctaBanner={useComponent(body, 'cta')} />
    </LayoutWrapper>
  )
}

export default About

export async function getStaticProps() {
  const data = await fetchData('/home')

  if (!data) {
    return {
      notFound: true,
    }
  }
  return { props: data }
}
