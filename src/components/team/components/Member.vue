<template>
  <div class="col-xl-3 col-sm-6 mb-5">
    <div class="team-card rounded shadow-sm py-5 px-4">
      <img
        alt=""
        class="img-fluid rounded-circle mb-3 shadow-sm"
        :src="imageUrl"
        width="100"
      />
      <h5 class="mb-0 team-card-title">{{ name }}</h5>
      <span class="small team-card-subtitle">{{ role }}</span>
      <ul class="social mb-0 list-inline mt-3">
        <li class="list-inline-item">
          <a class="social-link" href="{{ githubUrl }}">
            <font-awesome-icon icon="fa-brands fa-github" />
          </a>
        </li>
        <li class="list-inline-item" v-show="linkedinUrl">
          <a class="social-link" href="{{ linkedinUrl }}">
            <svg class="svg-inline--fa" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><circle cx="4" cy="4" r="2" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="0;1"/></circle><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="24" stroke-dashoffset="24" d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.5s" values="24;0"/></path></g></svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Member',
  props: {
    name: String,
    role: String,
    githubUrl: String,
    linkedinUrl: String,
    imageUrl: String
  },
};
</script>
