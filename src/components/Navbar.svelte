<script>
  import logoImage from "@assets/logo.png";
  import { Menu, X } from "lucide-svelte";
  
  let mobileMenuOpen = $state(false);
  
  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  function closeMenu() {
    mobileMenuOpen = false;
  }
</script>

<nav class="navbar">
  <div class="container navbar-content">
    <div class="navbar-brand">
      <a href="/">
        <img src={logoImage} alt="Somerville United FC Logo" class="logo" />
        <span class="brand-name">SOMERVILLE UNITED FC</span>
      </a>
    </div>
    
    <div class="navbar-links desktop-links">
      <a href="/" class="nav-link">Home</a>
      <a href="/team" class="nav-link">Team</a>
      <a href="/board" class="nav-link">Board</a>
      <a href="/about" class="nav-link">About</a>
    </div>
    
    <button class="hamburger" onclick={toggleMenu} aria-label="Toggle menu">
      {#if mobileMenuOpen}
        <X size={24} />
      {:else}
        <Menu size={24} />
      {/if}
    </button>
  </div>
  
  {#if mobileMenuOpen}
    <div class="mobile-menu">
      <a href="/" class="mobile-nav-link" onclick={closeMenu}>Home</a>
      <a href="/team" class="mobile-nav-link" onclick={closeMenu}>Team</a>
      <a href="/board" class="mobile-nav-link" onclick={closeMenu}>Board</a>
      <a href="/about" class="mobile-nav-link" onclick={closeMenu}>About</a>
    </div>
  {/if}
</nav>

<style>
  .navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    width: 100%;
    border-bottom: 1px solid rgba(226, 232, 240, 0.4);
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
  }

  .navbar-content {
    height: 4rem;
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

  .desktop-links {
    display: none;
    align-items: center;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .desktop-links {
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

  .hamburger {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    padding: 0.5rem;
    color: var(--foreground);
    cursor: pointer;
  }

  .hamburger:hover {
    color: var(--primary);
  }

  @media (min-width: 768px) {
    .hamburger {
      display: none;
    }
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.98);
    border-bottom: 1px solid rgba(226, 232, 240, 0.4);
    padding: 1rem;
  }

  @media (min-width: 768px) {
    .mobile-menu {
      display: none;
    }
  }

  .mobile-nav-link {
    display: block;
    padding: 0.75rem 1rem;
    font-weight: 500;
    font-size: 1rem;
    color: var(--foreground);
    text-decoration: none;
    border-radius: var(--radius);
    transition: background-color 0.2s, color 0.2s;
  }

  .mobile-nav-link:hover {
    background-color: rgba(var(--primary-rgb), 0.1);
    color: var(--primary);
  }
</style>
