<script>
  import PlayerList from "./PlayerList.svelte";
  import mensAPSL from "@assets/data/roster-mens-apsl-s26.json";
</script>

<svelte:head>
  <title>Team - Somerville United FC</title>
  <meta name="description" content="Meet the Somerville United FC team" />
</svelte:head>

<section class="section">
  <div class="container">
    <h1 class="page-title">Our Teams</h1>
    <p class="page-subtitle">
      We are actively recruiting players and staff for the inaugural men's team 2026 season. We'll launch our women's team in fall of 2026. 
      Stay tuned for updates on the full roster!
    </p>
  </div>
</section>

<section>
  <div class="container">
    <h2>Men's APSL Team</h2>
    <PlayerList players={mensAPSL} />
  </div>
</section>

<style>
  h2 {
    font-family: var(--font-heading);
    color: var(--secondary);
    font-weight: 900;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .section {
    padding: 2rem 0;
  }
</style>
