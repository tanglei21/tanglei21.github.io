(function(e){function n(n){for(var r,o,i=n[0],u=n[1],d=n[2],s=0,l=[];s<i.length;s++)o=i[s],a[o]&&l.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(n);while(l.length)l.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==a[i]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ae607":"69588f4c","chunk-2d222708":"75107edb","chunk-5895d9ce":"6a453ebb","chunk-79e86cb2":"f30cc351","chunk-afc021c0":"0a258e63","chunk-c21e34be":"742b71f3","chunk-fba36764":"46284217"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-5895d9ce":1,"chunk-79e86cb2":1,"chunk-afc021c0":1,"chunk-c21e34be":1,"chunk-fba36764":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0ae607":"31d6cfe0","chunk-2d222708":"31d6cfe0","chunk-5895d9ce":"6bf8afa6","chunk-79e86cb2":"6e6c4cdb","chunk-afc021c0":"44656652","chunk-c21e34be":"908d9a92","chunk-fba36764":"579c9959"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var d=c[i],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===a))return n()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){d=l[i],s=d.getAttribute("data-href");if(s===r||s===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,delete o[e],f.parentNode.removeChild(f),t(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise(function(n,t){r=a[e]=[n,t]});n.push(r[2]=c);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e),d=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,t[1](c)}a[e]=void 0}};var l=setTimeout(function(){d({type:"timeout",target:s})},12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var f=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("64a9"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],c=(t("28a5"),{name:"app",created:function(){this.getLocation()},methods:{getLocation:function(){var e=this;AMap.plugin("AMap.Geolocation",function(){var n=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4});function t(n){e.$store.dispatch("setLocation",n),e.$store.dispatch("setAddress",n.formattedAddress)}function r(n){e.getLngLatLocation()}n.getCurrentPosition(),AMap.event.addListener(n,"complete",t),AMap.event.addListener(n,"error",r)})},getLngLatLocation:function(){var e=this;AMap.plugin("AMap.CitySearch",function(){var n=new AMap.CitySearch;n.getLocalCity(function(n,t){"complete"===n&&"OK"===t.info&&(console.log(t),AMap.plugin("AMap.Geocoder",function(){var n=new AMap.Geocoder({city:t.adcode}),r=t.rectangle.split(";")[0].split(",");n.getAddress(r,function(n,r){"complete"===n&&"OK"===r.info&&(e.$store.dispatch("setLocation",{addressComponent:{city:t.city,province:t.province},formattedAddress:r.regeocode.formattedAddress}),e.$store.dispatch("setAddress",r.regeocode.formattedAddress))})}))})})}}}),i=c,u=(t("034f"),t("2877")),d=Object(u["a"])(i,o,a,!1,null,null,null),s=d.exports,l=t("8c4f");r["a"].use(l["a"]);var f=new l["a"]({base:"",routes:[{path:"/",component:function(){return t.e("chunk-fba36764").then(t.bind(null,"d504"))},children:[{path:"",redirect:"/home"},{path:"/home",name:"home",component:function(){return t.e("chunk-afc021c0").then(t.bind(null,"bb51"))}},{path:"/order",name:"order",component:function(){return t.e("chunk-2d222708").then(t.bind(null,"cf2a"))}},{path:"/me",name:"me",component:function(){return t.e("chunk-2d0ae607").then(t.bind(null,"0a99"))}},{path:"/address",name:"address",component:function(){return t.e("chunk-5895d9ce").then(t.bind(null,"a821"))}},{path:"/city",name:"city",component:function(){return t.e("chunk-79e86cb2").then(t.bind(null,"0d5f"))}}]},{path:"/login",name:"login",component:function(){return t.e("chunk-c21e34be").then(t.bind(null,"a55b"))}}]});f.beforeEach(function(e,n,t){var r=!!localStorage.ele_login;"/login"===e.path?r?t("/"):t():r?t():t("/login")});var p,h=f,m=t("bd86"),g=t("2f62");r["a"].use(g["a"]);var b={SET_LOCATION:"SET_LOCATION",SET_ADDRESS:"SET_ADDRESS"},v={location:{},address:"正在识别地址...",loading:!0},y={location:function(e){return e.location},address:function(e){return e.address},loading:function(e){return e.loading}},k=(p={},Object(m["a"])(p,b.SET_LOCATION,function(e,n){e.location=n||null}),Object(m["a"])(p,b.SET_ADDRESS,function(e,n){n?(e.address=n,e.loading=!1):e.address=""}),p),A={setLocation:function(e,n){var t=e.commit;t(b.SET_LOCATION,n)},setAddress:function(e,n){var t=e.commit;t(b.SET_ADDRESS,n)}},S=new g["a"].Store({state:v,mutations:k,actions:A,getters:y}),O=t("bc3a"),w=t.n(O);r["a"].config.productionTip=!1,r["a"].prototype.$axios=w.a,new r["a"]({router:h,store:S,render:function(e){return e(s)}}).$mount("#app")},"64a9":function(e,n,t){}});
//# sourceMappingURL=app.2ae2601e.js.map