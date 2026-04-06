<script>
  import logoImage from "@assets/logo.png";
  import { Menu, X, ChevronDown } from "lucide-svelte";
  import { page } from "$app/stores";
  
  let mobileMenuOpen = $state(false);
  let teamsDropdownOpen = $state(false);
  let aboutDropdownOpen = $state(false);
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/schedule", label: "Schedule & Tickets" },
    { href: "/team", label: "Teams" },
    { href: "https://somervilleunitedfc.beehiiv.com", label: "Newsletter" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  
  const teamsSubmenu = [
    { href: "/team/mens", label: "Mens" },
    { href: "/team/womens", label: "Womens" }
  ];
  
  const aboutSubmenu = [
    { href: "/about", label: "Our Story" },
    { href: "/about#sponsors", label: "Sponsors" },
    { href: "/about#management", label: "Management" }
  ];
  
  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  function closeMenu() {
    mobileMenuOpen = false;
  }
  
  function toggleTeamsDropdown() {
    teamsDropdownOpen = !teamsDropdownOpen;
    aboutDropdownOpen = false;
  }
  
  function toggleAboutDropdown() {
    aboutDropdownOpen = !aboutDropdownOpen;
    teamsDropdownOpen = false;
  }
  
  function closeDropdowns() {
    teamsDropdownOpen = false;
    aboutDropdownOpen = false;
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
        {#if link.label === "Teams"}
          <div class="dropdown">
            <button 
              class="nav-link dropdown-toggle"
              onclick={toggleTeamsDropdown}
              class:active={$page.url.pathname.startsWith('/team')}
            >
              {link.label}
              <ChevronDown size={16} class={teamsDropdownOpen ? "chevron rotate" : "chevron"} />
            </button>
            {#if teamsDropdownOpen}
              <div class="dropdown-menu">
                {#each teamsSubmenu as sublink}
                  <a 
                    href={sublink.href} 
                    class="dropdown-item"
                    onclick={closeDropdowns}
                  >
                    {sublink.label}
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {:else if link.label === "About"}
          <div class="dropdown">
            <button 
              class="nav-link dropdown-toggle"
              onclick={toggleAboutDropdown}
              class:active={$page.url.pathname === '/about'}
            >
              {link.label}
              <ChevronDown size={16} class={aboutDropdownOpen ? "chevron rotate" : "chevron"} />
            </button>
            {#if aboutDropdownOpen}
              <div class="dropdown-menu">
                {#each aboutSubmenu as sublink}
                  <a 
                    href={sublink.href} 
                    class="dropdown-item"
                    onclick={closeDropdowns}
                  >
                    {sublink.label}
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {:else}
          <a 
            href={link.href} 
            class="nav-link"
            class:active={$page.url.pathname === link.href}
          >
            {link.label}
          </a>
        {/if}
      {/each}
      <a href="https://account.venmo.com/u/SomervilleUnitedFC">
        <button class="btn-primary">Donate</button>
      </a>
      
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
      <a href="https://account.venmo.com/u/SomervilleUnitedFC">
        <button class="btn-primary">Donate</button>
      </a>
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
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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
    font-size: var(--font-size-md);
    letter-spacing: -0.025em;
    color: var(--primary-color);
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
    font-size: var(--font-size-sm);
    color: var(--dark-color);
    text-decoration: none;
    transition: color 0.2s;
  }

  .nav-link:hover {
    color: var(--primary-color);
  }

  .nav-link.active {
    color: var(--primary-color);
    font-weight: 700;
  }
  
  .dropdown {
    position: relative;
  }
  
  .dropdown-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font-family: inherit;
    font-weight: 500;
    font-size: var(--font-size-sm);
    color: var(--dark-color);
    text-decoration: none;
    transition: color 0.2s;
    border-radius: 0;
    text-transform: none;
    letter-spacing: normal;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  
  .dropdown-toggle:hover {
    color: var(--primary-color);
    background: none;
    transform: none;
    box-shadow: none;
  }
  
  .dropdown-toggle.active {
    color: var(--primary-color);
    font-weight: 700;
  }
  
  .dropdown-toggle :global(.chevron) {
    transition: transform 0.2s;
  }
  
  .dropdown-toggle :global(.chevron.rotate) {
    transform: rotate(180deg);
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 0.5rem;
    background-color: white;
    border-radius: var(--radius);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    min-width: 10rem;
    padding: 0.5rem;
    z-index: 100;
  }
  
  .dropdown-item {
    display: block;
    padding: 0.5rem 1rem;
    font-weight: 500;
    font-size: var(--font-size-sm);
    color: var(--dark-color);
    text-decoration: none;
    border-radius: calc(var(--radius) - 2px);
    transition: background-color 0.2s, color 0.2s;
    white-space: nowrap;
  }
  
  .dropdown-item:hover {
    background-color: rgba(var(--primary-color-rgb), 0.1);
    color: var(--primary-color);
  }

  .hamburger {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    padding: 0.5rem;
    color: var(--dark-color);
    cursor: pointer;
  }

  .hamburger:hover {
    color: var(--primary-color);
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
    color: var(--dark-color);
    text-decoration: none;
    border-radius: var(--radius);
    transition: background-color 0.2s, color 0.2s;
  }

  .mobile-nav-link:hover {
    background-color: rgba(var(--primary-color-rgb), 0.1);
    color: var(--primary-color);
  }

  .mobile-nav-link.active {
    background-color: rgba(var(--primary-color-rgb), 0.1);
    color: var(--primary-color);
    font-weight: 700;
  }
  
  a {
    button {
      font-size: var(--font-size-sm);
      font-weight: 700;
    }
  }
</style>
