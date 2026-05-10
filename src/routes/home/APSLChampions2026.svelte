<script>
  import PhotoTrio from "../../components/PhotoTrio.svelte";
  import standings from "@assets/teams/APSL-standings-spring-2026.png";

  const confettiColors = ['#ffd700', '#ff4d6d', '#4ecdc4', '#a78bfa', '#ffffff', '#ff8c42'];
  const confettiPieces = Array.from({ length: 70 }, () => ({
    left: Math.random() * 100,
    delay: -Math.random() * 5,
    duration: 2.5 + Math.random() * 2.5,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    rotation: 360 + Math.random() * 720,
    drift: (Math.random() - 0.5) * 160,
    size: 6 + Math.random() * 6,
    tall: Math.random() > 0.5,
  }));
</script>

<div class="champions-wrapper">

  <div class="confetti-container">

    <div class="confetti-overlay" aria-hidden="true">
      {#each confettiPieces as p}
        <span
          class="confetti-piece"
          style:left="{p.left}%"
          style:width="{p.size}px"
          style:height="{p.tall ? p.size * 1.6 : p.size}px"
          style:background-color={p.color}
          style:animation-delay="{p.delay}s"
          style:animation-duration="{p.duration}s"
          style:--drift="{p.drift}px"
          style:--rotation="{p.rotation}deg"
        ></span>
      {/each}
    </div>

    <div class="container">
      <h2>🎉 APSL Champions 🎉</h2>
      <div class="row champions-row">
        <div class="champions-text">
          <p>We're thrilled to announce that Somerville United FC's Men's Flagship team has been crowned the champions of the American Premier Soccer League (APSL) for the 2026 season! This is a milestone for our club, it in's first season, and is a testament to the hard work, dedication, and passion of our players, coaching staff, and supporters.</p>
          <p>Stay tuned for our playoff games on the schedule, and come out to support us as we aim to win the championship trophy!</p>
        </div>
        <div class="champions-image">
          <a href="https://apslsoccer.com/APSL/Tables/"><img src={standings} alt="APSL Standings 2026" style="width: 100%; border-radius: 8px;" /></a>
        </div>
      </div>
    </div>

  </div>

  <div class="container">
    <PhotoTrio photoCount={9} />
  </div>

</div>

<style>
h2 {
  text-align: center;
  margin-bottom: 1rem;
}
p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
.champions-wrapper {
  margin-bottom: 4rem;
}
.confetti-container {
  position: relative;
  overflow: hidden;
  background-color: var(--secondary-color);
  color: white;
  padding: 2rem 0;
  margin: 0;
}
.confetti-container > .container {
  position: relative;
  z-index: 1;
}
.confetti-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
}
.confetti-piece {
  position: absolute;
  top: -10%;
  display: block;
  border-radius: 1px;
  opacity: 0.9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
  will-change: transform, top;
  animation-name: confetti-fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes confetti-fall {
  0% {
    top: -10%;
    transform: translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.95;
  }
  90% {
    opacity: 0.95;
  }
  100% {
    top: 110%;
    transform: translateX(var(--drift)) rotate(var(--rotation));
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .confetti-overlay {
    display: none;
  }
}
.champions-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  margin: 0 5rem;
}
.champions-text {
  align-self: start;
}
@media (max-width: 768px) {
  .champions-row {
    grid-template-columns: 1fr;
    margin: 0;
  }
}
</style>