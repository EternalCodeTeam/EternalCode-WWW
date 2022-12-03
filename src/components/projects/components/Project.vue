<template>
  <div class="col-lg-6">
    <div class="card-pro">
      <div class="row cent">
        <div class="col-lg-3">
          <img :src="imageUrl" alt="512" class="img-fluid rounded"/>
        </div>

        <div class="col-lg-9">
          <h5>{{ name }}</h5>
          <h6>{{ description }}</h6>
          <a :href="githubUrl" target="_blank">
            <font-awesome-icon icon="fa-solid fa-arrow-right-long"/>
            {{ $t("message.projects.more") }}
          </a>
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
    imageUrl: String,
  },
};
</script>
