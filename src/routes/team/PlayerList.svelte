<script>
    import PlayerCard from './PlayerCard.svelte';
    import { TableOfContents, Grid3x3 } from 'lucide-svelte';
    
    export const POSITION_ALL = 'All';
    export const POSITION_GK = 'GK';
    export const POSITION_DF = 'DF';
    export const POSITION_MF = 'MF';
    export const POSITION_FW = 'FW';
    
    export const VIEW_CARD_GRID = 'CARD_GRID';
    export const VIEW_TABLE = 'TABLE';
    let view = $state(VIEW_CARD_GRID);

    let { players = [], positionFilter =  POSITION_ALL} = $props();
    const sortedPlayers = $derived(players.sort((a, b) => {
        return a['Last Name'].localeCompare(b['Last Name']);
    }));
    const filteredPlayers = $derived(
        positionFilter === POSITION_ALL ? sortedPlayers : sortedPlayers.filter(
            player => player.Position === positionFilter));
</script>


<div class="view-toggle" role="group" aria-label="Player list view toggle">
    <button
        type="button"
        class="toggle-button"
        class:selected={view === VIEW_CARD_GRID}
        aria-pressed={view === VIEW_CARD_GRID}
        onclick={() => (view = VIEW_CARD_GRID)}
    >
        <Grid3x3 size={16} />
        <span>Cards</span>
    </button>
    <button
        type="button"
        class="toggle-button"
        class:selected={view === VIEW_TABLE}
        aria-pressed={view === VIEW_TABLE}
        onclick={() => (view = VIEW_TABLE)}
    >
        <TableOfContents size={16} />
        <span>Table</span>
    </button>
</div>


{#if view == VIEW_CARD_GRID}
    <div class="player-card-list">
        {#each filteredPlayers as player}
            <PlayerCard {player} />
        {/each}
    </div>
{:else if view == VIEW_TABLE}
    <div class="container">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>
                        <span class="desktop-label">Position</span>
                        <span class="mobile-label">Pos</span>
                    </th>
                    <th>Hometown</th>
                    <th>College</th>
                </tr>
            </thead>
            <tbody>
                {#each filteredPlayers as player}
                    <tr>
                        <td>{player['Last Name']}, {player['First Name']}</td>
                        <td>{player.Position}</td>
                        <td>{player.Hometown} {player.flag || '🇺🇸'}</td>
                        <td>{player['College NCAA/NJCAA Athlete']}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{/if}

<style>
.view-toggle {
    display: flex;
    width: fit-content;
    align-items: center;
    gap: 0.25rem;
    border: 1px solid var(--muted-color);
    border-radius: var(--radius);
    padding: 0.25rem;
    margin: 0 auto 4rem;
}

.toggle-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border: none;
    border-radius: calc(var(--radius) - 0.1rem);
    background-color: transparent;
    color: var(--dark-color);
    font-size: var(--font-size-sm);
    font-weight: 600;
    padding: 0.4rem 0.7rem;
}

.toggle-button.selected {
    background-color: var(--primary-color);
    color: var(--primary-color-foreground);
}

/* STYLES FOR TABLE VIEW */
table {
    width: 100%;
    margin-bottom: 3rem;
    .mobile-label {
        display: none;
    }
    th, td {
        padding: 15px;
        border-bottom: 1px solid var(--muted-color);
    }
    th {
        position: sticky;
        top: 4rem;  /* gotta account for the navbar stickiness */
        font-size: var(--font-size-md);
        text-transform: uppercase;
        background-color: var(--secondary-color);
        color: var(--secondary-color-foreground);
        text-align: left;
        z-index: 10;
        font-family: var(--font-heading);
    }
    tr {
        vertical-align: top;
        &:nth-child(even) {
            background-color: #f9f9f9;
        }
    }
}
@media (max-width: 600px) {
    table {
        .desktop-label {
            display: none;
        }
        .mobile-label {
            display: inline;
        }
        th, td {
            padding: 2px;
        }
    }
}


/* STYLES FOR CARD GRID VIEW */
.player-card-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px; /* Adjust the gap as needed */
    margin-bottom: 3rem;
    place-items: center;
}

@media (max-width: 1200px) {
    .player-card-list {
        grid-template-columns: repeat(2, 1fr);
    }
}


@media (max-width: 600px) {
    .player-card-list {
        grid-template-columns: 1fr;
    }
}
</style>