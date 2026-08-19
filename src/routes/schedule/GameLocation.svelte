<script>
import YouTubeLogo from '../../components/icons/YouTubeLogo.svelte';
import { gameHasYouTubeId, gameHasVideoUrl } from '$lib/video.js';

const { game, isHome=true, isPostSeason=false } = $props(); // keys: Day, Date, Time, Venue, Address, Home, Away, Postponed
const hasYouTubeId = $derived(gameHasYouTubeId(game));
const hasVideoUrl = $derived(gameHasVideoUrl(game));

</script>

<div>

    <span class="game-prefix">{isHome ? 'vs' : 'at'}</span>

    <span class="game-opponent">
        {isHome ? game.Away : game.Home}
        {#if hasYouTubeId}
        <a href="https://www.youtube.com/watch?v={game.YouTubeId}">
            <YouTubeLogo size=30 color="#C1132E"  />
        </a>
        {/if}
        {#if hasVideoUrl}
        <a href={game.YouTubeId} target="_blank" rel="noopener noreferrer">
            <YouTubeLogo size=30 color="#C1132E"  />
        </a>
        {/if}
        {#if isPostSeason}
        <span class="game-annotation">{game.Round}</span>
        {/if}
    </span>

    <br />
    
    <span class="game-venue">{game.Venue}
        {#if game.Address}
        - {game.Address}
        {/if}
    </span>

</div>

<style>
  .game-prefix {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--secondary-color);
    font-weight: bold;
    text-transform: uppercase;
  }
  .game-opponent {
    color: var(--dark-color) !important;
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: bold;
  }
  .game-annotation {
    display: inline-block;
    margin-left: 10px;
    padding: 2px 8px;
    font-size: 1rem;
    background-color: var(--alert-color);
    border: 1px solid var(--alert-color);
    border-radius: 4px;
    text-transform: uppercase;
    vertical-align: middle;
  }
  .game-venue {
    font-style: italic;
    font-size: 14px;
    font-weight: 400;
    line-height: 1rem;
    color: var(--dark-color);
  }


@media (max-width: 768px) {
  .game-opponent {
    font-size: 1.2rem;
  }

  .game-venue {
    font-size: 0.85rem;
  }
}
  @media (max-width: 640px) {
    .game-prefix {
      font-size: 1rem;
    }
    .game-opponent {
      font-size: 1.5rem;
    }
    .game-venue {
      font-size: 0.8rem;
    }
  }
</style>