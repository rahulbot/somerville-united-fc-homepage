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
      description: "Robert Sifa Onjiko is the Co-Founder and CEO of Somerville United FC, a community-focused nonprofit dedicated to expanding access to soccer in Somerville. Drawing on his experience as a coach, mentor, and organizer, Robert leads the club with a vision of opportunity, inclusion, and player development. He is committed to building a program that strengthens community pride, supports local youth, and creates pathways for growth both on and off the field.",
      image: headshotRSO
    },
    {
      name: "Alesandra Onjiko",
      title: "Executive Director and Co-Founder",
      description: "A Miami native, Alesandra Onjiko moved to Boston to pursue her Master's degree in Vocal Performance at the New England Conservatory. Her background in the performing arts shaped her belief in discipline, creativity, and the power of shared experiences — values she later found reflected in soccer. During her studies, she met her husband, Robert, and together they co-founded Somerville United FC, blending their passions for music, sport, and community. As a Co-Founder and Executive Board Member, Alesandra is committed to fostering a welcoming environment where players can grow, connect, and express themselves — building a club that celebrates talent, unity, and the joy of the game.",
      image: headshotAO
    },
    {
      name: "Kelly Williamson",
      title: "President",
      description: "Kelly Williamson serves as the President of the Board of Directors for Somerville United FC, providing strategic leadership and guiding the organization's mission to grow the game and support athletes at every level. A lifelong lover of the sport, Kelly has been passionate about soccer since childhood and continued playing at the collegiate level—experiences that shaped her dedication to expanding access, opportunity, and excellence within the game. Kelly is committed to fostering an inclusive, competitive, and community-centered environment that empowers players, coaches, and supporters alike. Driven by her belief in the power of sport to build confidence, community, and leadership, she brings both professional expertise and on-field experience to every decision.",
      image: headshotKW
    },
    {
      name: "Judd Galloway",
      title: "Secretary and General Manager",
      description: "Judd serves as Secretary of Somerville United FC and is an engineer who has spent years coaching within the Somerville youth soccer system. A Somerville resident and lifelong supporter of the local game, Judd continues to coach while staying closely connected to the community and its players. Through Somerville United FC, Judd is focused on helping build a lasting, community-driven club that provides clear development pathways for future generations of players, with the long-term goal of creating opportunities that extend all the way to the professional level.",
      image: headshotJG
    },
    {
      name: "Eyerusalem T. Alemu",
      title: "Treasurer",
      description: "Eyerusalem is an aspiring public health researcher born and raised in Addis Ababa, Ethiopia, whose love for football began with fond memories of weekends spent watching the Premier League with family. In high school, Eyerusalem discovered the joy of playing the game, forming lasting friendships on the field that showed the game's unique power to bring people together. After completing undergraduate studies, Eyerusalem moved to Boston and quickly found a welcoming football community that became central to life in a new city — a space where meaningful connections were made and a true sense of belonging was found. Inspired by the friendships and sense of belonging found in the game, Eyerusalem is excited to extend that experience to others through Somerville United FC. As a Board Member, Eyerusalem is dedicated to building a community where players can connect, grow, and find the same joy and camaraderie that football has brought to so many lives. Eyerusalem's background in community health and wellbeing fuels a commitment to creating equitable access to the beautiful game for all who are interested, regardless of background or socioeconomic status.",
      image: headshotEA
    },
    {
      name: "Jack Resnik",
      title: "Director of Operations",
      description: "Jack serves as the Director of Operations and Programs for Somerville United FC. As an experienced Project Manager working in health care research and a passionate fan of the beautiful game, he is thrilled to blend professional expertise and love of football to support the goals and growth of this club. Jack fell in love with football while living and working in South America, where the power of football to unite communities, cross divides, uplift people and provide solace became clear. A native of Phoenix, Arizona, he has found a home in Massachusetts after moving here to study public health at Boston University. After 7 years in Jamaica Plain, Jack moved to Somerville in 2025 drawn by the vibrancy, diversity, and activism of this incredible community.",
      image: headshotJR
    },
    {
      name: "John Massaquoi",
      title: "Assistant Secretary",
      description: "John Massaquoi, born in Sierra Leone, West Africa, has always lived a life split between the pitch and the screen. John's passion for soccer began almost as soon as he could walk, dedicating childhood and teenage years to competitive play, developing a deep understanding of team dynamics, strategy, and relentless commitment.While excelling on the field, he cultivated a parallel set of creative skills as an accomplished graphic designer and photographer, using a keen eye for composition and detail to capture moments both on and off the field and to craft compelling visual stories. This combination of athletic discipline and artistic sensibility defines his unique perspective. John see a fantastic opportunity to be a part of the Somerville United FC Board members, as it allows the combination of lifelong knowledge and love for the sport with organizational skills, supporting the team operations from the inside, while contributing as a vital part of the team's success in this new capacity.",
      image: headshotJM
    },
    {
      name: "Cassandra Joyce",
      title: "External Communications Manager",
      description: "Cassandra Joyce is a journalism student at Northeastern University with a strong passion for sports and storytelling. Cassandra has experience covering athletic teams through reporting, writing, and digital media, with a focus on capturing the stories behind the game. Through Somerville United FC, she is excited to continue growing as a sports journalist while helping highlight the club, its players, and its connection to the community.",
      image: headshotCJ
    },
    {
      name: "Emily Mendes",
      title: "Team Manager (SUFC Women)",
      description: "Emily is originally from Brooklyn, NY and has lived in Boston for the past five years. She's currently a Sales Manager at Education First in Cambridge. Before that, Emily coached and managed soccer at different levels - youth, community and pro. She worked briefly with Gotham FC, ran a youth soccer club in NYC, and coached with Street Soccer USA. She is super passionate about growing the women's game, supporting Boston's soccer scene, and helping build strong community programs. You won't want to miss getting to know her!",
      image: headshotEM
    },
    {
      name: "Angela Cornacchio",
      title: "Business Coordinator (SUFC Women)",
      description: "Angela has been playing football her entire life. From youth club, ODP, college undefeated national championship, to professional play in Italy, Angela's passion for the game runs deep. Angela is still playing on a semi-professional level, coaches, previously served as Communications Director for the Boston Breakers and recently obtained her Global Sports Management Certification from NYU. As an award winning writer/media professional in fashion and 3x published author with her first book being about football, she brings unique perspective to the team. Angela bleeds AC Milan, never misses a match, and will skip anything for football.Somerville has been Angela's home for many years and she's excited to contribute to the women's team success.",
      image: headshotAC
    },
    {
      name: "John Senn",
      title: "Comm & Fundraising Lead",
      description: "John Senn is a communications professional with more than 25 years experience in the public, private and nonprofit sectors, including almost 20 years with the federal government at the U.S. Environmental Protection Agency. He previously served on the board of directors at Street Sense Media, a nonprofit that provides a range of programs and services to the homeless community in Washington, D.C., including two years as board vice president. John is a lifelong soccer fan and an avid runner.",
      image: headshotJS
    },
    {
      name: "Oliver Judd",
      title: "Marketing Lead",
      description: "Oliver Judd is a recent marketing graduate from Syracuse University. His favorite forms of marketing include guerrilla marketing, SEO strategy, and brand marketing. Soccer has encapsulated Oliver's life from the day he was born. He likes to coach and referee youth soccer when time permits. There are even rumors in his family saying he was born in an Arsenal kit (up the gunners). Oliver has lived in Boston for 9 years and is extremely excited to be a part of a Boston based soccer team.",
      image: headshotOJ
    },
    {
      name: "Jessica Sumney",
      title: "DEI Lead",
      description: "Jessica Sumney has ten years of experience in DEI and higher education, and is committed to creating inclusive and engaging campus experiences for students and employees. She became a passionate soccer fan while working at Penn State and cheered the Penn State women's soccer team on through a Big 10 Championship win. After four years away from Boston, Jessica returned in August 2025 and is excited for the ways Somerville United FC can impact our community.",
      image: headshotJS2
    },
    {
      name: "Jonah Giaquinto",
      title: "Sales Lead",
      description: "Jonah Giaquinto is Massachusetts born and raised. he played soccer his whole life and even played at Dilboy stadium growing up for high school soccer. Currently working in finance and sales performance, Jonah is passionate about creating grassroots clubs in the US and expanding accessibility of the beautiful game.",
      image: headshotJG2
    },
    {
      name: "Samuel Zhou",
      title: "Strategic Planning Lead",
      description: "Sam is a lifelong MA resident and former Somerville resident who is eager to give back to the community through his love for soccer. He is currently studying his PhD in biomedical engineering at Boston University where he is researching how learning and movement are regulated by the brain. Outside of lab, Sam loves playing soccer, watching movies, cooking, and supporting Newcastle United.",
      image: headshotSZ
    },
    {
      name: "Patrick McQuillen",
      title: "Strategic Planning Lead",
      description: "Patrick McQuillen is a 5 year resident of Somerville and is very excited to join the team. He is ready to grow recognition, awareness and connection between the club and the Somerville community.",
      image: headshotPM
    },
    {
      name: "Ty Wilhelmsen",
      title: "Players Health and Fitness",
      description: "Ty Wilhelmsen serves as Somerville United FC's Strength and Conditioning expert, focusing on player health, fitness, and performance. He holds a bachelor's degree in Exercise Science from the University of New England and a Master's degree in Strength and Conditioning and Sports Performance from Merrimack College, with professional and internship experience in high performance environments including the Maine Celtics basketball organization and Harvard University. Through Somerville United FC, Ty aims to build a structured, professional performance program that prioritizes injury prevention, long term athletic development, and consistent high level preparation for players across the club.",
      image: headshotTW
    },
    {
      name: "Malaika Kironde",
      title: "Analyst (SUFC Women)",
      description: "Malaika started playing soccer after watching the 2010 World Cup with her dad and fell in love with the game shortly after. As an engineer, Malaika is looking forward to helping Somerville FC with analytical tasks and is excited to be a part of bringing soccer to Somerville.",
      image: headshotMK
    },
    {
      name: "Francisco Jair Santos Landaverde",
      title: "Internal Communications and Social Media Manager",
      description: "Francisco Jair Santos Landaverde is a first year Communications and Media student at Fitchburg State University and a lifelong member of the Somerville soccer community. With more than fifteen years in local youth programs and experience working for Somerville Recreation, Jair brings a strong understanding of the game and the people in it. He is an aspiring soccer social media manager who has already led major growth for the FSU Men's Soccer platforms through creative content, storytelling, and media production. Jair is excited to bring passion for soccer and digital branding to Somerville United FC and help share the club's mission with the community.",
      image: headshotFJSL
    },
    {
      name: "Christian Aquino",
      title: "Admin Support",
      description: "Christian Aquino is a Brazilian American based in Milford, MA. he has loved soccer his entire life, both as a player and a fan. Christian played throughout his childhood and has supported Manchester United since age 7. he currently attends Bridgewater State University where he majors in both General Business Management and Film Production. Christian also holds two jobs in Framingham and Marlborough.",
      image: headshotCA
    },
    {
      name: "Maximillian Ragosta",
      title: "Legal Intern",
      description: "Max is joining the Somerville United team as a legal intern. He is from Providence and went to undergrad at NC State in Raleigh before moving back up to Boston, where he currently attends New England Law. Max is excited to help contribute to the club.",
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
