<svelte:head>
  <title>Team - Somerville United FC</title>
  <meta name="description" content="Meet the Somerville United FC team" />
</svelte:head>

<div class="page-content">
  <div class="container">
    <section class="section">
      <h1 class="page-title">Our Team</h1>
      <p class="page-subtitle">
        Meet the players and staff who make Somerville United FC a success.
      </p>

      <div class="content-placeholder">
        <h2>Team Roster</h2>
        <p>Coming soon - meet our players, coaches, and staff members who bring passion and dedication to the field.</p>
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
    font-weight: 700;
    color: var(--primary);
    text-align: center;
    margin-bottom: 1rem;
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
