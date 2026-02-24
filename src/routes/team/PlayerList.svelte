<script>
    import Player from './Player.svelte';
    let { players = [] } = $props();
</script>

<div class="player-list">
    {#each players as player}
        <Player {player} />
    {/each}
</div>

<style>
.player-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px; /* Adjust the gap as needed */
    margin-bottom: 3rem;
    place-items: center;
}

@media (max-width: 1200px) {
    .player-list {
        grid-template-columns: repeat(2, 1fr);
    }
}


@media (max-width: 600px) {
    .player-list {
        grid-template-columns: 1fr;
    }
}
</style>