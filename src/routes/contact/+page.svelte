<script>

let name = $state("");
let email = $state("");
let message = $state("");

function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

let validData = $derived(name.trim() !== "" && email.trim() !== "" && message.trim() !== "" && isEmailValid(email));
$inspect(validData);
</script>

<svelte:head>
  <title>Contact Us - Somerville United FC</title>
  <meta name="description" content="Send us a note to get involved" />
</svelte:head>

<div class="container">
  <h1 class="page-title">Contact Us</h1>
  
  <p class="page-subtitle">Have a question or want to get involved? Send us a note We'll get back to you soon.</p>

  <form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="78128264-8a39-4ff9-bfef-8d89f8145e81">
    <input type="hidden" name="subject" value="New Submission from Website">

    <fieldset>
      <label for="name">Your Name</label>
      <input type="text" name="name" id="name" required placeholder="What's your name?" bind:value={name}>
    </fieldset>

    <fieldset>
      <label for="email">Your Email</label>
      <input type="email" name="email" id="email" required placeholder="What's your email?" bind:value={email}>
    </fieldset>
    
    <fieldset>
      <label for="message">Your Message</label>
      <textarea name="message" id="message" required rows="5" placeholder="What's up?" bind:value={message}></textarea>
    </fieldset>

    <button type="submit" class="btn-primary {validData ? '' : 'is-invalid'}" disabled={!validData}>Submit</button>
    {#if !validData}
      <p class="error-message">⚠️ Please fill out the form before trying to submit it.</p>
    {/if}
  </form>
</div>

<style>
  h1 {
    margin-top: 2rem;
  }
  form {
    p.error-message {
      padding: 1rem;
      background-color: rgba(255, 170, 0, 0.1);
      border-radius: 10px;
      display: inline-block;
      margin-left: 20px;
    }
  }

  button {
    &.is-invalid {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  label {
    color: var(--secondary-color);
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    font-size: var(--font-size-sm);
    margin-bottom: 5px;
  }

  fieldset {
    border: 0px;
    margin-bottom: 1.5rem;
  }

  input, textarea {
    font-size: (var(--font-size-md));
    padding: 0.5rem;
    width: 100%;
    font-weight: bold;
    border: 1px solid rgba(226, 232, 240, 0.8);
  }
  button {
    font-size: var(--font-size-lg);
  }
  form {
    margin-bottom: 3rem;
  }
</style>