<script>
  let { color = "#000000", size = 32, ...props } = $props();
  // sourced from https://www.svgrepo.com/svg/424915/facebook-logo-meta
</script>

<div class="icon-container" id="facebook-logo">
  <svg width={size} height={size} viewBox="0 0 32 32" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2,16.1v9.7c0,0.1,0.1,0.3,0.3,0.3h3.9c0.2,0,0.3-0.1,0.3-0.3v-9.8h2.8c0.1,0,0.3-0.1,0.3-0.2l0.3-3  c0-0.2-0.1-0.3-0.3-0.3h-3.1v-2.1c0-0.5,0.4-0.9,1-0.9h2.2c0.2,0,0.3-0.1,0.3-0.3V6.3C21,6.1,20.9,6,20.7,6h-3.6  c-2.1,0-3.9,1.6-3.9,3.6v2.9h-1.9c-0.2,0-0.3,0.1-0.3,0.3v3c0,0.1,0.1,0.3,0.3,0.3h1.9V16.1z" fill={color}/>
  </svg>
</div>

<style>
  .icon-container {
    display: inline-block;
  }
</style>
