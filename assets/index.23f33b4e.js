var h=Object.defineProperty,B=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var _=(t,e,u)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[e]=u,O=(t,e)=>{for(var u in e||(e={}))S.call(e,u)&&_(t,u,e[u]);if(v)for(var u of v(e))U.call(e,u)&&_(t,u,e[u]);return t},b=(t,e)=>B(t,j(e));import{M as w}from"./index.f1189dc4.js";import{B as F}from"./index.6e19ef9d.js";import{C as y}from"./index.4dfef2cb.js";import{S as A}from"./index.9e05f442.js";import{A as E}from"./AppType.edade19c.js";import{c as k}from"./index.389a472f.js";import{u as T,a as g,_ as M,b as N,c as X,w as Y,d as I}from"./en-US.40aea415.js";import{_ as L}from"./IconSfc.eb1d27d6.js";import{p as z,G as R,a2 as D,d as r,o as V,c as x,h as n,w as o,a as i,F as G,S as P,U as q,l,t as a}from"./vendor.bac705d4.js";import"./elements.0f1b5e0a.js";import"./shared.5973ad73.js";import"./zIndex.148a12e4.js";import"./index.c9515ed3.js";import"./components.7d95671e.js";import"./index.be6fe181.js";import"./lock.cdd0a0f9.js";var H={alignmentMethods:"\u5BF9\u9F50\u65B9\u5F0F",topAlignment:"\u9876\u90E8\u5BF9\u9F50",menuOption:"\u83DC\u5355\u9879",bottomAlignment:"\u5E95\u90E8\u5BF9\u9F50",offset:"\u504F\u79FB\u91CF",offsetRight:"\u53F3\u504F\u79FB",offsetLeft:"\u5DE6\u504F\u79FB",offsetBottom:"\u4E0B\u504F\u79FB",offsetTop:"\u4E0A\u504F\u79FB",events:"\u6CE8\u518C\u4E8B\u4EF6"},J={alignmentMethods:"Alignment Methods",topAlignment:"Top Alignment",menuOption:"Menu Option",bottomAlignment:"Bottom Alignment",offset:"Offset",offsetRight:"Offset Right",offsetLeft:"Offset Left",offsetBottom:"Offset Bottom",offsetTop:"Offset Top",events:"Events"};const{add:C,use:K,pack:Q,packs:Te,merge:Me}=T(),W=t=>{X(t),K(t)};g("zh-CN",M);g("en-US",N);C("zh-CN",H);C("en-US",J);const Z={name:"MenuExample",components:{[w.name]:w,[F.name]:F,[y.name]:y,AppType:E},setup(){const t=z({top:!1,bottom:!1,offsetX:!1,offsetX1:!1,offsetY:!1,offsetY1:!1,event:!1});Y(W);const e=k.touchmoveForbid;return I(u=>{u==="pc"&&(k.touchmoveForbid=!1)}),R(()=>{k.touchmoveForbid=e}),b(O({pack:Q},D(t)),{Snackbar:A})}},$=t=>(P("data-v-ce05d0c0"),t=t(),q(),t),ee={class:"block-1"},oe={class:"cell-list"},te={class:"block"},ne={class:"cell-list"},se={class:"block-1"},le={class:"cell-list"},ae={class:"cell-list"},fe={class:"block-2"},de={class:"cell-list"},ue={class:"cell-list"},ie={class:"cell-list"},pe=$(()=>i("div",{style:{"margin-bottom":"100px"}},null,-1));function me(t,e,u,s,re,ce){const c=r("app-type"),p=r("var-button"),f=r("var-cell"),m=r("var-menu");return V(),x(G,null,[n(c,null,{default:o(()=>[l(a(s.pack.alignmentMethods),1)]),_:1}),i("div",ee,[n(m,{show:t.top,"onUpdate:show":e[1]||(e[1]=d=>t.top=d)},{menu:o(()=>[i("div",oe,[n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1})])]),default:o(()=>[n(p,{type:"primary",onClick:e[0]||(e[0]=d=>t.top=!0)},{default:o(()=>[l(a(s.pack.topAlignment),1)]),_:1})]),_:1},8,["show"])]),i("div",te,[n(m,{alignment:"bottom",show:t.bottom,"onUpdate:show":e[3]||(e[3]=d=>t.bottom=d)},{menu:o(()=>[i("div",ne,[n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1})])]),default:o(()=>[n(p,{type:"primary",onClick:e[2]||(e[2]=d=>t.bottom=!0)},{default:o(()=>[l(a(s.pack.bottomAlignment),1)]),_:1})]),_:1},8,["show"])]),n(c,null,{default:o(()=>[l(a(s.pack.offset),1)]),_:1}),i("div",se,[n(m,{"offset-x":72,show:t.offsetX,"onUpdate:show":e[5]||(e[5]=d=>t.offsetX=d)},{menu:o(()=>[i("div",le,[n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1})])]),default:o(()=>[n(p,{type:"primary",onClick:e[4]||(e[4]=d=>t.offsetX=!0)},{default:o(()=>[l(a(s.pack.offsetRight),1)]),_:1})]),_:1},8,["show"]),n(m,{"offset-x":-72,show:t.offsetX1,"onUpdate:show":e[7]||(e[7]=d=>t.offsetX1=d)},{menu:o(()=>[i("div",ae,[n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1})])]),default:o(()=>[n(p,{type:"primary",onClick:e[6]||(e[6]=d=>t.offsetX1=!0)},{default:o(()=>[l(a(s.pack.offsetLeft),1)]),_:1})]),_:1},8,["show"])]),i("div",fe,[n(m,{"offset-y":36,show:t.offsetY,"onUpdate:show":e[9]||(e[9]=d=>t.offsetY=d)},{menu:o(()=>[i("div",de,[n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1})])]),default:o(()=>[n(p,{type:"primary",onClick:e[8]||(e[8]=d=>t.offsetY=!0)},{default:o(()=>[l(a(s.pack.offsetBottom),1)]),_:1})]),_:1},8,["show"]),n(m,{"offset-y":-36,show:t.offsetY1,"onUpdate:show":e[11]||(e[11]=d=>t.offsetY1=d)},{menu:o(()=>[i("div",ue,[n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1})])]),default:o(()=>[n(p,{type:"primary",onClick:e[10]||(e[10]=d=>t.offsetY1=!0)},{default:o(()=>[l(a(s.pack.offsetTop),1)]),_:1})]),_:1},8,["show"])]),n(c,null,{default:o(()=>[l(a(s.pack.events),1)]),_:1}),n(m,{show:t.event,"onUpdate:show":e[13]||(e[13]=d=>t.event=d),onOpen:e[14]||(e[14]=()=>s.Snackbar.info("open")),onOpened:e[15]||(e[15]=()=>s.Snackbar.success("opened")),onClose:e[16]||(e[16]=()=>s.Snackbar.warning("close")),onClosed:e[17]||(e[17]=()=>s.Snackbar.error("closed"))},{menu:o(()=>[i("div",ie,[n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1}),n(f,null,{default:o(()=>[l(a(s.pack.menuOption),1)]),_:1})])]),default:o(()=>[n(p,{type:"primary",onClick:e[12]||(e[12]=d=>t.event=!0)},{default:o(()=>[l(a(s.pack.events),1)]),_:1})]),_:1},8,["show"]),pe],64)}var Ne=L(Z,[["render",me],["__scopeId","data-v-ce05d0c0"]]);export{Ne as default};