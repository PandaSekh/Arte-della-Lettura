if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return s[e]||(n=new Promise(async n=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=n}else importScripts(e),n()})),n.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},n=(n,s)=>{Promise.all(n.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(n)};self.define=(n,a,i)=>{s[n]||(s[n]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+n.slice(1)};return Promise.all(a.map(n=>{switch(n){case"exports":return s;case"module":return r;default:return e(n)}})).then(e=>{const n=i(...e);return s.default||(s.default=n),s})}))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/3vl4f-DfkgQF1W8lIbg8n/_buildManifest.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/3vl4f-DfkgQF1W8lIbg8n/_ssgManifest.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/chunks/0dd7bd106f17082d2017109c70a79bbd05275e6d.06725c1062aefad9b4f1.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/chunks/10703fdc863687c45b9f80154e15597b8bd857a9.847c9a373e357758dc3e.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/chunks/13.2410715da78280c542c3.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/chunks/6f2201060f2fff5160d731c7fd1437ebe75d848b.cc6b56bdca0eaf7844d5.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/chunks/framework.df103ae1e3111d9851bd.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/chunks/main-100cd579304631c46cd5.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/chunks/pages/%5Bslug%5D-8606ce82e145ac129df7.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/chunks/pages/_app-f4f0caeecc89aa6ead1c.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/chunks/pages/_error-7a6a2b4576dae987e243.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/chunks/pages/about-86933bac217a11964791.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/chunks/pages/archivio-555630c5bc349b9e10f5.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/chunks/pages/index-f448589e7cbad2fd8713.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/chunks/polyfills-4beebf4ac9054f0bf4e6.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/chunks/webpack-3efacf47d998b099d438.js",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/_next/static/css/d6ddee8466d4c7c4ee56.css",revision:"3vl4f-DfkgQF1W8lIbg8n"},{url:"/android-icon-192x192-dunplab-manifest-37208.png",revision:"ef62ea480ca35586b53ab5d605e7bde0"},{url:"/apple-icon-114x114-dunplab-manifest-37208.png",revision:"e3409d10bb39681cb73108f96957b544"},{url:"/apple-icon-120x120-dunplab-manifest-37208.png",revision:"22e4f3726cd9b95a5dea0556e99d00ae"},{url:"/apple-icon-144x144-dunplab-manifest-37208.png",revision:"e521b901439eb82ba56c64d8092dafbf"},{url:"/apple-icon-152x152-dunplab-manifest-37208.png",revision:"b96f3bb2e19753cb4882566ba12a832a"},{url:"/apple-icon-180x180-dunplab-manifest-37208.png",revision:"17d8cd1d8b6c7fb75ca53e794ebd0a78"},{url:"/apple-icon-57x57-dunplab-manifest-37208.png",revision:"2766b9e541428090f7b0c138227233f5"},{url:"/apple-icon-60x60-dunplab-manifest-37208.png",revision:"0230382e6c3a4d8299f60f73fa7f60e8"},{url:"/apple-icon-72x72-dunplab-manifest-37208.png",revision:"1dfbefa941f7886c05ad73ad45786fe0"},{url:"/apple-icon-76x76-dunplab-manifest-37208.png",revision:"1e500c75a3293610c002753f16da00a3"},{url:"/favicon-16x16-dunplab-manifest-37208.png",revision:"498be896737a03224aa2f03e69fbb397"},{url:"/favicon-32x32-dunplab-manifest-37208.png",revision:"991b7a441eb9e7c10bf6ce07b31fffa6"},{url:"/favicon-96x96-dunplab-manifest-37208.png",revision:"824734eebe8f4731a8c130332ea2ce59"},{url:"/favicon.png",revision:"a064acdc50f82f582cdd4a6bebd696ab"},{url:"/images/logo.png",revision:"e8f651c5a44a2e9d5886ef5d7e638249"},{url:"/images/panda-logo.png",revision:"a064acdc50f82f582cdd4a6bebd696ab"},{url:"/manifest.webmanifest",revision:"2b889595f4e82caad30c559463805c25"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
