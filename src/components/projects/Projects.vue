<template>
  <section id="projects">
    <h1>{{ $t("message.projects.title") }}</h1>
    <p>{{ $t("message.projects.subtitle") }}</p>
    <div v-if="dataReady" class="row projects-row">
      <Project
          v-for="(project, index) in projects"
          :isPinned=pinnedProjects.includes(project.name)
          :key="index"
          :description="project.description"
          :githubUrl="project.link"
          :hrefText="$t('message.projects.more')"
          :imageUrl="'/assets/img/projects/logo/' + project.name + '_icon.webp'"
          :spigotUrl="projectLinks[project.name]?.spigotmc"
          :modrinthUrl="projectLinks[project.name]?.modrinth"
          :name="project.name"
      />
    </div>
  </section>
</template>

<script>
import Project from "./components/Project.vue";
import projectLinks from "@/info/project_links.json";
import { loadRepositories, loadPinnedProjects, orderProjects } from "@/components/projects/projects.ts";

export default {
  name: "Projects",
  components: {
    Project,
  },
  data() {
    return {
      projects: [],
      pinnedProjects: [],
      orderedProjects: [],
      projectLinks: projectLinks,
      dataReady: false,
    };
  },
  computed: {
   function () {
     this.orderedProjects = orderProjects(this.projects, this.pinnedProjects);
   },
  },
  async mounted() {
    await loadRepositories().then((projects) => {
      this.projects = projects;
    });
    await loadPinnedProjects().then((pinnedProjects) => {
      this.pinnedProjects = pinnedProjects;
      console.log(this.pinnedProjects , "pinnedProjects");
    });
    this.dataReady = true;
  },

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

@media only screen and (max-width: 1000px) {
  #projects {
    padding: 3% 12%;
  }

  #projects h1 {
    font-size: 30px;
  }

  #projects p {
    font-size: small;
    margin-bottom: 15%;
  }

  #projects img {
    width: 40%;
    margin-bottom: 10%;
  }

  #projects .card-pro {
    margin-bottom: 5%;
    padding: 15% 10% 15% 12%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-pro h5 {
    color: rgb(167, 167, 167);
  }

  .card-pro h6 {
    color: rgb(153, 150, 150);
  }
}

#projects {
  padding: 3% 12% 3% 12%;
}

#projects h1 {
  font-weight: 800;
  color: #d3d3d380;
  font-size: 40px;
  border: 2px;
  margin-bottom: 1%;
  text-align: center;
}

#projects p {
  font-weight: 500;
  color: #d3d3d354;
  font-size: medium;
  margin-top: -10px;
  border: 2px;
  margin-bottom: 5%;
  text-align: center;
}

#projects img {
  width: 65%;
}

.card-pro {
  background-color: #2a2c2c;
  border-radius: 12px;
  margin-bottom: 2%;
  padding: 6% 10%;
  transition: 0.5s;
  height: 100%;
}

.card-pro a:hover {
  color: #707070;
  transition: 0.5s;
}

.card-pro h5 {
  color: rgb(114, 114, 114);
  font-weight: 600;
}


.card-pro h6 {
  color: rgb(114, 114, 114);
  font-weight: 400;
  font-size: small;
}

.card-pro a {
  font-size: small;
  text-decoration: none;
  color: #a6abaf;
}

</style>