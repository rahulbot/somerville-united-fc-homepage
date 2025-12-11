import { X as attr, a0 as head, Y as ensure_array_like } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/context.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Member($$renderer, $$props) {
  let { name, title, description, image = null } = $$props;
  $$renderer.push(`<div class="member-card svelte-evecq6"><div class="member-image-wrapper svelte-evecq6">`);
  if (image) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<img${attr("src", image)}${attr("alt", name)} class="member-image svelte-evecq6"/>`);
  } else {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`<div class="member-image-placeholder svelte-evecq6"><span class="placeholder-icon svelte-evecq6">👤</span></div>`);
  }
  $$renderer.push(`<!--]--></div> <div class="member-info svelte-evecq6"><h3 class="member-name svelte-evecq6">${escape_html(name)}</h3> <p class="member-title svelte-evecq6">${escape_html(title)}</p> <div class="member-description svelte-evecq6">${html(description)}</div></div></div>`);
}
const headshotRSO = "/_app/immutable/assets/robert-sifa-onjiko.D3Lsi1Pa.jpg";
const headshotAO = "/_app/immutable/assets/alesandra-onjiko.CuzKYSD0.jpg";
const headshotEA = "/_app/immutable/assets/eyerusalem-alemu.DSLtpg1Y.jpg";
const headshotFJSL = "/_app/immutable/assets/francisco-jair-santos-landaverde.murWq1ul.jpg";
const headshotJM = "/_app/immutable/assets/john-massaquoi.Bi3Wuh5m.jpg";
function _page($$renderer) {
  const boardMembers = [
    {
      name: "Robert Sifa Onjiko",
      title: "Co-Founder and CEO",
      description: "<p>Robert Sifa Onjiko is the Co-Founder and CEO of Somerville United FC, a community-focused nonprofit dedicated to expanding access to soccer in Somerville. Drawing on his experience as a coach, mentor, and organizer, Robert leads the club with a vision of opportunity, inclusion, and player development. He is committed to building a program that strengthens community pride, supports local youth, and creates pathways for growth both on and off the field.</p>",
      image: headshotRSO
    },
    {
      name: "Alesandra Onjiko",
      title: "Co-Founder & Executive Board Member",
      description: "<p>A Miami native, Alesandra Onjiko moved to Boston to pursue her Master’s degree in Vocal Performance at the New England Conservatory. Her background in the performing arts shaped her belief in discipline, creativity, and the power of shared experiences — values she later found reflected in soccer. During her studies, she met her husband, Robert, and together they co-founded Somerville United FC, blending their passions for music, sport, and community.</p><p>As a Co-Founder and Executive Board Member, Alesandra is committed to fostering a welcoming environment where players can grow, connect, and express themselves — building a club that celebrates talent, unity, and the joy of the game.</p>",
      image: headshotAO
    },
    {
      name: "Eyerusalem T. Alemu",
      title: "Board Member",
      description: "<p>Eyerusalem is an aspiring public health researcher born and raised in Addis Ababa, Ethiopia, whose love for football began with fond memories of weekends spent watching the Premier League with her family. In high school, she discovered the joy of playing the game herself, forming lasting friendships on the field that showed her football’s unique power to bring people together. After completing her undergraduate studies, she moved to Boston and quickly found a welcoming football community that became central to her life in a new city — a space where she made meaningful connections and felt truly at home.</p><p>Inspired by the friendships and sense of belonging she found, Eyerusalem is excited to extend that experience to others through Somerville United FC. As a Board Member, Eyerusalem is dedicated to building a community where players can connect, grow, and find the same joy and camaraderie that football has brought to her life. Her background in community health and wellbeing fuels her commitment to creating equitable access to the beautiful game for all who are interested, regardless of background or socioeconomic status.</p>",
      image: headshotEA
    },
    {
      name: "Francisco Jair Santos Landaverde",
      title: "Board Member",
      description: "<p>Francisco Jair Santos Landaverde is a first year Communications and Media student at Fitchburg State University and a lifelong member of the Somerville soccer community. With more than fifteen years in local youth programs and experience working for Somerville Recreation, he brings a strong understanding of the game and the people in it. Jair is an aspiring soccer social media manager who has already led major growth for the FSU Men’s Soccer platforms through creative content, storytelling, and media production. He is excited to bring his passion for soccer and digital branding to Somerville United FC and help share the club’s mission with the community.</p><p>",
      image: headshotFJSL
    },
    {
      name: "John Massaquoi",
      title: "Board Member",
      description: "<p>John Massaquoi, born in Sierra Leone, West Africa, I've always lived a life split between the pitch and the screen. My passion for soccer began almost as soon as I could walk, dedicated my childhood and teenage years to competitive play, developing a deep understanding of team dynamics, strategy, and relentless commitment.</p><p>While excelling on the field, I cultivated a parallel set of creative skills, as an accomplished graphic designer and photographer using my keen eye for composition and detail to capture moments both on and off the field, and to craft compelling visual stories. This combination of athletic discipline and artistic sensibility defined my unique perspective.</p><p>It's a fantastic opportunity to be a part of the Somerville United FC board members, as it will allow me to combine my lifelong knowledge and love for the sport with my organizational skills, supporting the team operations from the inside, while i thrilled to be a vital part of the team's success in this new capacity.</p>",
      image: headshotJM
    }
  ];
  head("89g097", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Board - Somerville United FC</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Meet the Somerville United FC board of directors"/>`);
  });
  $$renderer.push(`<div class="page-content"><div class="container"><section class="section svelte-89g097"><h1 class="page-title">Board of Directors</h1> <p class="page-subtitle">The leadership team guiding Somerville United FC's vision and mission.</p> <div class="board-grid svelte-89g097"><!--[-->`);
  const each_array = ensure_array_like(boardMembers);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let member = each_array[$$index];
    Member($$renderer, {
      name: member.name,
      title: member.title,
      description: member.description,
      image: member.image
    });
  }
  $$renderer.push(`<!--]--></div></section></div></div>`);
}
export {
  _page as default
};
