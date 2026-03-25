<script>
  import peoplePhoto from "@assets/coaches.jpg";
  import DecoratedImage from "../../components/DecoratedImage.svelte";
  import ManagementTeam from "./ManagementTeam.svelte";
  import Sponsors from "./Sponsors.svelte";
</script>

<svelte:head>
  <title>About - Somerville United FC</title>
  <meta name="description" content="Meet the group of dedicated individuals who are committed to the growth and success of Somerville United FC" />
</svelte:head>

<section id="intro">
  <div class="container">
    <h1>About Us</h1>
    <div class="about-grid">
      <div class="about-item">
      <h3 class="section-eyebrow">
        Somerville's Team
      </h3>
        <p class="text-lg">
          Somerville United FC is based in Somerville, MA at <a href="https://www.somervillema.gov/dilboystadiumrenovation">Dilboy Stadium</a>. Our inaugural season kicked off in Spring 2026 as part of the 
          <a href="https://apslsoccer.com/APSL/Team/131978">American Premier Soccer League</a>, a nationwide league focused on 
          community engagement and player development. We are a nonprofit organization dedicated to 
          expanding access to soccer in Somerville through community-partnerships, easy access for players, a focus on player
          development, . Our mission is to build a club that reflects the diversity and spirit of our city, while 
          providing high-quality, competitive soccer opportunities for players.
          <br /><br />
          Somerville United FC Women is set to compete beginning in spring 2027. 
          This will be the first women's team of its kind 
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
  </div>
</section>

<a name="sponsors" title="Sponsors"></a>
<Sponsors />

<a name="management" title="Management"></a>
<ManagementTeam />

<style>

  #intro {
    background-color: var(--secondary-color);
    color: white;
    h1, h3, a {
      color: white;
    }
  }

  .section-eyebrow {
    margin-bottom: 1rem;
  }

  .about-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
  }


  @media (min-width: 640px) {
    .about-item {
      padding: 20px;
    }
    .about-image {
      margin-top: 40px;
      padding: 20px;
    }
  }

  @media (min-width: 960px) {
    .about-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1280px) {
    .about-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
