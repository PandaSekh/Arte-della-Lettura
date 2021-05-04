import "../styles/style.css";
import Head from "next/head";
import Router from 'next/router'
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../seo.config";
import Navbar from "../components/Header/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import DarkModeButton from "../components/Header/DarkModeButton";
import NProgress from 'nprogress'

function MyApp({ Component, pageProps, router }: AppProps) {


	Router.events.on('routeChangeStart', () => NProgress.start())
	Router.events.on('routeChangeComplete', () => NProgress.done())
	Router.events.on('routeChangeError', () => NProgress.done())

	return (
		<>
			<Head>
				<meta name="application-name" content="Arte della Lettura" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="default"
				/>
				<meta
					name="apple-mobile-web-app-title"
					content="Arte della Lettura"
				/>
				<meta
					name="description"
					content="Quattro chiacchiere su libri e fumetti."
				/>
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta
					name="msapplication-config"
					content="/browserconfig.xml"
				/>
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
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<link rel="shortcut icon" href="/favicon.png" />
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(a,b,c){var d=a.history,e=document,f=navigator||{},g=localStorage,
					h=encodeURIComponent,i=d.pushState,k=function(){return Math.random().toString(36)},
					l=function(){return g.cid||(g.cid=k()),g.cid},m=function(r){var s=[];for(var t in r)
					r.hasOwnProperty(t)&&void 0!==r[t]&&s.push(h(t)+"="+h(r[t]));return s.join("&")},
					n=function(r,s,t,u,v,w,x){var z="https://www.google-analytics.com/collect",
					A=m({v:"1",ds:"web",aip:c.anonymizeIp?1:void 0,tid:b,cid:l(),t:r||"pageview",
					sd:c.colorDepth&&screen.colorDepth?screen.colorDepth+"-bits":void 0,dr:e.referrer||
					void 0,dt:e.title,dl:e.location.origin+e.location.pathname+e.location.search,ul:c.language?
					(f.language||"").toLowerCase():void 0,de:c.characterSet?e.characterSet:void 0,
					sr:c.screenSize?(a.screen||{}).width+"x"+(a.screen||{}).height:void 0,vp:c.screenSize&&
					a.visualViewport?(a.visualViewport||{}).width+"x"+(a.visualViewport||{}).height:void 0,
					ec:s||void 0,ea:t||void 0,el:u||void 0,ev:v||void 0,exd:w||void 0,exf:"undefined"!=typeof x&&
					!1==!!x?0:void 0});if(f.sendBeacon)f.sendBeacon(z,A);else{var y=new XMLHttpRequest;
					y.open("POST",z,!0),y.send(A)}};d.pushState=function(r){return"function"==typeof d.onpushstate&&
					d.onpushstate({state:r}),setTimeout(n,c.delay||10),i.apply(d,arguments)},n(),
					a.ma={trackEvent:function o(r,s,t,u){return n("event",r,s,t,u)},
					trackException:function q(r,s){return n("exception",null,null,null,null,r,s)}}})
					(window,"${process.env.GA_ANALYTICS_CODE}",{anonymizeIp:true,colorDepth:true,characterSet:true,screenSize:true,language:true});`,
					}}
				/>
			</Head>
			<DefaultSeo {...SEO} />
			<DarkModeButton />
			<Navbar />
			<main className="flex flex-wrap container mx-auto sm:px-16 justify-between">
				<Component {...pageProps} key={router.route} />
				{/* <Sidebar /> */}
			</main>
			<Footer />

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
						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
							"Helvetica Neue", sans-serif;
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
  opacity: 1.0;

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
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

				`}
			</style>
		</>
	);
}

export default MyApp;
