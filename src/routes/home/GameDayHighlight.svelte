<script>
  import { gameHasYouTubeId, gameHasVideoUrl } from '$lib/video.js';
  import YouTubeLogo from '../../components/icons/YouTubeLogo.svelte';
  const { game } = $props();

  let isHome = $derived(game.Home === "Somerville United FC");
  const hasYouTubeId = $derived(gameHasYouTubeId(game));
  const hasVideoUrl = $derived(gameHasVideoUrl(game));
</script>

<div class="wrapper">
  <div class="container">
    <section>
      <p class="marquee">
        {#each Array(10) as _}
          <span class="text-block">GAME DAY</span>
          <span class="text-block">GAME DAY</span>
          <span class="text-block">GAME DAY</span>
        {/each}
      </p>
      <h3>
        {isHome ? 'vs' : 'at'}
        {isHome ? game.Away : game.Home}
        @ {game.Time}
        {#if game.Address}
          <span class="address">{game.Address}</span>
        {/if}
      </h3>
      {#if hasYouTubeId}
        <div class="video-wrapper">
          <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/{game.YouTubeId}"
            title="Somerville United FC Game Livestream"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>
      {/if}
      {#if hasVideoUrl}
        <div class="video-link-wrapper">
          <a href={game.YouTubeId} target="_blank" rel="noopener noreferrer" name="livestream">
            <YouTubeLogo size=100 color="#ffffff"  />
          </a>
        </div>
      {/if}

      <p class="marquee">
        {#each Array(10) as _}
          <span class="text-block">GAME DAY</span>
          <span class="text-block">GAME DAY</span>
          <span class="text-block">GAME DAY</span>
        {/each}
      </p>
    </section>
  </div>
</div>

<style>
.video-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

h3 {
  color: white;
  margin-top: 1rem;
  text-align: center;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
}

.address {
  display: block;
  font-size: 1rem;
  opacity: 0.75;
}

.wrapper {
  background-color: var(--secondary-color);
}

.container {
  overflow: hidden;
}

.marquee {
  display: inline-flex;
  white-space: nowrap;
  margin: 0;
  opacity: 0.5;
  animation: marquee 15s linear infinite;
}

.text-block {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  padding: 0 0.5rem;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-33.3333%);
  }
}

.video-link-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
  transition: transform 0.2s ease;
}

.video-link-wrapper:hover {
  transform: scale(1.2);
}
</style>