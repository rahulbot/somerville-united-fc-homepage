<script>
  import Papa from "papaparse";
  import PlayerList from "./PlayerList.svelte";
  import { onMount } from "svelte";
  import mensAPSLUrl from "@assets/data/roster-mens-apsl-s26.csv?url";

  const tabs = [
    { id: "mens", label: "Men's Team" },
    { id: "womens", label: "Women's Team" }
  ];

  let activeTab = $state(tabs[0].id);

  let mensAPSL = $state([]);

  const tabCount = tabs.length;

  const activateTab = (id) => {
    activeTab = id;
  };

  const handleTabKeydown = (event, index) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight" && event.key !== "Home" && event.key !== "End") {
      return;
    }

    event.preventDefault();

    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % tabCount;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabCount) % tabCount;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabCount - 1;
    }

    const nextId = tabs[nextIndex].id;
    activeTab = nextId;
    document.getElementById(`tab-${nextId}`)?.focus();
  };

  onMount(() => {
    Papa.parse(mensAPSLUrl, {
      download: true,
      header: true,
      complete: (results) => {
        mensAPSL = results.data.filter(row => Object.keys(row).some(key => row[key]));
      }
    });
  });
</script>

<svelte:head>
  <title>Team - Somerville United FC</title>
  <meta name="description" content="Meet the Somerville United FC team" />
</svelte:head>

<section class="section">
  <div class="container">
    <h1 class="page-title">Our Teams</h1>
    <p class="page-subtitle">
      We are actively recruiting players and staff for the inaugural men's team 2026 season. We'll launch our women's team in fall of 2026. 
      Stay tuned for updates on the full roster!
    </p>
  </div>
</section>

<section>
  <div class="container">
    <div class="tablist" role="tablist" aria-label="Team roster tabs">
      {#each tabs as tab, index}
        <button
          id={`tab-${tab.id}`}
          class={activeTab === tab.id ? "tab active" : "tab inactive"}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={tab.id}
          tabindex={activeTab === tab.id ? 0 : -1}
          on:click={() => activateTab(tab.id)}
          on:keydown={(event) => handleTabKeydown(event, index)}
        >
          {tab.label}
        </button>
      {/each}
    </div>
    <div class="wrapper">
      <div id="mens" role="tabpanel" aria-labelledby="tab-mens" hidden={activeTab !== "mens"}>
        <PlayerList players={mensAPSL} />
      </div>
      <div id="womens" role="tabpanel" aria-labelledby="tab-womens" hidden={activeTab !== "womens"}>
        <h2>🚧 Launching Fall 2026 🚧</h2>
      </div>
    </div>
  </div>
</section>

<style>
  .wrapper {
    padding: 30px;
    background-color: rgba(var(--secondary-rgb), 0.1);
    border-radius: 0 8px 8px 8px;
    margin-bottom: 2rem;
  }
  .tablist {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .tab {
    display: inline-block;
    background: none;
    font-family: var(--font-heading);
    color: var(--secondary);
    font-weight: 900;
    font-size: 2.5rem;
    padding: 15px 40px;
    border-radius: 8px 8px 0 0;
    border: 0px;
    text-align: center;
    cursor: pointer;
  }
  .tab.active {
    background-color: rgba(var(--secondary-rgb), 0.1);
  }
  .tab.inactive {
    border: 1px solid rgba(var(--secondary-rgb), 0.1);
    border-bottom: none;
  }
  .tab.inactive:hover,
  .tab:focus-visible {
    background-color: rgba(var(--secondary-rgb), 0.2);
  }
  .tab:focus-visible {
  }
  .section {
    padding: 2rem 0;
  }
  @media (max-width: 768px) {
    .tab {
      font-size: 1.5rem;
      padding: 5px 20px;
    }
    .wrapper {
      padding: 3px;
    }
  }
</style>
