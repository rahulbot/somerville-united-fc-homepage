<script>
  import GameList from './GameList.svelte';
	let { data } = $props();

  let schedule = $derived(data.games);
  const today = new Date();
  const countdownDays = $derived(Math.ceil((new Date(schedule[0].Date - today) / (1000 * 60 * 60 * 24))));
</script>

<svelte:head>
  <title>Schedule - Somerville United FC</title>
  <meta name="description" content="Keep track of fixtures and results" />
</svelte:head>

<div class="container">
  <section>
    <h1>
      {#if countdownDays > 0}
        <em>{countdownDays}</em> Days Till Our Home Opener
      {:else}
        2026 Season Schedule
      {/if}
    </h1>
    <p class="page-subtitle">
      SUFC plays in the <a href="https://apslsoccer.com/APSL/Teams/">APSL Mayflower Conference</a>. Join one of our upcoming games.
    </p>

    <GameList games={schedule} />
  </section>
</div>

<style>
  em {
    color: var(--secondary-color);
    font-style: normal;
  }
</style>
