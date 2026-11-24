<script>
  import appealImage from "@assets/2026-giving-day-appeal.jpeg";

  const DONATE_URL = "https://www.zeffy.com/en-US/donation-form/donate-to-barrier-free-soccer";
</script>

<section class="fundraiser">
  <div class="container">
    <div class="fundraiser-grid">
      <div class="fundraiser-content">
        <div class="fundraiser-badge animate-fade-in" style="--delay: 0.2s">
          Give now through Dec 1
        </div>
        <h1 class="fundraiser-title animate-fade-in" style="--delay: 0.4s">
          Giving Tuesday
        </h1>
        <p class="fundraiser-subtitle animate-fade-in" style="--delay: 0.6s">
          <b>Help launch the next chapter of SUFC.</b>
          <br />
          Your donation helps fund field access, equipment, match operations, and free community clinics as we grow opportunities for men and women.
        </p>
        <a href={DONATE_URL} class="btn btn-primary donate-btn animate-fade-in" style="--delay: 0.8s">
          Donate Now
        </a>
      </div>
      <div class="fundraiser-image animate-fade-in" style="--delay: 0.4s">
        <a href={DONATE_URL}>
          <img
            src={appealImage}
            alt="Somerville United FC fans in the stands: Giving Tuesday, a city united in giving. Give now through December 1."
          />
        </a>
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

  .donate-btn {
    font-size: var(--font-size-lg);
    padding: 1rem 2.5rem;
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
