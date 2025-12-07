<script>
  import ballImage from "@assets/generated_images/soccer_ball_on_grass_with_stadium_lights.png";
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
        </div>
        <div class="stats-grid">
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
            <div class="stat-label">United Goal</div>
          </div>
        </div>
      </div>
      <div class="mission-image-wrapper">
        <div class="bg-decoration bg-primary-decoration"></div>
        <div class="bg-decoration bg-secondary-decoration"></div>
        <img 
          src={ballImage} 
          alt="Soccer ball on field" 
          class="mission-image"
        />
      </div>
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

  .section-eyebrow {
    color: var(--primary);
    font-size: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
    font-family: var(--font-heading);
  }

  .section-heading {
    font-family: var(--font-heading);
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--secondary);
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    .section-heading {
      font-size: 3rem;
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
    text-center;
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

  .mission-image-wrapper {
    position: relative;
  }

  .bg-decoration {
    position: absolute;
    inset: -1rem;
    border-radius: 1rem;
    transform: rotate(3deg);
  }

  .bg-primary-decoration {
    background-color: rgba(var(--primary-rgb), 0.1);
    transform: rotate(3deg);
  }

  .bg-secondary-decoration {
    background-color: rgba(var(--secondary-rgb), 0.1);
    transform: rotate(-3deg);
  }

  .mission-image {
    position: relative;
    border-radius: 0.75rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
  }
</style>
