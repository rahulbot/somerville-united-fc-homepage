<svelte:head>
  <title>About - Somerville United FC</title>
  <meta name="description" content="Learn more about Somerville United FC" />
</svelte:head>

<div class="page-content">
  <div class="container">
    <section class="section">
      <h1 class="page-title">About Us</h1>
      <p class="page-subtitle">
        Learn more about Somerville United FC's history, mission, and community impact.
      </p>

      <div class="content-placeholder">
        <h2>Our Story</h2>
        <p>Coming soon - discover how Somerville United FC was founded and our journey to building a stronger community through soccer.</p>
        
        <h2 style="margin-top: 2rem;">Get Involved</h2>
        <p>Whether you're interested in playing, coaching, volunteering, or supporting our mission, there are many ways to get involved with Somerville United FC.</p>
      </div>
    </section>
  </div>
</div>

<style>
  .page-content {
    padding: 4rem 0;
    background: linear-gradient(to bottom, #ffffff, #f8fafc);
  }

  .section {
    padding: 2rem 0;
  }

  .page-title {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 900;
    color: var(--primary);
    text-align: center;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: -0.025em;
  }

  @media (min-width: 768px) {
    .page-title {
      font-size: 4rem;
    }
  }

  .page-subtitle {
    font-size: 1.25rem;
    color: var(--muted-foreground);
    text-align: center;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .content-placeholder {
    background: white;
    padding: 3rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .content-placeholder h2 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  .content-placeholder p {
    color: var(--muted-foreground);
    line-height: 1.6;
  }
</style>
