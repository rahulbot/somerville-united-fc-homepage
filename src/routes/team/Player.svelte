<script>
    import CardOverlay from './CardOverlay.svelte';
    import CardLowerThird from './CardLowerThird.svelte';
    let { player } = $props(); // keys: name, number?, position?, flag?, photoFileName
    const photoUrl = $derived('/attached_assets/teams/mens-apsl/' + player.photoFileName);
</script>

<div class="card">
    <CardOverlay />
    <img class="photo" src={photoUrl} alt="{player.name}" width="300" />
    <CardLowerThird />
    <div class="info">
        <h3 class="name">{player.name}</h3>
        <p class="position">{player.position}</p>
        <p class="number">#{player.number || '??'}</p>
    </div>
</div>


<style>
    .card {
        position: relative;
        border: 1px solid #000;
        background-image: url('/attached_assets/card-backdrop.png');
        background-repeat: no-repeat;
        background-size: cover;
        max-width: 360px;
        min-width: 360px;
        min-height: calc((360px * 3.5) / 2.5);
        margin-bottom: 20px;
    }
    .photo {
        margin-left: 29px;
        margin-top: 29px;
    }
    .info {
        z-index: 99;
    }
    .name {
        position: absolute;
        bottom: 38px;
        left: 40px;
        font-family: var(--font-heading);
        font-style: italic;
        font-weight: 900;
        font-size: 30px;
    }
    .position {
        position: absolute;
        bottom: 10px;
        left: 40px;
        font-family: var(--font-sans);
        text-transform: uppercase;
        font-weight: 900;
        font-size: 16px;
        color: white;
    }
    .number {
        position: absolute;
        bottom: 7px;
        right: 15px;
        font-family: var(--font-sans);
        text-transform: uppercase;
        font-weight: 900;
        color: var(--secondary);
        font-style: italic;
        font-size: 29px;
    }
</style>