<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import Banner from "../components/Banner.svelte";
  import "../index.css";
</script>

<div class="page-wrapper">
  <Navbar />
  <Banner />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .page-wrapper {
    display: flex;
    flex-direction: column;
    font-family: var(--font-sans);
  }

  main {
    min-height: 100vh;
    background: linear-gradient(to bottom, #ffffff, #f8fafc);
    flex: 1;
  }
</style>
