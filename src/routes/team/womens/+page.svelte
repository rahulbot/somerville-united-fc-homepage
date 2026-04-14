<script>
  import MemberList from "../../../components/MemberList.svelte";
  import headshotEM from "@assets/staff/emily-mendes.png";
  import headshotAC from "@assets/staff/angela-cornacchio.png";
  import headershotPlaceholder from "@assets/placeholder-female.jpg";
  import headshotMK from "@assets/staff/malaika-kironde.jpg";
  import headshotPMC from "@assets/staff/phoebe-martell-crawford.jpg";
  import headshotCN from "@assets/staff/courtney-nunheimer.jpg";
  
  const womensLeadership = [
    {
      name: "Emily Mendes",
      title: "Partnerships & Team Manager",
      description: "Emily is originally from Brooklyn, NY and has lived in Boston for the past five years. She's currently a Sales Manager at Education First in Cambridge. Before that, Emily coached and managed soccer at different levels - youth, community and pro. She worked briefly with Gotham FC, ran a youth soccer club in NYC, and coached with Street Soccer USA. She is super passionate about growing the women's game, supporting Boston's soccer scene, and helping build strong community programs. You won't want to miss getting to know her!",
      image: headshotEM
    },
    {
      name: "Angela Cornacchio",
      title: "Business Development Coordinator",
      description: "Angela has been playing football her entire life. From youth club, ODP, college undefeated national championship, to professional play in Italy, Angela's passion for the game runs deep. Angela is still playing on a semi-professional level, coaches, previously served as Communications Director for the Boston Breakers and recently obtained her Global Sports Management Certification from NYU. As an award winning writer/media professional in fashion and 3x published author with her first book being about football, she brings unique perspective to the team. Angela bleeds AC Milan, never misses a match, and will skip anything for football.Somerville has been Angela's home for many years and she's excited to contribute to the women's team success.",
      image: headshotAC
    },
    {
      name: "Courtney Nunheimer",
      title: "Player Recruitment",
      description: "Courtney is a Somerville resident and the General Manger at Teddy’s on the Hill restaurant. She holds brings a wealth of expreince from studies in Business Management & Graphic Design, Marketing,  Photography, and Strategy. She is a current player in the EMWSL & for the Boston Dream. Country comes to us with background in player recruitment and plans to help our women grow and have successful tryouts by scouting colleges and working with coaching staff.",
      image: headshotCN
    },
    {
      name: "Phoebe Martell Crawford",
      title: "Player Development",
      description: "Phoebe is from Vermont, where she worked as an assistant coach for Middlebury College’s Womens soccer program. She's coached at the youth, high school, and college levels. Soccer creates connection and builds community, and Phoebe is eager to be part of growing the game.",
      image: headshotPMC
    },
    {
      name: "Malaika Kironde",
      title: "Analyst",
      description: "Malaika started playing soccer after watching the 2010 World Cup with her dad and fell in love with the game shortly after. As an engineer, Malaika is looking forward to helping Somerville FC with analytical tasks and is excited to be a part of bringing soccer to Somerville.",
      image: headshotMK
    },
    {
      name: "Reese D",
      title: "Volunteer",
      description: "",
      image: headershotPlaceholder
    }
  ];
</script>

<svelte:head>
  <title>Women's Team - Somerville United FC</title>
  <meta name="description" content="Meet the Somerville United FC Women's team" />
</svelte:head>

<div class="container">

  <section>
    <h1 class="page-title">Women's Team</h1>
    <p class="page-subtitle">
      🚧 We're excited to be building a women's team for the spring 2027 season. If you're interested in playing 
      or volunteering please use our <a href="/contact">contact form</a> or email us at
      <a href="mailto:womens@somervilleunitedfc.org">womens@somervilleunitedfc.org</a>.
    </p>
  </section>

  <section>
    <h3>Our Women's Management Team</h3> 
    <p class="page-subtitle">
      Meet the group of dedicated individuals who are committed to the growth and success of Somerville United FC's women's team.
    </p>
    <MemberList people={womensLeadership} />
  </section>

</div>

<style>
h3 {
  text-align: center;
}
</style>
