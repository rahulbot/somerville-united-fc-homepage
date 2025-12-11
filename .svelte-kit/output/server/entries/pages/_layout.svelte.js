import { U as sanitize_props, V as spread_props, W as slot, X as attr, Y as ensure_array_like, Z as attr_class, _ as store_get, $ as unsubscribe_stores } from "../../chunks/index2.js";
import { I as Icon, l as logoImage } from "../../chunks/Newsletter.svelte_svelte_type_style_lang.js";
import { g as getContext, e as escape_html } from "../../chunks/context.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
function Menu($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
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
   */
  const iconNode = [
    ["path", { "d": "M4 5h16" }],
    ["path", { "d": "M4 12h16" }],
    ["path", { "d": "M4 19h16" }]
  ];
  Icon($$renderer, spread_props([
    { name: "menu" },
    $$sanitized_props,
    {
      /**
       * @component @name Menu
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCA1aDE2IiAvPgogIDxwYXRoIGQ9Ik00IDEyaDE2IiAvPgogIDxwYXRoIGQ9Ik00IDE5aDE2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/menu
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const navLinks = [
      { href: "/", label: "Home" },
      { href: "/team", label: "Team" },
      { href: "/board", label: "Board" }
    ];
    $$renderer2.push(`<nav class="navbar svelte-d8j1hi"><div class="container navbar-content svelte-d8j1hi"><div class="navbar-brand svelte-d8j1hi"><a href="/" class="svelte-d8j1hi"><img${attr("src", logoImage)} alt="Somerville United FC Logo" class="logo svelte-d8j1hi"/> <span class="brand-name svelte-d8j1hi">SOMERVILLE UNITED FC</span></a></div> <div class="navbar-links desktop-links svelte-d8j1hi"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)}${attr_class("nav-link svelte-d8j1hi", void 0, {
        "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === link.href
      })}>${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></div> <button class="hamburger svelte-d8j1hi" aria-label="Toggle menu">`);
    {
      $$renderer2.push("<!--[!-->");
      Menu($$renderer2, { size: 24 });
    }
    $$renderer2.push(`<!--]--></button></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></nav>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Newsletter($$renderer) {
  $$renderer.push(`<section id="get-involved" class="newsletter-section svelte-6nip6h"><div class="container"><h2 class="newsletter-heading svelte-6nip6h">Let’s build something historic together. ⚽️🔥</h2> <p class="newsletter-text svelte-6nip6h">Sign up for updates on tryouts, sponsorship opportunities, match schedules, and community events. Be part of the movement from day one.</p> <div class="newsletter-form svelte-6nip6h"><button class="btn btn-white newsletter-btn svelte-6nip6h"><a href="https://forms.gle/DSFMAaQivR5U1ZR77" class="svelte-6nip6h">Signup for Our Newsletter!</a></button></div></div></section>`);
}
function Footer($$renderer) {
  $$renderer.push(`<footer>`);
  Newsletter($$renderer);
  $$renderer.push(`<!----> <div class="footer svelte-1sr6y3t"><div class="container footer-content svelte-1sr6y3t"><div class="footer-brand svelte-1sr6y3t"><div class="brand-name svelte-1sr6y3t">SOMERVILLE UNITED FC</div> <p class="copyright">© 2025 Somerville United FC. All rights reserved.</p></div> <div class="footer-links svelte-1sr6y3t"><a href="https://www.instagram.com/somerville_fc/" class="footer-link svelte-1sr6y3t">Instagram</a></div></div></div></footer>`);
}
function _layout($$renderer, $$props) {
  $$renderer.push(`<div class="page-wrapper svelte-12qhfyh">`);
  Navbar($$renderer);
  $$renderer.push(`<!----> <main class="svelte-12qhfyh"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
