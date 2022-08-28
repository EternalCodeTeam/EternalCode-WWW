<template>
  <section id="about">
    <div id="gradient" class="card-ab" data-aos="fade-up">
      <div class="col-lg-8">
        <h1>&nbsp;O nas 🎉</h1>
        <p>Jesteśmy zespołem programistów z wieloletnim doświadczeniem, oferującym mnóstwo usług związanych z branżą
          IT!</p>

        <p>Zgrany zespół to coś, co nas wyróżnia, jesteśmy pionierem tego typu usług na rynku. Oferujemy między
          innymi pomoc dotyczącą serwerów Minecraft & Linux, wsparcie związane z wyborem hostingu, zabezpieczeń
          serwerowych oraz uwielbiamy się dzielić wiedzą na temat programowania!</p>

        Potrzebujesz czegoś więcej? A może chcesz, abyśmy wykonali Ci projekt na najwyższym poziomie na zlecenie?
        A może potrzebujesz mapy, bądź spawna pod serwer Minecraft? Wszystko możemy bez większego trudu
        zrealizować! Więcej znajdziesz <a href=#skills>tutaj</a>

        <p>Skontaktuj się z nami przez <a href=https://discord.gg/FQ7jmGBd6c>discorda</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "about"
};
</script>

<style>
.card-ab {
  border-radius: 12px;
  padding: 5% 5% 4%;

  background: rgb(171, 171, 255);
  background: -moz-linear-gradient(90deg, rgba(171, 171, 255, 1) 12%, rgba(0, 212, 255, 1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(171, 171, 255, 1) 12%, rgba(0, 212, 255, 1) 100%);
  background: linear-gradient(90deg, rgba(171, 171, 255, 1) 12%, rgba(0, 212, 255, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ababff", endColorstr="#00d4ff", GradientType=1);
}

.card-ab h1 {
  font-weight: 800;
  border-left: 5px solid #0f0f0f;
}

.card-ab p {
  margin-top: 3%;
}

#about {
  padding: 0 12% 3% 8%;
}
</style>