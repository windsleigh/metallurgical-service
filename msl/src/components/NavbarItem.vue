<template>
    <div :class="['navbar-container', { scrolled: isScrolled }]">
        <div class="nav-links desktop-nav">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/services">Services</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>

        </div>
        <button class="hamburger mobile-nav" @click="toggleSidebar" v-show="!isSidebarOpen">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </button>

        <div :class="['sidebar', sidebarClass]">
            <button class="close-button" @click="toggleSidebar">
                <svg height="24px" width="24px" viewBox="0 0 24 24">
                    <line x1="1" y1="23" x2="23" y2="1" stroke="white" stroke-width="2" />
                    <line x1="1" y1="1" x2="23" y2="23" stroke="white" stroke-width="2" />
                </svg>
            </button>
            <div class="sidebar-links">
                <RouterLink to="/" @click="toggleSidebar">About Me</RouterLink>
                <RouterLink to="/projects" @click="toggleSidebar">Projects</RouterLink>
                <RouterLink to="/contact" @click="toggleSidebar">Contact</RouterLink>
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
.navbar-container {
    display: flex;
    justify-content: center;
    /* Center the entire navbar */
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 8vh;
    top: 0;
    left: 0;
    padding: 0 5vw;
    background-color: rgb(255, 255, 255);
    transition: background-color 0.5s ease-in-out;
    z-index: 100;
}

.navbar-container.scrolled {
    background-color: rgb(255, 255, 255);
    opacity: 0.8;
}

.nav-links {
    display: flex;
    justify-content: center;
    /* Center the links within the navbar */
    align-items: center;
    gap: 40px;
    /* Equal spacing between buttons */
    font-size: 1.3rem;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.nav-links a {
    position: relative;
    text-decoration: none;
    color: rgb(24, 141, 156);
    text-transform: uppercase;
    letter-spacing: 4px;
}

.nav-links a:visited {
    color: rgb(24, 141, 156);
}

.nav-links a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background-color: #ffffff;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.nav-links a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
    background-color: rgb(255, 255, 255);
}

.RouterLink-active,
.RouterLink-exact-active,
.RouterLink-active:hover,
.RouterLink-exact-active:hover {
    color: white;
    text-decoration: none;
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
    /* Equal spacing between sidebar links */
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
</style>