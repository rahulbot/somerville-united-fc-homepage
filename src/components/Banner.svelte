<script>
const { text } = $props();
</script>

{#if text.length > 0}
<div class="banner">
  <div class="container">
    {@html text}
  </div>
</div>
{/if}

<style>
  .banner {
    background-color: var(--primary-color);
    padding: 20px;
    text-align: center;
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: var(--font-size-xl);
    color: white;
  }

  :global(.banner a) {
    color: var(--primary-color-foreground) !important;
    font-weight: 600;
    text-decoration: underline;
  }
</style>