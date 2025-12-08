<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import "../index.css";
</script>

<div class="page-wrapper">
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .page-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: var(--font-sans);
  }

  main {
    flex: 1;
  }
</style>
