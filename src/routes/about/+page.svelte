<script>
  import Member from "./Member.svelte";
  import peoplePhoto from "@assets/coaches.jpg";
  import DecoratedImage from "../../components/DecoratedImage.svelte";

  // head shots of all the staff
  import headshotRSO from "@assets/staff/robert-sifa-onjiko.jpg";
  import headshotAO from "@assets/staff/alesandra-onjiko.jpg";
  import headshotKW from "@assets/staff/kelly-williamson.jpg";
  import headshotEA from "@assets/staff/eyerusalem-alemu.jpg";
  import headshotFJSL from "@assets/staff/francisco-jair-santos-landaverde.jpg";
  import headshotJM from "@assets/staff/john-massaquoi.jpg";
  import headshotJG from "@assets/staff/judd-galloway.jpg";
  import headshotCJ from "@assets/staff/cassandra-joyce.jpg";
  import headshotTW from "@assets/staff/ty-wilhelmsen.jpg";
  import headshotCA from "@assets/staff/christian-aquino.jpg";
  import headshotJS from "@assets/staff/john-senn.jpg";
  import headshotMK from "@assets/staff/malaika-kironde.jpg";
  import headshotOJ from "@assets/staff/oliver-judd.jpg";
  import headshotJS2 from "@assets/staff/jessica-sumney.jpg";
  import headshotMR from "@assets/staff/maximillian-ragosta.jpg";
  import headshotJG2 from "@assets/staff/jonah-giaquinto.jpg";
  import headshotSZ from "@assets/staff/samuel-zhou.jpg";
  import headshotJR from "@assets/staff/jack-resnik.jpg";
  import headshotPM from "@assets/staff/patrick-mcquillen.png";
  import headshotEM from "@assets/staff/emily-mendes.png";
  import headshotAC from "@assets/staff/angela-cornacchio.png";

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
      name: "Judd Galloway",
      title: "Secretary and General Manager",
      description: "<p>Judd serves as Secretary of Somerville United FC and is an engineer who has spent years coaching within the Somerville youth soccer system. A Somerville resident and lifelong supporter of the local game, he continues to coach while staying closely connected to the community and its players. Through Somerville United FC, Judd is focused on helping build a lasting, community-driven club that provides clear development pathways for future generations of players, with the long-term goal of creating opportunities that extend all the way to the professional level.</p>",
      image: headshotJG
    },
    {
      name: "Eyerusalem T. Alemu",
      title: "Treasurer",
      description: "<p>Eyerusalem is an aspiring public health researcher born and raised in Addis Ababa, Ethiopia, whose love for football began with fond memories of weekends spent watching the Premier League with her family. In high school, she discovered the joy of playing the game herself, forming lasting friendships on the field that showed her football’s unique power to bring people together. After completing her undergraduate studies, she moved to Boston and quickly found a welcoming football community that became central to her life in a new city — a space where she made meaningful connections and felt truly at home.</p><p>Inspired by the friendships and sense of belonging she found, Eyerusalem is excited to extend that experience to others through Somerville United FC. As a Board Member, Eyerusalem is dedicated to building a community where players can connect, grow, and find the same joy and camaraderie that football has brought to her life. Her background in community health and wellbeing fuels her commitment to creating equitable access to the beautiful game for all who are interested, regardless of background or socioeconomic status.</p>",
      image: headshotEA
    },
    {
      name: "Jack Resnik",
      title: "Director of Operations",
      description: "<p>Jack serves as the Director of Operations and Programs for Somerville United FC. As an experienced Project Manager working in health care research and a passionate fan of the beautiful game, he is thrilled to blend his professional experience and love of football to support the goals and growth of this club. Jack fell in love with football while living and working in South America, where he was enchanted by the power of football to unite communities, cross divides, uplift people and provide solace. Jack is a native of Phoenix, Arizona but has found a home in Massachusetts after moving here to study public health at Boston University. After 7 years in Jamaica Plain, he moved to Somerville in 2025 drawn by the vibrancy, diversity, and activism of this incredible community.</p>",
      image: headshotJR
    },
    {
      name: "John Massaquoi",
      title: "Assistant Secretary",
      description: "<p>John Massaquoi, born in Sierra Leone, West Africa, I've always lived a life split between the pitch and the screen. My passion for soccer began almost as soon as I could walk, dedicated my childhood and teenage years to competitive play, developing a deep understanding of team dynamics, strategy, and relentless commitment.</p><p>While excelling on the field, I cultivated a parallel set of creative skills, as an accomplished graphic designer and photographer using my keen eye for composition and detail to capture moments both on and off the field, and to craft compelling visual stories. This combination of athletic discipline and artistic sensibility defined my unique perspective.</p><p>It's a fantastic opportunity to be a part of the Somerville United FC Board members, as it will allow me to combine my lifelong knowledge and love for the sport with my organizational skills, supporting the team operations from the inside, while i thrilled to be a vital part of the team's success in this new capacity.</p>",
      image: headshotJM
    },
    {
      name: "Cassandra Joyce",
      title: "External Communications Manager",
      description: "<p>Cassandra Joyce is a journalism student at Northeastern University with a strong passion for sports and storytelling. She has experience covering athletic teams through reporting, writing, and digital media, with a focus on capturing the stories behind the game. Through Somerville United FC, Cassandra is excited to continue growing as a sports journalist while helping highlight the club, its players, and its connection to the community.</p>",
      image: headshotCJ
    },
    {
      name: "Emily Mendes",
      title: "Team Manager (SUFC Women)",
      description: "",
      image: headshotEM
    },
    {
      name: "Angela Cornacchio",
      title: "Coordinator (SUFC Women)",
      description: "<p> Hi! My name is Ange and I have been playing football my entire life. From youth club, ODP, college undefeated national championship, professionally in Italy.</p><p>I am still playing on a semi-professional level, coach, formally Communications Director for the Boston Breakers and recently obtained my Global Sports Management Certification from NYU. As an award winning writer/media in fashion and 3x published author with my first book being about football. I bleed AC Milan, never miss a match even if I am driving and will skip anything for football.<p><p>Somerville has been home for so many years and excited to contribute to a women’s team success.</p>",
      image: headshotAC
    },
    {
      name: "John Senn",
      title: "Comm & Fundraising Lead",
      description: "<p>John Senn is a communications professional with more than 25 years experience in the public, private and nonprofit sectors, including almost 20 years with the federal government at the U.S. Environmental Protection Agency. John previously served on the board of directors at Street Sense Media, a nonprofit that provides a range of programs and services to the homeless community in Washington, D.C., including two years as board vice president. John is a lifelong soccer fan and is an avid runner.</p>",
      image: headshotJS
    },
    {
      name: "Oliver Judd",
      title: "Marketing Lead",
      description: "<p>My name is Oliver Judd, great to meet you! I am a recent marketing graduate from Syracuse University. My favorite forms of marketing include guerrilla marketing, SEO strategy, and brand marketing. Soccer has encapsulated my life from the day I was born. I like to coach and referee youth soccer when I have the time. There are even rumors in my family saying I was born in an Arsenal kit (up the gunners). I’ve lived in Boston for 9 years and I am extremely excited to be a part of a Boston based soccer team. The future’s exciting!</p>",
      image: headshotOJ
    },
    {
      name: "Jessica Sumney",
      title: "DEI Lead",
      description: "",
      image: headshotJS2
    },
    {
      name: "Jonah Giaquinto",
      title: "Sales Lead",
      description: "",
      image: headshotJG2
    },
    {
      name: "Samuel Zhou",
      title: "Strategic Planning Lead",
      description: "<p>Sam is a lifelong MA resident and former Somerville resident who is eager to give back to the Somerville community through his love for soccer. He is currently studying his PhD in biomedical engineering at Boston University where he is researching how learning and movement are regulated by the brain. Outside of lab, he loves playing soccer, watching movies, cooking, and supporting Newcastle United.</p>",
      image: headshotSZ
    },
    {
      name: "Patrick McQuillen",
      title: "Strategic Planning Lead",
      description: "",
      image: headshotPM
    },
    {
      name: "Ty Wilhelmsem",
      title: "Players Health and Fitness",
      description: "<p>Ty Wilhelmsen will serve as Somerville United FC's Strength and Conditioning expert, focusing on player health, fitness, and performance. He holds a bachelor's degree in Exercise Science from the University of New England and a Master's degree in Strength and Conditioning and Sports Performance from Merrimack College, with professional and internship experience in high performance environments including the Maine Celtics basketball organization and Harvard University. Through Somerville United FC, Ty aims to build a structured, professional performance program that prioritizes injury prevention, long term athletic development, and consistent high level preparation or players across the club.</p>",
      image: headshotTW
    },
    {
      name: "Malaika Kironde",
      title: "Analyst (SUFC Women)",
      description: "<p>about this person</p>",
      image: headshotMK
    },
    {
      name: "Francisco Jair Santos Landaverde",
      title: "Internal Communications and Social Media Manager",
      description: "<p>Francisco Jair Santos Landaverde is a first year Communications and Media student at Fitchburg State University and a lifelong member of the Somerville soccer community. With more than fifteen years in local youth programs and experience working for Somerville Recreation, he brings a strong understanding of the game and the people in it. Jair is an aspiring soccer social media manager who has already led major growth for the FSU Men’s Soccer platforms through creative content, storytelling, and media production. He is excited to bring his passion for soccer and digital branding to Somerville United FC and help share the club’s mission with the community.</p><p>",
      image: headshotFJSL
    },
    {
      name: "Cristian Aquino",
      title: "Admin Support",
      description: "<p>about this person</p>",
      image: headshotCA
    },
    {
      name: "Maximillian Ragosta",
      title: "Legal Intern",
      description: "<p> My name is Max, and I am joining the Somerville United team as a legal intern. I am from Providence, and went to undergrad at NC State in Raleigh before moving back up to Boston, where I currently attend New England Law. I am excited to help contribuite to the club!</p>",
      image: headshotMR
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
      <div class="about-grid">
        <div class="about-item">
        <h3 class="section-heading">
          Somerville's Team
        </h3>
          <p class="text-lg">
            Somerville United FC is based in Somerville, MA at <a href="https://www.somervillema.gov/dilboystadiumrenovation">Dilboy Stadium</a>. Our inaugural season kicks off in Spring 2026 as part of the 
            <a href="https://apslsoccer.com/APSL/Team/131978">American Premier Soccer League</a>, a nationwide league focused on 
            community engagement and player development. We are a nonprofit organization dedicated to 
            expanding access to soccer in Somerville through community-partnerships, easy access for players, a focus on player
            development, . Our mission is to build a club that reflects the diversity and spirit of our city, while 
            providing high-quality, competitive soccer opportunities for players.
            <br /><br />
            Somerville United FC Women is set to compete beginning mid 2026. This will be the first women's team of its kind 
            in the area, marking a historic milestone for both our club and the community.
            This initiative reflects our commitment to expanding opportunities for women in the game and 
            growing the sport at every level. Somerville United FC Women will represent our city with 
            passion, ambition, and community driven values as we begin this exciting new chapter together.
          </p>
        </div>
        <div class="about-image">
          <DecoratedImage src={peoplePhoto} alt="Some of our coaching staff on the field" aspectRatio="4 / 4"/>
        </div>
      </div>
    </section>

    <section class="section" id="management-team">
      <h3 class="section-heading">Our Management Team</h3> 
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
  h1 {
    margin-bottom: 4rem;
  }

  .section {
    padding: 2rem 0;
  }

  #management-team {
    margin-top: 4rem;
    h3 {
      text-align: center;
    }
  }

  .about-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
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

  @media (min-width: 960px) {
    .about-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1280px) {
    .mgmt-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .about-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .about-item {
    padding: 20px;
  }
  .about-image {
    margin-top: 40px;
    padding: 20px;
  }
</style>
