<script>
    import Game from './Game.svelte';
    let { games = [] } = $props();
</script>

{#each games as game}
    <Game {game} />
{/each}

<style>

</style>