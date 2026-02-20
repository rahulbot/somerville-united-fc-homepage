<script>
  import DecoratedImage from "../../components/DecoratedImage.svelte";
  import ballImage from "@assets/ball-and-cone.jpg";
</script>

<section id="mission" class="section-py mission-section">
  <div class="container">
    <div class="mission-grid">
      <div class="mission-content">
        <h2 class="section-eyebrow">Our Mission</h2>
        <h3 class="section-heading">
          Uplifting Players. <br/>
          Mentoring Youth. <br/>
          Celebrating Somerville.
        </h3>
        <div class="mission-text">
          <p>
            Somerville deserves a club that belongs to everyone. A place where talent is nurtured, players are supported, and community comes first.
          </p>
          <p>
            Somerville United FC is here to:
          </p>
          <ul class="mission-list">
            <li>
              <span class="text-primary">✨</span> Provide pathways for local players
            </li>
            <li>
              <span class="text-primary">✨</span> Offer free/low-cost access to the game
            </li>
            <li>
              <span class="text-primary">✨</span> Create mentorship programs
            </li>
            <li>
              <span class="text-primary">✨</span> Reinvest profits back into Somerville
            </li>
            <li>
              <span class="text-primary">✨</span> Build a culture of unity, family, and ambition
            </li>
          </ul>
          <p>Our men's team is joining the APSL in Spring of 2026, and our women's team will follow later in the year.
            <a href="https://somervilleunitedfc.beehiiv.com">Subscribe to our newsletter</a> below to stay updated!</p>
        </div>
<!--    <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">100%</div>
            <div class="stat-label">Community Owned</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">50+</div>
            <div class="stat-label">Local Players</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">1</div>
            <div class="stat-label">Goal</div>
          </div>
        </div> -->
      </div>
      <DecoratedImage src={ballImage} alt="Soccer ball on field"  />
    </div>
  </div>
</section>

<style>
  .mission-section {
    background-color: var(--background);
  }

  .mission-grid {
    display: grid;
    gap: 4rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .mission-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .mission-text {
    font-size: 1.125rem;
    color: var(--muted-foreground);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .mission-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .mission-list li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .stats-grid {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .stat-card {
    text-align: center;
    padding: 1rem;
    background-color: rgba(var(--secondary-rgb), 0.05);
    border-radius: var(--radius);
  }

  .stat-value {
    font-family: var(--font-heading);
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--secondary);
  }

  .stat-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--muted-foreground);
    margin-top: 0.25rem;
  }

</style>
