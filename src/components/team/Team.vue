<template>
  <section id="team">
    <h1>{{ $t("message.team.title") }}</h1>
    <p>{{ $t("message.team.subtitle") }}</p>

    <div class="container py-5">
      <div class="row team-container text-center">

        <Member
            githubUrl="https://github.com/vLuckyyy"
            imageUrl="https://avatars-githubusercontent.webp.se/u/65517973?v=4"
            linkedinUrl="https://www.linkedin.com/in/vlucky"
            name="Martin Sulikowski"
            role="Lead Team"
        />
        <Member
            githubUrl="https://github.com/Rollczi/"
            imageUrl="https://avatars-githubusercontent.webp.se/u/49173834?v=4"
            linkedinUrl="https://www.linkedin.com/in/rollczi/"
            name="Norbert Dejlich"
            role="Lead Team"
        />
        <Member
            githubUrl="https://github.com/Hyd3r1/"
            imageUrl="https://avatars-githubusercontent.webp.se/u/60399586?v=4"
            linkedinUrl="https://www.linkedin.com/in/khallercom/"
            name="Krzysztof Haller"
            role="Lead Team"
        />
        <Member
            githubUrl="https://github.com/Osnixer/"
            imageUrl="https://avatars-githubusercontent.webp.se/u/77621271?v=4"
            name="Piotr Zych"
            role="Lead Team"
        />
        <Member
            githubUrl="https://github.com/Jakubk15"
            imageUrl="https://avatars-githubusercontent.webp.se/u/77227023?v=4"
            name="Jakub"
            role="Moderator"
        />
        <Member
            githubUrl="https://github.com/eripe14"
            imageUrl="https://avatars-githubusercontent.webp.se/u/80169196?v=4"
            name="Karol Dronia"
            role="Team Developer"
        />
        <Member
            githubUrl="https://github.com/Kamicjusz"
            imageUrl="https://avatars-githubusercontent.webp.se/u/66566758?v=4"
            name="Kamil Jęczeń"
            role="Student"
        />
        <Member
            githubUrl="https://github.com/Embrejs"
            imageUrl="https://avatars.githubusercontent.com/u/80779749?v=4"
            name="CitralFlo"
            role="Student"
        />
      </div>
    </div>
  </section>
</template>
<script>
import Member from "./components/Member.vue";

export default {
  components: {
    Member,
  },
};
</script>

<style>
@media only screen and (max-width: 1000px) {
  #team h1 {
    font-size: 30px;
  }

  #team p {
    font-size: small;
    margin-bottom: 15%;
  }
}

#team h1 {
  font-weight: 800;
  color: #d3d3d380;
  font-size: 40px;
  border: 2px;
  text-align: center;
}

#team p {
  font-weight: 500;
  color: #d3d3d354;
  font-size: medium;
  border: 2px;
  text-align: center;
}

.team-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}
</style>
