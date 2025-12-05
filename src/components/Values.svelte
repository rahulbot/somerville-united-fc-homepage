<script>
  import { Heart, Users, Trophy } from "lucide-svelte";
</script>

<section class="py-24 bg-secondary text-white relative overflow-hidden">
  <div class="absolute inset-0 opacity-10" style="background-image: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');"></div>
  <div class="container mx-auto px-4 relative z-10">
    <div class="text-center max-w-2xl mx-auto mb-16">
      <h2 class="text-primary-foreground/80 text-lg font-bold uppercase tracking-widest mb-2">Core Values</h2>
      <h3 class="text-4xl md:text-5xl font-heading font-bold text-white">Built on Strong Foundations</h3>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group rounded-lg">
        <div class="p-8 text-center">
          <div class="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/25">
            <Heart class="w-8 h-8 text-white" />
          </div>
          <h4 class="text-2xl font-heading font-bold mb-3 text-white">Passion</h4>
          <p class="text-white/70 leading-relaxed">
            Fueling every match, every practice, and every interaction with intense dedication and love for the game.
          </p>
        </div>
      </div>

      <div class="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group rounded-lg">
        <div class="p-8 text-center">
          <div class="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/25">
            <Users class="w-8 h-8 text-white" />
          </div>
          <h4 class="text-2xl font-heading font-bold mb-3 text-white">Community</h4>
          <p class="text-white/70 leading-relaxed">
            Building bridges, fostering inclusivity, and ensuring that the team belongs to the people of Somerville.
          </p>
        </div>
      </div>

      <div class="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group rounded-lg">
        <div class="p-8 text-center">
          <div class="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/25">
            <Trophy class="w-8 h-8 text-white" />
          </div>
          <h4 class="text-2xl font-heading font-bold mb-3 text-white">Opportunity</h4>
          <p class="text-white/70 leading-relaxed">
            Creating pathways for local talent to shine and providing mentorship for the next generation of players.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
