<template>
  <div class="our-partners-container">
    <h1>Our Partners</h1>
    <p class="subheading">Trusted by Leading Industry Partners</p>
    <div class="partners-grid">
      <img src="https://via.placeholder.com/300x200?text=Partner+1" alt="Partner 1" />
      <img src="https://via.placeholder.com/300x200?text=Partner 2" alt="Partner 2" />
      <img src="https://via.placeholder.com/300x200?text=Partner 3" alt="Partner 3" />
      <img src="https://via.placeholder.com/300x200?text=Partner 4" alt="Partner 4" />
    </div>

    <!-- Work with Us button -->
    <div class="work-with-us">
      <button @click="handleClick">Work with Us</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'OurPartners',
  methods: {
    handleClick() {
      alert('Work with Us button clicked!');
    }
  }
};
</script>

<style scoped>
.our-partners-container {
  text-align: center;
  padding: 50px 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

.subheading {
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 40px;
  font-family: 'Poppins', sans-serif;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: center;
}

.partners-grid img {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.partners-grid img:hover {
  transform: scale(1.05);
}

.work-with-us {
  margin-top: 40px;
}

.work-with-us button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.work-with-us button:hover {
  background-color: #0056b3;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .partners-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .partners-grid {
    grid-template-columns: 1fr;
  }
}
</style>
