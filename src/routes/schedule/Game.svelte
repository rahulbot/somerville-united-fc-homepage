<script>
  import GameDate from './GameDate.svelte';
  import GameLocation from './GameLocation.svelte';

  const { game, teamName, includeTicketButton } = $props(); // keys: Day, Date, Time, Venue, Address, Home, Away, Postponed
  const isHome = $derived(game.Home === teamName);
  const isPostponed = $derived(game.Postponed === 'Yes');
  const isPostSeason = $derived(game.Round != 'Regular Season');
  const inPast = $derived(!isNaN(new Date(game.Date)) && (new Date() > new Date(game.Date)));
  const hasTicketLink = $derived((includeTicketButton && isHome) && (game.Tickets && game.Tickets.startsWith('http')));
</script>

<div class="game-row" class:past={inPast || game.Result}>
  
  <div><GameDate {game} {isPostSeason} /></div>
  
  <div><GameLocation {game} {isHome} {isPostSeason} /></div>
  
  <div class="status-wrapper">
    {#if isPostponed}
      <span class="chip postponed">Postponed</span>
    {:else if inPast || game.Result}
      {#if game.Result == 'W'}
        <span class="chip win">
          Win
          {#if game.Note }<span class="note">{game.Note}</span>{/if}
        </span>
      {:else if game.Result == 'L'}
        <span class="chip loss">
          Loss
          {#if game.Note }<span class="note">{game.Note}</span>{/if}
        </span>
      {:else if game.Result == 'D'}
        <span class="chip draw">
          Draw
          {#if game.Note }<span class="note">{game.Note}</span>{/if}
        </span>
      {/if}
    {:else if hasTicketLink}
      <a href={game.Tickets} target="_blank">
        <button class="btn-primary">Get Tickets</button>
      </a>
    {:else if game.RSVPable}
      <a href="tickets?game={game.id}">
        <button class="btn-primary">RSVP</button>
      </a>
    {/if}
  </div>

</div>

<style>
  .game-row {
    height: 130px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 25px 0;
    border-top: 1px dashed rgba(var(--secondary-color-rgb), 0.3);
  }
  .game-row.past {
    opacity: 0.6;
    background-color: #eee;
  }
  .game-row > div {
    text-align: left;
  }
  .game-row > div:nth-child(1) {
    flex: 0 0 20%;
  }
  .game-row > div:nth-child(2) {
    flex: 0 0 50%;
  }
  .game-row > div:nth-child(3) {
    flex: 0 0 30%;
  }

  .note {
    display: block;
    font-size: 0.8rem;
    text-transform: none;
  }

  .status-wrapper {
    padding-right: 10px;
    text-align: center;
  }

  .chip {
    padding: 8px 16px;
    font-size: 1.2rem;
    border-radius: 20px;
    border-radius: var(--radius);
    font-family: var(--font-heading);
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    padding: 0.5rem 1rem;
    min-width: 80px;
    border-radius: var(--radius);
    float: right;
    &.postponed {
      border: 2px solid #666666;
      color: #666666;
    }
    &.win {
      border: 2px solid #4caf50;
      color: #4caf50;
    }
    &.loss {
      border: 2px solid #f44336;
      color: #f44336;
    }
    &.draw {
      border: 2px solid #666666;
      color: #666666;
    }
  }

  button {
    font-size: 1.5rem;
    float: right;
  }

  @media (max-width: 640px) {
    .game-row {
      padding: 15px 0;
      height: auto;
    }
    .status-wrapper {
      padding-left: 0px;
    }
    button {
      font-size: 0.8rem;
      margin-top: 0px;
      padding: 15px;
      float: none;
    }
    .game-row > div:nth-child(2) {
      flex: 0 0 60%;
    }
    .game-row > div:nth-child(3) {
      flex: 0 0 20%;
    }
    .chip {
      padding: 0.5rem 0.25rem;
    }
  }
</style>