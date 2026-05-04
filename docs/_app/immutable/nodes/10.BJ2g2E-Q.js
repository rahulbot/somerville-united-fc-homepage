import{l as de,P as ce}from"../chunks/DiyHeNBS.js";import{c as pe,a as u,e as ue,f}from"../chunks/BWRIQuwL.js";import{aw as ve,av as fe,a9 as p,ah as _e,g as e,ax as be,a1 as ge,a2 as r,a4 as o,a8 as S,a3 as he,a5 as s,a7 as c,a0 as U,ay as E}from"../chunks/mCsQmHUo.js";import{l as ye,s as $e,a as Se,b as xe}from"../chunks/DCxR_3fF.js";import{s as J}from"../chunks/DAU64Vn1.js";import{i as H}from"../chunks/CltHmg5D.js";import{e as ke,i as Pe}from"../chunks/BnoN2PDk.js";import{h as we}from"../chunks/BDzJ7Qs3.js";import{d as Re,r as k,s as Te,e as Ve}from"../chunks/BYDYcjnI.js";import{b as K,a as De}from"../chunks/Bv8bcdjj.js";import{p as Oe}from"../chunks/C6v58jQU.js";import"../chunks/BW57SV-Z.js";import{I as Ce,s as Ae}from"../chunks/F_Ecq-Cm.js";function Ge(_,v){const P=ye(v,["children","$$slots","$$events","$$legacy"]);/**
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
 */const w=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];Ce(_,$e({name:"loader-circle"},()=>P,{get iconNode(){return w},children:(R,M)=>{var b=pe(),x=ve(b);Ae(x,v,"default",{}),u(R,b)},$$slots:{default:!0}}))}const Ie=!1,Ne=async({fetch:_,params:v})=>de(_),at=Object.freeze(Object.defineProperty({__proto__:null,load:Ne,ssr:Ie},Symbol.toStringTag,{value:"Module"}));var qe=f('<meta name="description" content="RSVP to our upcoming game."/>'),je=f("<option> </option>"),Fe=f(`<p class="svelte-1drmknm"><!> (we're saving your RSVP now)</p>`),Le=f('<div class="form-elements svelte-1drmknm"><fieldset class="inline"><label for="name">Game:</label> <select name="game" id="game" required=""></select></fieldset> <fieldset><label for="email">Your Email Address:</label> <input id="email" name="email" type="email" required=""/></fieldset> <fieldset><label for="guests">Number of People:</label> <input type="number" id="guests" name="guests" min="1" max="10" style="width: 100px"/></fieldset> <fieldset class="inline"><input type="checkbox" id="newsletter" name="newsletter" class="svelte-1drmknm"/> <label for="newsletter">Subscribe to our newsletter</label></fieldset> <input id="honeypot" type="text" name="honeypot" class="svelte-1drmknm"/> <button type="submit">RSVP</button> <!></div>'),Ue=f('<div class="thankyou_message svelte-1drmknm"><h3>Thanks for the RSVP!</h3> <p class="svelte-1drmknm"> </p> <a href="/schedule"><button class="btn-primary">Back to our Schedule</button></a></div>'),Ee=f('<div class="container"><section><h1>RSVP to a Game</h1> <p class="page-subtitle">Our games are free to attend, but RSVP so we can reserve you a spot!</p> <form method="POST" data-sheet="ticket_responses" class="svelte-1drmknm"><!> <!></form></section> <section><!></section></div>');function st(_,v){fe(v,!0);const P=()=>xe(Oe,"$page",w),[w,R]=Se(),M=S(()=>v.data.gamesApsl),b=S(()=>e(M).filter(t=>t.RSVPable)),x=S(()=>P().url.searchParams.get("game")),Z="https://script.google.com/macros/s/AKfycbxFg5Nxms9p3x9h9s47skbvD0FTvYa33tRC4BA6CSqAe-19Ih2k0H_exKeQs5qvO-QiOg/exec";let g=p(!1),T=p(!1),V=p(1),D=p(""),O=p(_e(e(x)||null)),C=p(""),A=p(!1),h=S(()=>e(b).find(t=>t.id==e(O))),ee=S(()=>`APSL-${e(h).Date}-${e(h).opponent}`);function te(){const t={game:e(ee),email:e(D),guests:e(V),newsletter:e(A)?"Yes":"No"};return t.formDataNameOrder=["game","email","guests","newsletter"].join(","),t.formGoogleSheetName="responses",t.formGoogleSendEmail="",t}function ae(t){t.preventDefault(),c(g,!0);var n=te();if(e(C))return!1;var m=Z,l=new XMLHttpRequest;l.open("POST",m),l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.onreadystatechange=function(){l.readyState===4&&l.status===200&&(c(T,!0),c(g,!1))};var y=Object.keys(n).map(function($){return encodeURIComponent($)+"="+encodeURIComponent(n[$])}).join("&");l.send(y)}var G=Ee();we("1drmknm",t=>{var n=qe();ge(()=>{he.title="Tickets RSVP - Somerville United FC"}),u(t,n)});var I=o(G),N=r(o(I),4),Y=o(N);{var se=t=>{var n=Le(),m=o(n),l=r(o(m),2);ke(l,21,()=>e(b),Pe,(a,i)=>{var d=je(),me=o(d);s(d);var X={};U(()=>{Re(d,e(x)===e(i).id),J(me,`${e(i).Date??""} vs. ${e(i).opponent??""} @ ${e(i).Venue??""}`),X!==(X=e(i).id)&&(d.value=(d.__value=e(i).id)??"")}),u(a,d)}),s(l),s(m);var y=r(m,2),$=r(o(y),2);k($),s(y);var q=r(y,2),B=r(o(q),2);k(B),s(q);var j=r(q,2),Q=o(j);k(Q),E(2),s(j);var F=r(j,2);k(F);var L=r(F,2);let W;var le=r(L,2);{var ie=a=>{var i=Fe(),d=o(i);Ge(d,{class:"spinning"}),E(),s(i),u(a,i)};H(le,a=>{e(g)&&a(ie)})}s(n),U(()=>{W=Te(L,1,"btn-primary",null,W,{"is-invalid":e(g)}),L.disabled=e(g)}),Ve(l,()=>e(O),a=>c(O,a)),K($,()=>e(D),a=>c(D,a)),K(B,()=>e(V),a=>c(V,a)),De(Q,()=>e(A),a=>c(A,a)),K(F,()=>e(C),a=>c(C,a)),u(t,n)};H(Y,t=>{e(T)||t(se)})}var re=r(Y,2);{var oe=t=>{var n=Ue(),m=r(o(n),2),l=o(m);s(m),E(2),s(n),U(()=>J(l,`We're excited to see you at our game on ${e(h).Date??""} at ${e(h).Venue??""} vs. ${e(h).opponent??""} ⚽️🎉`)),u(t,n)};H(re,t=>{e(T)&&t(oe)})}s(N),s(I);var z=r(I,2),ne=o(z);ce(ne,{}),s(z),s(G),ue("submit",N,ae),u(_,G),be(),R()}export{st as component,at as universal};
