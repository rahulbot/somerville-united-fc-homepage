<script>
  import ballImage from "@assets/generated_images/soccer_ball_on_grass_with_stadium_lights.png";
</script>

<section id="mission" class="py-24 bg-background">
  <div class="container mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 class="text-primary text-lg font-bold uppercase tracking-widest mb-2">Our Mission</h2>
        <h3 class="text-4xl md:text-5xl font-heading font-bold mb-6 text-secondary leading-tight">
          Uplifting Players. <br/>
          Mentoring Youth. <br/>
          Celebrating Somerville.
        </h3>
        <div class="space-y-6 text-lg text-muted-foreground">
          <p>
            Somerville deserves a club that belongs to everyone. A place where talent is nurtured, players are supported, and community comes first.
          </p>
          <p>
            Somerville United FC is here to:
          </p>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <span class="text-primary">✨</span> Provide pathways for local players
            </li>
            <li class="flex items-center gap-2">
              <span class="text-primary">✨</span> Offer free/low-cost access to the game
            </li>
            <li class="flex items-center gap-2">
              <span class="text-primary">✨</span> Create mentorship programs
            </li>
            <li class="flex items-center gap-2">
              <span class="text-primary">✨</span> Reinvest profits back into Somerville
            </li>
            <li class="flex items-center gap-2">
              <span class="text-primary">✨</span> Build a culture of unity, family, and ambition
            </li>
          </ul>
        </div>
        <div class="mt-8 grid grid-cols-3 gap-4">
          <div class="text-center p-4 bg-secondary/5 rounded-lg">
            <div class="font-heading text-3xl font-bold text-secondary">100%</div>
            <div class="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">Community Owned</div>
          </div>
          <div class="text-center p-4 bg-secondary/5 rounded-lg">
            <div class="font-heading text-3xl font-bold text-secondary">50+</div>
            <div class="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">Local Players</div>
          </div>
          <div class="text-center p-4 bg-secondary/5 rounded-lg">
            <div class="font-heading text-3xl font-bold text-secondary">1</div>
            <div class="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">United Goal</div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-3"></div>
        <div class="absolute -inset-4 bg-secondary/10 rounded-2xl transform -rotate-3"></div>
        <img 
          src={ballImage} 
          alt="Soccer ball on field" 
          class="relative rounded-xl shadow-2xl w-full object-cover aspect-[4/3]"
        />
      </div>
    </div>
  </div>
</section>
