<script>
  import heroImage from "@assets/people-standing.jpg";

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
      <div class="hero-badge animate-fade-in" style="--delay: 0.2s">
        Est. 2025 • Massachusetts
      </div>
      <h1 class="hero-title animate-fade-in" style="--delay: 0.4s">
        More Than <br/>
        <span class="highlight-text">Just A Game</span>
      </h1>
      <p class="hero-subtitle animate-fade-in" style="--delay: 0.6s">
        Redefining soccer in Massachusetts by proving that passion, community, and opportunity can 
        coexist sustainably. Joining the APSL in Spring of 2026.
      </p>
    </div>
  </div>
</section>

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
    animation-delay: var(--delay, 0s);
  }

  .hero {
    position: relative;
    height: 80vh;
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
    max-width: 56rem;
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
      font-size: 6rem;
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
