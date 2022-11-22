<template>
  <section id="team">
    <h1>{{ $t("message.team.title") }}</h1>
    <p>{{ $t("message.team.subtitle") }}</p>

    <div class="container py-5">
      <div class="row team-container text-center">

        <Member
          name="Martin Sulikowski"
          role="Lead Team"
          githubUrl="https://github.com/vLuckyyy"
          linkedinUrl="https://www.linkedin.com/in/vlucky"
          imageUrl="https://avatars.githubusercontent.com/u/65517973?v=4"
        />
        <Member
          name="Norbert Dejlich"
          role="Lead Team"
          githubUrl="https://github.com/Rollczi/"
          linkedinUrl="https://www.linkedin.com/in/rollczi/"
          imageUrl="https://avatars.githubusercontent.com/u/49173834?v=4"
        />
        <Member
          name="Krzysztof Haller"
          role="Lead Team"
          githubUrl="https://github.com/Hyd3r1/"
          linkedinUrl="https://www.linkedin.com/in/khallercom/"
          imageUrl="https://avatars.githubusercontent.com/u/60399586?v=4"
        />
        <Member
          name="Piotr Zych"
          role="Lead Team"
          githubUrl="https://github.com/Osnixer/"
          imageUrl="https://avatars.githubusercontent.com/u/77621271?v=4"
        />
        <Member
          name="Jakub"
          role="Moderator"
          githubUrl="https://github.com/Jakubk15"
          imageUrl="https://avatars.githubusercontent.com/u/77227023?v=4"
        />
        <Member
            name="Karol"
            role="Team Developer"
            githubUrl="https://github.com/eripe14"
            imageUrl="https://avatars.githubusercontent.com/u/80169196?s=400"
        />
        <Member
            name="Michał"
            role="Team Developer"
            githubUrl="https://github.com/VelvetDuck"
            imageUrl="https://avatars.githubusercontent.com/u/44951860?v=4"
        />
        <Member
            name="Mateusz"
            role="Team Developer"
            githubUrl="https://github.com/iNyatix"
            imageUrl="https://avatars.githubusercontent.com/u/69016068?v=4"
        />
        <Member
            name="Kamil"
            role="Student"
            githubUrl="https://github.com/Kamicjusz"
            imageUrl="https://avatars.githubusercontent.com/u/66566758?v=4"
        />
      </div>
    </div>
  </section>
</template>
<script>
  import Member from "./components/Member.vue"
  export default {
    components: {
      Member
    }
  }
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
}
</style>