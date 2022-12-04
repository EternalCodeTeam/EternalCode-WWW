<template>
  <div class="col-xl-3 col-sm-6 mb-5">
    <div class="team-card rounded shadow-sm py-5 px-4">
      <img :src="imageUrl" alt="" class="img-fluid rounded-circle mb-3 shadow-sm" width="100"/>
      <h5 class="mb-0 team-card-title">{{ name }}</h5>
      <span class="small team-card-subtitle">{{ role }}</span>
      <ul class="social mb-0 list-inline mt-3">
        <li class="list-inline-item">
          <a class="social-link" :href="githubUrl">
            <font-awesome-icon icon="fa-brands fa-github"/>
          </a>
        </li>
        <li class="list-inline-item" v-show="linkedinUrl">
          <a class="social-link" :href="linkedinUrl">
            <font-awesome-icon icon="fa-brands fa-linkedin"/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Member",
  props: {
    name: String,
    role: String,
    githubUrl: String,
    linkedinUrl: String,
    imageUrl: String,
  },
};
</script>

<style>
.team-card {
  background: #2a2c2c;
  transition: 0.3s;
}

.team-card:hover {
  transform: scale(1.03);
}

.team-card-title {
  color: #fff;
}

.team-card-subtitle {
  color: #fff;
}

.list-inline-item {
  margin-right: 0 !important;
}
</style>