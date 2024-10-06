<template>
    <div :class="['navbar-container', { scrolled: isScrolled }]">
        <!-- Logo Section -->
        <div class="logo">
            <RouterLink to="/">
                <img src="./logo.png" alt="Logo" class="logo-image" />
            </RouterLink>
        </div>

        <!-- Navigation Links -->
        <div class="nav-links desktop-nav">
            <RouterLink to="/" :class="{ 'active-link': $route.path === '/' }">Home</RouterLink>
            <RouterLink to="/services" :class="{ 'active-link': $route.path === '/services' }">Services</RouterLink>
            <RouterLink to="/about" :class="{ 'active-link': $route.path === '/about' }">About</RouterLink>
            <RouterLink to="/contact" :class="{ 'active-link': $route.path === '/contact' }">Contact</RouterLink>
        </div>

        <!-- Mobile Navigation -->
        <button class="hamburger mobile-nav" @click="toggleSidebar" v-show="!isSidebarOpen">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </button>

        <!-- Sidebar for Mobile -->
        <div :class="['sidebar', sidebarClass]">
            <button class="close-button" @click="toggleSidebar">
                <svg height="24px" width="24px" viewBox="0 0 24 24">
                    <line x1="1" y1="23" x2="23" y2="1" stroke="white" stroke-width="2" />
                    <line x1="1" y1="1" x2="23" y2="23" stroke="white" stroke-width="2" />
                </svg>
            </button>
            <div class="sidebar-links">
                <RouterLink to="/" @click="toggleSidebar" :class="{ 'active-link': $route.path === '/' }">About Me
                </RouterLink>
                <RouterLink to="/projects" @click="toggleSidebar"
                    :class="{ 'active-link': $route.path === '/projects' }">Projects</RouterLink>
                <RouterLink to="/contact" @click="toggleSidebar" :class="{ 'active-link': $route.path === '/contact' }">
                    Contact</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isScrolled = ref(false)
const isSidebarOpen = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
}

const sidebarClass = computed(() => (isSidebarOpen.value ? 'open' : 'closed'))
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 20vh;
    top: 0;
    left: 0;
    padding: 0 5vw;
    background-color: rgb(255, 255, 255);
    transition: background-color 0.5s ease-in-out;
    z-index: 100;
    user-select: none;
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    padding-top: 1rem;
    height: 180px;
    width: auto;
}

.navbar-container.scrolled {
    background-color: rgb(255, 255, 255);
    opacity: 0.8;
}

.nav-links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
    font-size: 2rem;
    outline: none;
    -webkit-user-select: none;
    /* Safari */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* IE10+/Edge */
    user-select: none;
    /* Standard */

}

.nav-links a {
    position: relative;
    text-decoration: none;
    color: rgb(0, 88, 160);
    text-transform: uppercase;
    letter-spacing: 4px;
    outline: none;
    -webkit-user-select: none;
    /* Safari */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* IE10+/Edge */
    user-select: none;
    /* Standard */

}

/* Style for the active navigation link */
.nav-links a.active-link::after,
.sidebar-links a.active-link::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background-color: rgb(41, 28, 218);
    position: absolute;
    bottom: -5px;
    left: 0;
}

/* Ensure links are relatively positioned to allow ::after positioning */
.nav-links a,
.sidebar-links a {
    position: relative;
}



.hamburger {
    display: none;
    flex-direction: column;
    gap: 4px;
    border: none;
    background: none;
    cursor: pointer;
    padding-right: 10px;
}

.bar {
    width: 24px;
    height: 3px;
    background-color: rgb(24, 141, 156);
}

@media (min-width: 769px) {
    .nav-links {
        display: flex;
    }

    .hamburger {
        display: none;
    }
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .hamburger {
        display: flex;
    }
}

.sidebar {
    position: absolute;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 80vw;
    background-color: #0f2226;
    transition: right 0.5s ease-in-out;
    z-index: 99;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sidebar.open {
    right: 0;
}

.sidebar.closed {
    right: -100%;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    z-index: 101;
    padding-right: 1rem;
    padding-top: 1rem;
}

.sidebar-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    font-size: 2rem;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.sidebar-links a {
    color: white;
    text-decoration: none;
}

.sidebar-links a:visited {
    color: white;
}

.sidebar-links a:hover {
    color: rgb(255, 255, 255);
    background-color: #000;
    border-radius: 16px;
    padding: 8px;
}

.nav-links a,
.sidebar-links a {
    position: relative;
    outline: none;
    font-family: 'Poppins', sans-serif;
    /* Apply the Poppins font */
    font-weight: 600;
    /* Bold font weight */
}
</style>
