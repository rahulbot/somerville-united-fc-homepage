<script>
  import Hero from "./home/Hero.svelte";
  import Mission from "./home/Mission.svelte";
  import Values from "./home/Values.svelte";
  import GameDayHighlight from "./home/GameDayHighlight.svelte";
  import APSLChampions2026 from "./home/APSLChampions2026.svelte";
  import Latest from "./home/Latest.svelte";
  import { getGamesToday } from "../lib/schedules.js";

  const { data } = $props();

  const gamesToday = $derived(getGamesToday(data.calendars));

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

{#if gamesToday.length > 0}
  <GameDayHighlight game={gamesToday[0]} />
{/if}

<APSLChampions2026 />

<!--
<Hero {scrollTo} />

<Mission />

<Values />

<Latest />
-->