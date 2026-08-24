<script>
  import { LoaderCircle } from 'lucide-svelte';

  const { size = 24, label = "Loading" } = $props();
</script>

<div class="spinner" role="status" aria-label={label}>
  <LoaderCircle class="spinning" {size} aria-hidden="true" />
</div>

<style>
  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    color: var(--secondary-color);
  }
</style>
