<script>
import { page } from '$app/stores';
import { LoaderCircle } from 'lucide-svelte';
import PhotoTrio from '../../components/PhotoTrio.svelte';
import { getTicketableGames } from '../../lib/schedules.js';
import GameDate from '../schedule/GameDate.svelte';
    import GameLocation from '../schedule/GameLocation.svelte';

const { data } = $props();
const ticketableGames = $derived(getTicketableGames(data));
const gameParam = $derived($page.url.searchParams.get('game'));

// copied the approach from https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server

// This is the URL of the Google Apps Script that will handle the form submission and write to 
// the Google Sheet
const TICKET_URL = "https://script.google.com/macros/s/AKfycbxFg5Nxms9p3x9h9s47skbvD0FTvYa33tRC4BA6CSqAe-19Ih2k0H_exKeQs5qvO-QiOg/exec";

let submitting = $state(false);
let submitted = $state(false);
let guests = $state(1);
let email = $state("");
let name = $state("");
let gameId = $state(gameParam || ticketableGames[0]?.id); // only catches initial value, but that's fine because we don't expect it to change after the page loads
let honeypot = $state(""); // for spam prevention
let newsletter = $state(false);
let hearAbout = $state("");
let selectedGame = $derived.by(() => ticketableGames.find(g => g.id == gameId));
let selectedGameDescription = $derived.by(() => `${selectedGame.Season}-${selectedGame.League}-${selectedGame.Date}-${selectedGame.opponent}`);


// Adapted from the `getFormData` function from the tutorial
function assembleFormData(){
  // these keys have to exactly match the column names in the Google Sheet
  const formData = {
    game: selectedGameDescription,  // a computed readable format
    email,
    name,
    guests,
    hearAbout,
    newsletter: newsletter ? "Yes" : "No"
  };
  // add form-specific values into the data
  formData.formDataNameOrder = ['game', 'email', 'name', 'guests', 'hearAbout', 'newsletter'].join(',');
  formData.formGoogleSheetName = "responses"; // default sheet name
  formData.formGoogleSendEmail = "";
  return formData;
}

function handleFormSubmit(event) {  // handles form submit without any jquery
  event.preventDefault();           // we are submitting via xhr below
  submitting = true;  // to disable submit buttons
  var data = assembleFormData();

  // If a honeypot field is filled, assume it was done so by a spam bot.
  if (honeypot) {
    return false;
  }

  var url = TICKET_URL;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  // xhr.withCredentials = true;
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // reset form?
        submitted = true;
        submitting = false;
      }
  };
  // url encode form data for sending as post data
  var encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
  }).join('&');
  xhr.send(encoded);
}
</script>

<svelte:head>
  <title>Tickets RSVP - Somerville United FC</title>
  <meta name="description" content="RSVP to our upcoming game." />
</svelte:head>

