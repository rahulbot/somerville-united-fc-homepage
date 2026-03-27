<script>
  import { gameHasYouTubeVideo } from '$lib/video.js';
  import YouTubeLogo from '../../components/icons/YouTubeLogo.svelte';

  const { game, teamName, includeTicketButton } = $props(); // keys: Day, Date, Time, Venue, Address, Home, Away, Postponed
  const isHome = $derived(game.Home === teamName);
  const isPostponed = $derived(game.Postponed === 'Yes');
  const inPast = $derived(!isNaN(new Date(game.Date)) && (new Date() > new Date(game.Date)));
  const hasTicketLink = $derived((includeTicketButton && isHome) && (game.Tickets && game.Tickets.startsWith('http')));
  const hasVideo = $derived(gameHasYouTubeVideo(game));

  // try to parse game.Date as a date, otherwise leave it as is because it might be TBD
  let displayDate = $derived.by(() => {
    let dateStr;
    try {
      if (isNaN(new Date(game.Date))) {
        throw new Error("Invalid date");
      }
      dateStr = (new Date(game.Date)).toLocaleDateString("en-US", { month: 'short', day: 'numeric' });
    } catch {
      dateStr = game.Date;
    }
    return dateStr;
  });
</script>

<div class="game-row" class:past={inPast}>
  <div class="date-wrapper">
    <div class="date-circle">
      <span class="game-date">{displayDate}</span>
      <span class="game-time">{game.Time}</span>
    </div>
  </div>
  <div>
    <span class="game-prefix">{isHome ? 'vs' : 'at'}</span>
    <span class="game-opponent">
      {isHome ? game.Away : game.Home}
      {#if hasVideo}
        <a href="https://www.youtube.com/watch?v={game.YouTubeId}">
          <YouTubeLogo size=30 color="#C1132E"  />
        </a>
      {/if}
    </span>        
    <br />
    <span class="game-venue">{game.Venue}
      {#if game.Address}
        - {game.Address}
      {/if}
    </span>
  </div>
  <div class="status-wrapper">
    {#if isPostponed}
      <span class="chip postponed">Postponed</span>
    {:else if inPast}
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
      <a href={game.Tickets} target="_blank" rel="noopener noreferrer">
        <button class="btn-primary">Get Tickets</button>
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

  .date-wrapper {
    padding-left: 10px;
  }  
  .date-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: var(--secondary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    .game-date {
      color: #fff;
      font-size: 0.9rem;
      text-transform: uppercase;
      font-weight: bold;
      display: block;
    }
    .game-time {
      font-size: 0.7rem;
      color: var(--muted-color);
    }
  }

  .game-prefix {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--secondary-color);
    font-weight: bold;
    text-transform: uppercase;
  }
  .game-opponent {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: bold;
  }
  .game-venue {
    font-style: italic;
  }

  .note {
    display: block;
    font-size: 0.8rem;
    text-transform: none;
  }

  .status-wrapper {
    padding-right: 10px;
  }

  .chip {
    padding: 8px 16px;
    font-size: 1.2rem;
    border-radius: 20px;
    border-radius: var(--radius);
    font-family: var(--font-heading);
    text-transform: uppercase;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius);
    float: right;
    &.postponed {
      background-color: #cccccc;
    }
    &.win {
      background-color: #4caf50;
    }
    &.loss {
      background-color: #f44336;
    }
    &.draw {
      background-color: #cccccc;
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
    .date-wrapper, .status-wrapper {
      padding-left: 0px;
    }  
    .date-circle {
      width: 60px;
      height: 60px;
      margin-right: 10px;
    }
    .game-date {
      font-size: 0.6rem !important;
    }
    .game-time {
      font-size: 0.5rem !important;
    }
    .game-prefix {
      font-size: 1rem;
    }
    .game-opponent {
      font-size: 1.5rem;
    }
    .game-venue {
      font-size: 0.8rem;
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
  }
</style>