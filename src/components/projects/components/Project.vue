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
            <h6>{{ description }}</h6>

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
    hrefText: String
  },
};
</script>

<style>

@media only screen and (max-width: 1000px) {
  .src-buttons {
    width: 70%;
    position: center;
    display: flex;
    align-items: center;

  }
  .src-buttons li{
    width: 100%;
    margin-right: 5px;
  }
  .button-link {
    height: 40px;
    width: 40px;
  }
  .src-buttons img {
    margin-top: 5px;
  }
}


.src-buttons {
  display: flex;
  list-style: none;
  gap: 1rem;
  padding: 0;
  width: 50%;
  margin-top: 15px;
  height: auto;
}

.src-buttons li {
  width: 30%;
  margin-right: 10px;
  height: 100%;
}

.src-buttons li:last-child {
  margin-right: 0;
}

.button-link {
  border-style: solid;
  border-color: #6d6d6d;
  border-radius: 50%;
  border-width: 3px;
  background-color: transparent;
  height: 50px;
  width: 50px;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 50px;
}

.button-link:hover {
  filter: drop-shadow(0 0 0.75rem rgb(150, 150, 150));
  background-color: #6d6d6d;
  border-color: #3d3d3d;
  color: #111;
  transition: 0.3s ease;

}

.button-link:hover img {
  filter: brightness(0) invert(0.70);
}

.src-buttons img {
  filter: brightness(0) invert(0.50);
  max-width: 50px;
  max-height: 50px;
  height: 70%;
  width: auto;
}

</style>