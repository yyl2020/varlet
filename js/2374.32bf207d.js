(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[2374],{7245:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});const r={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",monthDictionary:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},10:{name:"October",abbr:"OCT"},11:{name:"November",abbr:"NOV"},12:{name:"December",abbr:"DEC"}},weekDictionary:{0:{name:"Sunday",abbr:"S"},1:{name:"Monday",abbr:"M"},2:{name:"Tuesday",abbr:"T"},3:{name:"Wednesday",abbr:"W"},4:{name:"Thursday",abbr:"T"},5:{name:"Friday",abbr:"F"},6:{name:"Saturday",abbr:"S"}},selected:" selected"}},9486:(n,e,t)=>{"use strict";t.d(e,{bU:()=>o,P2:()=>c,IH:()=>l,D$:()=>s});var r=t(2122),i=t(641),a=t(8732);function o(){var n={},e=(0,i.iH)({}),t=function(t){if(!n[t])return console.warn("The "+t+" does not exist. You can mount a language package using the add method"),{};e.value=n[t]};return{packs:n,pack:e,add:function(e,t){t.lang=e,n[e]=t},use:t,merge:function(e,i){n[e]?(n[e]=(0,r.Z)({},n[e],i),t(e)):console.warn("The "+e+" does not exist. You can mount a language package using the add method")}}}var u=o(),c=(u.packs,u.pack),l=u.add,s=u.use;u.merge,l("zh-CN",a.Z),s("zh-CN")},8732:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});const r={dialogTitle:"提示",dialogConfirmButtonText:"确认",dialogCancelButtonText:"取消",actionSheetTitle:"请选择",listLoadingText:"加载中",listFinishedText:"没有更多了",listErrorText:"加载失败",pickerTitle:"请选择",pickerConfirmButtonText:"确认",pickerCancelButtonText:"取消",monthDictionary:{"01":{name:"一月",abbr:"一月"},"02":{name:"二月",abbr:"二月"},"03":{name:"三月",abbr:"三月"},"04":{name:"四月",abbr:"四月"},"05":{name:"五月",abbr:"五月"},"06":{name:"六月",abbr:"六月"},"07":{name:"七月",abbr:"七月"},"08":{name:"八月",abbr:"八月"},"09":{name:"九月",abbr:"九月"},10:{name:"十月",abbr:"十月"},11:{name:"十一月",abbr:"十一月"},12:{name:"十二月",abbr:"十二月"}},weekDictionary:{0:{name:"星期日",abbr:"日"},1:{name:"星期一",abbr:"一"},2:{name:"星期二",abbr:"二"},3:{name:"星期三",abbr:"三"},4:{name:"星期四",abbr:"四"},5:{name:"星期五",abbr:"五"},6:{name:"星期六",abbr:"六"}},selected:"个被选择"}},3406:(n,e,t)=>{"use strict";t.d(e,{Z:()=>p});var r=t(7875),i=t(641),a=t(3652),o=t(4268),u=t(8442);const c=(0,r.aZ)({name:"VarSticky",props:a.N,setup:function(n){var e,t=(0,i.iH)(null),a=(0,i.iH)(null),c=(0,i.iH)(!1),l=(0,i.iH)("0px"),s=(0,i.iH)("0px"),d=(0,i.iH)("auto"),f=(0,i.iH)("auto"),p=(0,i.iH)("auto"),m=(0,i.iH)("auto"),b=(0,r.Fl)((function(){return(0,o.uA)(n.offsetTop)})),v=window,h=function(){var r=0;v!==window&&(r=v.getBoundingClientRect().top);var i=a.value,o=t.value,u=o.getBoundingClientRect(),h=u.top,g=u.left,x=h-r,w=n.onScroll;x<=b.value?(e||(d.value=o.offsetWidth+"px",f.value=o.offsetHeight+"px",l.value=r+b.value+"px",s.value=g+"px",p.value=i.offsetWidth+"px",m.value=i.offsetHeight+"px",c.value=!0),null==w||w(b.value,!0)):(c.value=!1,null==w||w(x,!1))},g=function(){(v=(0,o.Ak)(t.value))!==window&&v.addEventListener("scroll",h),window.addEventListener("scroll",h),h()},x=function(){v!==window&&v.removeEventListener("scroll",h),window.removeEventListener("scroll",h)};return(0,r.dl)(g),(0,r.se)(x),(0,r.bv)((function(){e=["sticky","-webkit-sticky"].includes(window.getComputedStyle(t.value).position),g()})),(0,r.Ah)(x),{stickyEl:t,wrapperEl:a,isFixed:c,offsetTop:b,fixedTop:l,fixedLeft:s,fixedWidth:d,fixedHeight:f,fixedWrapperWidth:p,fixedWrapperHeight:m,toNumber:u.He}}});var l=t(6062),s=t.n(l),d=t(1099);s()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,c.render=function(n,e,t,i,a,o){return(0,r.wg)(),(0,r.j4)("div",{class:"var-sticky",ref:"stickyEl",style:{zIndex:n.toNumber(n.zIndex),top:n.isFixed?null:n.offsetTop+"px",width:n.isFixed?n.fixedWidth:null,height:n.isFixed?n.fixedHeight:null}},[(0,r.Wm)("div",{class:"var-sticky__wrapper",ref:"wrapperEl",style:{zIndex:n.toNumber(n.zIndex),position:n.isFixed?"fixed":null,width:n.isFixed?n.fixedWrapperWidth:null,height:n.isFixed?n.fixedWrapperHeight:null,left:n.isFixed?n.fixedLeft:null,top:n.isFixed?n.fixedTop:null}},[(0,r.WI)(n.$slots,"default")],4)],4)};const f=c;f.install=function(n){n.component(f.name,f)};const p=f},3652:(n,e,t)=>{"use strict";t.d(e,{N:()=>r});var r={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},onScroll:{type:Function}}},4268:(n,e,t)=>{"use strict";t.d(e,{vF:()=>u,cx:()=>c,vj:()=>l,IS:()=>s,UD:()=>d,R6:()=>p,xj:()=>m,Ak:()=>b,I:()=>v,uA:()=>w,gI:()=>y,U7:()=>k,Wx:()=>S,xX:()=>T,X5:()=>W,ez:()=>C});var r=t(2137),i=t(7757),a=t.n(i),o=t(8442);function u(n){return n.getBoundingClientRect().top+(document.body.scrollTop||document.documentElement.scrollTop)}function c(n){var e="scrollTop"in n?n.scrollTop:n.pageYOffset;return Math.max(e,0)}function l(n){var e="scrollLeft"in n?n.scrollLeft:n.pageXOffset;return Math.max(e,0)}function s(n){return n.getBoundingClientRect().left+(document.body.scrollLeft||document.documentElement.scrollLeft)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(e){var t,r,i,o,u,c,l,s,d,f;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,H();case 2:return t=e.getBoundingClientRect(),r=t.top,i=t.bottom,o=t.left,u=t.right,c=window,l=c.innerWidth,s=c.innerHeight,d=o<=l&&u>=0,f=r<=s&&i>=0,n.abrupt("return",d&&f);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){var e=window.getComputedStyle(n).transform;return+e.slice(e.lastIndexOf(",")+2,e.length-1)}function m(n){var e=n.getBoundingClientRect(),t=e.width,r=e.height;return 0===t&&0===r}function b(n){for(var e=n;e&&e.parentNode&&(e=e.parentNode)!==document.body&&e!==document.documentElement;){var t=/(scroll|auto)/,r=window.getComputedStyle(e),i=r.overflowY,a=r.overflow;if(t.test(i)||t.test(a))return e}return window}function v(n){for(var e=[],t=n;t!==window;)t=b(t),e.push(t);return e}var h=function(n){return(0,o.HD)(n)&&n.endsWith("rem")},g=function(n){return(0,o.HD)(n)&&n.endsWith("vw")},x=function(n){return(0,o.HD)(n)&&n.endsWith("vh")},w=function(n){if((0,o.hj)(n))return n;if(function(n){return(0,o.HD)(n)&&n.endsWith("px")||(0,o.hj)(n)}(n))return+n.replace("px","");if(g(n))return+n.replace("vw","")*window.innerWidth/100;if(x(n))return+n.replace("vh","")*window.innerHeight/100;if(h(n)){var e=+n.replace("rem",""),t=window.getComputedStyle(document.documentElement).fontSize;return e*parseFloat(t)}return(0,o.HD)(n)?(0,o.He)(n):0},y=function(n){return null==n?null:function(n){return(0,o.HD)(n)&&n.endsWith("%")}(n)||g(n)||x(n)||h(n)?n:w(n)+"px"};function k(n){return window.requestAnimationFrame?window.requestAnimationFrame(n):window.setTimeout(n,16)}function S(n){window.cancelAnimationFrame?window.cancelAnimationFrame(n):window.clearTimeout(n)}function T(n){k((function(){k(n)}))}function H(){return new Promise((function(n){k((function(){k(n)}))}))}function W(n,e){var t=e.top,r=void 0===t?0:t,i=e.left,a=void 0===i?0:i,o=e.duration,u=void 0===o?300:o,s=e.animation,d=Date.now(),f=c(n),p=l(n);return new Promise((function(e){k((function t(){var i=(Date.now()-d)/u;if(i<1){var o=f+(r-f)*s(i),c=p+(a-p)*s(i);n.scrollTo(c,o),k(t)}else n.scrollTo(a,r),e()}))}))}function C(n){return Object.entries(n).reduce((function(n,e){var t=e[0],r=e[1];return n[t.startsWith("--")?t:"--"+(0,o.GL)(t)]=r,n}),{})}},8442:(n,e,t)=>{"use strict";t.d(e,{He:()=>r,QM:()=>i,MW:()=>a,HD:()=>o,Bl:()=>u,hj:()=>c,PO:()=>l,kJ:()=>s,PX:()=>d,xb:()=>f,cl:()=>p,P2:()=>m,Df:()=>b,GE:()=>v,qb:()=>g,Ou:()=>x,dt:()=>w,_f:()=>y,jj:()=>k,GL:()=>S});var r=function(n){return null==n?0:o(n)?(n=parseFloat(n),n=Number.isNaN(n)?0:n):u(n)?Number(n):n},i=function(n){return n.startsWith("data:image")||/\.(png|jpg|gif|jpeg|svg)$/.test(n)},a=function(n){return n.startsWith("data:video")||/\.(mp4|webm|ogg)$/.test(n)},o=function(n){return"string"==typeof n},u=function(n){return"boolean"==typeof n},c=function(n){return"number"==typeof n},l=function(n){return"[object Object]"===Object.prototype.toString.call(n)},s=function(n){return Array.isArray(n)},d=function(n){return/^(http)|(\.*\/)/.test(n)},f=function(n){return null==n||""===n||Array.isArray(n)&&!n.length},p=function(n,e){if(n.length){var t=n.indexOf(e);if(t>-1)return n.splice(t,1)}},m=function(n,e){var t,r;return void 0===e&&(e=200),function i(){for(var a=this,o=arguments.length,u=new Array(o),c=0;c<o;c++)u[c]=arguments[c];var l=Date.now();r||(r=l),t&&window.clearTimeout(t),l-r>=e?(n.apply(this,u),r=l):t=window.setTimeout((function(){i.apply(a,u)}),50)}},b=function(n){var e=[];return{cache:e,has:function(n){return this.cache.includes(n)},add:function(t){this.has(t)||(this.cache.length===n&&e.shift(),this.cache.push(t))},remove:function(n){this.has(n)&&p(this.cache,n)},clear:function(){this.cache.length=0}}},v=function(n){return n},h=function(n){return Math.pow(n,3)},g=function(n){return n<.5?h(2*n)/2:1-h(2*(1-n))/2};function x(n,e){var t=Object.values(e),r=[24,60,60,1e3];if(["DD","HH","mm","ss"].forEach((function(e,i){n.includes(e)?n=n.replace(e,String(t[i]).padStart(2,"0")):t[i+1]+=t[i]*r[i]})),n.includes("S")){var i=String(t[t.length-1]).padStart(3,"0");n=n.includes("SSS")?n.replace("SSS",i):n.includes("SS")?n.replace("SS",i.slice(0,2)):n.replace("S",i.slice(0,1))}return n}var w=function(n,e){return null==n?e:n},y="undefined"!=typeof window,k=function(n){return[].concat(new Set(n))};function S(n){var e=/([^-])([A-Z])/g;return n.replace(e,"$1-$2").replace(e,"$1-$2").toLowerCase()}},6209:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});var r=t(2609),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".app-type {\n  width: 100%;\n  padding: 15px 0;\n  color: #888;\n  font-size: 14px;\n}\n",""]);const a=i},1099:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});var r=t(2609),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n.var-sticky {\n  position: sticky;\n  position: -webkit-sticky;\n}\n",""]);const a=i},778:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});var r=t(2609),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".example[data-v-a9f56246] {\n  min-height: 200vh;\n}\n.example .scroller[data-v-a9f56246] {\n  height: 200px;\n  overflow: auto;\n  background: #3a7afe;\n}\n.example .scroller .block[data-v-a9f56246] {\n  width: 100%;\n  height: 600px;\n  background: #00afef;\n  opacity: 0.5;\n}\n",""]);const a=i},9800:(n,e,t)=>{"use strict";t.d(e,{Z:()=>l});var r=t(7875),i={class:"app-type"};const a=(0,r.aZ)({name:"AppType"});var o=t(6062),u=t.n(o),c=t(6209);u()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,a.render=function(n,e,t,a,o,u){return(0,r.wg)(),(0,r.j4)("div",i,[(0,r.WI)(n.$slots,"default")])};const l=a},1493:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>C});var r=t(7875),i=t(349),a=(0,r.HX)("data-v-a9f56246");(0,r.dD)("data-v-a9f56246");var o={class:"example"},u={class:"scroller"},c=(0,r.Wm)("div",{class:"block"},null,-1);(0,r.Cn)();var l,s=a((function(n,e,t,l,s,d){var f=(0,r.up)("app-type"),p=(0,r.up)("var-button"),m=(0,r.up)("var-sticky");return(0,r.wg)(),(0,r.j4)("div",o,[(0,r.Wm)(f,null,{default:a((function(){return[(0,r.Uk)((0,i.zw)(l.pack.basicUsage),1)]})),_:1}),(0,r.Wm)(m,{"offset-top":50},{default:a((function(){return[(0,r.Wm)(p,{type:"primary"},{default:a((function(){return[(0,r.Uk)((0,i.zw)(l.pack.basicUsage),1)]})),_:1})]})),_:1}),(0,r.Wm)(f,null,{default:a((function(){return[(0,r.Uk)((0,i.zw)(l.pack.localSticky),1)]})),_:1}),(0,r.Wm)("div",u,[(0,r.Wm)(m,null,{default:a((function(){return[(0,r.Wm)(p,{type:"success"},{default:a((function(){return[(0,r.Uk)((0,i.zw)(l.pack.localSticky),1)]})),_:1})]})),_:1}),c])])})),d=t(3406),f=t(9521),p=t(9800),m=t(6125),b=t(8732),v=t(7245),h=t(9486),g=(0,h.bU)(),x=g.add,w=g.use,y=g.pack,k=(g.packs,g.merge,function(n){(0,h.D$)(n),w(n)});(0,h.IH)("zh-CN",b.Z),(0,h.IH)("en-US",v.Z),x("zh-CN",{basicUsage:"基本使用",localSticky:"局部吸顶"}),x("en-US",{basicUsage:"Basic Usage",localSticky:"Local Sticky"});const S={name:"StickyExample",components:(l={},l[d.Z.name]=d.Z,l[f.Z.name]=f.Z,l.AppType=p.Z,l),setup:function(){return(0,m.jS)(k),{pack:y}}};var T=t(6062),H=t.n(T),W=t(778);H()(W.Z,{insert:"head",singleton:!1}),W.Z.locals,S.render=s,S.__scopeId="data-v-a9f56246";const C=S},9756:(n,e,t)=>{"use strict";function r(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}t.d(e,{Z:()=>r})}}]);