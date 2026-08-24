<script>
  import Hero from "./home/Hero.svelte";
  import Mission from "./home/Mission.svelte";
  import Values from "./home/Values.svelte";
  import GameDayHighlight from "./home/GameDayHighlight.svelte";
  //import APSLChampions2026 from "./home/APSLChampions2026.svelte";
  import Latest from "./home/Latest.svelte";
  import Spinner from "../components/Spinner.svelte";
  import { getGamesToday } from "../lib/schedules.js";

  const { data } = $props();

  // Scroll handler for anchors
  function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<svelte:head>
  <title>Somerville United FC - Home</title>
  <meta name="description" content="Somerville United FC - Building community through soccer" />
</svelte:head>

{#await data.calendars}
  <div class="schedule-loading"><Spinner size={20} label="Checking today's schedule" /></div>
{:then calendars}
  {@const gamesToday = getGamesToday(calendars)}
  {#if gamesToday.length > 0}
    <GameDayHighlight game={gamesToday[0]} />
  {/if}
{:catch}
{/await}

<Hero {scrollTo} />

<Mission />

<Values />

<Latest />

<style>
  .schedule-loading {
    padding: 0.5rem;
  }
</style>