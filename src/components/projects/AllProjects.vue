<template>


  <section id="AllProjects">
    <div class="projects-section">
      <button class="toggle-button" :class="{ active: isActive }" @click="toggleActive">
        other repositories: {{ buttonText }}
      </button>
      <div class="All-projects-section" :class="{ active: isActive}">
        <div v-for="project in projects"
             :key="project.name"
             class="single-project"
             :class="{ active: isActive}">
          <a :href="`https://github.com/EternalCodeTeam/${project.name}`"
             target="_blank">
            <img class="github-logo" alt="githubUrl" src="/assets/img/projects/GitHub-logo-short.webp">
          </a>
          <div class="project-info">
            <h2>{{ project.name }}</h2>
            <p>{{ project.description }}</p>
            <p v-if="project.description === null">No description provided.</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {pinnedRepos} from "@/components/projects/Projects.vue";

export default {
  name: "Projects",
  data() {
    return {
      projects: [],
      isActive: false,
      buttonText: "Off",
    };
  },
  mounted() {
    fetch("https://api.github.com/users/EternalCodeTeam/repos?type=public")
        .then((response) => response.json())
        .then((data) => {
          this.projects = data
              .filter((project) => !pinnedRepos.includes(project.name))
              .map((project) => ({
                name: project.name,
                description: project.description,
              }));
        });

  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
      this.buttonText = this.isActive ? "on" : "off";
    }

  },
};
</script>

<style>
.toggle-button {
  background-color: #ccc;
  padding: 15px;
  border: none;
  border-radius: 5px;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 3rem;
}

.toggle-button.active {
  background-color: green;
  color: white;
  margin-bottom: 1rem;
}

.projects-section {

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.single-project {
  width: 100%;
  margin: 20px;
  padding: 20px;
  background-color: #2f2f2f;
  border-radius: 40px;
  opacity: 0;
  display: flex;
  align-items: center;
  transform: translateY(50px);
  animation-name: slide-in;
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

}

.project-info {
  flex-grow: 1;
  margin-left: 2rem;
  color: #a1a1a1;
}

@keyframes slide-in {
  from {
    scale: 0.5;
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    scale: 1;
    opacity: 1;
    transform: translateY(0);
  }
}

.github-logo {
  background-color: transparent;
  filter: brightness(0) invert(0);
  width: 50px;
  height: 50px;
  margin-left: 1rem;
}

.single-project:nth-child(2n) {
  transform: translateX(-100%);
}

.single-project.active {
  transform: translateX(0);
}


.All-projects-section {
  display: none;
  transform: translateY(-50px);
  transition: all 0.5s ease;
  z-index: 0;
}

.All-projects-section.active {
  display: block;
  transform: translateY(0);
}
@media only screen and (max-width: 1000px) {
  .projects-section {
    position: center;
    padding: 5px;
  }

  .single-project {
    align-items: center;
    width: 90%;
    padding: 5px;
  }

 .project-info{
    margin-left: 1rem;
  }

 .project-info h2{
    font-size: 1.5rem;
  }

 .project-info p{
    font-size: 1rem;
  }

  .github-logo {
    width: 30px;
    height: 30px;
    margin-left: 1rem;
  }

}
</style>