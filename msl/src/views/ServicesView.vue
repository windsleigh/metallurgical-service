<template>
  <section id="services" class="services-section">
    <h2 class="title">SERVICES</h2>

    <div class="tabs">
      <span
        :class="['tab', currentTab === 'LABORATORY' ? 'active' : '']"
        @click="switchTab('LABORATORY')"
      >
        LABORATORY
      </span>
      <span
        :class="['tab', currentTab === 'CONSULTORY' ? 'active' : '']"
        @click="switchTab('CONSULTORY')"
      >
        CONSULTORY
      </span>
    </div>

    <div class="services-container">
      <aside class="menu">
        <ul>
          <li
            v-for="(item, index) in currentList"
            :key="index"
            :class="{ active: selectedItem.name === item.name }"
            @click="selectItem(item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </aside>

      <main class="content">
        <h3>{{ selectedItem.name }}</h3>
        <img :src="selectedItem.image" :alt="selectedItem.name" />
        <p>{{ selectedItem.description }}</p>
      </main>
    </div>
  </section>
</template>

<script>
import PartnerImage1 from '../assets/lab1.jpg'
import PartnerImage2 from '../assets/lab2.jpg'

export default {
  data() {
    return {
      currentTab: 'LABORATORY',
      selectedItem: {},
      laboratoryList: [
        {
          name: 'HYDRO METALLURGY',
          image: PartnerImage1,
          description:
            'Proceso que utiliza soluciones acuosas para extraer metales. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          name: 'FLOTATION',
          image: PartnerImage2,
          description: 'Separación de minerales por flotación. Lorem ipsum dolor sit amet.'
        }
      ],
      consultoryList: [
        {
          name: 'STRATEGIC PLANNING',
          image: PartnerImage1,
          description: 'Planificación de procesos industriales. Lorem ipsum dolor sit amet.'
        },
        {
          name: 'COST ANALYSIS',
          image: PartnerImage2,
          description: 'Análisis de costos operacionales. Lorem ipsum dolor sit amet.'
        }
      ]
    }
  },
  computed: {
    currentList() {
      return this.currentTab === 'LABORATORY' ? this.laboratoryList : this.consultoryList
    }
  },
  methods: {
    switchTab(tab) {
      this.currentTab = tab
      this.selectedItem = this.currentList[0]
    },
    selectItem(item) {
      this.selectedItem = item
    }
  },
  mounted() {
    this.selectedItem = this.laboratoryList[0]
  }
}
</script>

<style scoped>
.services-section {
  width: 100%;
  min-height: 100vh;
  padding: 2rem 4rem;
  background-color: #f8f9fb;
  font-family: sans-serif;
  box-sizing: border-box;
}

.title {
  text-align: center;
  color: #007bff;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.tab {
  margin: 0 2rem;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  padding-bottom: 5px;
}

.tab.active {
  border-bottom: 3px solid black;
}

.services-container {
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.menu {
  min-width: 220px;
  border-right: 2px solid #ccc;
  padding-right: 1rem;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  margin: 1rem 0;
  cursor: pointer;
  font-size: 1rem;
  color: #333;
  transition: color 0.2s;
}

.menu li.active {
  font-weight: bold;
  color: #000;
}

.content {
  flex: 1;
  max-width: 700px;
  padding-left: 2rem;
}

.content h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.content img {
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.content p {
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .services-container {
    flex-direction: column;
    align-items: center;
  }

  .menu {
    border-right: none;
    border-bottom: 2px solid #ccc;
    width: 100%;
    padding: 0 0 1rem 0;
  }

  .menu ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .menu li {
    font-size: 0.95rem;
    margin: 0.5rem 0;
  }

  .content {
    padding-left: 0;
    max-width: 100%;
    text-align: center;
  }

  .content img {
    max-width: 90%;
  }
}

@media (max-width: 600px) {
  .tabs {
    flex-direction: column;
    align-items: center;
    font-size: 1.1rem;
    gap: 0.5rem;
  }

  .tab {
    margin: 0;
  }

  .title {
    font-size: 1.5rem;
  }

  .content h3 {
    font-size: 1.5rem;
  }

  .content p {
    font-size: 0.95rem;
    padding: 0 1rem;
  }
}
</style>
