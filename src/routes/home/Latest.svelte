<script>
  import missingMoneyLogo from "@assets/sponsors/missing-money.png";
  import PhotoTrio from "../../components/PhotoTrio.svelte";
</script>

<section id="community" class="community-section">
  <div class="container">
    <div class="community-grid">
      <div class="community-content">
        <h2 class="section-eyebrow">Latest News</h2>
        <h3>
          Now playing in Somerville
        </h3>
        <div class="community-text">
          <p class="text-md">
            Our men's teams are now playing in the APSL and CASA leagues. <a href="/schedule">Check out our schedule</a> to join us at one of our upcoming games.  
          </p>
        </div>
      </div>
      
      <div class="community-image">
        <a href="https://www.missingmoney.com" target="_blank" rel="noopener noreferrer"><img src={missingMoneyLogo} alt="Missing Money Logo" class="logo-large" /></a> 
        <p class="text-sm">
            <a href="https://www.missingmoney.com" target="_blank" rel="noopener noreferrer">MissingMoney.com</a>
            is our jersey sponsor for the 2026 season. They are a free online database 
            that helps people find and claim unclaimed property, such as forgotten bank accounts, uncashed 
            checks, and other assets. We are proud to partner with 
            <a href="https://www.missingmoney.com" target="_blank" rel="noopener noreferrer">MissingMoney.com</a> 
            to help raise awareness 
            about their valuable service while also supporting our team on the field.
        </p>
      </div>
    </div>

    <PhotoTrio />
    
  </div>
</section>

<style>
  .text-md {
    font-size: var(--font-size-md);
  }
  .text-sm {
    font-size: var(--font-size-sm);
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
