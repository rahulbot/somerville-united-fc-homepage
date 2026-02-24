<script>
  let { game, teamName, includeTicketButton } = $props(); // keys: Day, Date, Time, Venue, Address, Home, Away
  // try to parse game.Date as a date, otherwise leave it as is because it might be TBD
  let isHome = $derived(game.Home === teamName);
  let displayDate = $derived.by(() => {
    let dateStr;
    try {
      let parsedDate = new Date(game.Date);
      if (isNaN(parsedDate)) throw new Error("Invalid date");
      dateStr = parsedDate.toLocaleDateString("en-US", { month: 'short', day: 'numeric' });
    } catch {
      dateStr = game.Date;
    }
    return dateStr;
  });
</script>

<div class="game-row">
  <div>
    <div class="date-circle">
      <span class="game-date">{displayDate}</span>
      <span class="game-time">{game.Time}</span>
    </div>
  </div>
  <div>
    <span class="game-prefix">{isHome ? 'vs' : 'at'}</span>
    <span class="game-opponent">{isHome ? game.Away : game.Home}</span>        
    <br />
    <span class="game-venue">{game.Venue}</span>
  </div>
  <div>
    {#if includeTicketButton && isHome}
      <a href="/tickets">
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

  button {
    font-size: 1.5rem;
    float: right;
  }

  @media (max-width: 640px) {
    .game-row {
      padding: 15px 0;
      height: auto;
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