<template>
  <section id="about" class="about-section">
    <h2 class="title">ABOUT US</h2>

    <!-- Primera fila -->
    <div class="row">
      <div class="column text">
        <h3>30 YEARS IN THE INDUSTRY</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nibh enim. Etiam nec
          enim egestas, auctor metus ut, mollis erat. Sed tempus eu ante a euismod. Curabitur auctor
          lectus nec consectetur convallis.
        </p>
      </div>
      <div class="column image">
        <img src="../assets/xmas.png" alt="Founder with Tree" />
      </div>
    </div>

    <!-- Segunda fila -->
    <div class="row">
      <div class="column image wide">
        <img src="../assets/a.png" alt="Plant" />
      </div>
      <div class="column text double">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nibh enim. Etiam nec
          enim egestas, auctor metus ut, mollis erat. Sed tempus eu ante a euismod. Curabitur auctor
          lectus nec consectetur convallis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nibh enim. Etiam nec
          enim egestas, auctor metus ut, mollis erat. Sed tempus eu ante a euismod. Curabitur auctor
          lectus nec consectetur convallis.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 2rem 4rem;
  background-color: #ffffff;
  font-family: sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  text-align: center;
  color: #007bff;
  font-size: 2rem;
  margin-bottom: 5rem;
  font-weight: bold;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
}

.column {
  flex: 1;
}

.column.text h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.column.text p {
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
}

.column.image img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  border: 1px solid #ddd;
}

.column.image.wide {
  flex: 1.3;
}

.column.text.double {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .about-section {
    padding: 2rem 1rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .column.text h3 {
    font-size: 1.3rem;
  }

  .column.text p {
    font-size: 0.95rem;
  }
}
</style>
