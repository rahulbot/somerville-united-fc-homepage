<script>
    import CardOverlay from './CardOverlay.svelte';
    import CardLowerThird from './CardLowerThird.svelte';
    import { PlaySquare } from 'lucide-svelte';
    let { player } = $props(); // keys: Position, First Name, Last Name, Hometown, College NCAA/NJCAA Athlete
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
    <div class="photo-wrap">
        {#if player.Photo == 'N'}
            <img class="photo" src="/images/teams/mens/default-man.png" alt="{player['First Name']} {player['Last Name']}" />
        {:else }
            <img class="photo" src={player.photoFileName} alt="{player['First Name']} {player['Last Name']}" />
        {/if }
    </div>
    <CardLowerThird />
    <div class="info">
        <h3 class="name">{player['First Name']} {player['Last Name']}</h3>
        <p class="position">{position}
            {#if player.Number}
                #{player.Number}
            {/if}
        </p>
        <p class="flag">{player.flag || '🇺🇸'}</p>
    </div>
</div>


<style>
    .card {
        position: relative;
        overflow: hidden;
        border: 1px solid #000;
        background-image: url('/attached_assets/card-backdrop.png');
        background-repeat: no-repeat;
        background-size: cover;
        max-width: 300px;
        min-width: 300px;
        min-height: calc((300px * 3.5) / 2.5);
        margin-bottom: 50px;
    }
    .card::after {
        content: '';
        position: absolute;
        inset: -12px;
        pointer-events: none;
        opacity: 0;
        z-index: 3;
        transform: translateX(-140%) skewX(-12deg);
        mix-blend-mode: screen;
        background: linear-gradient(
            115deg,
            rgba(255, 255, 255, 0) 35%,
            rgba(255, 255, 255, 0.1) 42%,
            rgba(255, 255, 255, 0.78) 50%,
            rgba(175, 224, 255, 0.55) 56%,
            rgba(255, 255, 255, 0.06) 62%,
            rgba(255, 255, 255, 0) 70%
        );
    }
    .card:hover::after {
        opacity: 1;
        animation: foil-sweep 850ms ease-out 1;
    }
    .photo-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        margin-left: 0px;
        margin-top: 0px;
        overflow: hidden;
    }
    .photo {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: filter 200ms ease;
        filter:
            drop-shadow(0 0 0 #fff)
            drop-shadow(3px 0 0 #fff)
            drop-shadow(-3px 0 0 #fff)
            drop-shadow(0 3px 0 #fff)
            drop-shadow(0 -3px 0 #fff)
            drop-shadow(1px 1px 0 #fff)
            drop-shadow(-1px 1px 0 #fff)
            drop-shadow(1px -1px 0 #fff)
            drop-shadow(-1px -1px 0 #fff);
    }
    .card:hover .photo {
        animation: outline-glint 850ms ease-out 1;
    }
    .info {
        z-index: 99;
    }
    .name {
        position: absolute;
        bottom: 15px;
        left: 20px;
        display: inline-block;
        font-family: var(--font-heading);
        font-style: italic;
        font-weight: 900;
        font-size: 28px;
        line-height: 1;
        padding-top: 0.12em;
        padding-right: 0.2em;
        transform-origin: center center;
    }
    .card:hover .name {
        animation: name-pop 850ms ease-out 1;
    }
    .position {
        position: absolute;
        bottom: 11px;
        left: 20px;
        font-family: var(--font-sans);
        text-transform: uppercase;
        font-weight: 100;
        font-size: 13px;
        color: rgba(255,255,255);
    }
    .flag {
        position: absolute;
        bottom: 2px;
        right: 15px;
        font-family: var(--font-sans);
        text-transform: uppercase;
        font-weight: 900;
        color: var(--secondary);
        font-size: 30px;
    }

    @keyframes foil-sweep {
        0% {
            opacity: 0;
            transform: translateX(-140%) skewX(-12deg);
        }
        20% {
            opacity: 0.95;
        }
        100% {
            opacity: 0;
            transform: translateX(150%) skewX(-12deg);
        }
    }

    @keyframes outline-glint {
        0%,
        100% {
            filter:
                drop-shadow(0 0 0 #fff)
                drop-shadow(3px 0 0 #fff)
                drop-shadow(-3px 0 0 #fff)
                drop-shadow(0 3px 0 #fff)
                drop-shadow(0 -3px 0 #fff)
                drop-shadow(1px 1px 0 #fff)
                drop-shadow(-1px 1px 0 #fff)
                drop-shadow(1px -1px 0 #fff)
                drop-shadow(-1px -1px 0 #fff);
        }
        45% {
            filter:
                drop-shadow(0 0 0 #fff)
                drop-shadow(3px 0 0 #fff)
                drop-shadow(-3px 0 0 #fff)
                drop-shadow(0 3px 0 #fff)
                drop-shadow(0 -3px 0 #fff)
                drop-shadow(1px 1px 0 #fff)
                drop-shadow(-1px 1px 0 #fff)
                drop-shadow(1px -1px 0 #fff)
                drop-shadow(-1px -1px 0 #fff)
                brightness(1.12)
                saturate(1.12)
                drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))
                drop-shadow(0 0 14px rgba(175, 224, 255, 0.55));
        }
    }

    @keyframes name-pop {
        0%,
        100% {
            transform: scale(1);
        }
        45% {
            transform: scale(1.1);
        }
    }
</style>