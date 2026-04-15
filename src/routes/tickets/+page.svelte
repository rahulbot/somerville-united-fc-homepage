<script>
import { page } from '$app/stores';
import { LoaderCircle } from 'lucide-svelte';
import PhotoTrio from '../../components/PhotoTrio.svelte';

const { data } = $props();
const scheduleApsl = $derived(data.gamesApsl);
const ticketableGames = $derived(scheduleApsl.filter(game => game.RSVPable));
const gameParam = $derived($page.url.searchParams.get('game'));

// copied the approach from https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server

// This is the URL of the Google Apps Script that will handle the form submission and write to 
// the Google Sheet
const TICKET_URL = "https://script.google.com/macros/s/AKfycbxFg5Nxms9p3x9h9s47skbvD0FTvYa33tRC4BA6CSqAe-19Ih2k0H_exKeQs5qvO-QiOg/exec";

let submitting = $state(false);
let submitted = $state(false);
let guests = $state(1);
let email = $state("");
let gameId = $state(gameParam || null); // only catches initial value, but that's fine because we don't expect it to change after the page loads
let honeypot = $state(""); // for spam prevention
let newsletter = $state(false);
let selectedGame = $derived.by(() => ticketableGames.find(g => g.id == gameId));
let selectedGameDescription = $derived.by(() => `APSL-${selectedGame.Date}-${selectedGame.opponent}`);


// Adapted from the `getFormData` function from the tutorial
function assembleFormData(){
  // these keys have to exactly match the column names in the Google Sheet
  const formData = {
    game: selectedGameDescription,  // a computed readable format
    email,
    guests,
    newsletter: newsletter ? "Yes" : "No"
  };
  // add form-specific values into the data 
  formData.formDataNameOrder = ['game', 'email', 'guests', 'newsletter'].join(',');
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
    <p class="page-subtitle">
      Our games are free to attend, but RSVP so we can reserve you a spot!
    </p>

    <form method="POST" onsubmit={handleFormSubmit} data-sheet="ticket_responses">

      {#if !submitted}
        <div class="form-elements">
          <fieldset class="inline">
            <label for="name">Game:</label>
            <select name="game" id="game" bind:value={gameId} required>
              {#each ticketableGames as game}
                <option value={game.id} selected={gameParam === game.id}>
                  {game.Date} vs. {game.opponent} @ {game.Venue}
                </option>
              {/each}
            </select>
          </fieldset>

          <fieldset>
            <label for="email">Your Email Address:</label>
            <input id="email" name="email" type="email" required bind:value={email} />
          </fieldset>

          <fieldset>
            <label for="guests">Number of People: </label>
            <input type="number" id="guests" name="guests" min="1" max="10" style="width: 100px" bind:value={guests} />
          </fieldset>

          <fieldset class="inline">
            <input type="checkbox" id="newsletter" name="newsletter" bind:checked={newsletter}/>
            <label for="newsletter">Subscribe to our newsletter</label>
          </fieldset>

          <!-- To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot. -->
          <input id="honeypot" type="text" name="honeypot" bind:value={honeypot} />

          <button type="submit" class="btn-primary" class:is-invalid={submitting} disabled={submitting}>
            RSVP
          </button>
          {#if submitting}
            <p>
              <LoaderCircle class="spinning" />
              (we're saving your RSVP now)
            </p>
          {/if}
        </div>
      {/if}

      {#if submitted}
        <!-- Shows up after they submit the RSVP -->
        <div class="thankyou_message">
          <h3>Thanks for the RSVP!</h3>
          <p>We're excited to see you at our game on {selectedGame.Date} at {selectedGame.Venue} vs. {selectedGame.opponent} ⚽️🎉</p>
          <a href="/schedule">
            <button class="btn-primary">
              Back to our Schedule
            </button>
          </a>
        </div>
      {/if}

    </form>
    
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
  /** need to override defaults for width*/
  width: auto;
  /** doing some CSS nonsense to align with text vertically */
  transform: scale(1.5);
  transform-origin: left center;
  margin-right: 10px;
  margin-top: -5px;
  vertical-align: middle;
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
</style>
