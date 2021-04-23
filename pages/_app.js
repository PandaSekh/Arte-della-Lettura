import "../styles/style.css";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../seo.config";
import Navbar from "../components/Header/Navbar";
import DarkModeButton from "../components/Header/DarkModeButton";

function MyApp({ Component, pageProps }) {
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
				{/* <script
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
					(window,"XX-XXXXXXXXX-X",{anonymizeIp:true,colorDepth:true,characterSet:true,screenSize:true,language:true});`,
					}}
				/> */}
			</Head>
			<DefaultSeo {...SEO} />
			<DarkModeButton />
			<Navbar />
			<main className="flex-wrap">
				<Component {...pageProps} />
				{/* <Sidebar /> */}
			</main>
			{/* <Footer /> */}
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
					}

					article {
						margin: 0px auto 0px auto;
					}
					
					main {
						display: flex;
						justify-content: space-between;
					}
				`}
			</style>
		</>
	);
}

export default MyApp;
