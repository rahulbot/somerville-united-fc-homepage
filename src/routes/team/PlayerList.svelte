<script>
    import PlayerCard from './PlayerCard.svelte';
    import { TableOfContents, Grid3x3, ArrowUp, ArrowDown } from 'lucide-svelte';

    const positionLookup = {
        'GK': 'Goalkeeper',
        'DF': 'Defender',
        'MF': 'Midfielder',
        'FW': 'Forward'
    };
    export const POSITION_ALL = 'All';
    export const POSITION_GK = 'GK';
    export const POSITION_DF = 'DF';
    export const POSITION_MF = 'MF';
    export const POSITION_FW = 'FW';

    export const VIEW_CARD_GRID = 'CARD_GRID';
    export const VIEW_TABLE = 'TABLE';
    let view = $state(VIEW_CARD_GRID);

    let sortColumn = $state('name');
    let sortDirection = $state('asc');

    function toggleSort(column) {
        if (sortColumn === column) {
            sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            sortColumn = column;
            sortDirection = 'asc';
        }
    }

    function compareBy(column, dir) {
        return (a, b) => {
            let valA, valB;
            if (column === 'name') {
                valA = a['Last Name'] + ' ' + a['First Name'];
                valB = b['Last Name'] + ' ' + b['First Name'];
            } else if (column === 'number') {
                const numA = a.Number !== '' ? Number(a.Number) : Infinity;
                const numB = b.Number !== '' ? Number(b.Number) : Infinity;
                return dir === 'asc' ? numA - numB : numB - numA;
            } else if (column === 'position') {
                valA = a.Position;
                valB = b.Position;
            } else if (column === 'hometown') {
                valA = a.Hometown;
                valB = b.Hometown;
            } else if (column === 'college') {
                valA = a['College NCAA/NJCAA Athlete'];
                valB = b['College NCAA/NJCAA Athlete'];
            }
            const cmp = (valA || '').localeCompare(valB || '');
            return dir === 'asc' ? cmp : -cmp;
        };
    }

    let { players = [] } = $props();
    let positionFilter = $state(POSITION_ALL);
    const sortedPlayers = $derived([...players].sort(compareBy(sortColumn, sortDirection)));
    const filteredPlayers = $derived(
        positionFilter === POSITION_ALL ? sortedPlayers : sortedPlayers.filter(
            player => player.Position === positionFilter));
</script>


<div class="controls">
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
    <div class="position-filter" role="group" aria-label="Filter by position">
        <span class="filter-label">Filter</span>
        <select
            class="filter-select"
            bind:value={positionFilter}
            aria-label="Position filter"
        >
            <option value={POSITION_ALL}>All</option>
            <option value={POSITION_GK}>{positionLookup[POSITION_GK]}</option>
            <option value={POSITION_DF}>{positionLookup[POSITION_DF]}</option>
            <option value={POSITION_MF}>{positionLookup[POSITION_MF]}</option>
            <option value={POSITION_FW}>{positionLookup[POSITION_FW]}</option>
        </select>
    </div>
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
                    <th onclick={() => toggleSort('name')} class="sortable">
                        Name
                        {#if sortColumn === 'name'}
                            {#if sortDirection === 'asc'}<ArrowUp size={14} />{:else}<ArrowDown size={14} />{/if}
                        {/if}
                    </th>
                    <th onclick={() => toggleSort('number')} class="sortable col-number">
                        <span class="desktop-label">Jersey #</span>
                        <span class="mobile-label">#</span>
                        {#if sortColumn === 'number'}
                            {#if sortDirection === 'asc'}<ArrowUp size={14} />{:else}<ArrowDown size={14} />{/if}
                        {/if}
                    </th>
                    <th onclick={() => toggleSort('position')} class="sortable col-position">
                        <span class="desktop-label">Position</span>
                        <span class="mobile-label">Pos</span>
                        {#if sortColumn === 'position'}
                            {#if sortDirection === 'asc'}<ArrowUp size={14} />{:else}<ArrowDown size={14} />{/if}
                        {/if}
                    </th>
                    <!-- <th onclick={() => toggleSort('hometown')} class="sortable">
                        Hometown
                        {#if sortColumn === 'hometown'}
                            {#if sortDirection === 'asc'}<ArrowUp size={14} />{:else}<ArrowDown size={14} />{/if}
                        {/if}
                    </th> -->
                    <th>
                        Hometown
                    </th>
                    <th onclick={() => toggleSort('college')} class="sortable">
                        College
                        {#if sortColumn === 'college'}
                            {#if sortDirection === 'asc'}<ArrowUp size={14} />{:else}<ArrowDown size={14} />{/if}
                        {/if}
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each filteredPlayers as player}
                    <tr>
                        <td>
                            <div class="photo-wrap">
                                {#if player.Photo == 'N'}
                                    <img class="photo" src="/images/teams/mens/default-man.png" alt="{player['First Name']} {player['Last Name']}" />
                                {:else }
                                    <img class="photo" src={player.photoFileName} alt="{player['First Name']} {player['Last Name']}" />
                                {/if }
                            </div>
                            {player['Last Name']}, {player['First Name']}
                        </td>
                        <td>{player.Number}</td>
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
.controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto 4rem;
    flex-wrap: wrap;
}

.view-toggle {
    display: flex;
    width: fit-content;
    align-items: center;
    gap: 0.25rem;
    border: 1px solid var(--muted-color);
    border-radius: var(--radius);
    padding: 0.25rem;
}

.position-filter {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid var(--muted-color);
    border-radius: var(--radius);
    padding: 0.5rem 0.75rem;
}

.filter-label {
    font-size: var(--font-size-sm);
    font-family: var(--font-heading);
    text-transform: uppercase;
    font-weight: 600;
    color: var(--dark-color);
}

.filter-select {
    border: none;
    background: transparent;
    color: var(--dark-color);
    font-size: var(--font-size-sm);
    font-weight: 600;
    cursor: pointer;
    padding: 0.2rem 0.1rem;
    &:focus {
        outline: none;
    }
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
    th.sortable {
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
        & :global(svg) {
            display: inline;
            vertical-align: middle;
            margin-left: 0.25rem;
        }
        &:hover {
            background-color: color-mix(in srgb, var(--secondary-color) 85%, black);
        }
    }
    th.col-number {
        min-width: 6rem;
    }
    th.col-position {
        min-width: 6rem;
    }
    tr {
        vertical-align: top;
        &:nth-child(even) {
            background-color: #f9f9f9;
        }
    }
    .photo-wrap {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        display: inline-block;
        margin-right: 0.75rem;
        vertical-align: middle;
        border: 1px solid var(--muted-color);
    }
}
@media (max-width: 600px) {
    table {
        .photo-wrap {
            display: none;
        }
        .desktop-label {
            display: none;
        }
        .mobile-label {
            display: inline;
        }
        th, td {
            padding: 2px;
            font-size: 14px;
        }
        th.col-number, td:nth-child(2) {
            width: 2rem;
            min-width: unset;
        }
        th.col-position, td:nth-child(3) {
            width: 2rem;
            min-width: unset;
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


@media (max-width: 650px) {
    .player-card-list {
        grid-template-columns: 1fr;
    }
}
</style>