<script>
    import Game from './Game.svelte';
    let { games, teamName, includeTicketButton } = $props();
</script>

{#each games as game}
    <Game {game} {teamName} {includeTicketButton}/>
{/each}

<style>

</style>