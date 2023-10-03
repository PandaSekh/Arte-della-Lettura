/* eslint-disable react/jsx-props-no-spreading */
import Head from "next/head";
import Router from "next/router";
import { DefaultSeo } from "next-seo";
import dynamic from "next/dynamic";
import NProgress from "nprogress";
import { ReactElement, useEffect } from "react";
import SEO from "seo.config";
import SiteNavSchema from "@schemas/SiteNavSchema";
import LogoSchema from "@schemas/LogoSchema";
import BreadcrumbsSchema from "@schemas/BreadcrumbsSchema";
import Navbar from "../Header/NavBar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({
  children,
}: {
  children: ReactElement;
}): ReactElement | null {
  useEffect(() => {
    Router.events.on("routeChangeStart", () => NProgress.start());
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());
  }, [children.props.router, Router]);

  const Footer = dynamic(() => import("../Footer/Footer"));

  return (
    <>
      <Head>
        <meta name="application-name" content="Arte della Lettura" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Arte della Lettura" />
        <meta
          name="description"
          content="Quattro chiacchiere su libri e fumetti."
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#018fd9" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.png" />
        <script
          data-goatcounter="https://artedellalettura.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3079214726745163"
          crossOrigin="anonymous"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <SiteNavSchema />
      <LogoSchema />
      <BreadcrumbsSchema url={children.props.router.asPath} />
      <Navbar />
      <main className="flex container mx-auto justify-between md:px-8">
        {children}
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}
