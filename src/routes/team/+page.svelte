<script>
  import DecoratedImage from "../../components/DecoratedImage.svelte";
  import peopleImage from "@assets/kneeling.jpg";
</script>

<svelte:head>
  <title>Team - Somerville United FC</title>
  <meta name="description" content="Meet the Somerville United FC team" />
</svelte:head>

<div class="page-content">
  <div class="container">
    <section class="section">
      <h1 class="page-title">Our Team</h1>
      <p class="page-subtitle">
        We are actively recruiting players and staff for the 2026 season. Stay tuned for updates on the full roster!
      </p>
      <div class="image-wrapper">
        <DecoratedImage src={peopleImage} alt="Team members kneeling" aspectRatio="6 / 3"/>
      </div>
    </section>
  </div>
</div>

<style>
  .section {
    padding: 2rem 0;
  }
  .image-wrapper {
    padding-top: 4rem;
  }
</style>
