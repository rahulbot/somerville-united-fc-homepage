<script>
  import Hero from "./home/Hero.svelte";
  import Mission from "./home/Mission.svelte";
  import Values from "./home/Values.svelte";
  import GameDayHighlight from "./home/GameDayHighlight.svelte";
  import APSLChampions2026 from "./home/APSLChampions2026.svelte";
  import Latest from "./home/Latest.svelte";

  const { data } = $props();

  const scheduleApsl = $derived(data.APSL);
  const gameToday = $derived(scheduleApsl.find((game) => {
    const today = new Date();
    const gameDate = new Date(game.parsedDate);
    return (
      gameDate.getFullYear() === today.getFullYear() &&
      gameDate.getMonth() === today.getMonth() &&
      gameDate.getDate() === today.getDate() &&
      (game.Result === null || game.Result.length == 0) // because some games might be foreited already
    );
  }));

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

{#if gameToday}
  <GameDayHighlight game={gameToday} />
{/if}

<APSLChampions2026 />

<!--
<Hero {scrollTo} />

<Mission />

<Values />

<Latest />
-->