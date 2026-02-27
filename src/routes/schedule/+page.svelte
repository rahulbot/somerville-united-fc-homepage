<script>
  import GameList from './GameList.svelte';
  import apslLogo from "@assets/APSL.gif";
  import casaLogo from "@assets/casa-logo-white.png";

  let { data } = $props();

  let scheduleApsl = $derived(data.gamesApsl);
  let scheduleCasa = $derived(data.gamesCasa);

  // show optional countdown if first game date is valid
  const firstGameDate = new Date("2026-03-15"); // set to `null` if no upcoming game
  let countdownDays = $state(undefined);;
  try {
    const today = new Date();
    if (firstGameDate && (today < firstGameDate)) {
      const diff = (new Date(firstGameDate) - today) / (1000 * 60 * 60 * 24);
      countdownDays = Math.ceil(diff);
    }
  } catch (error) {
    countdownDays = undefined;
  }

  let activeTab = $state('apsl');

  function handleKeydown(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      activeTab = activeTab === 'apsl' ? 'casa' : 'apsl';
      // Focus the newly active tab
      setTimeout(() => {
        document.getElementById(`${activeTab}-tab`)?.focus();
      }, 0);
    }
  }
</script>

<svelte:head>
  <title>Schedule - Somerville United FC</title>
  <meta name="description" content="Keep track of fixtures and results" />
</svelte:head>

<div class="container">
  <section>
    <h1>
      {#if countdownDays}
        <em>{countdownDays}</em> Days Till Our Home Opener
      {:else}
        2026 Spring Season Schedule
      {/if}
    </h1>
    <p class="page-subtitle">
      Somerville United FC fields men's teams in the <a href="https://apslsoccer.com/APSL/Teams/">semi-pro APSL Mayflower Conference</a> and the <a href="https://www.casasoccerleagues.com/boston">amatuer CASA Boston league</a>. We'd love to have you join at one of our upcoming games!
    </p>

    <div class="tabs" role="tablist" aria-label="Select Team">
      <button 
        class="tab" 
        class:active={activeTab === 'apsl'}
        class:inactive={activeTab !== 'apsl'}
        onclick={() => activeTab = 'apsl'}
        onkeydown={handleKeydown}
        role="tab"
        aria-selected={activeTab === 'apsl'}
        aria-controls="apsl-panel"
        id="apsl-tab"
        tabindex={activeTab === 'apsl' ? 0 : -1}
      >
        <img src="{apslLogo}" alt="APSL" height="32"/>
        Men's Flagship
      </button>
      <button 
        class="tab" 
        class:active={activeTab === 'casa'}
        class:inactive={activeTab !== 'casa'}
        onclick={() => activeTab = 'casa'}
        onkeydown={handleKeydown}
        role="tab"
        aria-selected={activeTab === 'casa'}
        aria-controls="casa-panel"
        id="casa-tab"
        tabindex={activeTab === 'casa' ? 0 : -1}
      >
        <img src="{casaLogo}" alt="CASA" height="32"/>
        Men's Reserve
      </button>
    </div>

    {#if activeTab === 'apsl'}
      <div role="tabpanel" id="apsl-panel" aria-labelledby="apsl-tab" class="tab-panel">
        <h3>Men's Flagship: Somerville United FC</h3>
        <p>Our flagship men's team plays in the APSL Mayflower Conference. Home games are at Dilboy Stadum in Somerville.</p>
        <GameList games={scheduleApsl} teamName="Somerville United FC" includeTicketButton={true} />
      </div>
    {:else}
      <div role="tabpanel" id="casa-panel" aria-labelledby="casa-tab" class="tab-panel">
        <h3>Men's Reserve: Somerville United FC II</h3>
        <p>Our reserve men's team plays in the CASA Boston league. Home games are at Conway Park in Somerville.</p>
        <GameList games={scheduleCasa} teamName="Somerville United FC II" includeTicketButton={false} />
      </div>
    {/if}
  </section>
</div>

<style>
  em {
    color: var(--secondary-color);
    font-style: normal;
  }

  .tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    justify-content: center;
  }

  .tab {
    padding: 15px 20px;
    border: none;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    font-size: var(--font-size-md);
    font-weight: 500;
    color: #666;
    transition: all 0.2s ease;
    margin-bottom: -2px;
    img {
      margin-right: 10px;
    }
  }

  .tab:hover {
    color: white;
  }

  .tab.active {
    color: white;
    background-color: var(--primary-color);
  }

  .tab.inactive {
    background-color: rgba(var(--primary-color-rgb), 0.4);
    
  }

  .tab-panel {
    padding: 1rem 0;
    p {
      font-size: var(--font-size-md);
      color: var(--muted-color-foreground);
      margin: 1rem 0 2rem 0;
    }
  }

  h3 {
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    .tab {
      padding: 10px 15px;
      font-size: var(--font-size-sm);
      img {
        height: 16px !important;
      }
    }
  }

</style>
