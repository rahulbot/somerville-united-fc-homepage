<script>
  import GameList from './GameList.svelte';
  import { Calendar, Copy, X } from 'lucide-svelte';
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
  let isCalendarModalOpen = $state(false);
  let selectedCalendarUrl = $state('');
  let selectedTeamLabel = $state('');
  let copyNoticeVisible = $state(false);

  const calendarFeeds = {
    apsl: {
      label: "Men's Flagship",
      url: '/calendars/sufc-mens-apsl.ics'
    },
    casa: {
      label: "Men's Reserve",
      url: '/calendars/sufc-mens-casa.ics'
    }
  };

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

  function openCalendarModal(teamKey) {
    selectedCalendarUrl = calendarFeeds[teamKey].url;
    selectedTeamLabel = calendarFeeds[teamKey].label;
    copyNoticeVisible = false;
    isCalendarModalOpen = true;
  }

  function closeCalendarModal() {
    isCalendarModalOpen = false;
    copyNoticeVisible = false;
  }

  function handleModalKeydown(event) {
    if (isCalendarModalOpen && event.key === 'Escape') {
      closeCalendarModal();
    }
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      closeCalendarModal();
    }
  }

  const fullCalendarUrl = $derived(`http://somervilleunitedfc.org${selectedCalendarUrl}`);

  async function copyCalendarUrl() {
    try {
      await navigator.clipboard.writeText(fullCalendarUrl);
      copyNoticeVisible = true;
      setTimeout(() => {
        copyNoticeVisible = false;
      }, 4000);
    } catch (error) {
      copyNoticeVisible = false;
    }
  }
</script>

<svelte:head>
  <title>Schedule - Somerville United FC</title>
  <meta name="description" content="Keep track of fixtures and results" />
</svelte:head>

