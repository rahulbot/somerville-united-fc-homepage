<script>
    import CardOverlay from './CardOverlay.svelte';
    import CardLowerThird from './CardLowerThird.svelte';
    let { player } = $props(); // keys: Position, First Name, Last Name, Hometown, College NCAA/NJCAA Athlete
    const photoUrl = $derived('/attached_assets/teams/mens-apsl/' + player.photoFileName);
    const positionLookup = {
        'GK': 'Goalkeeper',
        'DF': 'Defender',
        'MF': 'Midfielder',
        'FW': 'Forward'
    };
    const position = $derived(positionLookup[player.Position] || player.Position);
</script>

<div class="card">
    <CardOverlay />
    <img class="photo" src={photoUrl} alt="{player['First Name']} {player['Last Name']}" width="250" height="350" />
    <CardLowerThird />
    <div class="info">
        <h3 class="name">{player['First Name']} {player['Last Name']}</h3>
        <p class="position">{position}</p>
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
        max-width: 300px;
        min-width: 300px;
        min-height: calc((300px * 3.5) / 2.5);
        margin-bottom: 50px;
    }
    .photo {
        margin-left: 24px;
        margin-top: 24px;
    }
    .info {
        z-index: 99;
    }
    .name {
        position: absolute;
        bottom: 44px;
        left: 20px;
        font-family: var(--font-heading);
        font-style: italic;
        font-weight: 900;
        font-size: 28px;
    }
    .position {
        position: absolute;
        bottom: 20px;
        left: 20px;
        font-family: var(--font-sans);
        text-transform: uppercase;
        font-weight: 900;
        font-size: 16px;
        color: white;
    }
    .number {
        position: absolute;
        bottom: 18px;
        right: 13px;
        font-family: var(--font-sans);
        text-transform: uppercase;
        font-weight: 900;
        color: var(--secondary);
        font-style: italic;
        font-size: 24px;
    }
</style>