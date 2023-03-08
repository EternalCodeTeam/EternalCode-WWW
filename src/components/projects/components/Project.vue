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
                    <img alt="githubUrl" src="/assets/img/projects/github-logo.webp">
                  </button>
                </a>
              </li>

              <!-- Spigot Link -->
              <li v-if="spigotUrl">
                <a :href="spigotUrl" target="_blank">
                  <button class="button-link">
                    <img alt="spigotUrl" src="/assets/img/projects/spigot-logo.webp">
                  </button>
                </a>
              </li>

              <!-- Modrinth Link -->
              <li v-if="modrinthUrl">
                <a :href="modrinthUrl" target="_blank">
                  <button class="button-link">
                    <img alt="modrinthUrl" src="/assets/img/projects/modrinth-logo.webp">
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

    display: inline-block;
    justify-content: center;
    align-items: center;
  }

  .src-buttons img {
    margin-top: 10px;
  }
}

.src-buttons {
  display: flex;
  /* W celu wyśrodkowania przycisków wyłącz z komentarza kod: i zmien `space-between` na center \/ */
  justify-content: space-between;
  /* align-items: center; */
  /* justify-items: center; */
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin-top: 15px;
}

.src-buttons li {
  width: 33.33%;
  margin-right: 10px;
}

.src-buttons li:last-child {
  margin-right: 0;
}

.button-link {
  border-style: solid;
  border-color: #6d6d6d;
  border-radius: 20px;
  border-width: 4px;
  background: none;
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}

.button-link:hover {
  filter: drop-shadow(0 0 0.75rem rgb(150, 150, 150));
  transform: translateY(-5px);
  background-color: #6d6d6d;
  border-color: #3d3d3d;
}

.button-link:hover img {
  filter: brightness(0) invert(0.70);
}

.src-buttons img {
  filter: brightness(0) invert(0.50);
  width: 100%;
  height: auto;
}

</style>