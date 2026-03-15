<script>
  import Hero from "./home/Hero.svelte";
  import Mission from "./home/Mission.svelte";
  import Values from "./home/Values.svelte";
  import Community from "./home/Community.svelte";
  import GameDayHighlight from "./home/GameDayHighlight.svelte";

  const { data } = $props();

  const scheduleApsl = $derived(data.gamesApsl);
  const gameToday = $derived(scheduleApsl.find((game) => {
    const today = new Date();
    const gameDate = new Date(game.parsedDate);
    return (
      gameDate.getFullYear() === today.getFullYear() &&
      gameDate.getMonth() === today.getMonth() &&
      gameDate.getDate() === today.getDate()
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

<Hero {scrollTo} />
<Mission />
<Values />
<Community />
