<script>
  import InstagramLogo from "./icons/InstagramLogo.svelte";
  import YouTubeLogo from "./icons/YouTubeLogo.svelte";
  import LinkedInLogo from "./icons/LinkedInLogo.svelte";
  import FacebookLogo from "./icons/FacebookLogo.svelte";
  import BlueskyLogo from "./icons/BlueskyLogo.svelte";
  
  let { size=28, color="#000000" } = $props();
</script>

<div class="social-links">
  <a href="https://www.instagram.com/somervilleunitedfc/">
    <InstagramLogo {size} {color} />
  </a>

  <a href="https://www.youtube.com/@SomervilleUnitedFC">
    <YouTubeLogo {size} {color}  />
  </a>
  
  <a href="https://bsky.app/profile/somervilleunitedfc.bsky.social">
    <BlueskyLogo {size} {color}  />
  </a>

  <a href="https://www.linkedin.com/company/somerville-united-fc-inc/">
    <LinkedInLogo {size} {color}  />
  </a>

  <a href="https://www.facebook.com/people/Somerville-United-FC/61585497185970">
    <FacebookLogo {size} {color}  />
  </a>

</div>

<style>
  .social-links {
    margin: 2rem 0 1rem 0;
  }
  a {
    margin-right: 13px;
  }
</style>