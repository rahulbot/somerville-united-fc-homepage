<script>
  const { game } = $props();
  let isHome = $derived(game.Home === "Somerville United FC");
  const hasLivestream = $derived(game.Livestream && game.Livestream.startsWith('http'));
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
      {#if hasLivestream}
        <div class="video-wrapper">
          <iframe width="560" height="315" 
            src={game.Livestream}
            title="Somerville United FC Game Livestream"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>
      {/if}
<a class="twitter-timeline" href="https://twitter.com/svilleunitedfc?ref_src=twsrc%5Etfw">Tweets by svilleunitedfc</a>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

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
</style>