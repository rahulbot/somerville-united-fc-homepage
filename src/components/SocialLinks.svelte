<script>
  import InstagramLogo from "./icons/InstagramLogo.svelte";
  import YouTubeLogo from "./icons/YouTubeLogo.svelte";

  let { size=28, color="#000000" } = $props();
</script>

<div class="social-links">
  <a class="social-link" href="https://www.instagram.com/somervilleunitedfc/">
    <InstagramLogo {size} {color} />
  </a>

  <a class="social-link" href="https://www.youtube.com/@SomervilleUnitedFC">
    <YouTubeLogo {size} {color}  />
  </a>
</div>