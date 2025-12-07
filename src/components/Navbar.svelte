<script>
  import logoImage from "@assets/logo.png";
  let { scrollTo } = $props();
</script>

<nav class="navbar">
  <div class="container navbar-content">
    <div class="navbar-brand">
      <img src={logoImage} alt="Somerville United FC Logo" class="logo" />
      <span class="brand-name">SOMERVILLE UNITED FC</span>
    </div>
    <div class="navbar-links">
      <button onclick={() => scrollTo('mission')} class="nav-link">Mission</button>
      <button onclick={() => scrollTo('community')} class="nav-link">Community</button>
      <button onclick={() => scrollTo('get-involved')} class="btn btn-primary btn-sm">Get Involved</button>
    </div>
  </div>
</nav>

<style>
  .navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid rgba(226, 232, 240, 0.4); /* border-border/40 */
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
  }

  .navbar-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .logo {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
  }

  .brand-name {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: -0.025em;
    color: var(--primary);
  }

  .navbar-links {
    display: none;
    align-items: center;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .navbar-links {
      display: flex;
    }
  }

  .nav-link {
    background: transparent;
    border: none;
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--foreground);
    transition: color 0.2s;
  }

  .nav-link:hover {
    color: var(--primary);
  }

  .btn-sm {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
</style>
