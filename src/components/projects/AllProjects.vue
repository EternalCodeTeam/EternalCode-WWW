<template>


  <section id="AllProjects">
    <div class="projects-section">
      <label class="others-status"> other repositories: {{ buttonText }}</label>
      <button class="toggle-button" :class="{ active: isActive }" @click="toggleActive">
         {{ buttonSymbol }}
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
            <p v-if="project.description === null" >No description provided.</p>
            <p v-else>{{ project.description }}</p>
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
      buttonText: "off",
      buttonSymbol: "▼",
    };
  },
  mounted() {
    if (pinnedRepos.length === 0) {
      setTimeout(() => {
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
      }, 2500);
    } else {
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
    }

  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
      this.buttonText = this.isActive ? "on" : "off";
      this.buttonSymbol = this.isActive ? "▲" : "▼";
    }

  },
};
</script>

<style>

.others-status {
  width: 90%;
  display: inline-block;
  position: relative;
  color: #a1a1a1;
}

.others-status::after {
  content: '';
  display: block;
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: black;

}

.toggle-button {
  position: relative;
  bottom: 20px;
  background-color: #ccc;

  padding: 10px;
  border: none;
  border-radius: 15px;
  height: 45px;
  width: 45px;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 3rem;
  z-index: 3;
}

.toggle-button.active {
  background-color: green;
  color: white;
  margin-bottom: 1rem;
}

.projects-section {
  margin: auto;
  width: 80%;
  position: relative;
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
  transition: transform 0.3s;
}

.single-project.active:hover {
  background-color: #3f3f3f;
  transition: all 0.2s ease;

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

  .project-info {
    margin-left: 1rem;
  }

  .project-info h2 {
    font-size: 1.5rem;
  }

  .project-info p {
    font-size: 1rem;
  }

  .github-logo {
    width: 30px;
    height: 30px;
    margin-left: 1rem;
  }

  .toggle-button {
    position: relative;
    left: 110px;
  }
}
</style>