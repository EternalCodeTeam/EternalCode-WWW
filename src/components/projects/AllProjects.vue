<template>
  <section id="all-projects">
    <div class="projects-section">
      <label class="others-status" @click="toggleActive">
        {{ $t("message.projects.other") }}
        {{ buttonSymbol }}
      </label>
      <div class="all-projects-section" :class="{ active: isActive}">
        <div class="row projects-row">
          <Project v-for="(project, index) in projects"
                   :key="index"
                   :name="project.name"
                   :description="project.description"
                   :githubUrl="`https://github.com/EternalCodeTeam/${project.name}`"
                   :hrefText="$t('message.projects.more')"
                   :imageUrl="'/assets/img/projects/placeholder.webp'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {pinnedRepos} from "@/components/projects/Projects.vue";
import Project from "@/components/projects/components/Project.vue";
//ignored repositories:
const ignoredRepos = [".github"];

export default {
  name: "Projects",
  components: {
    Project
  },
  data() {
    return {
      projects: [],
      isActive: false,
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
                  .filter((project) => !ignoredRepos.includes(project.name))
                  .map((project) => ({
                    name: project.name,
                    description: project.description,
                  }));
            });
      }, 3000);

    } else {
      fetch("https://api.github.com/users/EternalCodeTeam/repos?type=public")
          .then((response) => response.json())
          .then((data) => {
            this.projects = data
                .filter((project) => !pinnedRepos.includes(project.name))
                .filter((project) => !ignoredRepos.includes(project.name))
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
      this.buttonSymbol = this.isActive ? "▲" : "▼";
    }

  },
};
</script>

<style>

.others-status {
  position: center;
  width: 90%;
  display: inline-block;
  text-align: center;
  color: #a1a1a1;
  font-family: "Inter", sans-serif;
  font-size: 1.9rem;
  cursor: pointer;
  margin-bottom: 1rem;
}

.card-pro {
  background-color: var(--light-gray);
  border-radius: 12px;
  margin-bottom: 2%;
  padding: 6% 10%;
  transition: 0.5s;
  height: 100%;
}

.projects-section {
  padding: 3% 12% 3% 12%;

}

.all-projects-section.active {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  margin: 0;
  padding: 0;
}

.all-projects-section > div {
  margin: 10px 0;
}

.others-status {
  width: 100%;
  text-align: center;
  margin: auto;
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

.all-projects-section {
  display: none;
  transform: translateY(-50px);
  transition: all 0.5s ease;
  z-index: 0;
}

.all-projects-section.active {
  display: block;
  transform: translateY(0);
}

@media only screen and (max-width: 1000px) {
  .projects-section {
    position: center;
    padding: 5px;
  }

}
</style>