<svelte:window onkeydown={handleModalKeydown} />

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
      Somerville United FC fields men's teams in the <a href="https://apslsoccer.com/APSL/Tables/">semi-pro APSL Mayflower Conference</a> and the <a href="https://www.casasoccerleagues.com/massachusetts">amatuer CASA Massachusetts Select Liga 1</a>. We'd love to have you join at one of our upcoming games!
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
        <div class="panel-heading">
          <h3>Men's Flagship: Somerville United FC</h3>
          <button
            class="btn-subscribe"
            type="button"
            onclick={() => openCalendarModal('apsl')}
            aria-label="Subscribe to our calendar for the Men's Flagship team"
          >
            <Calendar size={16} aria-hidden="true" />
            add Men's Flagship games to your calendar 
          </button>
        </div>
        <p>Our flagship men's team plays in the APSL Mayflower Conference. Home games are at Dilboy Stadum in Somerville.</p>
        <GameList games={scheduleApsl} teamName="Somerville United FC" includeTicketButton={true} />
      </div>
    {:else}
      <div role="tabpanel" id="casa-panel" aria-labelledby="casa-tab" class="tab-panel">
        <div class="panel-heading">
          <h3>Men's Reserve: Somerville United FC II</h3>
          <button
            class="btn-subscribe"
            type="button"
            onclick={() => openCalendarModal('casa')}
            aria-label="Subscribe to our calendar for the Men's Reserve team"
          >
            <Calendar size={16} aria-hidden="true" />
            add Men's Reserve games to your calendar
          </button>
        </div>
        <p>Our reserve men's team plays in the CASA Boston league. Home games are at Conway Park in Somerville.</p>
        <GameList games={scheduleCasa} teamName="Somerville United FC II" includeTicketButton={false} />
      </div>
    {/if}

    {#if isCalendarModalOpen}
      <div class="modal-backdrop" role="presentation" onclick={handleBackdropClick} onkeydown={handleModalKeydown}>
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="calendar-modal-title" tabindex="-1">
          <button class="modal-close-icon" type="button" onclick={closeCalendarModal} aria-label="Close calendar subscription modal">
            <X size={18} aria-hidden="true" />
          </button>

          <h4 id="calendar-modal-title">Subscribe to {selectedTeamLabel} Calendar</h4>
          <p>Subscribe to stay up-to-date with our latest games. Use this feed URL in your favorite calendar app:</p>

          <div class="copy-field" role="group" aria-label="Calendar feed URL">
            <span class="copy-field-url">{fullCalendarUrl}</span>
            <button class="copy-field-btn" type="button" onclick={copyCalendarUrl} aria-label="Copy calendar feed URL to clipboard">
              <Copy size={16} aria-hidden="true" />
            </button>
          </div>
          {#if copyNoticeVisible}
            <p class="copy-notice">copied to clipboard</p>
          {/if}

          <ul>
            <li><strong>iPhone (Apple Calendar):</strong> Open Calendar, tap the calendar icon at the bottom right, scroll down and tap "Add Calendar". Pick "Add Subscription Calendar" and paste in the URL.</li>
          </ul>

          <div class="modal-actions">
            <a class="btn-feed-link" href={selectedCalendarUrl} target="_blank" rel="noopener noreferrer">or download current .ics</a>
          </div>
        </div>
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

  .panel-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .panel-heading h3 {
    margin-bottom: 0;
  }

  .btn-subscribe {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 0.8rem;
    border-radius: var(--radius);
    border: 2px solid var(--secondary-color);
    background: transparent;
    color: var(--secondary-color);
    font-size: var(--font-size-sm);
    font-family: var(--font-sans);
    font-weight: 700;
    text-transform: none;
    letter-spacing: 0;
  }

  .btn-subscribe:hover {
    background: rgba(var(--secondary-color-rgb), 0.08);
    color: var(--secondary-color);
    box-shadow: none;
  }

  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    z-index: 20;
  }

  .modal {
    position: relative;
    width: min(680px, 100%);
    background: white;
    border-radius: var(--radius);
    padding: 1.5rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  }

  .modal h4 {
    font-family: var(--font-heading);
    font-size: var(--font-size-lg);
    color: var(--primary-color);
    margin-bottom: 0.75rem;
    text-transform: uppercase;
  }

  .modal p {
    margin-bottom: 1rem;
    color: var(--dark-color);
  }

  .modal-close-icon {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    border: 1px solid rgba(var(--secondary-color-rgb), 0.4);
    background: white;
    color: var(--secondary-color);
    border-radius: 999px;
    width: 2rem;
    height: 2rem;
    padding: 0;
  }

  .modal-close-icon:hover {
    background: rgba(var(--secondary-color-rgb), 0.1);
    box-shadow: none;
  }

  .copy-field {
    width: 100%;
    background-color: rgba(var(--secondary-color-rgb), 0.45);
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-bottom: 1rem;
  }

  .copy-field-url {
    padding: 0.65rem 0.8rem;
    font-size: var(--font-size-md);
    color: var(--dark-color);
    white-space: nowrap;
    overflow-x: auto;
  }

  .copy-field-btn {
    border: none;
    background: transparent;
    color: var(--secondary-color);
    width: 2.6rem;
    height: 100%;
    padding: 0;
  }

  .copy-field-btn:hover {
    background: rgba(var(--secondary-color-rgb), 0.08);
    box-shadow: none;
  }

  .copy-notice {
    color: var(--secondary-color);
    font-size: var(--font-size-sm);
    margin-bottom: 1rem;
  }

  .modal ul {
    margin: 0 0 1.5rem 1.2rem;
    color: var(--dark-color);
    display: grid;
    gap: 0.6rem;
  }

  .modal-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    justify-content: flex-end;
  }

  .btn-feed-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem 1rem;
    border-radius: var(--radius);
    border: 1px solid var(--primary-color);
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    font-family: var(--font-heading);
    letter-spacing: 0.04em;
  }

  .btn-feed-link {
    background: var(--primary-color);
    color: white;
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

    .btn-subscribe {
      width: 100%;
      justify-content: center;
    }

    .modal {
      padding: 1.1rem;
    }
  }

</style>
