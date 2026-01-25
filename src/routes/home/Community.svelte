<script>
  import logoImage from "@assets/logo.png";
</script>

<section id="community" class="section-py community-section">
  <div class="container">
    <div class="community-grid">
      <div class="community-content">
        <h2 class="section-eyebrow">Join The Family</h2>
        <h3 class="section-heading">
          Somerville Is Our Home. <br/>
          You Are Our Team.
        </h3>
        <div class="community-text">
          <p class="text-lg">
            We are building something special right here in Somerville.
            <br/><br/>
            If you’re a player, coach, parent, business, or supporter … this is your club too!
            <br/>
            <strong>Welcome to the beginning.</strong>
          </p>
        </div>
      </div>
      
      <div class="community-image">
        <img src={logoImage} alt="Somerville United FC Logo" class="logo-large" />
      </div>
    </div>
  </div>
</section>

<style>
  .community-section {
    background-color: rgba(241, 245, 249, 0.3); /* muted/30 */
  }

  .community-grid {
    display: grid;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 768px) {
    .community-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .community-text {
    color: var(--muted-foreground);
    font-size: 1.125rem;
    line-height: 1.6;
  }

  .community-image {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .community-image {
      justify-content: flex-end;
    }
  }

  .logo-large {
    width: 16rem;
    height: 16rem;
    object-fit: contain;
    filter: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.1));
  }

  @media (min-width: 768px) {
    .logo-large {
      width: 20rem;
      height: 20rem;
    }
  }
</style>
