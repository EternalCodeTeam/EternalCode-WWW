<template>
  <div class="col-lg-6">
    <div class="card-pro">
      <div class="row cent">
        <div class="col-lg-3">
          <img
            alt="512"
            class="img-fluid rounded"
            :src="imageUrl"
          />
        </div>

        <div class="col-lg-9">
          <h5>{{ name }}</h5>
          <h6>{{ description }}</h6>
          <a :href="githubUrl" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="9" stroke-dasharray="60" stroke-dashoffset="60"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></circle><path stroke-dasharray="12" stroke-dashoffset="12" d="M17 12H7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M7 12L11 16M7 12L11 8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"/></path></g></g></svg>            {{ $t('message.projects.more') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Project',
  props: {
    name: String,
    description: String,
    githubUrl: String,
    imageUrl: String
  },
};
</script>
