<template>
  <div class="col-lg-6">
    <div class="card-pro">
      <div class="row cent">
        <div class="col-lg-3">
          <img :src="imageUrl" alt="512" class="img-fluid rounded"/>
        </div>


        <div class="col-lg-9">
          <div class="project-card">
            <h5>{{ name }}</h5>
            <h6 v-if="description">{{ description }}</h6>
            <h6 v-else>{{ $t("message.projects.noDescription") }}</h6>

            <!-- GitHub Link -->
            <ul class="src-buttons">
              <li v-if="githubUrl">
                <a :href="githubUrl" target="_blank">
                  <button class="button-link">
                    <img alt="githubUrl" src="/assets/img/projects/GitHub-logo-short.webp">
                  </button>
                </a>
              </li>

              <!-- Spigot Link -->
              <li v-if="spigotUrl">
                <a :href="spigotUrl" target="_blank">
                  <button class="button-link">
                    <img alt="spigotUrl" src="/assets/img/projects/spigot-logo-short.webp">
                  </button>
                </a>
              </li>

              <!-- Modrinth Link -->
              <li v-if="modrinthUrl">
                <a :href="modrinthUrl" target="_blank">
                  <button class="button-link">
                    <img alt="modrinthUrl" src="/assets/img/projects/modrinth-logo-short.webp">
                  </button>
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Project",
  props: {
    name: String,
    description: String,
    githubUrl: String,
    spigotUrl: String,
    modrinthUrl: String,
    imageUrl: String,
  },
};
</script>

<style >
.card-pro {
  background-color: var(--light-gray);
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
  color: var(--secondary-title);
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

.src-buttons {
  display: flex;
  list-style: none;
  padding: 0;
  width: 50%;
  margin-top: 15px;
}

.src-buttons li {
  margin-right: 10px;
}

.src-buttons li:last-child {
  margin-right: 0;
}

.src-buttons li:first-child {
  margin-left: -10px;
}

.button-link {
  border: none;
  background-color: transparent;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}

.button-link:hover {
  /* FOR GLOW EFFECT */
  filter: drop-shadow(0 0 0.7rem rgb(115, 115, 115)) drop-shadow(0 0 0.7rem rgb(115, 115, 115));
  color: #111;
}

.button-link:hover img {
  filter: brightness(0) invert(0.75);
}

.src-buttons img {
  filter: brightness(0) invert(0.50);
  max-width: 50px;
  max-height: 50px;
  width: auto;
}

@media only screen and (max-width: 1000px) {
  .src-buttons {
    width: 70%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin: auto;
  }

  .col-lg-3 {
    margin-bottom: 10%;
  }

  .src-buttons li {
    margin-right: 5px;
  }

  .button-link {
    height: 40px;
    width: 40px;
  }

  .src-buttons img {
    margin-top: 5px;
  }

  .card-pro {
    margin-bottom: 5%;
    padding: 15% 10% 15% 12%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-pro * {
    text-align: center;
    position: center;
  }

  .card-pro h5 {
    color: var(--primary-title);
  }

  .card-pro h6 {
    color: var(--secondary-title);
  }
}
</style>