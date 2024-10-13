<template>
    <div class="footer">
      <div class="footerPadding">
        <!-- Top section -->
        <div class="footerTop">
          <!-- Logo -->
          <img src="./logo.png" alt="Logo" class="footerLogo" />
          <!-- Links -->
          <div class="footerLinks">
            <!-- Contact info -->
            <div class="footerLinksDiv">
              <h4>Contact Us</h4>
              <p>inquiries@metallurgicalservices.com</p>
              <p>US: +1 999 9999</p>
              <p>CHILE: +56 32 9999 9999</p>
              <div class="socialmedia">
                <a href="#"><i class="fab fa-linkedin icon"></i></a>
                <a href="#"><i class="fab fa-whatsapp icon"></i></a>
                <a href="#"><i class="fas fa-envelope icon"></i></a>
              </div>
            </div>
  
            <!-- Services -->
            <div class="footerLinksDiv">
              <h4>Services</h4>
              <p>Laboratory</p>
              <p>Consultory</p>
              <p>About</p>
            </div>
          </div>
        </div>
  
        <!-- Bottom section -->
        <hr />
        <div class="footerBelow">
          <p>copyright © {{ currentYear }}</p>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from "vue";
  import '@fortawesome/fontawesome-free/css/all.min.css';
  
  const currentYear = ref(new Date().getFullYear());
  </script>
  
  <style scoped>
  .footer {
    color: rgb(255, 255, 255);
    width: 100%;
    background-color: #222;
    padding: 2rem 0;
    text-align: center;
  }
  
  .footerPadding {
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }
  
  .footerLinks {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 2rem;
  }
  
  .footerLinksDiv {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  
  .footerLogo {
    max-width: 300px; /* Center and reduce logo size for mobile */
    margin-bottom: 1rem;
    display: block;
    margin: 0 auto; /* Center logo */
  }
  
  .socialmedia a {
    margin-right: 15px;
    font-size: 2rem;
    color: #fff;
  }
  
  .footerBelow {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  
  hr {
    width: 90%;
    margin-top: 1rem;
  }
  
  .footerBelow p {
    font-size: 20px;
    color: rgb(255, 255, 255);
  }
  
  /* Increased font size for Contact Us and Services */
  h4 {
    font-size: 2rem;
  }
  
  .footerLinksDiv p {
    font-size: 1.5rem; /* Larger font for contact details */
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .footerLinks {
      flex-direction: column;
      align-items: flex-start; /* Align content to the left */
    }
  
    .footerLogo {
      margin-bottom: 2rem;
    }
  
    .footerLinksDiv {
      margin-left: 30px;
      margin-bottom: 1.5rem;
      align-items: flex-start; /* Align items to the left */
      text-align: left; /* Left align the text */
    }
  
    .footerBelow p {
      font-size: 1.2rem;
    }
  }
  
  </style>
  