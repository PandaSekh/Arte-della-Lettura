/* eslint-disable react/jsx-props-no-spreading */
import "../styles/style.css";
// import Head from "next/head";
// import Router from "next/router";
import { AppProps } from "next/app";
// import { DefaultSeo } from "next-seo";
// import dynamic from "next/dynamic";
// import NProgress from "nprogress";
// import { useEffect, memo } from "react";
// import { AnimateSharedLayout } from "framer-motion";
// import SEO from "../seo.config";
// import SiteNavSchema from "../schemas/SiteNavSchema";
// import LogoSchema from "../schemas/LogoSchema";
// import BreadcrumbsSchema from "../schemas/BreadcrumbsSchema";
// import Book from "../interfaces/Book";
// import Sidebar from "../components/Sidebar/Sidebar";
// import randomPosts from "../src/data/random-posts.json";
// import Navbar from "../components/Header/NavBar/Navbar";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  // useEffect(() => {
  //   Router.events.on("routeChangeStart", () => NProgress.start());
  //   Router.events.on("routeChangeComplete", () => NProgress.done());
  //   Router.events.on("routeChangeError", () => NProgress.done());
  // }, [router, Router]);

  // const Navbar = dynamic(() => import("../components/Header/NavBar/Navbar"));
  // const Footer = dynamic(() => import("../components/Footer/Footer"));
  // const DarkModeButton = dynamic(() => import("../components/Header/DarkModeButton"));

  // const MemoNavbar = memo(() => {
  //   return <Navbar />;
  // });

  return (
    <>
      <Layout>
        <Component {...pageProps} router={router} />
      </Layout>
      {/* <Head>
        <meta name="application-name" content="Arte della Lettura" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Arte della Lettura" />
        <meta name="description" content="Quattro chiacchiere su libri e fumetti." />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#018fd9" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.png" />
        <script data-goatcounter="https://artedellalettura.goatcounter.com/count" async src="//gc.zgo.at/count.js" />
      </Head>
      <DefaultSeo {...SEO} />
      <SiteNavSchema />
      <LogoSchema />
      <BreadcrumbsSchema url={router.asPath} />{" "}
      <AnimateSharedLayout>
        <DarkModeButton />
        {/* <Navbar /> */}
      {/* <MemoNavbar />
        <main className="flex container mx-auto justify-between px-8">
          <Component {...pageProps} key={router.route} />
          <Sidebar randomPosts={randomPosts as unknown as Array<Book>} />
        </main>
        <Footer />
      </AnimateSharedLayout> */}
      <style jsx global>
        {`
          :root {
            --hamb-color: #3a3a3a;
            --header-bg-color: #ffffff;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            outline: none;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizelegibility;
          }

          .lockBody {
            overflow: hidden;
            position: fixed;
          }

          /* Make clicks pass-through */
          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: #29d;

            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;

            width: 100%;
            height: 2px;
          }

          /* Fancy blur effect */
          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px #29d, 0 0 5px #29d;
            opacity: 1;

            -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
          }

          #nprogress .spinner {
            display: block;
            position: fixed;
            z-index: 1031;
            top: 15px;
            right: 15px;
          }

          #nprogress .spinner-icon {
            width: 18px;
            height: 18px;
            box-sizing: border-box;

            border: solid 2px transparent;
            border-top-color: #29d;
            border-left-color: #29d;
            border-radius: 50%;

            -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
          }

          .nprogress-custom-parent {
            overflow: hidden;
            position: relative;
          }

          .nprogress-custom-parent #nprogress .spinner,
          .nprogress-custom-parent #nprogress .bar {
            position: absolute;
          }

          @-webkit-keyframes nprogress-spinner {
            0% {
              -webkit-transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(360deg);
            }
          }
          @keyframes nprogress-spinner {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
