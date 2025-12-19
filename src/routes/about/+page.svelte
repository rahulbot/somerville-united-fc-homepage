<script>
  import Member from "../../components/Member.svelte";
  import headshotRSO from "@assets/robert-sifa-onjiko.jpg";
  import headshotAO from "@assets/alesandra-onjiko.jpg";
  import headshotKW from "@assets/kelly-williamson.jpg";
  import headshotEA from "@assets/eyerusalem-alemu.jpg";
  import headshotFJSL from "@assets/francisco-jair-santos-landaverde.jpg";
  import headshotJM from "@assets/john-massaquoi.jpg";
  import headshotJG from "@assets/judd-galloway.jpg";
  import headshotCJ from "@assets/cassandra-joyce.jpg";
  import headshotTW from "@assets/ty-wilhelmsen.jpg";

  const people = [
    {
      name: "Robert Sifa Onjiko",
      title: "Co-Founder and CEO",
      description: "<p>Robert Sifa Onjiko is the Co-Founder and CEO of Somerville United FC, a community-focused nonprofit dedicated to expanding access to soccer in Somerville. Drawing on his experience as a coach, mentor, and organizer, Robert leads the club with a vision of opportunity, inclusion, and player development. He is committed to building a program that strengthens community pride, supports local youth, and creates pathways for growth both on and off the field.</p>",
      image: headshotRSO
    },
    {
      name: "Alesandra Onjiko",
      title: "Executive Director and Co-Founder",
      description: "<p>A Miami native, Alesandra Onjiko moved to Boston to pursue her Master’s degree in Vocal Performance at the New England Conservatory. Her background in the performing arts shaped her belief in discipline, creativity, and the power of shared experiences — values she later found reflected in soccer. During her studies, she met her husband, Robert, and together they co-founded Somerville United FC, blending their passions for music, sport, and community.</p><p>As a Co-Founder and Executive Board Member, Alesandra is committed to fostering a welcoming environment where players can grow, connect, and express themselves — building a club that celebrates talent, unity, and the joy of the game.</p>",
      image: headshotAO
    },
    {
      name: "Kelly Williamson",
      title: "President",
      description: "<p>Kelly Williamson serves as the President of the Board of Directors for Somerville United FC, providing strategic leadership and guiding the organization’s mission to grow the game and support athletes at every level. A lifelong lover of the sport, she has been passionate about soccer since childhood and continued her playing career at the collegiate level—experiences that shaped her dedication to expanding access, opportunity, and excellence within the game. She is committed to fostering an inclusive, competitive, and community-centered environment that empowers players, coaches, and supporters alike.</p><p>Driven by her belief in the power of sport to build confidence, community, and leadership, she brings both her professional expertise and her on-field experience to every decision.</p>",
      image: headshotKW
    },
    {
      name: "Eyerusalem T. Alemu",
      title: "Treasurer",
      description: "<p>Eyerusalem is an aspiring public health researcher born and raised in Addis Ababa, Ethiopia, whose love for football began with fond memories of weekends spent watching the Premier League with her family. In high school, she discovered the joy of playing the game herself, forming lasting friendships on the field that showed her football’s unique power to bring people together. After completing her undergraduate studies, she moved to Boston and quickly found a welcoming football community that became central to her life in a new city — a space where she made meaningful connections and felt truly at home.</p><p>Inspired by the friendships and sense of belonging she found, Eyerusalem is excited to extend that experience to others through Somerville United FC. As a Board Member, Eyerusalem is dedicated to building a community where players can connect, grow, and find the same joy and camaraderie that football has brought to her life. Her background in community health and wellbeing fuels her commitment to creating equitable access to the beautiful game for all who are interested, regardless of background or socioeconomic status.</p>",
      image: headshotEA
    },
    {
      name: "Judd Galloway",
      title: "Secretary and General Manager",
      description: "<p>Judd serves as Secretary of Somerville United FC and is an engineer who has spent years coaching within the Somerville youth soccer system. A Somerville resident and lifelong supporter of the local game, he continues to coach while staying closely connected to the community and its players. Through Somerville United FC, Judd is focused on helping build a lasting, community-driven club that provides clear development pathways for future generations of players, with the long-term goal of creating opportunities that extend all the way to the professional level.</p>",
      image: headshotJG
    },
    {
      name: "John Massaquoi",
      title: "Assistant Secretary",
      description: "<p>John Massaquoi, born in Sierra Leone, West Africa, I've always lived a life split between the pitch and the screen. My passion for soccer began almost as soon as I could walk, dedicated my childhood and teenage years to competitive play, developing a deep understanding of team dynamics, strategy, and relentless commitment.</p><p>While excelling on the field, I cultivated a parallel set of creative skills, as an accomplished graphic designer and photographer using my keen eye for composition and detail to capture moments both on and off the field, and to craft compelling visual stories. This combination of athletic discipline and artistic sensibility defined my unique perspective.</p><p>It's a fantastic opportunity to be a part of the Somerville United FC Board members, as it will allow me to combine my lifelong knowledge and love for the sport with my organizational skills, supporting the team operations from the inside, while i thrilled to be a vital part of the team's success in this new capacity.</p>",
      image: headshotJM
    },
    {
      name: "Francisco Jair Santos Landaverde",
      title: "Internal Communications and Social Media Manager",
      description: "<p>Francisco Jair Santos Landaverde is a first year Communications and Media student at Fitchburg State University and a lifelong member of the Somerville soccer community. With more than fifteen years in local youth programs and experience working for Somerville Recreation, he brings a strong understanding of the game and the people in it. Jair is an aspiring soccer social media manager who has already led major growth for the FSU Men’s Soccer platforms through creative content, storytelling, and media production. He is excited to bring his passion for soccer and digital branding to Somerville United FC and help share the club’s mission with the community.</p><p>",
      image: headshotFJSL
    },
    {
      name: "Cassandra Joyce",
      title: "External Communications Manager",
      description: "<p>Cassandra Joyce is a journalism student at Northeastern University with a strong passion for sports and storytelling. She has experience covering athletic teams through reporting, writing, and digital media, with a focus on capturing the stories behind the game. Through Somerville United FC, Cassandra is excited to continue growing as a sports journalist while helping highlight the club, its players, and its connection to the community.</p>",
      image: headshotCJ
      
    },
    {
      name: "Ty Wilhelmsem",
      title: "Players Health and Fitness",
      description: "<p>Ty Wilhelmsen will serve as Somerville United FC's Strength and Conditioning expert, focusing on player health, fitness, and performance. He holds a bachelor's degree in Exercise Science from the University of New England and a Master's degree in Strength and Conditioning and Sports Performance from Merrimack College, with professional and internship experience in high performance environments including the Maine Celtics basketball organization and Harvard University. Through Somerville United FC, Ty aims to build a structured, professional performance program that prioritizes injury prevention, long term athletic development, and consistent high level preparation or players across the club.</p>",
      image: headshotTW
    }
  ];
</script>

<svelte:head>
  <title>About - Somerville United FC</title>
  <meta name="description" content="Meet the group of dedicated individuals who are committed to the growth and success of Somerville United FC" />
</svelte:head>

<div class="page-content">
  <div class="container">
    <section class="section">
      <h1 class="page-title">About Us</h1>
      <p class="page-subtitle">
        Meet the group of dedicated individuals who are committed to the growth and success of Somerville United FC.
      </p>

      <div class="mgmt-grid">
        {#each people as person}
          <Member 
            name={person.name}
            title={person.title}
            description={person.description}
            image={person.image}
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

  .mgmt-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 640px) {
    .mgmt-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1280px) {
    .mgmt-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
