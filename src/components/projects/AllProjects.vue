<template>
  <section id="all-projects">
    <div class="all-projects-section">
      <label class="others-status" @click="toggleActive">
        {{ $t("message.projects.other") }}
        {{ buttonSymbol }}
      </label>
      <div class="all-projects-tab-container">
        <div class="all-projects-tab" :class="{ active: isActive}">
          <div class="row projects-row">
            <Project v-for="(project, index) in projects"
                     :key="index"
                     :name="project.name"
                     :description="project.description"
                     :githubUrl="`https://github.com/EternalCodeTeam/${project.name}`"
                     :imageUrl="'/assets/img/projects/language/' + project.language + '.webp'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import Project from "@/components/projects/components/Project.vue";
import {notPinnedProjects} from "@/components/projects/ProjectsFetch.ts";

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
    notPinnedProjects.then((projects) => this.projects = projects);
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
      this.buttonSymbol = this.isActive ? "▲" : "▼";
      document.scrollIntoView({behavior: "smooth"});
    },

  },
};
</script>

<style>
#all-projects {
  padding: 0% 12% 3% 12%;
}

.all-projects-tab-container {
  overflow: hidden;
}

.others-status {
  position: center;
  width: 90%;
  display: inline-block;
  text-align: center;
  color: var(--primary-title);
  font-weight: 800;

  font-size: 30px;
  cursor: pointer;
  margin-bottom: 1rem;
}

.all-projects-tab {
  z-index: -1;
  margin-top: -110vh;
  transition-duration: 0.5s;
  opacity: 1;
}

.all-projects-tab.active {
  display: block;
  margin-top: 50px;
  transition-duration: 0.5s;
  opacity: 1;
}

.row.projects-row img {
  width: 65%;
}


#all-projects > div {
  margin: 0;
  padding: 0;
}

.others-status {
  z-index: 3;
  width: 100%;
  text-align: center;
  margin: auto;
}

@media only screen and (max-width: 1000px) {
  .all-projects-section {
    position: center;
    padding: 5px;
  }

  .all-projects-tab {
    margin-top: -500vh;
  }

}
</style>