(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,":root {\n    --yellow: #FFBF00;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    border: none;\n    background: transparent;\n    font-size: 1rem;\n}\n\nbody {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #070707;\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    background: var(--yellow);\n    padding: 0.5rem 4rem;\n}\n\n.logo {\n    font-size: 1.5rem;\n}\n\n.nav__container {\n    align-self: center;\n    display: flex;\n    gap: 1rem;\n}\n\n.nav__container__elem {\n    font-size: 1.25rem;\n    text-transform: capitalize;\n    cursor: pointer;\n    border-bottom: 2px solid var(--yellow);\n}\n\n.active {\n    border-color: #ff4000;\n}\n\n.hero {\n    margin-left: 4rem;\n    position: relative;\n}\n\n.hero__container {\n    display: flex;\n}\n\n.hero__left {\n    margin-top: 6rem;\n}\n\n.hero__small {\n    color: var(--yellow);\n    font-weight: bold;\n}\n\n.hero__header {\n    font-size: 3rem;\n    font-weight: 900;\n    margin-bottom: 0.5rem;\n}\n\n.hero__para {\n    margin: 1rem 0;\n}\n\n.hero__cta {\n    padding: 1rem 2rem;\n    background: var(--yellow);\n    border-radius: 1.5rem;\n    font-weight: bold;\n}\n\n.hero__img {\n    position: absolute;\n    left: 50rem;\n    top: 1rem;\n    rotate: 180deg;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),m=t(28),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"624be9acb5c7698c6bbc.png";t.p;const v={home(){const e=document.createElement("section"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("small");o.textContent="Restaurant",o.classList.add("hero__small");const a=document.createElement("h1");a.textContent="We Serve Delicious Food",a.classList.add("hero__header");const i=document.createElement("p");i.textContent="Keeping it easy with simple but delicious recipes from make-ahead lunches and mid-week meals to fuss-free sides",i.classList.add("hero__para");const s=document.createElement("button");s.textContent="Get started",s.classList.add("hero__cta"),t.append(o,a,i,s),t.classList.add("hero__left"),r.innerHTML='<svg id="visual" viewBox="0 0 900 450" width="900" height="450" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(899.7544314682737 26.46249110795273)"><path d="M365.5 210.9C243.8 421.8 -243.1 421.6 -364.9 210.7C-486.7 -0.2 -243.4 -422 0.1 -421.9C243.6 -421.9 487.1 0 365.5 210.9" fill="#FFBF00"></path></g></svg>',r.classList.add("hero__right"),n.append(t,r),n.classList.add("hero__container");const c=document.createElement("img");return c.src=h,c.classList.add("hero__img"),e.append(n,c),e.classList.add("hero"),e},menu(){console.log("menu")},about(){console.log("about")}};document.getElementById("root").append(function(){const e=document.createElement("nav"),n=document.createElement("h2");n.textContent="ElixirBite",n.classList.add("logo"),e.appendChild(n);const t=document.createElement("div");t.classList.add("nav__container");for(let e of["home","about","menu"]){let n=document.createElement("button");n.textContent=e,n.classList.add("nav__container__elem"),n.addEventListener("click",(()=>{for(let e of t.children)e.classList.remove("active");n.classList.toggle("active"),v[e]()})),t.appendChild(n)}return t.firstChild.classList.add("active"),e.appendChild(t),e}(),v.home())})()})();