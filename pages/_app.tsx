/* eslint-disable react/jsx-props-no-spreading */
import "../src/styles/style.css";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Layout from "@components/Layout/Layout";
import { ReactElement } from "react";

function MyApp({
  Component,
  pageProps,
  router,
}: AppProps): ReactElement | null {
  return (
    <>
      <Layout>
        <Component {...pageProps} router={router} />
      </Layout>
      <Analytics />
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
            right: 0;
            width: 100px;
            height: 100%;
            box-shadow:
              0 0 10px #29d,
              0 0 5px #29d;
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
