<template>
  <section id="projects">
    <h1>{{ $t("message.projects.title") }}</h1>
    <p>{{ $t("message.projects.subtitle") }}</p>
    <div class="row projects-row">
      <Project
          v-for="(project, index) in this.projects"
          :key="index"
          :name="project.name"
          :description="project.description"
          :imageUrl="'/assets/img/projects/logo/' + project.name + '_icon.webp'"
          :githubUrl="project.link"
          :spigotUrl="projectLinks[project.name]?.spigotmc"
          :modrinthUrl="projectLinks[project.name]?.modrinth"
      />
    </div>
  </section>
</template>

<script>
import Project from "./components/Project.vue";
import projectLinks from "@/info/project_links.json";
import {pinnedProjects} from "@/components/projects/ProjectsFetch.ts";

export default {
  name: "Projects",
  components: {
    Project,
  },
  data() {
    return {
      projects: [],
      projectLinks: projectLinks,
    };
  },
  mounted() {
    pinnedProjects.then((projects) => this.projects = projects);
  }
};
</script>

<style>
.projects-row {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
}

.projects-row > div {
  margin: 10px 0;
}

#projects {
  padding: 3% 12% 3% 12%;
}

#projects h1 {
  font-weight: 800;
  color: var(--primary-title);
  font-size: 40px;
  border: 2px;
  margin-bottom: 1%;
  text-align: center;
}

#projects p {
  font-weight: 500;
  color: var(--secondary-title);
  font-size: medium;
  margin-top: -10px;
  border: 2px;
  margin-bottom: 5%;
  text-align: center;
}

#projects img {
  width: 65%;
}

@media only screen and (max-width: 1000px) {
  #projects {
    padding: 3% 12%;
    margin: auto;
    justify-content: center;
    align-items: center;
  }

  #projects h1 {
    font-size: 30px;
  }

  #projects p {
    font-size: small;
    margin-bottom: 15%;
  }

  #projects img {
    width: 70%;
    margin-bottom: 10%;
  }

}
</style>