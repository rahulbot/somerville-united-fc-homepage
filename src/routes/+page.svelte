<script>
  import Hero from "./home/Hero.svelte";
  import Mission from "./home/Mission.svelte";
  import Values from "./home/Values.svelte";
  import Community from "./home/Community.svelte";

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
