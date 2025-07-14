<template>
  <section id="contact" class="contact-section">
    <h2 class="title">Contact</h2>
    <form action="https://formspree.io/f/mpwlanbo" method="POST" class="contact-form">
      <label>
        Your name:
        <input type="text" name="name" required />
      </label>
      <label>
        Your email:
        <input type="email" name="email" required />
      </label>

      <label>
        Your message:
        <textarea name="message" rows="5" required></textarea>
      </label>

      <button type="submit">Send</button>
    </form>
  </section>
</template>

<style scoped>
.contact-section {
  width: 100%;
  min-height: 100vh;
  padding: 4rem 1rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
}

.title {
  color: #007bff;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  text-align: center;
}

.contact-form {
  width: 100%;
  max-width: 600px;
  border: 2px solid #007bff;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-sizing: border-box;
}

.contact-form label {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: #333;
}

.contact-form input,
.contact-form textarea {
  margin-top: 0.5rem;
  padding: 0.7rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  font-family: inherit;
}

.contact-form button {
  align-self: flex-end;
  padding: 0.7rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.contact-form button:hover {
  background-color: #0056b3;
}

/* Responsive */
@media (max-width: 600px) {
  .contact-form {
    padding: 1rem;
  }

  .contact-form button {
    align-self: center;
    width: 100%;
  }
}
</style>
