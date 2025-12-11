<script>
  import Member from "../../components/Member.svelte";

  const boardMembers = [
    {
      name: "Board Member 1",
      title: "President",
      description: "<p>Add description here.</p>",
      image: null
    },
    {
      name: "Board Member 2",
      title: "Vice President",
      description: "<p>Add description here.</p>",
      image: null
    },
    {
      name: "Board Member 3",
      title: "Treasurer",
      description: "<p>Add description here.</p>",
      image: null
    },
    {
      name: "Board Member 4",
      title: "Secretary",
      description: "<p>Add description here.</p>",
      image: null
    },
    {
      name: "Board Member 5",
      title: "Director",
      description: "<p>Add description here.</p>",
      image: null
    },
    {
      name: "Board Member 6",
      title: "Director",
      description: "<p>Add description here.</p>",
      image: null
    },
    {
      name: "Board Member 7",
      title: "Director",
      description: "<p>Add description here.</p>",
      image: null
    },
    {
      name: "Board Member 8",
      title: "Director",
      description: "<p>Add description here.</p>",
      image: null
    }
  ];
</script>

<svelte:head>
  <title>Board - Somerville United FC</title>
  <meta name="description" content="Meet the Somerville United FC board of directors" />
</svelte:head>

<div class="page-content">
  <div class="container">
    <section class="section">
      <h1 class="page-title">Board of Directors</h1>
      <p class="page-subtitle">
        The leadership team guiding Somerville United FC's vision and mission.
      </p>

      <div class="board-grid">
        {#each boardMembers as member}
          <Member 
            name={member.name}
            title={member.title}
            description={member.description}
            image={member.image}
          />
        {/each}
      </div>
    </section>
  </div>
</div>

<style>
  .section {
    padding: 2rem 0;
  }

  .board-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 640px) {
    .board-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .board-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1280px) {
    .board-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
