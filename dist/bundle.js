(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,":root {\n    --yellow: #FFBF00;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    border: none;\n    background: transparent;\n    font-size: 1rem;\n}\n\nbody {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #070707;\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    background: var(--yellow);\n    padding: 0.5rem 4rem;\n}\n\n.logo {\n    font-size: 1.5rem;\n}\n\n.nav__container {\n    align-self: center;\n    display: flex;\n    gap: 1rem;\n}\n\n.nav__container__elem {\n    font-size: 1.25rem;\n    text-transform: capitalize;\n    cursor: pointer;\n    border-bottom: 2px solid var(--yellow);\n}\n\n.active {\n    border-color: #ff4000;\n}\n\n.hero {\n    margin-left: 4rem;\n    position: relative;\n}\n\n.hero__container {\n    display: flex;\n}\n\n.hero__left {\n    margin-top: 6rem;\n}\n\n.hero__small {\n    color: var(--yellow);\n    font-weight: bold;\n}\n\n.hero__header {\n    font-size: 3rem;\n    font-weight: 900;\n    margin-bottom: 0.5rem;\n}\n\n.hero__para {\n    margin: 1rem 0;\n}\n\n.hero__cta {\n    padding: 1rem 2rem;\n    background: var(--yellow);\n    border-radius: 1.5rem;\n    font-weight: bold;\n}\n\n.hero__img {\n    position: absolute;\n    left: 50rem;\n    top: 1rem;\n    rotate: 180deg;\n}\n\n.about {\n    margin-top: 4rem;\n    display: flex;\n    justify-content: center;\n    gap: 3rem;\n}\n\n.about__left {\n    width: 50%;\n    position: relative;\n}\n\n.about__img {\n    position: absolute;\n    top: 5rem;\n    left: 16rem;\n}\n\n.about__right {\n    width: 50%;\n    margin-top: 4rem;\n    padding-right: 8rem;\n}\n\n.about__header1, .about__header2 {\n    font-size: 2rem;\n    font-weight: 900;\n    display: inline;\n}\n\n.about__header2 {\n    color: var(--yellow);\n    margin-left: 0.5rem;\n}\n\n.about__para {\n    margin: 1.5rem 0;\n}\n\n.about__btn {\n    border: 2px solid var(--yellow);\n    color: var(--yellow);\n    border-radius: 1.5rem;\n    padding: 1rem 2rem;\n}\n\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var m=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),m=n.n(u),p=n(28),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const f=n.p+"624be9acb5c7698c6bbc.png",g=n.p+"e95210bb858d0d5613ca.png",v={home(){const e=document.createElement("section"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("small");o.textContent="Restaurant",o.classList.add("hero__small");const a=document.createElement("h1");a.textContent="We Serve Delicious Food",a.classList.add("hero__header");const i=document.createElement("p");i.textContent="Keeping it easy with simple but delicious recipes from make-ahead lunches and mid-week meals to fuss-free sides",i.classList.add("hero__para");const s=document.createElement("button");s.textContent="Get started",s.classList.add("hero__cta"),n.append(o,a,i,s),n.classList.add("hero__left"),r.innerHTML='<svg id="visual" viewBox="0 0 900 450" width="900" height="450" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(899.7544314682737 26.46249110795273)"><path d="M365.5 210.9C243.8 421.8 -243.1 421.6 -364.9 210.7C-486.7 -0.2 -243.4 -422 0.1 -421.9C243.6 -421.9 487.1 0 365.5 210.9" fill="#FFBF00"></path></g></svg>',r.classList.add("hero__right"),t.append(n,r),t.classList.add("hero__container");const c=document.createElement("img");return c.src=f,c.classList.add("hero__img"),e.append(t,c),e.classList.add("hero"),e},menu(){console.log("menu")},about(){const e=document.createElement("section"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");r.innerHTML='<svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(426.8790573081478 332.63818847159183)"><path d="M133 -141.5C174.5 -91.5 211.7 -45.7 220.9 9.2C230.1 64.1 211.2 128.2 169.7 161.2C128.2 194.2 64.1 196.1 1.3 194.8C-61.5 193.5 -123 189 -148 156C-173 123 -161.5 61.5 -165.6 -4.1C-169.8 -69.8 -189.5 -139.5 -164.5 -189.5C-139.5 -239.5 -69.8 -269.8 -12 -257.7C45.7 -245.7 91.5 -191.5 133 -141.5" fill="#FFBF00"></path></g></svg>',r.classList.add("about__svg");const o=document.createElement("img");o.src=g,o.classList.add("about__img"),t.append(r,o),t.classList.add("about__left");const a=document.createElement("h2");a.textContent="About",a.classList.add("about__header1");const i=document.createElement("h2");i.textContent="Us",i.classList.add("about__header2");const s=document.createElement("p");s.textContent="Keeping healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter.Keeping healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter.Keeping healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter.",s.classList.add("about__para");const c=document.createElement("button");return c.textContent="View more",c.classList.add("about__btn"),n.append(a,i,s,c),n.classList.add("about__right"),e.append(t,n),e.classList.add("about"),e}};document.getElementById("root").append(function(){const e=document.createElement("nav"),t=document.createElement("h2");t.textContent="ElixirBite",t.classList.add("logo"),e.appendChild(t);const n=document.createElement("div");n.classList.add("nav__container");for(let e of["home","about","menu"]){let t=document.createElement("button");t.textContent=e,t.classList.add("nav__container__elem"),t.addEventListener("click",(()=>{for(let e of n.children)e.classList.remove("active");t.classList.toggle("active")})),n.appendChild(t)}return n.firstChild.classList.add("active"),e.appendChild(n),e}(),v.about())})()})();