import { LayoutWrapper } from 'components/index'
import DiscoverMore from 'containers/contact-us/discover-more'
import Hero from 'containers/contact-us/hero'
import { CtaBanner } from 'containers/index'
import { fetchData } from 'lib/api'
import { useComponent } from 'lib/hooks/utils'

const Contact = (home) => {
  const { body = [] } = home.content || {}
  return (
    <LayoutWrapper navbar={useComponent(body, 'navbar')} footer={useComponent(body, 'footer')}>
      <Hero
        title="Contact sales for <br />
        <b>demo, enterprise pricing, and more.</b>"
        body="<p>Hotline: <b>+234-802-345-6789</b></p>
        <p>Product questions? <b>Schedule a meeting</b></p>
        <p>For support, <b>Start a chat</b></p>"
        bg="grey-warm"
      />
      <DiscoverMore />
      <CtaBanner />
    </LayoutWrapper>
  )
}

export default Contact

export async function getStaticProps() {
  const data = await fetchData('/home')

  if (!data) {
    return {
      notFound: true,
    }
  }
  return { props: data }
}
