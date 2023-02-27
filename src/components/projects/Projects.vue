<template>
  <section id="projects">

    <h1>{{ $t("message.projects.title") }}</h1>
    <p>{{ $t("message.projects.subtitle") }}</p>

    <div class="row projects-row">
      <Project
          description="♾️ All the most important server functions in one! Made with love by EternalCodeTeam ❤️"
          githubUrl="https://github.com/EternalCodeTeam/EternalCore"
          imageUrl="/assets/img/projects/infinity.webp"
          name="EternalCore"
          :hrefText="$t('message.projects.more')"
      />
      <Project
          description="📝 The most intelligent chat formatting plugin with minimessages support!"
          githubUrl="https://github.com/EternalCodeTeam/ChatFormatter"
          spigotUrl="https://www.spigotmc.org/resources/102212/"
          modrinth-url="https://modrinth.com/plugin/chatformatter"
          imageUrl="/assets/img/projects/chat.webp"
          name="ChatFormatter"
          :hrefText="$t('message.projects.more')"
      />
      <Project
          description="⚔ Combat Logging system for Minecraft!"
          githubUrl="https://github.com/EternalCodeTeam/EternalCombatLog"
          imageUrl="/assets/img/projects/swords.webp"
          name="CombatLog"
          :hrefText="$t('message.projects.more')"
      />
      <Project
          description="👮‍♂️ EternalCode discord community officer!"
          githubUrl="https://github.com/EternalCodeTeam/DiscordOfficer"
          imageUrl="/assets/img/projects/police-officer.webp"
          name="DiscordOfficer"
          :hrefText="$t('message.projects.more')"
      />
      <Project
          description="📖 All documentations of EternalCodeTeam Projects & Tutorials 😍"
          githubUrl="https://github.com/EternalCodeTeam/Docs"
          imageUrl="/assets/img/projects/folder.webp"
          name="Docs"
          :hrefText="$t('message.projects.more')"
      />
      <Project
          description="🏬 EternalCodeTeam website based on Bootstrap 5 and Vue.js!"
          githubUrl="https://github.com/EternalCodeTeam/EternalCode-WWW"
          imageUrl="/assets/img/projects/web.webp"
          name="EternalCode-WWW"
          :hrefText="$t('message.projects.more')"
      />

    </div>
  </section>
</template>

<script>
import Project from "./components/Project.vue";

export default {
  name: "Projects",
  components: {
    Project,
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

.project-card {
  position: relative;
  justify-items: auto;
}

.link-icons {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  height: auto;
  width: auto;
}

.link-icon {
  bottom: -100px;
  filter: brightness(0) invert(0.50);
  height: 50px;
  width: 33%;
}
.link-icon:hover {
  filter: brightness(0) invert(0.90) drop-shadow(0 0 0.75rem rgb(197, 197, 197));
}
</style>