<template>
  <section id="projects">
    <h1>{{ $t("message.projects.title") }}</h1>
    <p>{{ $t("message.projects.subtitle") }}</p>
    <div class="row projects-row">
      <Project
          v-for="(project, index) in projects"
          :key="index"
          :description="project.description"
          :githubUrl="project.link"
          :hrefText="$t('message.projects.more')"
          :imageUrl="'/assets/img/projects/logo/' + project.repo + '_icon.webp'"
          :spigotUrl="projectLinks[project.repo]?.spigotmc"
          :modrinthUrl="projectLinks[project.repo]?.modrinth"
          :name="project.repo"
      />
    </div>
  </section>
</template>

<script>
import Project from "./components/Project.vue";
import projectLinks from "@/info/project_links.json"

export default {
  name: "Projects",
  components: {
    Project,
  },
  data() {
    return {
      projects: [],
      projectLinks: projectLinks
    };
  },
  mounted() {
    fetch("https://gh-pinned-repos.egoist.dev/?username=eternalcodeteam")
        .then(response => response.json())
        .then(data => {
          this.projects = data;
        });
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