<div class="container">
  <section>
    <h1>RSVP to a Game</h1>

    {#if ticketableGames.length === 0}
      <p class="page-subtitle">
        Keep an eye out here for upcoming games you can get tickets for!
      </p>
    {:else}
      <p class="page-subtitle">
        Join us for a Somerville United FC game! Come support local soccer and 
        help us build the season with a great home crowd.
      </p>
      <p class="page-subtitle">
      🎟 Preorder Tickets: $5 per person<br />
      🚪 Tickets at the Gate: $10 per person
      </p>
      <p class="page-subtitle">
        Preordering through this form reserves your ticket at the discounted $5 rate.
        Check-in with us at the front get to receive your tickets and enter on game day.
      </p>        
      <p class="page-subtitle">
        After submitting this form, please complete payment using
        <a href="https://swipesimple.com/links/lnk_01b2b24053078931775ee44efb7535e2">Credit Card Payment</a> 
        or Zelle to somervilleunitedfc@gmail.com. 
        Your preorder is confirmed once payment is received.
      </p>
    {/if}

    {#if ticketableGames.length > 0}
      <form method="POST" onsubmit={handleFormSubmit} data-sheet="ticket_responses">

        {#if !submitted}
          <div class="form-elements">
            <fieldset class="game-selection">
              {#if ticketableGames.length > 1}
                <legend>Select a Game:</legend>
              {/if}
              <div class="games-list">
                {#each ticketableGames as game}
                  <label class="game-box" class:selected={gameId === game.id}>
                    <input
                      type="radio"
                      name="game"
                      value={game.id}
                      bind:group={gameId}
                      required
                    />
                    <div class="game-box-content">
                      <GameDate {game} />
                      <GameLocation {game} />
                    </div>
                  </label>
                {/each}
              </div>
            </fieldset>

            <fieldset>
              <label for="name">Name:</label>
              <input id="name" name="name" type="text" required bind:value={name} />
            </fieldset>

            <fieldset>
              <label for="email">Email Address:</label>
              <input id="email" name="email" type="email" required bind:value={email} />
            </fieldset>

            <fieldset>
              <label for="guests">Number of People: </label>
              <input type="number" id="guests" name="guests" min="1" max="10" style="width: 100px" bind:value={guests} />
            </fieldset>

            <fieldset>
              <label for="hearAbout">How did you hear about us?</label>
              <select id="hearAbout" name="hearAbout" bind:value={hearAbout}>
                <option value="">Select an option...</option>
                <option value="Website">Website</option>
                <option value="Instagram">Instagram</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="X">X</option>
                <option value="Facebook">Facebook</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </select>
            </fieldset>

            <fieldset class="inline">
              <input type="checkbox" id="newsletter" name="newsletter" bind:checked={newsletter}/>
              <label for="newsletter">Subscribe to our newsletter</label>
            </fieldset>

            <!-- To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot. -->
            <input id="honeypot" type="text" name="honeypot" bind:value={honeypot} />

            <button type="submit" class="btn-primary" class:is-invalid={submitting} disabled={submitting}>
              RSVP now
            </button>
            {#if submitting}
              <p>
                <LoaderCircle class="spinning" />
                (we're saving your RSVP...)
              </p>
            {/if}
          </div>
        {/if}

        {#if submitted}
          <!-- Shows up after they submit the RSVP -->
          <div class="thankyou_message">
            <h3>Thanks for the RSVP!</h3>
            <p>We're excited to see you at our game on {selectedGame.Date} at {selectedGame.Venue} vs. {selectedGame.opponent} ⚽️🎉</p>
            <p>⚠️Don't forget to <b>pay your $5 pre-order ticket price</b> via 
              <a href="https://swipesimple.com/links/lnk_01b2b24053078931775ee44efb7535e2">Credit Card Payment</a> 
              or Zelle to somervilleunitedfc@gmail.com. 
            </p>
            <a href="/schedule">
              <button class="btn-primary">
                Back to our Schedule
              </button>
            </a>
          </div>
        {/if}

      </form>
    {/if}
  </section>
  <section>
    <PhotoTrio />
  </section>
</div>

<style>
#honeypot {
  display: none;
}

input[type="checkbox"] {
  width: auto;
  transform: scale(1.5);
  transform-origin: left center;
  margin-right: 10px;
  margin-top: -5px;
  vertical-align: middle;
}

input[type="radio"] {
  display: none;
}

form {
  width: 60%;
  padding: 10px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  form {
    width: 100%;
  }
}

.game-selection {
  border: none;
  padding: 0;
  margin: 2rem 0;

  legend {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    padding: 0;
  }
}

.games-list {
  display: flex;
  flex-direction: column;
}

.game-box {
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.5rem;
  border: none;
  border-top: 1px dashed rgba(var(--secondary-color-rgb), 0.3);
  transition: all 0.3s ease;
  background-color: transparent;
  border-radius: var(--radius);

  &:hover {
    background-color: #f5f5f5;
  }

  &.selected {
    border: 2px solid var(--primary-color);
    border-top: 2px solid var(--primary-color);
    background-color: transparent;
    padding: calc(1.5rem - 1px);
  }
}

.game-box-content {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  flex: 1;
}

@media (max-width: 768px) {
  .game-box {
    padding: 1rem;
  }

}

.thankyou_message {
  p {
    margin-bottom: 2rem;
  }
}

.form-elements {
  p {
    margin-top: 1rem;
  }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

:global(.spinning) {
  animation: spin 1s linear infinite;
  display: inline-block;
  vertical-align: middle;
}

.page-subtitle {
  margin-bottom: 1.5rem;
  text-align: left;
}
</style>
