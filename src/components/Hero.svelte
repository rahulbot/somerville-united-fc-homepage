<script>
  import { fade } from "svelte/transition";
  import heroImage from "@assets/generated_images/soccer_team_of_young_men_huddling.png";
  
  let { scrollTo } = $props();
</script>

<section class="hero">
  <div class="hero-bg">
    <img 
      src={heroImage} 
      alt="Somerville United FC Team Huddle" 
      class="hero-img"
    />
    <div class="overlay-gradient"></div>
    <div class="overlay-dark"></div>
  </div>

  <div class="container hero-content-wrapper">
    <div class="hero-content">
      <div in:fade={{ duration: 800, delay: 200 }} class="hero-badge">
        Est. 2025 • Massachusetts
      </div>
      <h1 in:fade={{ duration: 800, delay: 400 }} class="hero-title">
        More Than <br/>
        <span class="highlight-text">Just A Game</span>
      </h1>
      <p in:fade={{ duration: 800, delay: 600 }} class="hero-subtitle">
        Redefining soccer in Massachusetts by proving that passion, community, and opportunity can coexist sustainably.
      </p>
      <div in:fade={{ duration: 800, delay: 800 }} class="hero-actions">
        <button onclick={() => scrollTo('get-involved')} class="btn btn-primary hero-btn">
          Join the Movement
        </button>
        <button onclick={() => scrollTo('mission')} class="btn btn-outline-white hero-btn">
          Our Mission
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(var(--secondary-rgb), 0.9), rgba(var(--secondary-rgb), 0.4));
    mix-blend-mode: multiply;
  }

  .overlay-dark {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .hero-content-wrapper {
    position: relative;
    z-index: 10;
    text-align: center;
    color: #fff;
  }

  .hero-content {
    max-width: 56rem; /* max-w-4xl */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .hero-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    background-color: rgba(var(--primary-rgb), 0.9);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .hero-title {
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: 3.75rem;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: -0.05em;
  }

  @media (min-width: 768px) {
    .hero-title {
      font-size: 6rem; /* text-8xl */
    }
  }

  .highlight-text {
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0.8));
  }

  .hero-subtitle {
    font-size: 1.25rem;
    line-height: 1.625;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    max-width: 42rem;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .hero-subtitle {
      font-size: 1.5rem;
    }
  }

  .hero-actions {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  }

  @media (min-width: 640px) {
    .hero-actions {
      flex-direction: row;
    }
  }

  .hero-btn {
    padding-left: 2rem;
    padding-right: 2rem;
    height: 3.5rem;
    font-size: 1.125rem;
  }
</style>
