<script>
  import Navbar from "../components/Navbar.svelte";
  import Hero from "../components/Hero.svelte";
  import Mission from "../components/Mission.svelte";
  import Values from "../components/Values.svelte";
  import Community from "../components/Community.svelte";
  import Newsletter from "../components/Newsletter.svelte";
  import Footer from "../components/Footer.svelte";

  // Scroll handler for anchors
  function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<div class="page-wrapper">
  <Navbar {scrollTo} />
  <Hero {scrollTo} />
  <Mission />
  <Values />
  <Community />
  <Newsletter />
  <Footer />
</div>

<style>
  .page-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: var(--font-sans);
  }
</style>
