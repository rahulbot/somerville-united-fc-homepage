import{l as ve,P as fe}from"../chunks/DfXapDEA.js";import{c as _e,a as p,e as be,f as _,t as ge}from"../chunks/BWRIQuwL.js";import{aw as he,av as ye,a9 as u,ah as $e,g as e,ax as xe,a1 as Se,a2 as s,a4 as r,a8 as x,a3 as Pe,a5 as o,a7 as c,a0 as H,ay as K}from"../chunks/mCsQmHUo.js";import{l as ke,s as we,a as Re,b as Te}from"../chunks/DCxR_3fF.js";import{s as ee}from"../chunks/DAU64Vn1.js";import{i as P}from"../chunks/CltHmg5D.js";import{e as Ve,i as De}from"../chunks/BnoN2PDk.js";import{h as Oe}from"../chunks/BDzJ7Qs3.js";import{c as Ce,r as k,s as Ae,d as Ge}from"../chunks/C3BxWfe4.js";import{b as M,a as Ie}from"../chunks/Bv8bcdjj.js";import{p as Ne}from"../chunks/BHtH2PU4.js";import"../chunks/BW57SV-Z.js";import{I as qe,s as je}from"../chunks/BXfcv3mH.js";function Fe(b,v){const w=ke(v,["children","$$slots","$$events","$$legacy"]);/**
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
 */const R=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];qe(b,we({name:"loader-circle"},()=>w,{get iconNode(){return R},children:(T,Y)=>{var f=_e(),S=he(f);je(S,v,"default",{}),p(T,f)},$$slots:{default:!0}}))}const Le=!1,Ue=async({fetch:b,params:v})=>ve(b),lt=Object.freeze(Object.defineProperty({__proto__:null,load:Ue,ssr:Le},Symbol.toStringTag,{value:"Module"}));var Ee=_('<meta name="description" content="RSVP to our upcoming game."/>'),He=_("<option> <!></option>"),Ke=_(`<p class="svelte-1drmknm"><!> (we're saving your RSVP now)</p>`),Me=_('<div class="form-elements svelte-1drmknm"><fieldset class="inline"><label for="name">Game:</label> <select name="game" id="game" required=""></select></fieldset> <fieldset><label for="email">Your Email Address:</label> <input id="email" name="email" type="email" required=""/></fieldset> <fieldset><label for="guests">Number of People:</label> <input type="number" id="guests" name="guests" min="1" max="10" style="width: 100px"/></fieldset> <fieldset class="inline"><input type="checkbox" id="newsletter" name="newsletter" class="svelte-1drmknm"/> <label for="newsletter">Subscribe to our newsletter</label></fieldset> <input id="honeypot" type="text" name="honeypot" class="svelte-1drmknm"/> <button type="submit">RSVP</button> <!></div>'),Ye=_('<div class="thankyou_message svelte-1drmknm"><h3>Thanks for the RSVP!</h3> <p class="svelte-1drmknm"> </p> <a href="/schedule"><button class="btn-primary">Back to our Schedule</button></a></div>'),ze=_('<div class="container"><section><h1>RSVP to a Game</h1> <p class="page-subtitle">Our games are free to attend, but RSVP so we can reserve you a spot!</p> <form method="POST" data-sheet="ticket_responses" class="svelte-1drmknm"><!> <!></form></section> <section><!></section></div>');function it(b,v){ye(v,!0);const w=()=>Te(Ne,"$page",R),[R,T]=Re(),Y=x(()=>v.data.APSL),f=x(()=>e(Y).filter(t=>t.RSVPable)),S=x(()=>w().url.searchParams.get("game")),te="https://script.google.com/macros/s/AKfycbxFg5Nxms9p3x9h9s47skbvD0FTvYa33tRC4BA6CSqAe-19Ih2k0H_exKeQs5qvO-QiOg/exec";let g=u(!1),V=u(!1),D=u(1),O=u(""),C=u($e(e(S)||e(f)[0]?.id)),A=u(""),G=u(!1),h=x(()=>e(f).find(t=>t.id==e(C))),ae=x(()=>`APSL-${e(h).Date}-${e(h).opponent}`);function se(){const t={game:e(ae),email:e(O),guests:e(D),newsletter:e(G)?"Yes":"No"};return t.formDataNameOrder=["game","email","guests","newsletter"].join(","),t.formGoogleSheetName="responses",t.formGoogleSendEmail="",t}function oe(t){t.preventDefault(),c(g,!0);var n=se();if(e(A))return!1;var m=te,l=new XMLHttpRequest;l.open("POST",m),l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.onreadystatechange=function(){l.readyState===4&&l.status===200&&(c(V,!0),c(g,!1))};var y=Object.keys(n).map(function($){return encodeURIComponent($)+"="+encodeURIComponent(n[$])}).join("&");l.send(y)}var I=ze();Oe("1drmknm",t=>{var n=Ee();Se(()=>{Pe.title="Tickets RSVP - Somerville United FC"}),p(t,n)});var N=r(I),q=s(r(N),4),z=r(q);{var re=t=>{var n=Me(),m=r(n),l=s(r(m),2);Ve(l,21,()=>e(f),De,(a,i)=>{var d=He(),J=r(d),ce=s(J);{var pe=E=>{var ue=ge("(Playoffs)");p(E,ue)};P(ce,E=>{e(i).Round=="Playoffs"&&E(pe)})}o(d);var Z={};H(()=>{Ce(d,e(S)===e(i).id),ee(J,`${e(i).Date??""} vs. ${e(i).opponent??""} @ ${e(i).Venue??""} `),Z!==(Z=e(i).id)&&(d.value=(d.__value=e(i).id)??"")}),p(a,d)}),o(l),o(m);var y=s(m,2),$=s(r(y),2);k($),o(y);var j=s(y,2),Q=s(r(j),2);k(Q),o(j);var F=s(j,2),W=r(F);k(W),K(2),o(F);var L=s(F,2);k(L);var U=s(L,2);let X;var me=s(U,2);{var de=a=>{var i=Ke(),d=r(i);Fe(d,{class:"spinning"}),K(),o(i),p(a,i)};P(me,a=>{e(g)&&a(de)})}o(n),H(()=>{X=Ae(U,1,"btn-primary",null,X,{"is-invalid":e(g)}),U.disabled=e(g)}),Ge(l,()=>e(C),a=>c(C,a)),M($,()=>e(O),a=>c(O,a)),M(Q,()=>e(D),a=>c(D,a)),Ie(W,()=>e(G),a=>c(G,a)),M(L,()=>e(A),a=>c(A,a)),p(t,n)};P(z,t=>{e(V)||t(re)})}var ne=s(z,2);{var le=t=>{var n=Ye(),m=s(r(n),2),l=r(m);o(m),K(2),o(n),H(()=>ee(l,`We're excited to see you at our game on ${e(h).Date??""} at ${e(h).Venue??""} vs. ${e(h).opponent??""} ⚽️🎉`)),p(t,n)};P(ne,t=>{e(V)&&t(le)})}o(q),o(N);var B=s(N,2),ie=r(B);fe(ie,{}),o(B),o(I),be("submit",q,oe),p(b,I),xe(),T()}export{it as component,lt as universal};
