if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise((async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},a=(a,i)=>{Promise.all(a.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(a)};self.define=(a,s,o)=>{i[a]||(i[a]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+a.slice(1)};return Promise.all(s.map((a=>{switch(a){case"exports":return i;case"module":return c;default:return e(a)}}))).then((e=>{const a=o(...e);return i.default||(i.default=a),i}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Logo.png",revision:"e8f651c5a44a2e9d5886ef5d7e638249"},{url:"/Panda.svg",revision:"693212c5ffb51ab8e682820f8d9b7738"},{url:"/_next/static/2FyrzBDANpND22Bx8GU-Z/_buildManifest.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/2FyrzBDANpND22Bx8GU-Z/_ssgManifest.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/14.67d643329e0489f1045e.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/160.eb4b3e10112106e50c8a.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/221-b166f57f0996664593ff.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/283.479691bc8dbc1fdcdd34.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/289.f385b53e237e7888c535.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/332.6e999d89ab48fbfe0653.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/338.ae9fa16ce21e525446f5.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/382.2527ec6b2dbd6016d7e1.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/424.56cfd42cdb5905df07d7.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/481.368b24b2b47b9df89ef2.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/540.702e2015548e699b17ce.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/544.a62636b036ea3d0bf31b.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/545.3472e769da09d9bd885d.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/549.fe50d264033d4cc5a1c1.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/56.cb0df2a4dd19d05265b1.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/580.d941f9e6ac718f85d1ca.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/581.a3c653f21d2bae2d01ba.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/594.fd2a61acb3584ec66c1e.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/71.226ef5185cf031d5176d.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/811.6fa83ba5bd050b14b56e.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/92.ca69ef292c700f26037e.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/94.46ab69b80c1b1a0dc83a.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/framework-d23658296916ce920464.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/main-0f5aeaf363591193aaba.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/%5Bslug%5D-548e80efa28db33dd915.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/404-189fadbbba4b3aaa4db3.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/500-1789a095c7e41935865f.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/_app-19044f4e3ab22aac2a46.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/_error-95a7cc2825e34fec0b97.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/about-7a128aae0c616875b055.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/archivio-1d6c912ab45d90bd6695.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/autori-c46df9d09bacd90c8bdb.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/autori/%5Bauthor%5D-dae9952a6b1890da29d1.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/case-editrici-3ab1857d8e4a2150d8e8.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/case-editrici/%5Bce%5D-4e8f992df7f26741eda8.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/cerca-693eea9af618454f30c6.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/generi-66ab03cedc414c7b4556.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/generi/%5Bgenre%5D-af42d7522141386d2a0b.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/index-8f074bdfd2770f22b10f.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/pagina/%5Bpage%5D-bd0e12b7a4e2bd995267.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/privacy-policy-f74f2f1858cce4dfe53c.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/serie-433356c2e1e541afda62.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/pages/serie/%5Bserie%5D-8bba6760fdeb5e758b0d.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/chunks/webpack-3cc054e8dc9a8e41f8e4.js",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/_next/static/css/9806f787aa1ec218b460.css",revision:"2FyrzBDANpND22Bx8GU-Z"},{url:"/android-icon-192x192-dunplab-manifest-37208.png",revision:"ef62ea480ca35586b53ab5d605e7bde0"},{url:"/apple-icon-114x114-dunplab-manifest-37208.png",revision:"e3409d10bb39681cb73108f96957b544"},{url:"/apple-icon-120x120-dunplab-manifest-37208.png",revision:"22e4f3726cd9b95a5dea0556e99d00ae"},{url:"/apple-icon-144x144-dunplab-manifest-37208.png",revision:"e521b901439eb82ba56c64d8092dafbf"},{url:"/apple-icon-152x152-dunplab-manifest-37208.png",revision:"b96f3bb2e19753cb4882566ba12a832a"},{url:"/apple-icon-180x180-dunplab-manifest-37208.png",revision:"17d8cd1d8b6c7fb75ca53e794ebd0a78"},{url:"/apple-icon-57x57-dunplab-manifest-37208.png",revision:"2766b9e541428090f7b0c138227233f5"},{url:"/apple-icon-60x60-dunplab-manifest-37208.png",revision:"0230382e6c3a4d8299f60f73fa7f60e8"},{url:"/apple-icon-72x72-dunplab-manifest-37208.png",revision:"1dfbefa941f7886c05ad73ad45786fe0"},{url:"/apple-icon-76x76-dunplab-manifest-37208.png",revision:"1e500c75a3293610c002753f16da00a3"},{url:"/apple-touch-icon.png",revision:"a064acdc50f82f582cdd4a6bebd696ab"},{url:"/favicon copy.png",revision:"a064acdc50f82f582cdd4a6bebd696ab"},{url:"/favicon-16x16-dunplab-manifest-37208.png",revision:"498be896737a03224aa2f03e69fbb397"},{url:"/favicon-32x32-dunplab-manifest-37208.png",revision:"991b7a441eb9e7c10bf6ce07b31fffa6"},{url:"/favicon-32x32.png",revision:"991b7a441eb9e7c10bf6ce07b31fffa6"},{url:"/favicon-96x96-dunplab-manifest-37208.png",revision:"824734eebe8f4731a8c130332ea2ce59"},{url:"/favicon.ico",revision:"a064acdc50f82f582cdd4a6bebd696ab"},{url:"/favicon.png",revision:"a064acdc50f82f582cdd4a6bebd696ab"},{url:"/manifest.webmanifest",revision:"e2cc5c43b37bfa00251d9f7dc14ba150"},{url:"/maskable_icon.png",revision:"6d933b1af23a26c2b89f3951d6da972b"},{url:"/panda-logo.png",revision:"a064acdc50f82f582cdd4a6bebd696ab"},{url:"/static/images/Cinzia_1.jpg",revision:"ea51d7a9f64e919f4158211db8707543"},{url:"/static/images/Cinzia_2.jpg",revision:"72dc3d4057dab4ae1907186bb27043f7"},{url:"/static/images/Cinzia_3.jpg",revision:"b2eb5a92b6467825cb350b95ebce2efa"},{url:"/static/images/Community-Small-Paper.gif",revision:"72c52c20a66f2eecfd39f0fd58e8d12c"},{url:"/static/images/Dedica_Cinzia_1.jpg",revision:"6a91f7fe387290fc40511423e3c1ac98"},{url:"/static/images/Dedica_Zerocalcare_1.jpg",revision:"fb10544589f4c0a1a48ac519fc1f5043"},{url:"/static/images/Flop2018.jpg",revision:"70bec427ce1e7d9bcaedd42c166deebf"},{url:"/static/images/Flop2019.jpg",revision:"a363e3bd235ede1cb7d7e2625b3b2270"},{url:"/static/images/Flop2020.jpg",revision:"fa7a6a794055cda6fad6f84f123e749f"},{url:"/static/images/GS_Stats_2019_01.jpg",revision:"04ea805590fe05e03f10292e619d8991"},{url:"/static/images/GS_Stats_2019_02.jpg",revision:"9af4c66fc55f79739dbde8d01afd821f"},{url:"/static/images/Imbustastorie_Incubo.jpg",revision:"51612e3aded7ce19c0b105514282e579"},{url:"/static/images/Imbustastorie_Incubo_2.jpg",revision:"f099cbbc8622371c84faad1b91fc2bd0"},{url:"/static/images/MaceriePrime2_2.jpg",revision:"380ff8841718b2420e8695a292b1e701"},{url:"/static/images/MaceriePrime2_3.jpg",revision:"ceb99f57bbd66a6f5a18bd55f4653314"},{url:"/static/images/PieraForde.jpg",revision:"d3abafa655a519f69476ca0abaa3ed70"},{url:"/static/images/SalTo2019.jpg",revision:"2059d7ac5f4a3b3439833a5051d19dc0"},{url:"/static/images/TDS_Illustrato/tds_illustrato_1.jpg",revision:"e0616a62518b78fd111fb3d41f058568"},{url:"/static/images/TDS_Illustrato/tds_illustrato_2.jpg",revision:"c06494bddc3996ba8236081cb81d81d5"},{url:"/static/images/TDS_Illustrato/tds_illustrato_3.jpg",revision:"c6efe65edc58ca42844bfe6fd7a83508"},{url:"/static/images/TDS_Illustrato/tds_illustrato_4.jpg",revision:"ba541dd278c8b743551bc2114fb32451"},{url:"/static/images/TDS_Illustrato/tds_illustrato_5.jpg",revision:"33332b82171c28cbf299e436c57515f7"},{url:"/static/images/TDS_Illustrato/tds_illustrato_6.jpg",revision:"3b83da9acbfa701b5a43759d2a056030"},{url:"/static/images/Top2018.jpg",revision:"19563c3c1298c1a750a6f612a3655d7b"},{url:"/static/images/Top2018_2.jpg",revision:"0bc2cc88b9789bf477184017f5a370db"},{url:"/static/images/Top2018_3.jpg",revision:"0a1055ba2af3d890b819adc53a86c60f"},{url:"/static/images/Top2019.jpg",revision:"de4a27a10be5ef3033389a95f4fd19b8"},{url:"/static/images/Top2020.jpg",revision:"46c4487deb9efd3c9729ae279dee8e40"},{url:"/static/images/Zerocalcare.jpg",revision:"a51a2031c198fd3434e57dd638ec7bda"},{url:"/static/images/books/AmericanGods.jpg",revision:"bf975057bb47a421ca431096344d0166"},{url:"/static/images/books/AmericanGods_02.jpg",revision:"055ad2bd53a5fa8539be1bc6269929bc"},{url:"/static/images/books/AnimaliFantastici_1.jpg",revision:"d55235befbec5a88ba13bfde763ef1e4"},{url:"/static/images/books/AnneDiTettiVerdi.jpg",revision:"52ce89d750ec1cbd68f50f3cdd6eba23"},{url:"/static/images/books/Audible.png",revision:"f34076906e30afb6426586c64cf19333"},{url:"/static/images/books/Audible_Home.png",revision:"a3ba9addc4f650e1c53d535f94b10df3"},{url:"/static/images/books/AutostopConBuddha.jpg",revision:"3cd36244b3c3cf3b2ccd03d684bfa63c"},{url:"/static/images/books/BacioFeroce.jpg",revision:"92b91db33f96055231d8b83900b7966d"},{url:"/static/images/books/BattleRoyale.jpg",revision:"bb00df7e1a260679f5136ad05aaa92eb"},{url:"/static/images/books/BattleRoyaleManga.jpg",revision:"e7e19761e67c45ea67265d2248ff6d77"},{url:"/static/images/books/BattleRoyale_02.jpg",revision:"e4f3580ceaa3a3466420102f689b1387"},{url:"/static/images/books/BattleRoyale_03.jpg",revision:"832a8b881e0dea4f08e4de47ccd7c76a"},{url:"/static/images/books/BeforeWatchmen_EroiECriminali.jpg",revision:"fec95b4176ae361d022aef155b2e3a5f"},{url:"/static/images/books/BuonanotteSignorLenin.jpg",revision:"fec45fe576f3665ee38b1f79b906ff72"},{url:"/static/images/books/CentoPoesieDAmorePerLadyhawke.jpg",revision:"e359c390397027cb443070437e4473e5"},{url:"/static/images/books/CentoPoesieDAmorePerLadyhawkeHQ.jpg",revision:"5713e538d7f2eb27b40021674d32c73a"},{url:"/static/images/books/CheDioPerdonaATutti.jpg",revision:"814f631503c55525466a98bcf9970538"},{url:"/static/images/books/ChristmasCarol.jpg",revision:"f7255f95e2b2692bf88e0ae8a09deb7f"},{url:"/static/images/books/Cinzia.jpg",revision:"b39a1d1ebf5380234e8432b43c98582a"},{url:"/static/images/books/CosiGiocanoLeBestieGiovani.jpg",revision:"96ca639e9a0b9ba1f78b127b90725d45"},{url:"/static/images/books/CrookedKingdom.jpg",revision:"68706fdedc8d672f86564d1279379049"},{url:"/static/images/books/CrookedKingdom_1.jpg",revision:"d4daf61226c242c3143ab3a1767d6b73"},{url:"/static/images/books/CrookedKingdom_2.jpg",revision:"27f064787b855bac32cb3db146ee860f"},{url:"/static/images/books/CrookedKingdom_3.jpg",revision:"fbd0f469f7b6d79b99cd1be5e7e89159"},{url:"/static/images/books/Dedica_Cinzia.JPG",revision:"0a727facddf08879909a962482aa34e7"},{url:"/static/images/books/Dedica_Zerocalcare.JPG",revision:"a19232f5310aba33f65822bf812fe716"},{url:"/static/images/books/Dietrologia.jpg",revision:"ec3777ced89333d17b5aa07fd3f06c21"},{url:"/static/images/books/DimenticaIlMioNome.jpg",revision:"cc7edb67e4d22abdba834176f865711c"},{url:"/static/images/books/DimenticaIlMioNome_2.jpg",revision:"cb27df79eb4ffd40f316c8494263ae26"},{url:"/static/images/books/DimenticaIlMioNome_3.jpg",revision:"12759f89236e4b5f3734847ac7db9f0c"},{url:"/static/images/books/Donne.jpeg",revision:"c9d43e0cad9cdc2fe3b4c9935b3b4a10"},{url:"/static/images/books/Donne.jpg",revision:"039aa0adb45bb8c0b4a36a1b1b42e4f3"},{url:"/static/images/books/Dune.jpg",revision:"d1fd6d120678421ec236ccd0e12ed5c8"},{url:"/static/images/books/DylanDog_RelazioniPericolose.jpg",revision:"eb72d7b48cd6eead75f3fc50e6f7006a"},{url:"/static/images/books/Factotum.jpg",revision:"639f90c5ca19b0424cedd333e9c9f585"},{url:"/static/images/books/Fahrenheit451.jpg",revision:"2ceb5a3b84f8d74f6e6602a6c1c96ac9"},{url:"/static/images/books/Fahrenheit451_02.jpg",revision:"67f5f4921a6a4d912f43ee531c38c358"},{url:"/static/images/books/Falce.jpg",revision:"8a388fcd96df50e744cccd549eaf65c5"},{url:"/static/images/books/FateIlVostroGioco.jpg",revision:"84a77d33c9a694b2194dec2755e27745"},{url:"/static/images/books/Flop2018.jpg",revision:"70bec427ce1e7d9bcaedd42c166deebf"},{url:"/static/images/books/Flop2019.jpg",revision:"a363e3bd235ede1cb7d7e2625b3b2270"},{url:"/static/images/books/Flop2020.jpg",revision:"fa7a6a794055cda6fad6f84f123e749f"},{url:"/static/images/books/Freeman Potere.jpg",revision:"1ca664eca7211bcab809a33283c75257"},{url:"/static/images/books/FreemanScrittoriFuturo.jpg",revision:"93672d95bec4795059dd6fcfd80351d0"},{url:"/static/images/books/GaiJin.jpg",revision:"8e6a36687609a2417bbead5be77d37f9"},{url:"/static/images/books/Gente di Dublino.jpg",revision:"8b17dbaa1a645e87a0e3e37ca1ab1cef"},{url:"/static/images/books/GenteDiDublino.jpg",revision:"096c2df5dc1b31af1ae266c17cf12677"},{url:"/static/images/books/Gideon la Nona.jpg",revision:"c2669e44579b47ebf21d37be9cf4203b"},{url:"/static/images/books/Gomorra.jpg",revision:"4a3ee77806774e4339e57b1a60b99a96"},{url:"/static/images/books/GoodOmens.jpg",revision:"f72a9fb97e442c9401491ef3748f9632"},{url:"/static/images/books/GoodOmens_1.jpg",revision:"54119d0974e0309027c62f9476354689"},{url:"/static/images/books/GuidaGalattica.jpg",revision:"2a9515a6ae76675349dd6d8b401bd8a2"},{url:"/static/images/books/HP_PietraFilosofale_Audiolibro.jpg",revision:"14bd6b4a53d13e3686ab54ff1464b0fe"},{url:"/static/images/books/Hyperion.jpg",revision:"e7e1163b1510f5b6e7257c605896c814"},{url:"/static/images/books/IKillGiants1.jpeg",revision:"dbfdb7473bdb7e8bb52e4798a590fefd"},{url:"/static/images/books/IKillGiants2.jpeg",revision:"6bdd89d0b1ca915e3acf5daa32c27225"},{url:"/static/images/books/IKillGiants3.jpeg",revision:"94953e25092640c6defe3a5f32015968"},{url:"/static/images/books/IKillGiantsTitan.jpg",revision:"dcf287e91841e9ab9a245a4a076052f5"},{url:"/static/images/books/Il Mondo Nuovo.jpg",revision:"33211bb2d01f3fedca6c77c5c281ca82"},{url:"/static/images/books/Il Priorato.jpg",revision:"786f309f70d35d9925a0ae962b061126"},{url:"/static/images/books/Il Racconto dell_Ancella.jpg",revision:"a771a5a03791dae702fa948674444c4d"},{url:"/static/images/books/Il corpo che vuoi.jpg",revision:"ffac2f5023dccc84a5733d11c42f7cf9"},{url:"/static/images/books/Il sole bacia i belli.jpg",revision:"bb4efdcbc8ae255c3dec3dd111022b6c"},{url:"/static/images/books/Il trono di spade 5.jpg",revision:"f3f5bd9893d376cc99ebdf5d50b138f0"},{url:"/static/images/books/IlBuioColpisceAncora.jpg",revision:"eb1bda2775f9319f1849b3f206105927"},{url:"/static/images/books/IlGattoEGliStivali.jpg",revision:"e0d88de8a20338acde4c8dbdb761dbe6"},{url:"/static/images/books/IlMondoNuovo.jpg",revision:"48118016a42f261bd37d73efe821453c"},{url:"/static/images/books/IlPiacere.jpg",revision:"1505d76371b95044d4309277f0d73581"},{url:"/static/images/books/IlSettimoGiorno.jpg",revision:"db85591ed6e680cb8f67daa3a2d9b878"},{url:"/static/images/books/IlSettimoGiorno_Audiolibro.jpg",revision:"9287b4b7a8a6fde4e408bbe690f5c418"},{url:"/static/images/books/IlSignoreDelleMosche.jpg",revision:"aa4a465b54e47ded8c920f298a2e07d4"},{url:"/static/images/books/IlTalloneDiFerro.jpg",revision:"899b0d9a09b893377ce3bd538e086180"},{url:"/static/images/books/IlTatuatore.jpg",revision:"3e454cf3b5c050bd141f0f6204701c39"},{url:"/static/images/books/IlTema.jpg",revision:"4d019a6c659ac7a0ee17e4aa84e1b4c2"},{url:"/static/images/books/IlTempoDegliDei.jpg",revision:"73420c49f6eee6a08204dfaa2a92d95a"},{url:"/static/images/books/IlTestamentoDiMagdalenBlair.jpg",revision:"0273473c6fe080a620c2ff79d5efaab0"},{url:"/static/images/books/Imbustastorie_Incubo.jpg",revision:"fcb89a098328e1af6de6c64247d670f1"},{url:"/static/images/books/Imbustastorie_Invubo_2.jpg",revision:"e33841f0004e3ec55e9c24203e653a21"},{url:"/static/images/books/IncuboDiHillHouse.jpg",revision:"f9f2e2aa8a8fe82226edd84e4dca1041"},{url:"/static/images/books/Intuizioni.jpg",revision:"08ab89095e15c8b198fe95b9aa2964d1"},{url:"/static/images/books/Io sono Diabolik.jpg",revision:"418e441b6a08d6c8d99f8dd9a468a431"},{url:"/static/images/books/Ipnagogica.jpg",revision:"3a9309fc96f6d0a0fa6ac7736e558e9b"},{url:"/static/images/books/IroIro.jpg",revision:"8066bd696222bd71a66945d55aad3a8d"},{url:"/static/images/books/Jeeg.jpg",revision:"15122c622a4910f21c600d1e92c86243"},{url:"/static/images/books/Jojonium.jpg",revision:"d8731bf1cbeb2312ad144e74ccd118b6"},{url:"/static/images/books/KafkaSullaSpiaggia.jpg",revision:"e6f88d56b76e6c7e7c7150f0385304d4"},{url:"/static/images/books/Kitchen.jpg",revision:"db3bea2920376ec5a7c5c235d0167f83"},{url:"/static/images/books/KobaneCallingOggi.jpg",revision:"107d0bc94c09407f1142d8319ab8eb81"},{url:"/static/images/books/LMVDM.jpg",revision:"928a98d63592112bfd624f3922279ecb"},{url:"/static/images/books/LMVDM_1.jpg",revision:"25ba95f199fca61bf9f15387516d20d3"},{url:"/static/images/books/LMVDM_2.jpg",revision:"8c269814e08d74d5d856d4cb70c6ae98"},{url:"/static/images/books/L_Ascesa di Senlin.jpg",revision:"2dfbc0f8e645f2ba1c7e1bce6b7664b5"},{url:"/static/images/books/La paura in giappone.jpg",revision:"6f8acfb897f5eacd72286267ebd3953f"},{url:"/static/images/books/La regina degli scacchi.jpg",revision:"2270f2abb3e4583139912314124baeae"},{url:"/static/images/books/La via del grembiule.jpg",revision:"944205419198c538ce5718437e15f54c"},{url:"/static/images/books/LaChiamataDeiTre.jpg",revision:"262e95529c60280f8f14c4295d3bc0ef"},{url:"/static/images/books/LaCinaInDieciParole.jpg",revision:"a5ecc61ccfbffefbe1251c0f2c13fe9b"},{url:"/static/images/books/LaDivinaCommedia.jpg",revision:"c8fab487776509bf4d873a3627be1f43"},{url:"/static/images/books/LaGraziaDeiRe.jpg",revision:"ca5feab766873e7da388d23fb2b48e04"},{url:"/static/images/books/LaMetamorfosi.jpg",revision:"45b50fb79de267cfe726e09f6de94849"},{url:"/static/images/books/LaParanzaDeiBambini.jpg",revision:"e59e4e8aed377814dc87160ba7749a3a"},{url:"/static/images/books/LaPortaProibita.jpg",revision:"9bc18990b53670b7c99dee6d48ffb712"},{url:"/static/images/books/LaProfeziaDellArmadillo.jpg",revision:"54db84a72a3a24f1d07d51f9ac43ffd2"},{url:"/static/images/books/LaProfeziaDellArmadillo_2.jpg",revision:"00617e9b0095c28d902511d079782eab"},{url:"/static/images/books/LaScuolaDiPizzeInFaccia.jpg",revision:"8119729b00f6c945da624472eac59ffc"},{url:"/static/images/books/LaStrada.jpg",revision:"84737adbe392b103d9f5f317c762c51a"},{url:"/static/images/books/Largo! Largo!.jpg",revision:"227d7d45e522a192d795eb84ed6060d4"},{url:"/static/images/books/LeAssaggiatrici.jpg",revision:"48ee3d480247a8300a997bee1c851229"},{url:"/static/images/books/LeSorelleDonguri.jpg",revision:"b9cf16ae40523dfb881da3f965cab538"},{url:"/static/images/books/LettereControLaGuerra.jpg",revision:"2932035e496c649213a9487a746d5d9e"},{url:"/static/images/books/LottaPerLaLiberta.jpg",revision:"d2dfa0db8fbeb87d5c5e63196f14f8ac"},{url:"/static/images/books/MAUS.jpg",revision:"2784f13c0fb5b13fca794a25c44e677d"},{url:"/static/images/books/MaceriePrime.jpg",revision:"c613bf3deca8ec43b513d75e5890127a"},{url:"/static/images/books/MaceriePrimeSeiMesiDopo.jpg",revision:"3f73a8bc7e298f47dad5eb6e65c0c9c2"},{url:"/static/images/books/MaceriePrime_2.jpg",revision:"f22803f85c8d382ec1cb2599c4061243"},{url:"/static/images/books/Magnus Chase Il Libro Segreto.jpg",revision:"0eb629bfd2063d895cc3d69f594f5e13"},{url:"/static/images/books/Marvel1602.jpg",revision:"d9e7455cb6fe2e524d70bb6e2e693e19"},{url:"/static/images/books/MattatoioN5.jpg",revision:"a2f63438343b42bc5044cc0fc524ac56"},{url:"/static/images/books/Maus_2.jpg",revision:"319114f0cc27f652c9d503bd5bff8fba"},{url:"/static/images/books/Maus_3.jpg",revision:"f64277f9df1d26ff891f2b4069f2d107"},{url:"/static/images/books/Metro2033.jpg",revision:"9beeec8457bc1b8db078f00845c40eec"},{url:"/static/images/books/Metro2034.jpeg",revision:"4163de7079cfcf192d3c2696ac5dbb02"},{url:"/static/images/books/Metro2035.jpg",revision:"0b8aa910b8ee218bab6d791c87496b47"},{url:"/static/images/books/MetroTrilogia.jpg",revision:"7a70b7d8635035aadba689385c44a6ce"},{url:"/static/images/books/MiamiBlues.jpg",revision:"1012aa9e995fea93bdbdc18bf1772afa"},{url:"/static/images/books/MitiDelNord.jpg",revision:"a6587520a9f6f5d5d138685241f2cb84"},{url:"/static/images/books/Nevernight_1.jpg",revision:"092e2bddfd7f2d72925388ea581d2535"},{url:"/static/images/books/Nevernight_2-2.jpg",revision:"f84fb6576cbfb2d0d07074404ccf24b3"},{url:"/static/images/books/Nevernight_2-3.jpg",revision:"f0eb1446ec0205782a12c36f531f4873"},{url:"/static/images/books/Nevernight_2-4.jpg",revision:"5c85237fe3a147b2cfc3a5763fe29f39"},{url:"/static/images/books/Nevernight_2.jpg",revision:"adecdb0a90ecb134d8bf7ec7a66f236e"},{url:"/static/images/books/Nevernight_3.jpg",revision:"17b66fb2fb2ff5f9ae2cc3da9bf5daef"},{url:"/static/images/books/NienteCanzoniDAmore.jpg",revision:"7cf0e80a17ccea3dd80de3cd87aa8c3e"},{url:"/static/images/books/Nightbird.jpg",revision:"a1ff959d1ad6dd36e4880d8b76625960"},{url:"/static/images/books/One-Punch Man Fanbook.jpg",revision:"c07052d07c1448b89ba4a023bd25ded6"},{url:"/static/images/books/Orfani1.jpg",revision:"f796acb589a47d15238d116ae28bf3fc"},{url:"/static/images/books/Orfani2.jpg",revision:"b8e8bc45d345d457c19082f7b12c1958"},{url:"/static/images/books/Orfani3.jpg",revision:"b467adc23dd712584b198784ecf35ed1"},{url:"/static/images/books/Orfani4.jpg",revision:"7fef7f0e74d45bbf06e9e203cd7281b3"},{url:"/static/images/books/PaninoAlProsciutto.jpg",revision:"49d07848c0ea970f1d01a24ef58982cc"},{url:"/static/images/books/PastoraleAmericana.jpg",revision:"bd7115d59ed5e48992b215560e2d6afb"},{url:"/static/images/books/Personal.jpg",revision:"d31540fed00899ac15afa324f6735e53"},{url:"/static/images/books/Phantasmagoria.jpg",revision:"3ecfbf8b36c01d85bdf6541c683023bd"},{url:"/static/images/books/PiccolaGuidaTascabile_Animali.jpg",revision:"5adcf891f04bb560a495393d321e2022"},{url:"/static/images/books/PicnicSulCiglioDellaStrada.jpg",revision:"c4b25be8348730707a7f52f88b8bba6b"},{url:"/static/images/books/PieraForde.jpg",revision:"d3abafa655a519f69476ca0abaa3ed70"},{url:"/static/images/books/PostOffice.jpg",revision:"2d8cc9e79f73d540532233e2c58a836c"},{url:"/static/images/books/QuandoEravamoGiovani.png",revision:"ce775791ad91cb0c09e3a7c38df1c96a"},{url:"/static/images/books/QuandoSieteFelici.jpg",revision:"bb437dc7ed6d8864128fa0c121e3560c"},{url:"/static/images/books/QuandoSieteFeliciFateciCaso.jpg",revision:"b6e4697d800bbcfd0ed561843b15953e"},{url:"/static/images/books/Raccontati dopo cena.jpg",revision:"b5288b581b0c99a49cab379403070ca2"},{url:"/static/images/books/RelazioniPericolose.jpg",revision:"b20ce33d99ddb4eb2c0bbe730e53c43a"},{url:"/static/images/books/RelazioniPericoloseVillains.jpg",revision:"f99ef001ffc974932feadda5c7969f94"},{url:"/static/images/books/RistoranteAlTermineDellUniverso.jpg",revision:"dbdbaee7c679d76e806e3d38e9ecfa61"},{url:"/static/images/books/Rockaway Beach.jpg",revision:"d1447732acbc2456ebdff635569c2e14"},{url:"/static/images/books/RuinAndRising.jpg",revision:"3c46c118da9b346a2d85eeb8a7479e94"},{url:"/static/images/books/Sahara.jpg",revision:"db106e89ca09bf1f79818eb9f35f7828"},{url:"/static/images/books/Scheletri.jpg",revision:"5320ca7d991f1859cbf2d76b476689e7"},{url:"/static/images/books/ShadowAndBone.jpg",revision:"eec38a217120179412e4bd9241b6c611"},{url:"/static/images/books/ShakespeareBukowski.jpg",revision:"c4bab8344893382662c887b74e78526c"},{url:"/static/images/books/Shogun.jpg",revision:"1f6dffaf325b1da29d395b4e2204ddbc"},{url:"/static/images/books/SiegeAndStorm.jpg",revision:"9af6815b6c5f30371004f2b3fccd67ee"},{url:"/static/images/books/SixOfCrows.jpg",revision:"21557b4933bca32d72d543a30ee1f2e7"},{url:"/static/images/books/SlamDunk.jpg",revision:"b20ffa571dc8c2ff7d54c7558a9aff29"},{url:"/static/images/books/SlamDunk6.jpg",revision:"eaa52741dc056f231f1fad88eba8ffd5"},{url:"/static/images/books/SoC_01.jpg",revision:"9a1e8c505570e9e16755a5fea9d6f8f5"},{url:"/static/images/books/SoC_02.jpg",revision:"f2025a627dc4533d08a65fc3c2a2b987"},{url:"/static/images/books/SoC_3.png",revision:"73ca43d98b25cb32d9afb10917ac4f74"},{url:"/static/images/books/Starship Troopers.png",revision:"30adba5f6dc4a6305aaa55ba55090c40"},{url:"/static/images/books/StrangersInParadise.jpg",revision:"53c572089f7a6f78582a033c652c604f"},{url:"/static/images/books/Sulle tracce di Jack lo Squartatore.jpg",revision:"5a60c20811d784f7760d1a2560781ea1"},{url:"/static/images/books/TWD_1.jpg",revision:"1bc90a07204fda29570c773ea47e2a93"},{url:"/static/images/books/TaiPan.jpg",revision:"b785dab91f059ceff6220957f5cd26fd"},{url:"/static/images/books/TdS_1_Illustrato.jpg",revision:"0531a2836a0ce89b65078b345b624ea2"},{url:"/static/images/books/TdS_3.jpg",revision:"a5d87b4920976fbc35ffb9fbdf3a244d"},{url:"/static/images/books/TdS_4.jpg",revision:"c2ce6ac1c057f9fd4bd3e524c0c72f56"},{url:"/static/images/books/TdS_5.jpg",revision:"f3f5bd9893d376cc99ebdf5d50b138f0"},{url:"/static/images/books/Tempi d_oro per i morti.jpg",revision:"805b143adf25191d8465ebb99b1adc80"},{url:"/static/images/books/The Roads to Sata.jpg",revision:"fb79a5486782bf94dd3ee87a84bdb4cd"},{url:"/static/images/books/TheOutsider.jpg",revision:"f4d8d8c6758db37b7e2047d7aaa6bf25"},{url:"/static/images/books/Thunderhead.jpg",revision:"19c5f19262ccf7197fb17f21a9a669cd"},{url:"/static/images/books/Tinte fosche.jpg",revision:"2834c0348572979a1b787fc8d464ed14"},{url:"/static/images/books/TokyoVice.jpg",revision:"4a894597ede0fa7dfc39c89903c08aed"},{url:"/static/images/books/TokyoVice2.jpg",revision:"f15244aea8bb6bbef1918f5f613a1d70"},{url:"/static/images/books/Top2018.jpg",revision:"19563c3c1298c1a750a6f612a3655d7b"},{url:"/static/images/books/Top2019.jpg",revision:"de4a27a10be5ef3033389a95f4fd19b8"},{url:"/static/images/books/Top2020.jpg",revision:"46c4487deb9efd3c9729ae279dee8e40"},{url:"/static/images/books/Trans Europa Express.jpg",revision:"71c844a1f44263503ff4e3e5a72f9734"},{url:"/static/images/books/TreUominiInBarca.jpg",revision:"d434c2e183073e591ff4b57e9de25743"},{url:"/static/images/books/Tredici.jpg",revision:"8efc442c7b7c2a2facb503f5a9fb969e"},{url:"/static/images/books/TronoDiSpade_1.jpg",revision:"43fd3e40295c95ddeabbd21272d1e362"},{url:"/static/images/books/TronoDiSpade_2.jpg",revision:"18be87ed1b450e40e570f1906155dc6e"},{url:"/static/images/books/Tropico del Cancro.jpg",revision:"ce138a95c3e2eb98408c53ed9b77fff5"},{url:"/static/images/books/UltimoCavaliere.jpg",revision:"708e2a651a55eb0b3a8ae2c9a6a9232e"},{url:"/static/images/books/UnAltroGiroDiGiostra.jpg",revision:"bde0d7ff52a5817d3ebab721755da38a"},{url:"/static/images/books/UnIndovinoMiDisse.jpg",revision:"872e9c8989d87bd45374caf3150a86b8"},{url:"/static/images/books/UnPolpoAllaGola.jpg",revision:"2ac5b1b33dc631bdf5d6dcea688e64f5"},{url:"/static/images/books/UomoInFuga.jpg",revision:"bad8a021822fd09543aee98fa17fff79"},{url:"/static/images/books/VadoVersoIlCapo.jpg",revision:"366a56b1b3ff661874ae7f99060ead60"},{url:"/static/images/books/Watchmen.jpg",revision:"f74cf6c6977c91afac50da91756a98a6"},{url:"/static/images/books/Watchmen.png",revision:"fdf31e87022df1089ee748d5afcc7ad5"},{url:"/static/images/books/ZappaESpada.jpg",revision:"30ad5707512f647817c5a8dcc74f2643"},{url:"/static/images/books/Zerocalcare.jpg",revision:"a51a2031c198fd3434e57dd638ec7bda"},{url:"/static/images/books/ilpriorato.jpg",revision:"5bdaf78d9158d0797252de1b4015a36d"},{url:"/static/images/books/io-sono-leggenda.jpg",revision:"c2d8fcf1065f0b7403856912366aa199"},{url:"/static/images/books/è difficile essere un dio.jpg",revision:"1396f8f3a1eb0f34d62a734377eaa3ea"},{url:"/static/images/escobar_meme.jpg",revision:"1fcb5a64ac2cc2e7962a7805d94bd8bd"},{url:"/static/images/gif/angry_panda.gif",revision:"32e06fd7b5e0a1356ac42cf6d7aeb3f3"},{url:"/static/images/gif/sad_panda.gif",revision:"a9d532406bef904136a0d18c5664531f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
