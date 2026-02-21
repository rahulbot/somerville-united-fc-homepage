<script>
  import { Heart, Users, Trophy } from "lucide-svelte";
</script>

<section class="values-section">
  <div class="pattern-overlay"></div>
  <div class="container relative-z">
    <div class="values-header">
      <h2 class="values-eyebrow">Core Values</h2>
      <h3 class="values-title">Built on Strong Foundations</h3>
    </div>

    <div class="values-grid">
      <div class="value-card group">
        <div class="card-content">
          <div class="icon-wrapper group-hover">
            <Heart class="icon" />
          </div>
          <h4 class="card-title">Passion</h4>
          <p class="card-text">
            Fueling every match, every practice, and every interaction with intense dedication and love for the game.
          </p>
        </div>
      </div>

      <div class="value-card group">
        <div class="card-content">
          <div class="icon-wrapper group-hover">
            <Users class="icon" />
          </div>
          <h4 class="card-title">Community</h4>
          <p class="card-text">
            Building bridges, fostering inclusivity, and ensuring that the team belongs to the people of Somerville.
          </p>
        </div>
      </div>

      <div class="value-card group">
        <div class="card-content">
          <div class="icon-wrapper group-hover">
            <Trophy class="icon" />
          </div>
          <h4 class="card-title">Opportunity</h4>
          <p class="card-text">
            Creating pathways for local talent to shine and providing mentorship for the next generation of players.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .values-section {
    background-color: var(--secondary-color);
    color: white;
    position: relative;
    overflow: hidden;
  }

  .pattern-overlay {
    position: absolute;
    inset: 0;
    opacity: 0.1;
    background-image: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');
  }

  .relative-z {
    position: relative;
    z-index: 10;
  }

  .values-header {
    text-align: center;
    max-width: 42rem;
    margin: 0 auto 4rem auto;
  }

  .values-eyebrow {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
    font-family: var(--font-heading);
  }

  .values-title {
    font-family: var(--font-heading);
    font-size: 2.25rem;
    font-weight: 700;
    color: white;
  }

  @media (min-width: 768px) {
    .values-title {
      font-size: 3rem;
    }
  }

  .values-grid {
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .values-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .value-card {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }

  .value-card:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .card-content {
    padding: 2rem;
    text-align: center;
  }

  .icon-wrapper {
    width: 4rem;
    height: 4rem;
    margin: 0 auto 1.5rem auto;
    background-color: var(--primary-color);
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s;
    box-shadow: 0 10px 15px -3px rgba(var(--primary-color-rgb), 0.25);
  }

  .value-card:hover .icon-wrapper {
    transform: scale(1.1);
  }

  /* Lucide icons are usually svgs */
  :global(.icon) {
    width: 2rem;
    height: 2rem;
    color: white;
  }

  .card-title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: white;
  }

  .card-text {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.625;
  }
</style>
