import{l as ve,P as fe}from"../chunks/_gyBptHJ.js";import{c as _e,a as p,e as be,f as _,t as ge}from"../chunks/zxM7iLyR.js";import{aw as he,av as ye,a9 as u,ai as $e,k as e,ax as xe,a4 as Se,s,c as o,a8 as x,a5 as Pe,r,a7 as c,t as H,aI as K}from"../chunks/89t6aXay.js";import{l as ke,s as we,a as Re,b as Te}from"../chunks/B4_Qs8pC.js";import{s as ee}from"../chunks/BYZO9X8L.js";import{i as P}from"../chunks/B77xnl7e.js";import{e as Ve,i as De}from"../chunks/BfqcOY6f.js";import{h as Oe}from"../chunks/ClZlKPpX.js";import{d as Ce,r as k,b as Ie,e as Ae}from"../chunks/B4-QwiV-.js";import{b as M,a as Ge}from"../chunks/C8S6tzpX.js";import{p as Ne}from"../chunks/Dzxkv28B.js";import"../chunks/BNT4ZK8z.js";import{I as qe,s as je}from"../chunks/dJNBn4ui.js";function Fe(b,v){const w=ke(v,["children","$$slots","$$events","$$legacy"]);/**
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
 */const R=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];qe(b,we({name:"loader-circle"},()=>w,{get iconNode(){return R},children:(T,Y)=>{var f=_e(),S=he(f);je(S,v,"default",{}),p(T,f)},$$slots:{default:!0}}))}const Le=!1,Ue=async({fetch:b,params:v})=>ve(b),lt=Object.freeze(Object.defineProperty({__proto__:null,load:Ue,ssr:Le},Symbol.toStringTag,{value:"Module"}));var Ee=_('<meta name="description" content="RSVP to our upcoming game."/>'),He=_("<option> <!></option>"),Ke=_(`<p class="svelte-1drmknm"><!> (we're saving your RSVP now)</p>`),Me=_('<div class="form-elements svelte-1drmknm"><fieldset class="inline"><label for="name">Game:</label> <select name="game" id="game" required=""></select></fieldset> <fieldset><label for="email">Your Email Address:</label> <input id="email" name="email" type="email" required=""/></fieldset> <fieldset><label for="guests">Number of People:</label> <input type="number" id="guests" name="guests" min="1" max="10" style="width: 100px"/></fieldset> <fieldset class="inline"><input type="checkbox" id="newsletter" name="newsletter" class="svelte-1drmknm"/> <label for="newsletter">Subscribe to our newsletter</label></fieldset> <input id="honeypot" type="text" name="honeypot" class="svelte-1drmknm"/> <button type="submit">RSVP</button> <!></div>'),Ye=_('<div class="thankyou_message svelte-1drmknm"><h3>Thanks for the RSVP!</h3> <p class="svelte-1drmknm"> </p> <a href="/schedule"><button class="btn-primary">Back to our Schedule</button></a></div>'),ze=_('<div class="container"><section><h1>RSVP to a Game</h1> <p class="page-subtitle">Our games are free to attend, but RSVP so we can reserve you a spot!</p> <form method="POST" data-sheet="ticket_responses" class="svelte-1drmknm"><!> <!></form></section> <section><!></section></div>');function it(b,v){ye(v,!0);const w=()=>Te(Ne,"$page",R),[R,T]=Re(),Y=x(()=>v.data.APSL),f=x(()=>e(Y).filter(t=>t.RSVPable)),S=x(()=>w().url.searchParams.get("game")),te="https://script.google.com/macros/s/AKfycbxFg5Nxms9p3x9h9s47skbvD0FTvYa33tRC4BA6CSqAe-19Ih2k0H_exKeQs5qvO-QiOg/exec";let g=u(!1),V=u(!1),D=u(1),O=u(""),C=u($e(e(S)||e(f)[0]?.id)),I=u(""),A=u(!1),h=x(()=>e(f).find(t=>t.id==e(C))),ae=x(()=>`APSL-${e(h).Date}-${e(h).opponent}`);function se(){const t={game:e(ae),email:e(O),guests:e(D),newsletter:e(A)?"Yes":"No"};return t.formDataNameOrder=["game","email","guests","newsletter"].join(","),t.formGoogleSheetName="responses",t.formGoogleSendEmail="",t}function re(t){t.preventDefault(),c(g,!0);var n=se();if(e(I))return!1;var m=te,l=new XMLHttpRequest;l.open("POST",m),l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.onreadystatechange=function(){l.readyState===4&&l.status===200&&(c(V,!0),c(g,!1))};var y=Object.keys(n).map(function($){return encodeURIComponent($)+"="+encodeURIComponent(n[$])}).join("&");l.send(y)}var G=ze();Oe("1drmknm",t=>{var n=Ee();Se(()=>{Pe.title="Tickets RSVP - Somerville United FC"}),p(t,n)});var N=o(G),q=s(o(N),4),z=o(q);{var oe=t=>{var n=Me(),m=o(n),l=s(o(m),2);Ve(l,21,()=>e(f),De,(a,i)=>{var d=He(),J=o(d),ce=s(J);{var pe=E=>{var ue=ge("(Playoffs)");p(E,ue)};P(ce,E=>{e(i).Round=="Playoffs"&&E(pe)})}r(d);var Z={};H(()=>{Ce(d,e(S)===e(i).id),ee(J,`${e(i).Date??""} vs. ${e(i).opponent??""} @ ${e(i).Venue??""} `),Z!==(Z=e(i).id)&&(d.value=(d.__value=e(i).id)??"")}),p(a,d)}),r(l),r(m);var y=s(m,2),$=s(o(y),2);k($),r(y);var j=s(y,2),Q=s(o(j),2);k(Q),r(j);var F=s(j,2),W=o(F);k(W),K(2),r(F);var L=s(F,2);k(L);var U=s(L,2);let X;var me=s(U,2);{var de=a=>{var i=Ke(),d=o(i);Fe(d,{class:"spinning"}),K(),r(i),p(a,i)};P(me,a=>{e(g)&&a(de)})}r(n),H(()=>{X=Ie(U,1,"btn-primary",null,X,{"is-invalid":e(g)}),U.disabled=e(g)}),Ae(l,()=>e(C),a=>c(C,a)),M($,()=>e(O),a=>c(O,a)),M(Q,()=>e(D),a=>c(D,a)),Ge(W,()=>e(A),a=>c(A,a)),M(L,()=>e(I),a=>c(I,a)),p(t,n)};P(z,t=>{e(V)||t(oe)})}var ne=s(z,2);{var le=t=>{var n=Ye(),m=s(o(n),2),l=o(m);r(m),K(2),r(n),H(()=>ee(l,`We're excited to see you at our game on ${e(h).Date??""} at ${e(h).Venue??""} vs. ${e(h).opponent??""} ⚽️🎉`)),p(t,n)};P(ne,t=>{e(V)&&t(le)})}r(q),r(N);var B=s(N,2),ie=o(B);fe(ie,{}),r(B),r(G),be("submit",q,re),p(b,G),xe(),T()}export{it as component,lt as universal};
