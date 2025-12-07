<section id="get-involved" class="newsletter-section">
  <div class="container">
    <h2 class="newsletter-heading">Let’s build something historic together. ⚽️🔥</h2>
    <p class="newsletter-text">
      Sign up for updates on tryouts, match schedules, and community events. Be part of the movement from day one.
    </p>
    <div class="newsletter-form">
      <input 
        type="email" 
        placeholder="Enter your email address" 
        class="newsletter-input"
      />
      <button class="btn btn-white newsletter-btn">
        Subscribe
      </button>
    </div>
  </div>
</section>

<style>
  .newsletter-section {
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: var(--primary);
    color: white;
    text-align: center;
  }

  .newsletter-heading {
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: 2.25rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  @media (min-width: 768px) {
    .newsletter-heading {
      font-size: 3.75rem; /* text-6xl */
    }
  }

  .newsletter-text {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.9);
    max-width: 42rem;
    margin: 0 auto 2.5rem auto;
  }

  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    max-width: 28rem;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    .newsletter-form {
      flex-direction: row;
    }
  }

  .newsletter-input {
    height: 3rem;
    padding: 0 1rem;
    border-radius: 0.25rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    width: 100%;
    font-family: inherit;
  }

  .newsletter-input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .newsletter-input:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }

  .newsletter-btn {
    height: 3rem;
    padding: 0 2rem;
  }
</style>
