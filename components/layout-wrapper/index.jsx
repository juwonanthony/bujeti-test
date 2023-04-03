import Head from 'next/head'
import Script from 'next/script'
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

  const { children, navbar, footer, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Bujeti - Corporate Cards, Budgeting and Expense Management platform for Africa',
    description: `Corporate Cards, Budgeting and Expense Management software built for your African realities. It empowers your people to do more. It combines virtual, smart physical credit cards, payments and expenses into one experience powered by Visa Cards, dedicated NUBANs, Mobile Wallets and Faster Payments.`,
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
      <Navbar bg={'white'} navbar={navbar} />
      <main className="w-full">
        {children}
        <Footer footer={footer} />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CZYLNQ7GV5"></Script>
        <Script id="ga">
          {`window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-CZYLNQ7GV5");`}
        </Script>
        <Script id="int-chat">
          {`window.intercomSettings = {
        api_base: "https://api-iam.intercom.io",
        app_id: "pz46thes",
      };`}
        </Script>

        <Script id="intercom">
          {`// We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/pz46thes'
      (function () {
        var w = window;
        var ic = w.Intercom;
        if (typeof ic === "function") {
          ic("reattach_activator");
          ic("update", w.intercomSettings);
        } else {
          var d = document;
          var i = function () {
            i.c(arguments);
          };
          i.q = [];
          i.c = function (args) {
            i.q.push(args);
          };
          w.Intercom = i;
          var l = function () {
            var s = d.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://widget.intercom.io/widget/pz46thes";
            var x = d.getElementsByTagName("script")[0];
            x.parentNode.insertBefore(s, x);
          };
          if (document.readyState === "complete") {
            l();
          } else if (w.attachEvent) {
            w.attachEvent("onload", l);
          } else {
            w.addEventListener("load", l, false);
          }
        }
      })();`}
        </Script>
      </main>
    </div>
  )
}

export default LayoutWrapper
