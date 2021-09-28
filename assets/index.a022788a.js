import{q as g,r as h,x as y,L as j,d as i,o as m,c as d,O as B,m as x,V as S,h as u,w as f,F as C,j as T,k as $,l as w,t as E}from"./vendor.bac705d4.js";import{B as _}from"./index.b6a0d794.js";import{I as v}from"./index.9e5d49b4.js";import{h as L,j as V,c as N,t as I}from"./shared.5973ad73.js";import{b as F,s as H,c as M}from"./elements.0f1b5e0a.js";import{_ as b}from"./IconSfc.12692c7c.js";import{C as k}from"./index.30eeff09.js";import"./index.389a472f.js";import"./index.b4bc4b38.js";import"./components.7d95671e.js";const q={visibilityHeight:{type:[Number,String],default:200},duration:{type:Number,default:300},target:{type:String},onClick:{type:Function}};const O=g({name:"VarBackTop",components:{[_.name]:_,[v.name]:v},props:q,setup(t){let e=window;const s=h(!1),c=()=>{var n;(n=t.onClick)==null||n.call(t);const o=F(e);H(e,{left:o,duration:t.duration,animation:L})},l=V(()=>{s.value=M(e)>=I(t.visibilityHeight)},200),r=()=>{if(!N(t.target))throw Error('[Varlet] BackTop: type of prop "target" should be a string');const o=document.querySelector(t.target);if(!o)throw Error('[Varlet] BackTop: "target" should be a selector');return o};return y(()=>{t.target&&(e=r()),e.addEventListener("scroll",l)}),j(()=>{e.removeEventListener("scroll",l)}),{show:s,click:c}}});function z(t,e,s,c,p,l){const r=i("var-icon"),o=i("var-button");return m(),d("div",{class:x(["var-back-top",[t.show?"var-back-top--active":null]]),onClick:e[0]||(e[0]=S((...n)=>t.click&&t.click(...n),["stop"]))},[B(t.$slots,"default",{},()=>[u(o,{type:"primary",round:"",class:"var-back-top__button"},{default:f(()=>[u(r,{name:"chevron-up"})]),_:1})])],2)}var a=b(O,[["render",z]]);a.install=function(t){t.component(a.name,a)};const A=[...Array(100).keys()],D={name:"BackTopExample",components:{[a.name]:a,[k.name]:k},setup(){return{lists:A}}};function U(t,e,s,c,p,l){const r=i("var-cell"),o=i("var-back-top");return m(),d("div",null,[(m(!0),d(C,null,T(c.lists,n=>(m(),$(r,{key:n},{default:f(()=>[w("Scroll to bottom "+E(n),1)]),_:2},1024))),128)),u(o,{duration:300})])}var tt=b(D,[["render",U]]);export{tt as default};