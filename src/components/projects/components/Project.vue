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
            <ul class="link-icons">
              <li v-if="githubUrl" class="link-icon">
                <a :href="githubUrl" target="_blank">
                  <img alt="github" src="/assets/img/projects/github-logo.webp">
                </a>
              </li>
              <li v-if="spigotUrl" class="link-icon">
                <a :href="spigotUrl" target="_blank">
                  <img alt="spigot" src="/assets/img/projects/spigot-logo.webp">
                </a>
              </li>
              <li v-if="modrinthUrl" class="link-icon">
                <a :href="modrinthUrl" target="_blank">
                  <img alt="modrinth" src="/assets/img/projects/modrinth-logo.webp">
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

