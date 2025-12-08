<script>
  import logoImage from "@assets/logo.png";
</script>

<nav class="navbar">
  <div class="container navbar-content">
    <div class="navbar-brand">
      <a href="/">
        <img src={logoImage} alt="Somerville United FC Logo" class="logo" />
        <span class="brand-name">SOMERVILLE UNITED FC</span>
      </a>
    </div>
    <div class="navbar-links">
      <a href="/" class="nav-link">Home</a>
      <a href="/team" class="nav-link">Team</a>
      <a href="/board" class="nav-link">Board</a>
      <a href="/about" class="nav-link">About</a>
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

  .navbar-brand a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
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
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--foreground);
    text-decoration: none;
    transition: color 0.2s;
  }

  .nav-link:hover {
    color: var(--primary);
  }
</style>
