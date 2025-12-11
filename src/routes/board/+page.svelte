<script>
  import Member from "../../components/Member.svelte";

  const boardMembers = [
    {
      name: "Robert Sifa Onjiko",
      title: "Co-Founder and CEO",
      description: "<p>Robert Sifa Onjiko is the Co-Founder and CEO of Somerville United FC, a community-focused nonprofit dedicated to expanding access to soccer in Somerville. Drawing on his experience as a coach, mentor, and organizer, Robert leads the club with a vision of opportunity, inclusion, and player development. He is committed to building a program that strengthens community pride, supports local youth, and creates pathways for growth both on and off the field.</p>",
      image: null
    },
    {
      name: "Alesandra Onjiko",
      title: "Co-Founder & Executive Board Member",
      description: "<p>A Miami native, Alesandra Onjiko moved to Boston to pursue her Master’s degree in Vocal Performance at the New England Conservatory. Her background in the performing arts shaped her belief in discipline, creativity, and the power of shared experiences — values she later found reflected in soccer. During her studies, she met her husband, Robert, and together they co-founded Somerville United FC, blending their passions for music, sport, and community.</p><p>As a Co-Founder and Executive Board Member, Alesandra is committed to fostering a welcoming environment where players can grow, connect, and express themselves — building a club that celebrates talent, unity, and the joy of the game.</p>",
      image: null
    },
    {
      name: "Francisco Jair Santos Landaverde",
      title: "Board Member",
      description: "<p>Francisco Jair Santos Landaverde is a first year Communications and Media student at Fitchburg State University and a lifelong member of the Somerville soccer community. With more than fifteen years in local youth programs and experience working for Somerville Recreation, he brings a strong understanding of the game and the people in it. Jair is an aspiring soccer social media manager who has already led major growth for the FSU Men’s Soccer platforms through creative content, storytelling, and media production. He is excited to bring his passion for soccer and digital branding to Somerville United FC and help share the club’s mission with the community.</p>",
      image: null
    },
    {
      name: "Eyerusalem T. Alemu",
      title: "Board Member",
      description: "<p>Eyerusalem is an aspiring public health researcher born and raised in Addis Ababa, Ethiopia, whose love for football began with fond memories of weekends spent watching the Premier League with her family. In high school, she discovered the joy of playing the game herself, forming lasting friendships on the field that showed her football’s unique power to bring people together. After completing her undergraduate studies, she moved to Boston and quickly found a welcoming football community that became central to her life in a new city — a space where she made meaningful connections and felt truly at home.</p><p>Inspired by the friendships and sense of belonging she found, Eyerusalem is excited to extend that experience to others through Somerville United FC. As a Board Member, Eyerusalem is dedicated to building a community where players can connect, grow, and find the same joy and camaraderie that football has brought to her life. Her background in community health and wellbeing fuels her commitment to creating equitable access to the beautiful game for all who are interested, regardless of background or socioeconomic status.</p>",
      image: null
    },
    {
      name: "John Massaquoi",
      title: "Board Member",
      description: "<p>John Massaquoi, born in Sierra Leone, West Africa, I've always lived a life split between the pitch and the screen. My passion for soccer began almost as soon as I could walk, dedicated my childhood and teenage years to competitive play, developing a deep understanding of team dynamics, strategy, and relentless commitment.</p><p>While excelling on the field, I cultivated a parallel set of creative skills, as an accomplished graphic designer and photographer using my keen eye for composition and detail to capture moments both on and off the field, and to craft compelling visual stories. This combination of athletic discipline and artistic sensibility defined my unique perspective.</p><p>It's a fantastic opportunity to be a part of the Somerville United FC board members, as it will allow me to combine my lifelong knowledge and love for the sport with my organizational skills, supporting the team operations from the inside, while i thrilled to be a vital part of the team's success in this new capacity.</p>",
      image: null
    },
    {
      name: "TBD",
      title: "Board Member",
      description: "<p>Add description here.</p>",
      image: null
    },
    {
      name: "TBD",
      title: "Board Member",
      description: "<p>Add description here.</p>",
      image: null
    }
  ];
</script>

<svelte:head>
  <title>Board - Somerville United FC</title>
  <meta name="description" content="Meet the Somerville United FC board of directors" />
</svelte:head>

<div class="page-content">
  <div class="container">
    <section class="section">
      <h1 class="page-title">Board of Directors</h1>
      <p class="page-subtitle">
        The leadership team guiding Somerville United FC's vision and mission.
      </p>

      <div class="board-grid">
        {#each boardMembers as member}
          <Member 
            name={member.name}
            title={member.title}
            description={member.description}
            image={member.image}
          />
        {/each}
      </div>
    </section>
  </div>
</div>

<style>
  .section {
    padding: 2rem 0;
  }

  .board-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 1024px) {
    .board-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
