<script>
  const { game, isPostSeason=false } = $props(); // keys: Day, Date, Time, Venue, Address, Home, Away, Postponed

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

<div class="date-wrapper">
    <div class="date-circle" class:playoffs={isPostSeason}>
        <span class="game-date">{displayDate}</span>
        <span class="game-time">{game.Time}</span>
    </div>
</div>

<style>
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
    color: white;
    &.playoffs {
      background-color: var(--alert-color);
      color: black;
    }
    .game-date {
      font-size: 0.9rem;
      text-transform: uppercase;
      font-weight: bold;
      display: block;
    }
    .game-time {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 640px) {
    .date-wrapper {
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
  }
</style>