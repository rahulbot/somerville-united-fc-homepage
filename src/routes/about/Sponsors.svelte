<script>
  import cafeCitySlicker from "@assets/sponsors/cafe-city-slicker.jpeg";
  import massSoccer from "@assets/sponsors/mass-soccer.jpeg";
  import newEnglandCombineFC from "@assets/sponsors/new-england-combine-fc.jpg";
  import newEnglandPremierSportsplex from "@assets/sponsors/new-england-premier-sportsplex.jpg";
  import somervilleRec from "@assets/sponsors/somerville-rec.jpg";
  import somervilleYouthSoccer from "@assets/sponsors/somerville-youth-soccer.png";
  import theGoalFactory from "@assets/sponsors/the-goal-factory.png";
  import winterHillBrewingCompany from "@assets/sponsors/winter-hill-brewing-company.png";
  import jTouchline from "@assets/sponsors/j-touchline.jpg";
  import mulligans from "@assets/sponsors/mulligans.png";
  import ardsley from "@assets/sponsors/ardsley.png";
  import somervilleLandTrust from "@assets/sponsors/somerville-land-trust.png";
  import legUpSoccer from "@assets/sponsors/leg-up-soccer.jpeg";
  import soccerWithoutBorders from "@assets/sponsors/soccer-without-borders.png";
  import extendedFamilyProductions from "@assets/sponsors/extended-family-productions.jpeg";
  import jMassStudios from "@assets/sponsors/j-mass-studios.jpeg";
  import apsl from "@assets/sponsors/apsl.png";
  import newLeafEspresso from "@assets/sponsors/new-leaf-espresso.png";
  import missingMoney from "@assets/sponsors/missing-money.png";
</script>

<section>
  <div class="container">
    <h3>Our Sponsors & Partners</h3>
    <p class="page-subtitle">
      We are proud to be supported by an amazing group of local businesses and organizations. Their generous support makes our community team possible. Visit each to learn more.
    </p>
  </div>
  <div class="sponsor-logo-grid">
    <a href="https://newenglandpremiersportsplex.com" target="_blank" class="sponsor-logo">
      <img src={newEnglandPremierSportsplex} alt="New England Premier Sportsplex" />
    </a>
    <a href="https://thegoalfactoryllc.com" target="_blank" class="sponsor-logo">
      <img src={theGoalFactory} alt="The Goal Factory" />
    </a>
    <a href="https://https://missingmoney.com" target="_blank" class="sponsor-logo">
      <img src={missingMoney} alt="Missing Money" />
    </a>
    <a href="https://somervillema.myrec.com/" target="_blank" class="sponsor-logo">
      <img src={somervilleRec} alt="Somerville Rec" />
    </a>
    <a href="https://www.instagram.com/jmass_studios/" target="_blank" class="sponsor-logo">
      <img src={jMassStudios} alt="J Mass Studios" />
    </a>
    <a href="https://www.somervillesoccer.org" target="_blank" class="sponsor-logo">
      <img src={somervilleYouthSoccer} alt="Somerville Youth Soccer" />
    </a>
    <a href="https://cityslickercafe.com/store/somerville/" target="_blank" class="sponsor-logo">
      <img src={cafeCitySlicker} alt="Cafe City Slicker" />
    </a>
    <a href="https://www.winterhillbrewing.com/" target="_blank" class="sponsor-logo">
      <img src={winterHillBrewingCompany} alt="Winter Hill Brewing Company" />
    </a>
    <a href="https://apslsoccer.com" target="_blank" class="sponsor-logo">
      <img src={apsl} alt="American Premier Soccer League" />
    </a>
    <a href="https://www.mass-soccer.org" target="_blank" class="sponsor-logo">
      <img src={massSoccer} alt="Mass Soccer" />
    </a>
    <a href="https://www.instagram.com/newenglandcombinefc/" target="_blank" class="sponsor-logo">
      <img src={newEnglandCombineFC} alt="New England Combine FC" />
    </a>
    <a href="https://www.instagram.com/thetouchlinestudio/" target="_blank" class="sponsor-logo">
      <img src={jTouchline} alt="Touchline Studio" />
    </a>
    <a href="https://www.newleafespresso.com/" target="_blank" class="sponsor-logo">
      <img src={newLeafEspresso} alt="New Leaf Espresso" />
    </a>
    <img src={mulligans} alt="Mulligans" />
    <a href="http://ardsley.org" target="_blank" class="sponsor-logo">
      <img src={ardsley} alt="Ardsley" />
    </a>
    <a href="https://www.somervillecommunitylandtrust.org" target="_blank" class="sponsor-logo">
      <img src={somervilleLandTrust} alt="Somerville Community Land Trust" />
    </a>
    <a href="https://leguptraining.com" target="_blank" class="sponsor-logo">
      <img src={legUpSoccer} alt="Leg Up Soccer" />
    </a>
    <a href="https://www.soccerwithoutborders.org" target="_blank" class="sponsor-logo">
      <img src={soccerWithoutBorders} alt="Soccer Without Borders" />
    </a>
    <a href="https://www.instagram.com/extendedfamilyproductions/" target="_blank" class="sponsor-logo">
      <img src={extendedFamilyProductions} alt="Extended Family Productions" />
    </a>
  </div>
</section>

<style>
  h3 {
    text-align: center;
  }

  .sponsor-logo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    justify-items: center;
  }

  .sponsor-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 250px;
    padding: 1rem;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .sponsor-logo:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }

  .sponsor-logo img {
    width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 150px;
  }

  @media (max-width: 768px) {
    .sponsor-logo-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
      padding: 1.5rem;
    }

    .sponsor-logo {
      max-width: 200px;
    }

    .sponsor-logo img {
      max-height: 120px;
    }
  }

  @media (max-width: 480px) {
    .sponsor-logo-grid {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }

    .sponsor-logo {
      max-width: 150px;
    }

    .sponsor-logo img {
      max-height: 100px;
    }
  }
</style>