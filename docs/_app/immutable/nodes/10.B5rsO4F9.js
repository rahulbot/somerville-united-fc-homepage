import{l as $e,P as xe,g as ke}from"../chunks/D4ykX54L.js";import{d as Se,a as l,f as _,t as Q,e as Pe}from"../chunks/BYW_p6i6.js";import{aw as we,av as Re,a9 as f,ai as Te,g as e,ax as De,a1 as Oe,a2 as s,a4 as o,a8 as R,a3 as Ve,a5 as r,a7 as c,a0 as W,aI as X}from"../chunks/C0y5Bnoj.js";import{l as Ce,s as Ge,a as Ie,b as Ne}from"../chunks/CMCE7TzH.js";import{s as ne}from"../chunks/DvFMzFCL.js";import{i as y}from"../chunks/DXCgBcDV.js";import{e as qe,i as je}from"../chunks/Dp68p0nt.js";import{h as Fe}from"../chunks/SNuOUZQJ.js";import{d as Ae,r as T,s as Ke,e as Le}from"../chunks/kfWjtHwA.js";import{b as J,a as Ue}from"../chunks/CV0AXRyS.js";import{p as Ee}from"../chunks/D0xWOjYw.js";import"../chunks/CunSRmxp.js";import{I as He,s as Me}from"../chunks/Cprqh_uH.js";function Ye($,g){const D=Ce(g,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.555.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const O=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];He($,Ge({name:"loader-circle"},()=>D,{get iconNode(){return O},children:(V,b)=>{var x=Se(),C=we(x);Me(C,g,"default",{}),l(V,x)},$$slots:{default:!0}}))}const ze=!1,Be=async({fetch:$,params:g})=>$e($),ft=Object.freeze(Object.defineProperty({__proto__:null,load:Be,ssr:ze},Symbol.toStringTag,{value:"Module"}));var Qe=_('<meta name="description" content="RSVP to our upcoming game."/>'),We=_("<option> <!></option>"),Xe=_(`<p class="svelte-1drmknm"><!> (we're saving your RSVP now)</p>`),Je=_('<div class="form-elements svelte-1drmknm"><fieldset class="inline"><label for="name">Game:</label> <select name="game" id="game" required=""></select></fieldset> <fieldset><label for="email">Your Email Address:</label> <input id="email" name="email" type="email" required=""/></fieldset> <fieldset><label for="guests">Number of People:</label> <input type="number" id="guests" name="guests" min="1" max="10" style="width: 100px"/></fieldset> <fieldset class="inline"><input type="checkbox" id="newsletter" name="newsletter" class="svelte-1drmknm"/> <label for="newsletter">Subscribe to our newsletter</label></fieldset> <input id="honeypot" type="text" name="honeypot" class="svelte-1drmknm"/> <button type="submit">RSVP</button> <!></div>'),Ze=_('<div class="thankyou_message svelte-1drmknm"><h3>Thanks for the RSVP!</h3> <p class="svelte-1drmknm"> </p> <a href="/schedule"><button class="btn-primary">Back to our Schedule</button></a></div>'),et=_('<form method="POST" data-sheet="ticket_responses" class="svelte-1drmknm"><!> <!></form>'),tt=_('<div class="container"><section><h1>RSVP to a Game</h1> <p class="page-subtitle"><!></p> <!></section> <section><!></section></div>');function _t($,g){Re(g,!0);const D=()=>Ne(Ee,"$page",O),[O,V]=Ie(),b=R(()=>ke(g.data)),x=R(()=>D().url.searchParams.get("game")),C="https://script.google.com/macros/s/AKfycbxFg5Nxms9p3x9h9s47skbvD0FTvYa33tRC4BA6CSqAe-19Ih2k0H_exKeQs5qvO-QiOg/exec";let k=f(!1),G=f(!1),I=f(1),N=f(""),q=f(Te(e(x)||e(b)[0]?.id)),j=f(""),F=f(!1),p=R(()=>e(b).find(t=>t.id==e(q))),ie=R(()=>`${e(p).Season}-${e(p).League}-${e(p).Date}-${e(p).opponent}`);function le(){const t={game:e(ie),email:e(N),guests:e(I),newsletter:e(F)?"Yes":"No"};return t.formDataNameOrder=["game","email","guests","newsletter"].join(","),t.formGoogleSheetName="responses",t.formGoogleSendEmail="",t}function me(t){t.preventDefault(),c(k,!0);var n=le();if(e(j))return!1;var P=C,m=new XMLHttpRequest;m.open("POST",P),m.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),m.onreadystatechange=function(){m.readyState===4&&m.status===200&&(c(G,!0),c(k,!1))};var U=Object.keys(n).map(function(w){return encodeURIComponent(w)+"="+encodeURIComponent(n[w])}).join("&");m.send(U)}var A=tt();Fe("1drmknm",t=>{var n=Qe();Oe(()=>{Ve.title="Tickets RSVP - Somerville United FC"}),l(t,n)});var K=o(A),L=s(o(K),2),de=o(L);{var ce=t=>{var n=Q("Keep an eye out here for upcoming games you can get tickets for!");l(t,n)},pe=t=>{var n=Q("Our games are free to attend, but RSVP so we can reserve you a spot!");l(t,n)};y(de,t=>{e(b).length===0?t(ce):t(pe,-1)})}r(L);var ve=s(L,2);{var ue=t=>{var n=et(),P=o(n);{var m=v=>{var u=Je(),h=o(u),S=s(o(h),2);qe(S,21,()=>e(b),je,(a,i)=>{var d=We(),re=o(d),be=s(re);{var he=B=>{var ye=Q("(Playoffs)");l(B,ye)};y(be,B=>{e(i).Round=="Playoffs"&&B(he)})}r(d);var oe={};W(()=>{Ae(d,e(x)===e(i).id),ne(re,`${e(i).Date??""} vs. ${e(i).opponent??""} @ ${e(i).Venue??""} `),oe!==(oe=e(i).id)&&(d.value=(d.__value=e(i).id)??"")}),l(a,d)}),r(S),r(h);var E=s(h,2),ee=s(o(E),2);T(ee),r(E);var H=s(E,2),te=s(o(H),2);T(te),r(H);var M=s(H,2),ae=o(M);T(ae),X(2),r(M);var Y=s(M,2);T(Y);var z=s(Y,2);let se;var _e=s(z,2);{var ge=a=>{var i=Xe(),d=o(i);Ye(d,{class:"spinning"}),X(),r(i),l(a,i)};y(_e,a=>{e(k)&&a(ge)})}r(u),W(()=>{se=Ke(z,1,"btn-primary",null,se,{"is-invalid":e(k)}),z.disabled=e(k)}),Le(S,()=>e(q),a=>c(q,a)),J(ee,()=>e(N),a=>c(N,a)),J(te,()=>e(I),a=>c(I,a)),Ue(ae,()=>e(F),a=>c(F,a)),J(Y,()=>e(j),a=>c(j,a)),l(v,u)};y(P,v=>{e(G)||v(m)})}var U=s(P,2);{var w=v=>{var u=Ze(),h=s(o(u),2),S=o(h);r(h),X(2),r(u),W(()=>ne(S,`We're excited to see you at our game on ${e(p).Date??""} at ${e(p).Venue??""} vs. ${e(p).opponent??""} ⚽️🎉`)),l(v,u)};y(U,v=>{e(G)&&v(w)})}r(n),Pe("submit",n,me),l(t,n)};y(ve,t=>{e(b).length>0&&t(ue)})}r(K);var Z=s(K,2),fe=o(Z);xe(fe,{}),r(Z),r(A),l($,A),De(),V()}export{_t as component,ft as universal};
