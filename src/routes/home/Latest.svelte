<script>
  import HomeCountries from '@assets/home-countries.jpg';
</script>

<section id="community" class="community-section">
  <div class="container">
    <div class="community-grid">
      
      <div class="community-content">
      
        <h2 class="section-eyebrow">A Global Team</h2>

        <h3>
          One Club. 33 Flags.
        </h3>
        
        <div class="community-text">
          <p class="text-md">
            Our roots reach around the world. Our home is Somerville. Different cultures, languages and life 
            stories come together in our dressing room. Every player brings something that makes this club stronger. 
            Together, we’re building a community grounded in respect, opportunity and belonging.
          </p>
          <p class="text-md">
            Whether Somerville has always been home or you’re just finding your place here, there’s room for you at Somerville United FC as a player, volunteer, supporter or neighbor.
            Wherever you’re from, come stand with us.
          </p>
          <p class="text-md">
            <a href="/schedule">Check out our schedule</a> to join us at one of our upcoming games.  
          </p>
        </div>

      </div>
      
      <img src="{HomeCountries}" alt="map graphic showing home countries" class="inset"/>
    
    </div>
  </div>
</section>

<style>
  .inset {
    border: 15px solid rgba(8, 30, 53);
  }
  .text-md {
    font-size: var(--font-size-md);
    margin-bottom: 1rem;
  }
  .community-section {
    background-color: rgba(241, 245, 249, 0.3); /* muted/30 */
  }

  .community-grid {
    display: grid;
    gap: 3rem;
  }

  @media (min-width: 768px) {
    .community-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 768px) {
  }

  .logo-large {
    display: block;
    width: 100%;
    margin: 0 auto;
    filter: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.1));
  }

  @media (min-width: 768px) {
    .logo-large {
      width: 20rem;
    }
  }

  p {
    color: var(--muted-color-foreground);
    font-size: var(--font-size-md);;
    line-height: 1.6;
  }
</style>
