<template>
  <div class="stack-content">
    <header class="page-header">
      <h1 class="page-title">Technology Stack</h1>
      <p class="page-subtitle">Advanced tools and frameworks in my arsenal</p>
    </header>
    
    <div class="tech-grid">
      <div v-for="group in stackData" :key="group.title" class="tech-category">
        <h3 class="tech-category-title">{{ group.title }}</h3>
        <div class="tech-items">
          <div 
            v-for="item in group.items" 
            :key="item.name" 
            class="tech-item"
            :class="{ active: selectedTech === item.name }"
            @click="selectTech(item.name)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedTech && filteredProjects.length > 0" class="card">
      <div class="card-header">
        <h2 class="card-title">Projects using {{ selectedTech }}</h2>
        <p class="card-subtitle">Click on any project to view detailed information</p>
      </div>
      <div class="projects-grid">
        <div 
          v-for="project in filteredProjects" 
          :key="project.slug" 
          class="project-card"
          @click="goToProject(project.slug)"
        >
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.tech" :key="tech" class="tech-badge">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedTech && filteredProjects.length === 0" class="card text-center">
      <h2 class="card-title">No Projects Found</h2>
      <p>No projects found using {{ selectedTech }}.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import stackData from '../data/stack.json'
import projectsData from '../data/projects.json'

const selectedTech = ref('')

const filteredProjects = computed(() => {
  if (!selectedTech.value) return []
  return projectsData.filter(project => 
    project.tech.some(tech => tech.toLowerCase().includes(selectedTech.value.toLowerCase()))
  )
})

const selectTech = (tech) => {
  selectedTech.value = selectedTech.value === tech ? '' : tech
}

const goToProject = (slug) => {
  window.location.href = `projects/${slug}.html`
}
</script>