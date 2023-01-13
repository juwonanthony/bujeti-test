import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
// import { useTheme } from 'next-themes';
import cn from 'classnames'
import 'swiper/css/bundle'

import Navbar from '../navbar'
import Footer from '../footer'

const LayoutWrapper = (props) => {
  const [mounted, setMounted] = useState(false)
  //   const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Bujeti - Budgeting and Expense Management software for Africans by Africans',
    description: `Budgeting and expense management software built for your African realities. It empowers your people to do more. It combines virtual, smart physical credit cards, payments and expenses into one experience powered by Visa Cards, dedicated NUBANs, Mobile Wallets and Faster Payments.`,
    image: 'https://bujeti.com/images/bujeti_banner.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://bujeti.com${router.asPath}`} />
        <link rel="canonical" href={`https://bujeti.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Bujeti" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bujeti" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <Navbar bg={'white'} />
      <main id="skip">
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default LayoutWrapper
