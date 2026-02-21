<script>
  import InstagramLogo from "./icons/InstagramLogo.svelte";
  import YouTubeLogo from "./icons/YouTubeLogo.svelte";
  import LinkedInLogo from "./icons/LinkedInLogo.svelte";
  import FacebookLogo from "./icons/FacebookLogo.svelte";
  
  let { size=28, color="#000000" } = $props();
</script>

<div >
  <a href="https://www.instagram.com/somervilleunitedfc/">
    <InstagramLogo {size} {color} />
  </a>

  <a href="https://www.youtube.com/@SomervilleUnitedFC">
    <YouTubeLogo {size} {color}  />
  </a>

  <a href="https://www.linkedin.com/company/somerville-united-fc-inc/">
    <LinkedInLogo {size} {color}  />
  </a>

  <a href="https://www.facebook.com/people/Somerville-United-FC/61585497185970">
    <FacebookLogo {size} {color}  />
  </a>

</div>

<style>
  a {
    margin-right: 13px;
  }
</style>