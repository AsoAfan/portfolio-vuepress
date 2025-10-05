<template>
  <div class="project-detail-content">
    <header class="page-header">
      <h1 class="page-title">{{ project?.title || 'Project Details' }}</h1>
      <p class="page-subtitle">{{ project?.description || 'Detailed project information' }}</p>
    </header>
    
    <div v-if="project" class="project-detail">
      <div class="project-overview card">
        <div class="card-header">
          <h2 class="card-title">Project Overview</h2>
        </div>
        <p>{{ project.details?.overview || project.description }}</p>
      </div>
      
      <div v-if="project.details?.features?.length" class="project-features card">
        <div class="card-header">
          <h2 class="card-title">Key Features</h2>
        </div>
        <ul class="features-list">
          <li v-for="feature in project.details.features" :key="feature">{{ feature }}</li>
        </ul>
      </div>
      
      <div v-if="project.details?.challenges?.length" class="project-challenges card">
        <div class="card-header">
          <h2 class="card-title">Challenges</h2>
        </div>
        <ul class="challenges-list">
          <li v-for="challenge in project.details.challenges" :key="challenge">{{ challenge }}</li>
        </ul>
      </div>
      
      <div v-if="project.details?.results" class="project-results card">
        <div class="card-header">
          <h2 class="card-title">Results</h2>
        </div>
        <p>{{ project.details.results }}</p>
      </div>
      
      <div class="project-tech-stack card">
        <div class="card-header">
          <h2 class="card-title">Technology Stack</h2>
        </div>
        <div class="tech-badges">
          <span v-for="tech in project.tech" :key="tech" class="tech-badge">
            {{ tech }}
          </span>
        </div>
      </div>
      

    </div>
    
    <div v-else class="card text-center">
      <h2 class="card-title">Project Not Found</h2>
      <p>The requested project could not be found.</p>
    </div>
  </div>
  <a href="/projects/" class="back-to-projects">&larr; Back to Projects</a>
  </template>

<script setup>
import { ref, onMounted } from 'vue'
import projectsData from '../data/projects.json'

const project = ref(null)

onMounted(() => {
  // Get slug from URL path
  const path = window.location.pathname
  const slug = path.split('/').pop()?.replace('.html', '')
  project.value = projectsData.find(p => p.slug === slug)
})
</script>
<style scoped>
.back-to-projects {
  display: block;
  width: fit-content;
  /* text-align: center; */
  color: #000;
  text-decoration: none !important;
  border-bottom: 1px solid transparent;
  /* margin: 0 auto; */
  margin-top: 20px;
  transition: all 0.3s;

}
.back-to-projects:hover {
  border-bottom: 1px solid #000;
  color: #000;
}
</style>