<script>
  import fundraiserImage from "@assets/202611-womens-fundraiser.jpg";
</script>

<section class="fundraiser">
  <div class="container">
    <div class="fundraiser-grid">
      <div class="fundraiser-content">
        <div class="fundraiser-badge animate-fade-in" style="--delay: 0.2s">
          Sat, Nov 14 • 7pm
        </div>
        <h1 class="fundraiser-title animate-fade-in" style="--delay: 0.4s">
          Come support our women's team!
        </h1>
        <p class="fundraiser-subtitle animate-fade-in" style="--delay: 0.6s">
          Nov 14th @ <a href="https://winterhillbrewing.com">Winter Hill Brewing Company</a>
        </p>
      </div>
      <div class="fundraiser-image animate-fade-in" style="--delay: 0.4s">
        <img
          src={fundraiserImage}
          alt="Get women's soccer over the line: a fundraiser for Somerville United Women, Saturday November 14 at 7pm at Winter Hill Brewing Company"
        />
      </div>
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

  .fundraiser {
    background: linear-gradient(to right, var(--secondary-color), rgba(var(--secondary-color-rgb), 0.8));
    color: #fff;
    padding: 3rem 0;
  }

  .fundraiser-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: center;
  }

  .fundraiser-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .fundraiser-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    background-color: rgba(var(--primary-color-rgb), 0.9);
    font-size: var(--font-size-sm);
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .fundraiser-title {
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: var(--font-size-xxl);
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: -0.03em;
    color: #fff;
    margin-bottom: 0;
  }

  .fundraiser-subtitle {
    font-size: var(--font-size-md);
    line-height: 1.4;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    max-width: 36rem;
  }

  .fundraiser-subtitle a {
    color: #fff;
  }

  .fundraiser-image img {
    width: 100%;
    max-width: 28rem;
    margin: 0 auto;
    border-radius: var(--radius);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  }

  @media (min-width: 768px) {
    .fundraiser {
      padding: 4rem 0;
    }

    .fundraiser-grid {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }

    .fundraiser-title {
      font-size: var(--font-size-title);
    }
  }
</style>
