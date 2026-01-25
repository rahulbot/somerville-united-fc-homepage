<script>
  import { onMount } from 'svelte';
  import schedule from '@assets/data/schedule2026.json';
  import GameList from '../../components/GameList.svelte';
</script>

<svelte:head>
  <title>Schedule - Somerville United FC</title>
  <meta name="description" content="Keep track of fixtures and results" />
</svelte:head>

<div class="page-content">
  <div class="container">
    <section class="section">
      <h1 class="page-title">Schedule</h1>
      <p class="page-subtitle">
        SUFC plays in the <a href="https://apslsoccer.com/APSL/Teams/">APSL Mayflower Conference</a>. Join one of our upcoming games.
      </p>

      <GameList games={schedule} />
    </section>
  </div>
</div>

<style>
  .section {
    padding: 2rem 0;
  }
</style>
