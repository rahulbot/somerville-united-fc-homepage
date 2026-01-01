<script>
import Newsletter from "./Newsletter.svelte";

import fifa from "@assets/fifa.gif";
import usaSoccer from "@assets/usa-soccer.gif";
import concacaf from "@assets/CONCACAF.gif";
import apsl from "@assets/APSL.gif";

</script>

<footer>
  <Newsletter />
  <div class="footer">
    <div class="container footer-content">
      <div class="footer-brand">
        <div class="brand-name">SOMERVILLE UNITED FC</div>
        <p class="copyright">© 2025 Somerville United FC. All rights reserved.</p>
      </div>
      <div class="footer-links">
        <!-- <a href="https://www.instagram.com/somervilleunitedfc/" class="footer-link">Instagram</a> -->
        <div class="logo-container">
          <a href="https://apslsoccer.com/APSL/Team/131978"><img src="{apsl}" alt="APSL" class="footer-logo" /></a>
          <a href="https://www.ussoccer.com"><img src="{usaSoccer}" alt="US Soccer" class="footer-logo" /></a>
          <a href="https://www.concacaf.com"><img src="{concacaf}" alt="CONCACAF" class="footer-logo" /></a>
          <a href="https://www.fifa.com/en"><img src="{fifa}" alt="FIFA" class="footer-logo" /></a>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--secondary);
    padding-top: 3rem;
    padding-bottom: 3rem;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.875rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    .footer-content {
      flex-direction: row;
    }
  }

  .footer-brand {
    margin-bottom: 1rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    .footer-brand {
      margin-bottom: 0;
      text-align: left;
    }
  }

  .brand-name {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.5rem;
    color: white;
    margin-bottom: 0.5rem;
  }

  .footer-links {
    display: flex;
    gap: 2rem;
  }

  .footer-link {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 0.2s;
  }

  .footer-link:hover {
    color: white;
  }

  .footer-logo {
    height: 40px;
    margin-right: 20px;
    display: inline-block;
  }
</style>
