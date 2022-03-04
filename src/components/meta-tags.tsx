import Head from "next/head";
import React from "react";

const MetaTags = () => {
  return (
    <Head>
      <title>Bujeti - Budgeting and Expense management tools for Africa</title>
      <meta name="title" content="Bujeti - Budgeting and Expense management tools for Africa" />
      <meta
        name="description"
        content="Budgeting and expense management software built for your african realities"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://bujeti.com" />
      <meta property="og:title" content="Bujeti" />
      <meta
        property="og:description"
        content="Budgeting and expense management software built for your african realities"
      />
      <meta property="og:image" content="link-to-banner-here" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://bujeti.com" />
      <meta property="twitter:title" content="Bujeti" />
      <meta
        property="twitter:description"
        content="Budgeting and expense management software built for your african realities"
      />
      <meta property="twitter:image" content="link-to-banner-here" />
      <link rel="icon" href="/favicon.png" type="image/png" sizes="16x16" />
    </Head>
  );
};

export default MetaTags;
