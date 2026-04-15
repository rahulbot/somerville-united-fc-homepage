<script>
const photos = [
  '/images/action/fan-with-shirt.jpeg',
  '/images/action/motion.jpeg',
  '/images/action/moving.jpeg',
  '/images/action/dribble-prep.jpeg',
  '/images/action/on-the-run.jpeg',
  '/images/action/tower.jpeg',
];

function pickThree(arr) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

const displayed = pickThree(photos);
</script>

<div class="photo-trio">
  {#each displayed as src}
    <div class="photo-wrapper">
      <img {src} alt="" />
    </div>
  {/each}
</div>

<style>
.photo-trio {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}

.photo-wrapper {
  width: 30%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  flex-shrink: 0;
}

.photo-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 600px) {
  .photo-trio {
    flex-direction: column;
    align-items: center;
  }

  .photo-wrapper {
    width: 80%;
  }
}
</style>

