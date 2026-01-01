<script>
let { src, alt } = $props();
</script>

<div class="mission-image-wrapper">
    <div class="bg-decoration bg-primary-decoration"></div>
    <div class="bg-decoration bg-secondary-decoration"></div>
    <img 
        src={src}
        alt={alt}
        class="decorated-image"
    />
</div>

<style>
  .mission-image-wrapper {
    position: relative;
  }

  .bg-decoration {
    position: absolute;
    inset: -1rem;
    border-radius: 1rem;
    transform: rotate(3deg);
  }

  .bg-primary-decoration {
    background-color: rgba(var(--primary-rgb), 0.1);
    transform: rotate(3deg);
  }

  .bg-secondary-decoration {
    background-color: rgba(var(--secondary-rgb), 0.1);
    transform: rotate(-3deg);
  }

  .decorated-image {
    position: relative;
    border-radius: 0.75rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
  }

</style>