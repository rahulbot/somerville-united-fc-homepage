<script>
  import logoImage from "@assets/logo.png";
  let { scrollTo } = $props();
</script>

<nav class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div class="container mx-auto px-4 h-16 flex items-center justify-between">
    <div class="flex items-center space-x-2">
      <img src={logoImage} alt="Somerville United FC Logo" class="w-8 h-8 object-contain" />
      <span class="font-heading font-bold text-xl tracking-tight text-primary">SOMERVILLE UNITED FC</span>
    </div>
    <div class="hidden md:flex items-center space-x-6 font-medium text-sm">
      <button onclick={() => scrollTo('mission')} class="hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Mission</button>
      <button onclick={() => scrollTo('community')} class="hover:text-primary transition-colors bg-transparent border-none cursor-pointer">Community</button>
      <button onclick={() => scrollTo('get-involved')} class="bg-primary hover:bg-primary/90 text-white font-heading font-bold text-sm px-4 py-2 rounded uppercase tracking-wider transition-colors">Get Involved</button>
    </div>
  </div>
</nav>
