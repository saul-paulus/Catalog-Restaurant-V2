!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=8)}([function(n,t,e){(function(n){function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var e=function(n){"use strict";var e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{u({},"")}catch(n){u=function(n,t,e){return n[t]=e}}function s(n,t,e,r){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new _(r||[]);return i._invoke=function(n,t,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return E()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=w(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=l(n,t,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}(n,e,a),i}function l(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=s;var f={};function d(){}function p(){}function h(){}var v={};v[i]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(j([])));g&&g!==e&&r.call(g,i)&&(v=g);var b=h.prototype=d.prototype=Object.create(v);function y(n){["next","throw","return"].forEach((function(t){u(n,t,(function(n){return this._invoke(t,n)}))}))}function x(n,e){var o;this._invoke=function(i,a){function c(){return new e((function(o,c){!function o(i,a,c,u){var s=l(n[i],n,a);if("throw"!==s.type){var f=s.arg,d=f.value;return d&&"object"===t(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(n){o("next",n,c,u)}),(function(n){o("throw",n,c,u)})):e.resolve(d).then((function(n){f.value=n,c(f)}),(function(n){return o("throw",n,c,u)}))}u(s.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}}function w(n,t){var e=n.iterator[t.method];if(void 0===e){if(t.delegate=null,"throw"===t.method){if(n.iterator.return&&(t.method="return",t.arg=void 0,w(n,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=l(e,n.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var o=r.arg;return o?o.done?(t[n.resultName]=o.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function k(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function L(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function _(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(k,this),this.reset(!0)}function j(n){if(n){var t=n[i];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,o=function t(){for(;++e<n.length;)if(r.call(n,e))return t.value=n[e],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=b.constructor=h,h.constructor=p,p.displayName=u(h,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,h):(n.__proto__=h,u(n,c,"GeneratorFunction")),n.prototype=Object.create(b),n},n.awrap=function(n){return{__await:n}},y(x.prototype),x.prototype[a]=function(){return this},n.AsyncIterator=x,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new x(s(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},y(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},n.keys=function(n){var t=[];for(var e in n)t.push(e);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=j,_.prototype={constructor:_,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!n)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function e(e,r){return a.type="throw",a.arg=n,t.next=e,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),f},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),L(e),f}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:j(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},n}("object"===t(n)?n.exports:{});try{regeneratorRuntime=e}catch(n){Function("r","regeneratorRuntime = r")(e)}}).call(this,e(1)(n))},function(n,t){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(n,t,e){var r=e(3),o=e(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function c(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function u(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],u=t.base?i[0]+t.base:i[0],s=e[u]||0,l="".concat(u," ").concat(s);e[u]=s+1;var f=c(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:m(d,t),references:1}),r.push(l)}return r}function s(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function d(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function p(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,v=0;function m(n,t){var e,r,o;if(t.singleton){var i=v++;e=h||(h=s(t)),r=d.bind(null,e,i,!1),o=d.bind(null,e,i,!0)}else e=s(t),r=p.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=u(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=c(e[r]);a[o].references--}for(var i=u(n,t),s=0;s<e.length;s++){var l=c(e[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=i}}}},function(n,t,e){var r=e(5),o=e(6),i=e(7);t=r(!1);var a=o(i);t.push([n.i,"* {\n    padding: 0;\n    margin: 0;\n}\n\na {\n    text-decoration: none;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nbody,\nhtml {\n    font-family: 'Montserrat', sans-serif;\n    background-color: #ffffff;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n/*=====Navbar======*/\n.navbar {\n    width: 100%;\n    background-color: rgba(15, 15, 15, 0.849);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    position: -webkit-fixed;\n    top: 0;\n    z-index: 999;\n    height: 80px;\n}\n\n.navbar .navbar-brand {\n    margin-left: 20px;\n    cursor: pointer;\n    background-color: #f0b452;\n    border-radius: 50px;\n}\n\n.navbar .navbar-brand img {\n    width: 40px;\n    height: 40px;\n}\n\n.navbar .navbar-menu {\n    margin-right: 20px;\n    display: block;\n    cursor: pointer;\n}\n\n.navbar .navbar-menu p {\n    font-size: 27px;\n    background-color: #f0b452;\n    color: #0f0f0f;\n}\n\n.navbar .navbar-navigation {\n    position: absolute;\n    top: 80px;\n    width: 80%;\n    height: 100vh;\n    background-color: rgba(15, 15, 15, 0.849);\n    opacity: 0.8;\n    overflow: hidden;\n    z-index: 99;\n    left: -100%;\n    transition: ease-in-out 0.4s;\n}\n\n.navbar .navbar-navigation.open {\n    left: 0;\n}\n\n.navbar .navbar-navigation ul li a {\n    position: relative;\n    display: inline-block;\n    color: #fa9311;\n    font-size: 20px;\n    font-weight: 500;\n    padding: 40px;\n    width: 100%;\n    margin-top: 10px;\n    z-index: 99;\n}\n\n\n/* membuat header */\n\n.header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("+a+");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    height: 100%;\n}\n\n.header .header-container {\n    display: block;\n    margin-top: 90px;\n    margin-bottom: 120px;\n    text-align: center;\n}\n\n.header .header-container .header-title h1 {\n    display: inline-block;\n    font-size: 1.7em;\n    color: #ffffff;\n}\n\n.header .header-description {\n    display: inline-block;\n    color: #d6d3d3;\n    margin: 15px auto;\n    text-align: justify;\n    margin-bottom: 20px;\n    margin-top: 50px;\n    width: 90%;\n}\n\n.header .header-tombol a {\n    display: inline-block;\n    padding: 10px;\n    margin-top: 60px;\n    margin-bottom: 30px;\n    background-color: #fa9311;\n    color: #ffffff;\n    border-radius: 4px;\n}\n\n\n/* Membuat footer */\n\nfooter {\n    margin-top: 100px;\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n    text-align: center;\n    background-color: #0f0f0f;\n}\n\nfooter p {\n    padding: 40px;\n    color: #ffffff;\n}\n\n\n\n/* MEmbuat responsive */\n\n@media (min-width: 576px) {\n    /*  */\n    .navbar .navbar-navigation {\n        position: relative;\n        width: 50%;\n        margin-right: 75px;\n        left: 0;\n        background-color: rgba(247, 242, 234, 0);\n        height: 5vh;\n        top: 0;\n    }\n    .navbar .navbar-navigation ul {\n        display: flex;\n        justify-content: space-between;\n    }\n    .navbar .navbar-navigation li {\n        text-align: center;\n        display: inline-block;\n    }\n    .navbar .navbar-navigation ul li a {\n        text-align: center;\n        padding: 5px;\n        margin-top: 0;\n        color: #fa9311;\n    }\n    .navbar .navbar-navigation ul li a:hover {\n        text-decoration: underline;\n    }\n    .navbar .navbar-menu {\n        display: none;\n    }\n    .navbar .navbar-brand {\n        margin-left: 75px;\n    }\n}\n\n@media (min-width: 768px) {\n    /*  */\n\n}\n\n@media (min-width: 992px) {}\n\n@media (min-width: 1200px) {\n    .navbar .navbar-navigation {\n        margin-right: 140px;\n    }\n    .navbar .navbar-brand {\n        margin-left: 140px;\n    }\n}\n\n@media (min-width: 1400px) {\n    .navbar .navbar-navigation {\n        margin-right: 100px;\n    }\n    .navbar .navbar-brand {\n        margin-left: 100px;\n    }\n}",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var a,c,u;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);r&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),t.push(u))}},t}},function(n,t,e){"use strict";n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,t,e){"use strict";e.r(t),t.default=e.p+"7203532a597542e0a39c84b1484afbb5.jpg"},function(n,t,e){"use strict";e.r(t);e(0),e(2);var r={init:function(n){var t=this,e=n.button,r=n.menu,o=n.content;e.addEventListener("click",(function(n){t._toggleMenu(n,r)})),o.addEventListener("click",(function(n){t._closeMenu(n,r)}))},_toggleMenu:function(n,t){n.stopPropagation(),t.classList.toggle("open")},_closeMenu:function(n,t){n.stopPropagation(),t.classList.remove("open")}},o={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),t=this._urlSplitter(n);return this._urlCombiner(t)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var t=n.split("/");return{resource:t[1]||null,id:t[2]||null,verb:t[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}};function i(n,t,e,r,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void e(n)}c.done?t(u):Promise.resolve(u).then(r,o)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function c(n){i(a,r,o,c,u,"next",n)}function u(n){i(a,r,o,c,u,"throw",n)}c(void 0)}))}}var c={render:function(){return a(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n    \x3c!-- membuat header --\x3e\n      <header class="header">\n          <div class="header-container">\n              <div class="header-title">\n                  <h1>Meet, Eat & Enjoy</h1>\n                  <h1>The Deliciuous Meals</h1>\n              </div>\n              <div class="header-description">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto reprehenderit quae dicta? Perferendis vel iste dolore quos eligendi qui nihil assumenda voluptatum, id, praesentium inventore! Minima, quod. Aspernatur, quae blanditiis.</p>\n              </div>\n              <div class="header-tombol">\n                  <a href="">Our recomendation</a>\n              </div>     \n          </div>\n      </header>\n    \x3c!-- AKhir membuat header --\x3e\n      <main class="main-content">\n        <div class="main-title">\n          <h1>Explore Our Best Restaurant</h1>\n          <span></span>\n        </div>\n          <div id="containt-card" class="main-container-card">\n        </div>\n      </main>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return a(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})))()}};function u(n,t,e,r,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void e(n)}c.done?t(u):Promise.resolve(u).then(r,o)}function s(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function a(n){u(i,r,o,a,c,"next",n)}function c(n){u(i,r,o,a,c,"throw",n)}a(void 0)}))}}function l(n,t,e,r,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void e(n)}c.done?t(u):Promise.resolve(u).then(r,o)}function f(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function a(n){l(i,r,o,a,c,"next",n)}function c(n){l(i,r,o,a,c,"throw",n)}a(void 0)}))}}var d={"/":c,"/home":c,"/favorite":{render:function(){return s(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return","<h1>Ini halaman favotite</h1>");case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return s(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})))()}},"/detail/:id":{render:function(){return f(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return","\n     <h1>Ini halaman detail</h1>\n");case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return f(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})))()}}};function p(n,t,e,r,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void e(n)}c.done?t(u):Promise.resolve(u).then(r,o)}function h(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var v=new(function(){function n(t){var e=t.button,r=t.menu,o=t.content;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=e,this._menu=r,this._content=o,this._initialAppShell()}var t,e,i,a,c;return t=n,(e=[{key:"_initialAppShell",value:function(){r.init({button:this._button,menu:this._menu,content:this._content})}},{key:"renderPage",value:(a=regeneratorRuntime.mark((function n(){var t,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.parseActiveUrlWithCombiner(),e=d[t],n.next=4,e.render();case 4:return this._content.innerHTML=n.sent,n.next=7,e.afterRender();case 7:case"end":return n.stop()}}),n,this)})),c=function(){var n=this,t=arguments;return new Promise((function(e,r){var o=a.apply(n,t);function i(n){p(o,e,r,i,c,"next",n)}function c(n){p(o,e,r,i,c,"throw",n)}i(void 0)}))},function(){return c.apply(this,arguments)})}])&&h(t.prototype,e),i&&h(t,i),n}())({button:document.querySelector("#tombol-menu"),menu:document.querySelector("#navigation-menu"),content:document.querySelector("#container-content")});window.addEventListener("hashchange",(function(){v.renderPage()})),window.addEventListener("load",(function(){v.renderPage()}))}]);