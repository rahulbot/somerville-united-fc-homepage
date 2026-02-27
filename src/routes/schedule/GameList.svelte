<script>
    import Game from './Game.svelte';
    let { games, teamName, includeTicketButton } = $props();
</script>

{#if games.length === 0}
  <p>🚧 No games scheduled yet. Check back soon!</p>
{/if}
{#each games as game}
    <Game {game} {teamName} {includeTicketButton}/>
{/each}

<style>

</style>