<script>
  import Hero from "../components/Hero.svelte";
  import Mission from "../components/Mission.svelte";
  import Values from "../components/Values.svelte";
  import Community from "../components/Community.svelte";
  import Newsletter from "../components/Newsletter.svelte";

  // Scroll handler for anchors
  function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<svelte:head>
  <title>Somerville United FC - Home</title>
  <meta name="description" content="Somerville United FC - Building community through soccer" />
</svelte:head>

<Hero {scrollTo} />
<Mission />
<Values />
<Community />
