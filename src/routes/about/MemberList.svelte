<script>
  import Member from "./Member.svelte";
  const {people} = $props();
</script>

<div class="mgmt-grid">
  {#each people as person}
    <Member 
        name={person.name}
        title={person.title}
        description={person.description}
        image={person.image}
    />
  {/each}
</div>

<style>
  .mgmt-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 640px) {
    .mgmt-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1280px) {
    .mgmt-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>