<template>
    <div class="home-message-container">
      <div class="overlay">
        <h1>Mineral Processing Engineering Experience</h1>
        <p>We are experts in our field with over 30 years of experience with pilot facilities</p>
        <button>Explore our services</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'HomeMessage',
  };
  </script>
  
  <style scoped>
  .home-message-container {
    background-image: url('@/assets/home.jpg');
    background-size: cover;
    background-position: right center; 
    height: 63vh;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
  }
  
  
  .overlay {
    background-color: rgba(255, 255, 255, 0.67);
    padding: 40px;
    width: 40%;
    height: 98%;
    margin: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Font sizes for large screens */
  h1 {
    font-size: 5em;
    color: #0056b3;
  }
  
  p {
    font-size: 2em;
    margin: 20px 0;
  }
  
  button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 2em;
    cursor: pointer;
  }
  
  /* Responsive adjustments */

  @media (max-width: 1200px) {
    h1 {
      font-size: 4.5em;
    }
  
    p {
      font-size: 1.8em;
    }
  
    .overlay {
      width: 50%;
    }
    button {
        font-size: 1.9em;
        padding: 8px 16px;
      }
  }
  
  @media (max-width: 992px) {
    h1 {
      font-size: 5.3em;
    }
  
    p {
      font-size: 2.5em;
    }
  
    .overlay {
      width: 60%;
    }
    button {
        font-size: 1.9em;
        padding: 8px 16px;
      }
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 5em;
    }
  
    p {
      font-size: 2em;
    }
  
    .overlay {
      width: 80%;
    }
  
    button {
      font-size: 1.9em;
      padding: 8px 16px;
    }
  }
  @media (max-width: 559px) {
    h1 {
      font-size: 4.5em;
    }
  
    p {
      font-size: 1.8em;
    }
  
    .overlay {
      width: 90%;
    }
  
    button {
      font-size: 1.5em;
      padding: 6px 12px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 4em;
    }
  
    p {
      font-size: 1.8em;
    }
  
    .overlay {
      width: 90%;
    }
  
    button {
      font-size: 1.5em;
      padding: 6px 12px;
    }
  }
  </style>
  
