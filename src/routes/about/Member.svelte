<script>
  let { name, title, description, image = null } = $props();
</script>

<div class="member-card">
  <div class="member-image-wrapper">
    {#if image}
      <img src={image} alt={name} class="member-image" />
    {:else}
      <div class="member-image-placeholder">
        <span class="placeholder-icon">👤</span>
      </div>
    {/if}
  </div>
  <div class="member-info">
    <h3 class="member-name">{name}</h3>
    <p class="member-title">{title}</p>
    <div class="member-description">
      <p>{description}</p>
    </div>
  </div>
</div>

<style>
  .member-card {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 1rem;
    background: white;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease;
  }

  .member-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .member-image-wrapper {
    flex: 0 0 40%;
    max-width: 260px;
    overflow: hidden;
    background-color: var(--muted);
  }

  .member-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .member-image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(var(--secondary-rgb), 0.1), rgba(var(--primary-rgb), 0.1));
  }

  .placeholder-icon {
    font-size: 4rem;
    opacity: 0.5;
  }

  .member-info {
    flex: 1 1 auto;
    padding: 1.5rem;
  }

  .member-name {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--secondary);
    margin-bottom: 0.25rem;
  }

  .member-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
  }

  .member-description {
    font-size: 0.6rem;
    color: var(--muted-foreground);
    line-height: 1.6;
  }

  .member-description :global(p) {
    margin-bottom: 0.75rem;
  }

  .member-description :global(p:last-child) {
    margin-bottom: 0;
  }

  /* Responsive: stack on small screens */
  @media (max-width: 640px) {
    .member-card {
      flex-direction: column;
      gap: 0;
    }
    .member-image-wrapper {
      flex: none;
      max-width: none;
      aspect-ratio: 3/4;
    }
    .member-image,
    .member-image-placeholder {
      height: 100%;
    }
  }
</style>
