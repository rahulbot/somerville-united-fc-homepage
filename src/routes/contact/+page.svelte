<script>

let name = $state("");
let email = $state("");
let message = $state("");

function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

let validData = $derived(name.trim() !== "" && email.trim() !== "" && message.trim() !== "" && isEmailValid(email));
</script>

<svelte:head>
  <title>Contact Us - Somerville United FC</title>
  <meta name="description" content="Send us a note to get involved" />
</svelte:head>

<div class="container">
  <section>

    <h1 class="page-title">Contact Us</h1>
    
    <p class="page-subtitle">Have a question or want to get involved? Send us a note We'll get back to you soon.</p>

    <dl>
      <dt>Media Inquiries</dt>
      <dd><a href="mailto:media@somervilleunitedfc.org">media [at] somervilleunitedfc.org</a></dd>
      <dt>General Inquiries</dt>
      <dd><a href="mailto:info@somervilleunitedfc.org">info [at] somervilleunitedfc.org</a></dd>
      <dt>Women's Team</dt>
      <dd><a href="mailto:womens@somervilleunitedfc.org">womens [at] somervilleunitedfc.org</a></dd>
    </dl>

    <form action="https://api.web3forms.com/submit" method="POST">
      <h3>Drop us a Note:</h3>
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

  </section>
</div>

<style>
  dt {
    font-size: var(--font-size-sm);
    text-transform: uppercase;
    font-weight: 100;
    color: var(--primary-color);
  }
  dd {
    margin-bottom: 1rem;
    font-weight: 700;
  }

</style>