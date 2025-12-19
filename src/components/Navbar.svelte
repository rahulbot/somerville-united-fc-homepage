<script>
  import logoImage from "@assets/logo.png";
  import { Menu, X } from "lucide-svelte";
  import { page } from "$app/stores";
  
  let mobileMenuOpen = $state(false);
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Team" },
    { href: "/about", label: "About Us" },
  ];
  
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
      {#each navLinks as link}
        <a 
          href={link.href} 
          class="nav-link"
          class:active={$page.url.pathname === link.href}
        >
          {link.label}
        </a>
      {/each}
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
      {#each navLinks as link}
        <a 
          href={link.href} 
          class="mobile-nav-link"
          class:active={$page.url.pathname === link.href}
          onclick={closeMenu}
        >
          {link.label}
        </a>
      {/each}
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

  .nav-link.active {
    color: var(--primary);
    font-weight: 700;
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

  .mobile-nav-link.active {
    background-color: rgba(var(--primary-rgb), 0.1);
    color: var(--primary);
    font-weight: 700;
  }
</style>
