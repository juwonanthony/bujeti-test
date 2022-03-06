import Head from "next/head";
import React from "react";

const MetaTags = () => {
  return (
    <Head>
      <title>Bujeti - Budgeting and Expense management tools for Africa</title>
      <meta name="title" content="Bujeti - Budgeting and Expense management tools for Africans by Africans" />
      <meta
        name="description"

        content="Budgeting and expense management software built for your african realities. It empowers your people to do more. It combines credit cards, payments, expenses, and cash into one experience powered by premium Visa Cards, dedicated NUBANs, Mobile Wallets and Faster Payments."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://bujeti.com" />
      <meta property="og:title" content="Bujeti" />
      <meta
        property="og:description"

        content="Budgeting and expense management software built for your african realities. It empowers your people to do more. It combines credit cards, payments, expenses, and cash into one experience powered by premium Visa Cards, dedicated NUBANs, Mobile Wallets and Faster Payments."
      />
      <meta property="og:image" content="link-to-banner-here" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://bujeti.com" />
      <meta property="twitter:title" content="Bujeti" />
      <meta
        property="twitter:description"
        content="Budgeting and expense management software built for your african realities. It empowers your people to do more. It combines credit cards, payments, expenses, and cash into one experience powered by premium Visa Cards, dedicated NUBANs, Mobile Wallets and Faster Payments."
      />
      <meta property="twitter:image" content="link-to-banner-here" />
      <link rel="icon" href="/favicon.ico" type="image/png" sizes="16x16" />
    </Head>
  );
};

export default MetaTags;
