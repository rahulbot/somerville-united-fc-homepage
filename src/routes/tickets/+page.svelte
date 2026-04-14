<script>
import { page } from '$app/stores';
const { data } = $props();
const scheduleApsl = $derived(data.gamesApsl);
const ticketableGames = $derived(scheduleApsl.filter(game => game.RSVPable));
const gameParam = $derived($page.url.searchParams.get('game'));

// copied the approach from https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server

// This is the URL of the Google Apps Script that will handle the form submission and write to 
// the Google Sheet
const TICKET_URL = "https://script.google.com/macros/s/AKfycbxFg5Nxms9p3x9h9s47skbvD0FTvYa33tRC4BA6CSqAe-19Ih2k0H_exKeQs5qvO-QiOg/exec";

// This is all copied from their code
function getFormData(form) {
  var elements = form.elements;
  var honeypot;

  var fields = Object.keys(elements).filter(function(k) {
    if (elements[k].name === "honeypot") {
      honeypot = elements[k].value;
      return false;
    }
    return true;
  }).map(function(k) {
    if(elements[k].name !== undefined) {
      return elements[k].name;
    // special case for Edge's html collection
    }else if(elements[k].length > 0){
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });

  var formData = {};
  fields.forEach(function(name){
    var element = elements[name];
    
    // singular form elements just have one value
    formData[name] = element.value;

    // when our element has multiple items, get their values
    if (element.length) {
      var data = [];
      for (var i = 0; i < element.length; i++) {
        var item = element.item(i);
        if (item.checked || item.selected) {
          data.push(item.value);
        }
      }
      formData[name] = data.join(', ');
    }
  });

  // add form-specific values into the data
  formData.formDataNameOrder = JSON.stringify(fields);
  formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
  formData.formGoogleSendEmail
    = form.dataset.email || ""; // no email by default

  return {data: formData, honeypot: honeypot};
}

function handleFormSubmit(event) {  // handles form submit without any jquery
  event.preventDefault();           // we are submitting via xhr below
  var form = event.target;
  var formData = getFormData(form);
  var data = formData.data;

  // If a honeypot field is filled, assume it was done so by a spam bot.
  if (formData.honeypot) {
    return false;
  }

  disableAllButtons(form);
  var url = form.action;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  // xhr.withCredentials = true;
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        form.reset();
        var formElements = form.querySelector(".form-elements")
        if (formElements) {
          formElements.style.display = "none"; // hide form
        }
        var thankYouMessage = form.querySelector(".thankyou_message");
        if (thankYouMessage) {
          thankYouMessage.style.display = "block";
        }
      }
  };
  // url encode form data for sending as post data
  var encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
  }).join('&');
  xhr.send(encoded);
}

function disableAllButtons(form) {
  var buttons = form.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}
</script>

<svelte:head>
  <title>Tickets RSVP - Somerville United FC</title>
  <meta name="description" content="RSVP to our upcoming game." />
</svelte:head>

<div class="container">
  <section>
    <h1>Ticket RSVP</h1>
    <p class="page-subtitle">
      We'd love to have you join our upcoming games!
    </p>

    <form method="POST" action={TICKET_URL}
          onSubmit={handleFormSubmit} data-sheet="ticket_responses">

      <div class="form-elements">
        <fieldset class="inline">
          <label for="name">Game:</label>
          <select name="game" id="game">
            {#each ticketableGames as game}
              <option value={`APSL-${game.Date}-${game.opponent}`} selected={gameParam === game.id}>
                {game.Date} vs. {game.opponent} @ {game.Venue}
              </option>
            {/each}
          </select>
        </fieldset>

        <fieldset>
          <label for="email">Your Email Address:</label>
          <input id="email" name="email" type="email" value="" required placeholder="your.name@email.com"/>
        </fieldset>

        <fieldset>
          <label for="guests">Number of People: </label>
          <input type="number" id="guests" name="guests" placeholder="1" min="1" max="10" style="width: 100px" />
        </fieldset>

        <fieldset class="inline">
          <label for="newsletter">Subscribe to our newsletter: </label>
          <input type="checkbox" id="newsletter" name="newsletter" />
        </fieldset>

        <!-- To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot. -->
        <input id="honeypot" type="text" name="honeypot" value="" />

        <button type="submit" class="btn-primary">
          <i class="fa fa-paper-plane"></i>&nbsp;Send
        </button>
      </div>

      <!-- Shows up after they submit the RSVP -->
      <div class="thankyou_message" style="display:none;">
        <h3><em>Thanks for RSVPig</em>! We're excited to see you at our game ⚽️🎉</h3>
      </div>

    </form>
    
  </section>
</div>

<style>
#honeypot {
  display: none;
}
</style>
