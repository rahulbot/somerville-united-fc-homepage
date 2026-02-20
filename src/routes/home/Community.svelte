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
            We are building something special right here in Somerville. If you're a player, coach, parent, business, or supporter … this is your club too!
            <a href="/contact">Drop us a line</a> to get involved as a player, coach, volunteer, business partner or supporter!
            <br /><br />
            Learn more from recent media coverage on 
            <a href="https://hot969boston.com/2026/01/13/somerville-united-fc-launches-as-regions-first-nonprofit-semi-pro-soccer-team/">Hot 96.9</a>,
            <a href="https://www.boston.com/community/sports-news/2026/01/12/somerville-couple-launches-new-affordable-soccer-club/">Boston.com</a>, 
            <a href="https://wbznewsradio.iheart.com/content/somerville-couple-decides-to-found-their-own-non-profit-soccer-team/">WBZ-1030</a>
            and 
            <a href="https://patch.com/massachusetts/somerville/nonprofit-semi-pro-soccer-team-coming-soon-somerville">Patch Somerville</a>.
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
