<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import Banner from "../components/Banner.svelte";
  import Spinner from "../components/Spinner.svelte";
  import "../index.css";

  const { data } = $props();
</script>

<div class="page-wrapper">
  <Navbar />
  {#await data.metadata}
    <div class="banner-loading"><Spinner size={20} label="Loading banner" /></div>
  {:then metadata}
    <Banner text={metadata.banner} />
  {:catch}
  {/await}
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

  .banner-loading {
    padding: 0.5rem;
  }
</style>
