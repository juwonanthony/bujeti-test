import Head from "next/head";
import React from "react";

const MetaTags = () => {
  return (
    <Head>
      <title>Bujeti</title>
      <meta name="title" content="Bujeti" />
      <meta
        name="description"
        content="Bujeti a powerful tool for expense management"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://bujeti.com" />
      <meta property="og:title" content="Bujeti" />
      <meta
        property="og:description"
        content="Bujeti a powerful tool for expense management"
      />
      <meta property="og:image" content="link-to-banner-here" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://bujeti.com" />
      <meta property="twitter:title" content="Bujeti" />
      <meta
        property="twitter:description"
        content="Bujeti a powerful tool for expense management"
      />
      <meta property="twitter:image" content="link-to-banner-here" />
      <link rel="icon" href="/favicon.png" type="image/png" sizes="16x16" />
    </Head>
  );
};

export default MetaTags;
