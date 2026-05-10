<script>
const { photoCount = 3 } = $props();

const photos = [
  '/images/action/fan-with-shirt.jpeg',
  '/images/action/motion.jpeg',
  '/images/action/moving.jpeg',
  '/images/action/dribble-prep.jpeg',
  '/images/action/on-the-run.jpeg',
  '/images/action/tower.jpeg',
  '/images/action/keeper-prep.jpg',
  '/images/action/kick-spin-bg.jpg',
  '/images/action/stickers.jpeg',
  '/images/action/rainy-practice.png',
  '/images/action/team.jpg',
  '/images/action/coaches.jpg',
  '/images/action/players.jpg',
  '/images/action/swag-table.jpg',
  '/images/action/goaline.jpeg',
  '/images/action/11.jpeg',
  '/images/action/in-air.jpeg',
  '/images/action/kick-swing.jpeg',
  '/images/action/6Q1A9216.JPG',
  '/images/action/6Q1A9221.JPG',
  '/images/action/6Q1A9459.JPG',
  '/images/action/6Q1A9472.JPG',
  '/images/action/team1.jpg',
  '/images/action/team2.jpg',
  '/images/action/dilboy-drone1.jpg',
  '/images/action/dilboy-drone2.jpg',
  '/images/action/DSC_0957.jpg',
  '/images/action/DSC_0342.jpg',
  '/images/action/DSC_0173.jpg',
  '/images/action/DSC_0120.jpg'
];

const displayed = $derived.by(() => {
  const shuffled = [...photos].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, photoCount);
});
</script>

<div class="photo-trio">
  {#each displayed as src, i}
    <div class="photo-wrapper photo-{i}">
      <div class="photo-accent"></div>
      <img {src} alt="" />
    </div>
  {/each}
</div>

<style>
.photo-trio {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  gap: 3.5rem;
  padding: 1.5rem 0;
  margin-top: 50px;
}

.photo-wrapper {
  position: relative;
  width: 85%;
  aspect-ratio: 1 / 1;
  transition: transform 0.25s ease;
}

.photo-wrapper:hover {
  transform: scale(1.04);
  z-index: 2;
}

/* middle column sits a bit higher */
.photo-wrapper:nth-child(3n + 2) {
  transform: translateY(-1.25rem);
}
.photo-wrapper:nth-child(3n + 2):hover {
  transform: translateY(-1.25rem) scale(1.04);
}

.photo-accent {
  position: absolute;
  inset: -0.6rem;
  border-radius: 1.1rem;
}

.photo-wrapper:nth-child(3n + 1) {
  transform: rotate(-2deg);
}
.photo-wrapper:nth-child(3n + 1) .photo-accent {
  background-color: rgba(var(--primary-color-rgb), 0.18);
  transform: rotate(-4deg);
}

.photo-wrapper:nth-child(3n + 2) .photo-accent {
  background-color: rgba(var(--secondary-color-rgb), 0.2);
  transform: rotate(3deg);
}

.photo-wrapper:nth-child(3n) {
  transform: rotate(2deg);
}
.photo-wrapper:nth-child(3n) .photo-accent {
  background-color: rgba(var(--primary-color-rgb), 0.18);
  transform: rotate(4deg);
}

.photo-wrapper img {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 0.75rem;
  box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.3);
}

@media (max-width: 600px) {
  .photo-trio {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .photo-wrapper,
  .photo-wrapper:nth-child(3n + 1),
  .photo-wrapper:nth-child(3n + 2),
  .photo-wrapper:nth-child(3n) {
    width: 75%;
    transform: none;
  }
  .photo-wrapper:hover,
  .photo-wrapper:nth-child(3n + 1):hover,
  .photo-wrapper:nth-child(3n + 2):hover,
  .photo-wrapper:nth-child(3n):hover {
    transform: scale(1.04);
  }
}
</style>

