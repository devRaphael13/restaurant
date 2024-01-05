(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,":root {\n    --yellow: #FFBF00;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    border: none;\n    background: transparent;\n    font-size: 1rem;\n}\n\nbody {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #070707;\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    background: var(--yellow);\n    padding: 0.5rem 4rem;\n}\n\n.logo {\n    font-size: 1.5rem;\n}\n\n.nav__container {\n    align-self: center;\n    display: flex;\n    gap: 1rem;\n}\n\n.nav__container__elem {\n    font-size: 1.25rem;\n    text-transform: capitalize;\n    cursor: pointer;\n    border-bottom: 2px solid var(--yellow);\n}\n\n.active {\n    border-color: #ff4000;\n}\n\n.hero {\n    margin-left: 4rem;\n    position: relative;\n}\n\n.hero__container {\n    display: flex;\n}\n\n.hero__left {\n    margin-top: 6rem;\n}\n\n.hero__small {\n    color: var(--yellow);\n    font-weight: bold;\n}\n\n.hero__header {\n    font-size: 3rem;\n    font-weight: 900;\n    margin-bottom: 0.5rem;\n}\n\n.hero__para {\n    margin: 1rem 0;\n}\n\n.hero__cta {\n    padding: 1rem 2rem;\n    background: var(--yellow);\n    border-radius: 1.5rem;\n    font-weight: bold;\n}\n\n.hero__img {\n    position: absolute;\n    left: 50rem;\n    top: 1rem;\n    rotate: 180deg;\n}\n\n.about {\n    margin-top: 4rem;\n    display: flex;\n    justify-content: center;\n    gap: 3rem;\n}\n\n.about__left {\n    width: 50%;\n    position: relative;\n}\n\n.about__img {\n    position: absolute;\n    top: 5rem;\n    left: 16rem;\n}\n\n.about__right {\n    width: 50%;\n    margin-top: 4rem;\n    padding-right: 8rem;\n}\n\n.about__header1,\n.about__header2 {\n    font-size: 2rem;\n    font-weight: 900;\n    display: inline;\n}\n\n.about__header2 {\n    color: var(--yellow);\n    margin-left: 0.5rem;\n}\n\n.about__para {\n    margin: 1.5rem 0;\n}\n\n.about__btn {\n    border: 2px solid var(--yellow);\n    color: var(--yellow);\n    border-radius: 1.5rem;\n    padding: 1rem 2rem;\n    font-weight: bold;\n}\n\n.menu {\n    padding: 6rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.menu__heading,\n.menu__headingpart {\n    font-size: 2rem;\n    display: inline;\n}\n\n.menu__headingpart {\n    color: var(--yellow);\n}\n\n.menu__container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n    margin-top: 2rem;\n}\n\n.menu__div1 {\n    border-radius: 1rem;\n    height: 350px;\n    margin-bottom: 4rem;\n}\n\n.menu__image {\n    width: 100%;\n    border-radius: 1rem 1rem 0 0;\n    height: 350px;\n}\n\n.menu__flexdiv {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 0.75rem;\n}\n\n.menu__ctabtn {\n    padding: 0.5rem 8rem;\n    background: var(--yellow);\n    border-radius: 0.25rem;\n    font-weight: bold;\n    margin-top: 0.75rem;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,m="".concat(d," ").concat(l);a[d]=l+1;var u=t(m),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var h=o(p,r);r.byIndex=s,n.splice(s,0,{identifier:m,updater:h,references:1})}i.push(m)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),m=t(589),u=t.n(m),p=t(28),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const f=t.p+"624be9acb5c7698c6bbc.png",g=t.p+"e95210bb858d0d5613ca.png",v=t.p+"05bc571a277d5d192293.jpeg",_=t.p+"11d58b384814f0b9fbd3.jpeg",b=t.p+"e35610b86c3736d190d2.jpeg",y=document.getElementById("root"),w=document.createElement("main");function x(e){w.firstChild&&w.removeChild(w.firstChild),w.append(e())}y.append(function(){const e=document.createElement("nav"),n=document.createElement("h2");n.textContent="ElixirBite",n.classList.add("logo"),e.appendChild(n);const t=document.createElement("div");t.classList.add("nav__container");for(let e of["home","about","menu"]){let n=document.createElement("button");n.textContent=e,n.classList.add("nav__container__elem"),n.addEventListener("click",(()=>{for(let e of t.children)e.classList.remove("active");n.classList.toggle("active"),x(E[e])})),t.appendChild(n)}return t.firstChild.classList.add("active"),e.appendChild(t),e}(),w);const E={home(){const e=document.createElement("section"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("small");o.textContent="Restaurant",o.classList.add("hero__small");const a=document.createElement("h1");a.textContent="We Serve Delicious Food",a.classList.add("hero__header");const i=document.createElement("p");i.textContent="Keeping it easy with simple but delicious recipes from make-ahead lunches and mid-week meals to fuss-free sides",i.classList.add("hero__para");const s=document.createElement("button");s.textContent="Get started",s.classList.add("hero__cta"),t.append(o,a,i,s),t.classList.add("hero__left"),r.innerHTML='<svg id="visual" viewBox="0 0 900 450" width="900" height="450" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(899.7544314682737 26.46249110795273)"><path d="M365.5 210.9C243.8 421.8 -243.1 421.6 -364.9 210.7C-486.7 -0.2 -243.4 -422 0.1 -421.9C243.6 -421.9 487.1 0 365.5 210.9" fill="#FFBF00"></path></g></svg>',r.classList.add("hero__right"),n.append(t,r),n.classList.add("hero__container");const c=document.createElement("img");return c.src=f,c.classList.add("hero__img"),e.append(n,c),e.classList.add("hero"),e},menu(){const e=document.createElement("section");e.classList.add("menu");const n=document.createElement("h2");n.classList.add("menu__heading"),n.textContent="Most Popular ";const t=document.createElement("h2");t.classList.add("menu__headingpart"),t.textContent="Food";const r=document.createElement("div");r.append(n,t);const o=document.createElement("div");o.classList.add("menu__container");for(let e of[["Breakfast",v],["Lunch",_],["Dinner",b]]){const n=document.createElement("div");n.classList.add("menu__div1");const t=document.createElement("img");t.src=e[1],t.classList.add("menu__image");const r=document.createElement("div");r.classList.add("menu__div2");const a=document.createElement("div");a.classList.add("menu__flexdiv");const i=document.createElement("h3");i.textContent=e[0];const s=document.createElement("h3");s.textContent="$199";const c=document.createElement("button");c.classList.add("menu__ctabtn"),c.textContent="Add to Cart",a.append(i,s),r.append(a,c),n.append(t,r),o.append(n)}return e.append(r,o),e},about(){const e=document.createElement("section"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div");r.innerHTML='<svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(426.8790573081478 332.63818847159183)"><path d="M133 -141.5C174.5 -91.5 211.7 -45.7 220.9 9.2C230.1 64.1 211.2 128.2 169.7 161.2C128.2 194.2 64.1 196.1 1.3 194.8C-61.5 193.5 -123 189 -148 156C-173 123 -161.5 61.5 -165.6 -4.1C-169.8 -69.8 -189.5 -139.5 -164.5 -189.5C-139.5 -239.5 -69.8 -269.8 -12 -257.7C45.7 -245.7 91.5 -191.5 133 -141.5" fill="#FFBF00"></path></g></svg>',r.classList.add("about__svg");const o=document.createElement("img");o.src=g,o.classList.add("about__img"),n.append(r,o),n.classList.add("about__left");const a=document.createElement("h2");a.textContent="About",a.classList.add("about__header1");const i=document.createElement("h2");i.textContent="Us",i.classList.add("about__header2");const s=document.createElement("p");s.textContent="Keeping healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter.Keeping healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter.Keeping healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter.",s.classList.add("about__para");const c=document.createElement("button");return c.textContent="View more",c.classList.add("about__btn"),t.append(a,i,s,c),t.classList.add("about__right"),e.append(n,t),e.classList.add("about"),e}};x(E.home)})()})();