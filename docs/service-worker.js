if(!self.define){let i,e={};const r=(r,n)=>(r=new URL(r+".js",n).href,e[r]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=r,i.onload=e,document.head.appendChild(i)}else i=r,importScripts(r),e()})).then((()=>{let i=e[r];if(!i)throw new Error(`Module ${r} didn’t register its module`);return i})));self.define=(n,a)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(e[s])return;let c={};const o=i=>r(i,s),d={module:{uri:s},exports:c,require:o};e[s]=Promise.all(n.map((i=>d[i]||o(i)))).then((i=>(a(...i),c)))}}define(["./workbox-29b31176"],(function(i){"use strict";i.setCacheNameDetails({prefix:"ethyria-anniversary-6m"}),self.skipWaiting(),i.precacheAndRoute([{url:"/ethyria-anniversary-6m/css/app.ad9d17ee.css",revision:null},{url:"/ethyria-anniversary-6m/css/chunk-vendors.88b2bdb4.css",revision:null},{url:"/ethyria-anniversary-6m/favicon.ico",revision:"f93e7356b3e6d4c4649cd27c3b4e62f2"},{url:"/ethyria-anniversary-6m/img/header.4bdbe8b4.png",revision:null},{url:"/ethyria-anniversary-6m/img/icons/android-chrome-192x192.png",revision:"9363b143d475a2c5b0b03d114499c6da"},{url:"/ethyria-anniversary-6m/img/icons/android-chrome-512x512.png",revision:"a5160bd1cb6e8155fd4836659a3a45cb"},{url:"/ethyria-anniversary-6m/img/icons/android-chrome-maskable-192x192.png",revision:"9363b143d475a2c5b0b03d114499c6da"},{url:"/ethyria-anniversary-6m/img/icons/android-chrome-maskable-512x512.png",revision:"a5160bd1cb6e8155fd4836659a3a45cb"},{url:"/ethyria-anniversary-6m/img/icons/apple-touch-icon-120x120.png",revision:"ce540a10853585318711d929f2401256"},{url:"/ethyria-anniversary-6m/img/icons/apple-touch-icon-152x152.png",revision:"a88e739a2aad447674ba16d10a3c5e7c"},{url:"/ethyria-anniversary-6m/img/icons/apple-touch-icon-180x180.png",revision:"7318736e30759a1e61612f5b21ea7718"},{url:"/ethyria-anniversary-6m/img/icons/apple-touch-icon-60x60.png",revision:"3ffabd1da2a3b69d32a6ee9c2b703ee9"},{url:"/ethyria-anniversary-6m/img/icons/apple-touch-icon-76x76.png",revision:"b8167bcc9933c10c3daffacd5effd9a8"},{url:"/ethyria-anniversary-6m/img/icons/apple-touch-icon.png",revision:"7318736e30759a1e61612f5b21ea7718"},{url:"/ethyria-anniversary-6m/img/icons/favicon-16x16.png",revision:"236b9915cddce8b3d1268341b4ac1d91"},{url:"/ethyria-anniversary-6m/img/icons/favicon-32x32.png",revision:"5163ff6645f93ef8caf66cebb6a39a9c"},{url:"/ethyria-anniversary-6m/img/icons/msapplication-icon-144x144.png",revision:"5331abf1b8dbfdf83514d533fafbf5f3"},{url:"/ethyria-anniversary-6m/img/icons/mstile-150x150.png",revision:"5b84e79fbb40328fdd60bad0e36ad124"},{url:"/ethyria-anniversary-6m/img/icons/safari-pinned-tab.svg",revision:"ad19f9d92cd126d580f974996bff6543"},{url:"/ethyria-anniversary-6m/img/section-happy.5b798e02.png",revision:null},{url:"/ethyria-anniversary-6m/index.html",revision:"67fbf88f5da7cf36ea44532b1f5b3cdc"},{url:"/ethyria-anniversary-6m/js/app.4d430b9c.js",revision:null},{url:"/ethyria-anniversary-6m/js/chunk-vendors.bc960764.js",revision:null},{url:"/ethyria-anniversary-6m/manifest.json",revision:"40828eac2a8dd346f2642fd56c20e631"},{url:"/ethyria-anniversary-6m/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
