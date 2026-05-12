<script>
import MerchTable from '@assets/merch-table.jpg';
import DecoratedImage from "../../components/DecoratedImage.svelte";
</script>

<svelte:head>
  <title>Shop - Somerville United FC</title>
  <meta name="description" content="Get official Somerville United FC merchandise" />
</svelte:head>

<div class="container">
  <section>
    <h1 class="page-title">Shop</h1>
    <p class="page-subtitle">
      Order your official Somerville United FC merchandise today. We have a variety of items available, 
      including t-shirts, hoodies, and more. Show your support for the team and look great doing it!
    </p>

    <button class="btn-primary">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSegQycdkkNpWBKMrtJ7hi2KzE2qpq9afyYUxK513t411L8iug/viewform">
        Order Now
      </a>
    </button>

    <a href="https://docs.google.com/forms/d/e/1FAIpQLSegQycdkkNpWBKMrtJ7hi2KzE2qpq9afyYUxK513t411L8iug/viewform">
      <DecoratedImage src={MerchTable} alt="Various merchandise on a table" aspectRatio="12 / 4"/>
    </a>

  </section>
</div>

<style>
  button {
    margin-bottom: 4rem;
    font-size: var(--font-size-lg);
  }


  section {
    text-align: center;
    margin-bottom: 3rem;
  }
</style>
