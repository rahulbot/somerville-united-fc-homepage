<script>
  import Papa from "papaparse";
  import PlayerList from "../PlayerList.svelte";
  import { onMount } from "svelte";
  import mensAPSLUrl from "@assets/data/roster-mens-apsl-s26.csv?url";
  let mensAPSL = $state([]);

  onMount(() => {
    Papa.parse(mensAPSLUrl, {
      download: true,
      header: true,
      complete: (results) => {
        mensAPSL = results.data.filter(row => Object.keys(row).some(key => row[key]));
      }
    });
  });
</script>

<svelte:head>
  <title>Men's APSL Team - Somerville United FC</title>
  <meta name="description" content="Meet the Somerville United FC Men's APSL team" />
</svelte:head>

>
  <div class="container">
    <h1 class="page-title">Men's Team</h1>
    <p class="page-subtitle">
      The Men's team plays in the <a href="https://apslsoccer.com/APSL/Teams/">Mayflower Conference of the American Premier Soccer League (APSL)</a>.
      The team is made up of a mix of homegrown talent and players from around the country, many of whom have played at the collegiate level.
      <br />
      <a href="/team">Explore our other teams</a>.
    </p>
  </div>
</section>

<section>
  <div class="container">
    <PlayerList players={mensAPSL} />
  </div>
</section>

<style>
  @media (max-width: 768px) {
  }
</style>
