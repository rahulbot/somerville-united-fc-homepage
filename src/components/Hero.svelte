<script>
  import { fade } from "svelte/transition";
  import heroImage from "@assets/generated_images/soccer_team_of_young_men_huddling.png";
  
  let { scrollTo } = $props();
</script>

<section class="relative h-[90vh] flex items-center justify-center overflow-hidden">
  <div class="absolute inset-0 z-0">
    <img 
      src={heroImage} 
      alt="Somerville United FC Team Huddle" 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/40 mix-blend-multiply"></div>
    <div class="absolute inset-0 bg-black/20"></div>
  </div>

  <div class="container relative z-10 px-4 text-center text-white">
    <div class="max-w-4xl mx-auto space-y-6">
      <div in:fade={{ duration: 800, delay: 200 }} class="inline-block py-1 px-3 rounded-full bg-primary/90 text-xs font-bold tracking-widest uppercase mb-4">
        Est. 2025 • Massachusetts
      </div>
      <h1 in:fade={{ duration: 800, delay: 400 }} class="text-6xl md:text-8xl font-heading font-black uppercase leading-none tracking-tighter">
        More Than <br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Just A Game</span>
      </h1>
      <p in:fade={{ duration: 800, delay: 600 }} class="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
        Redefining soccer in Massachusetts by proving that passion, community, and opportunity can coexist sustainably.
      </p>
      <div in:fade={{ duration: 800, delay: 800 }} class="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <button onclick={() => scrollTo('get-involved')} class="bg-primary hover:bg-primary/90 text-white font-heading font-bold text-lg px-8 h-14 rounded uppercase tracking-wide transition-colors">
          Join the Movement
        </button>
        <button onclick={() => scrollTo('mission')} class="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-heading font-bold text-lg px-8 h-14 rounded uppercase tracking-wide backdrop-blur-sm transition-colors">
          Our Mission
        </button>
      </div>
    </div>
  </div>
</section>
