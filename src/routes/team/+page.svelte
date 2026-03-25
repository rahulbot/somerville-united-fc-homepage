<script>
  import mensTeamImage from "@assets/teams/mens-team-at-union.jpg";
  import womensTeamImage from "@assets/teams/generated-kick.jpg";
</script>

<svelte:head>
  <title>Team - Somerville United FC</title>
  <meta name="description" content="Meet the Somerville United FC team" />
</svelte:head>

<div class="container">
  <section>
    <h1>Our Teams</h1>
    <p class="page-subtitle">
      Our men's teams launched in spring of 2026, and We are actively recruiting players and staff for the inaugural women's team season in spring 2027. 
      Stay tuned for updates on the full roster!
    </p>
    <div class="teams-container">
      <a href="/team/mens" class="team-card">
        <img src={mensTeamImage} alt="Men's team" />
        <h3>Men's Team</h3>
      </a>
      <a href="/team/womens" class="team-card">
        <img src={womensTeamImage} alt="Women's team" />
        <h3>Women's Team</h3>
      </a>
    </div>
  </section>
</div>

<style>
  .teams-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem 0;
  }

  .team-card {
    position: relative;
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .team-card img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 1rem;
  }

  .team-card h3 {
    position: absolute;
    top: 10%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, 0);
    margin: 0;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    text-align: center;
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-size: 4rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 600px) {
    .team-card h3 {
      font-size: 3rem;
    }
  }


  .team-card:hover {
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    .teams-container {
      grid-template-columns: 1fr;
    }
  }
</style>
