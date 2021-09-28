import{t as F}from"./elements.0f1b5e0a.js";import{_ as S}from"./IconSfc.12692c7c.js";import{q as w,o as h,c as _,a as e,n as D,O as B,f as I,p as E,r as L,b as M,d as p,h as u,w as m,F as V,l as f,t as l,j as K}from"./vendor.bac705d4.js";import{A as W}from"./AppType.d58c881d.js";import{C as N}from"./index.807e6988.js";import{B as U}from"./index.b6a0d794.js";import{I as T}from"./index.9e5d49b4.js";import{u as q,a as A,_ as J,b as O,c as G,w as H}from"./en-US.4960d9b4.js";import"./shared.5973ad73.js";import"./index.389a472f.js";import"./provide.8c54ed9c.js";import"./components.7d95671e.js";import"./index.b4bc4b38.js";const P=w({name:"VarTable",props:{fullWidth:{type:[Number,String],default:"100%"}},setup(){return{toSizeUnit:F}}}),Q={class:"var-table var-elevation--1 var--box"},R={class:"var-table__main"},X={key:0,class:"var-table__footer"};function Y(n,d,g,t,C,k){return h(),_("div",Q,[e("div",R,[e("table",{class:"var-table__table",style:D({width:n.toSizeUnit(n.fullWidth)})},[B(n.$slots,"default")],4)]),n.$slots.footer?(h(),_("div",X,[B(n.$slots,"footer")])):I("v-if",!0)])}var v=S(P,[["render",Y]]);v.install=function(n){n.component(v.name,v)};var Z={basicUsage:"\u57FA\u672C\u4F7F\u7528",slot:"\u63D2\u69FD",total:"\u603B\u5206",math:"\u6570\u5B66",english:"\u82F1\u8BED",tom:"\u706B\u732B\u6851",jerry:"\u8017\u5B50\u541B",name:"\u59D3\u540D"},$={basicUsage:"Basic Usage",slot:"Slots",total:"Total",math:"Math",english:"English",tom:"Tom",jerry:"Jerry",name:"Name"};const{add:z,use:ee,pack:x,packs:Be,merge:Ve}=q(),te=n=>{G(n),ee(n)};A("zh-CN",J);A("en-US",O);z("zh-CN",Z);z("en-US",$);const ae={name:"TableExample",components:{[v.name]:v,[N.name]:N,[U.name]:U,[T.name]:T,AppType:W},setup(){const n=E([{name:x,nameValue:"tom",math:100,english:135,isCheck:!1},{name:x,nameValue:"jerry",math:124,english:38,isCheck:!1}]),d=L(["",""]),g=M(()=>{const o=n.reduce((a,s)=>s.isCheck?a+1:a,0);return n.length===o}),t=o=>{const[a,s]=d.value;return a!==o?"dots-vertical":s==="asc"?"chevron-up":"chevron-down"},C=o=>{const a=c=>{c.isCheck=!0},s=c=>{c.isCheck=!1};n.forEach(o?a:s)},k=(o,a)=>o.reduce((s,c)=>c[a]+s,0),b=(o,a)=>{const s={asc:(y,j)=>y[a]-j[a],desc:(y,j)=>j[a]-y[a]},[c,r]=d.value;let i;c!==a&&(i="asc"),c===a&&(i=r==="asc"?"desc":"asc"),o.sort(s[i]),d.value=[a,i]};return H(te),{isAllCheck:g,pack:x,data:n,sortBy:b,handleAllCheckChange:C,getTotal:k,getIconName:t}}},ne=e("td",null,"124",-1),le=e("td",null,"38",-1),oe=e("td",null,"100",-1),se=e("td",null,"135",-1),re={style:{display:"inline-flex"}},ce={style:{display:"inline-flex"}},de=e("td",null,null,-1),ue={class:"footer-container"},ie=f("footer slot");function me(n,d,g,t,C,k){const b=p("app-type"),o=p("var-table"),a=p("var-checkbox"),s=p("var-icon"),c=p("var-button");return h(),_(V,null,[u(b,null,{default:m(()=>[f(l(t.pack.basicUsage),1)]),_:1}),u(o,null,{default:m(()=>[e("thead",null,[e("tr",null,[e("th",null,l(t.pack.name),1),e("th",null,l(t.pack.math),1),e("th",null,l(t.pack.english),1)])]),e("tbody",null,[e("tr",null,[e("td",null,l(t.pack.jerry),1),ne,le]),e("tr",null,[e("td",null,l(t.pack.tom),1),oe,se])])]),_:1}),u(b,null,{default:m(()=>[f(l(t.pack.slot),1)]),_:1}),u(o,null,{footer:m(()=>[e("div",ue,[u(c,{type:"primary"},{default:m(()=>[ie]),_:1})])]),default:m(()=>[e("thead",null,[e("tr",null,[e("th",null,[u(a,{"model-value":t.isAllCheck,onChange:t.handleAllCheckChange},null,8,["model-value","onChange"])]),e("th",null,l(t.pack.name),1),e("th",{onClick:d[0]||(d[0]=r=>t.sortBy(t.data,"math"))},[e("span",re,[f(l(t.pack.math)+" ",1),u(s,{name:t.getIconName("math")},null,8,["name"])])]),e("th",{onClick:d[1]||(d[1]=r=>t.sortBy(t.data,"english"))},[e("span",ce,[f(l(t.pack.english)+" ",1),u(s,{name:t.getIconName("english")},null,8,["name"])])])])]),e("tbody",null,[(h(!0),_(V,null,K(t.data,r=>(h(),_("tr",{key:r.nameValue},[e("td",null,[u(a,{modelValue:r.isCheck,"onUpdate:modelValue":i=>r.isCheck=i},null,8,["modelValue","onUpdate:modelValue"])]),e("td",null,l(r.name[r.nameValue]),1),e("td",null,l(r.math),1),e("td",null,l(r.english),1)]))),128)),e("tr",null,[de,e("td",null,l(t.pack.total),1),e("td",null,l(t.getTotal(t.data,"math")),1),e("td",null,l(t.getTotal(t.data,"english")),1)])])]),_:1})],64)}var Ne=S(ae,[["render",me]]);export{Ne as default};