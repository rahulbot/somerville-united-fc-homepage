<script>
  import dilboyField from "@assets/dilboy-field.jpg";
  import DecoratedImage from "../../components/DecoratedImage.svelte";
</script>

<svelte:head>
  <title>Tickets - Somerville United FC</title>
  <meta name="description" content="Find out more about getting tickets to watch Somerville United FC play." />
</svelte:head>

<div class="page-content">
  <div class="container">
    <section class="section">
      <h1 class="page-title">Tickets</h1>
      <p class="page-subtitle">
        Ticket options are coming soon. Our home field is Dilboy Stadium, in Somerville, Massachusetts.
      </p>
      <div class="image-wrapper">
        <DecoratedImage src={dilboyField} alt="Dilboy Field" aspectRatio="6 / 3"/>
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
