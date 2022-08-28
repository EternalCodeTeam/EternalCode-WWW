<template>
  <section id="about">
    <div class="card-ab">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <h1>&nbsp;O nas 🎉</h1>
          <p>Jesteśmy zespołem programistów z wieloletnim doświadczeniem, oferującym mnóstwo usług związanych z branżą
            IT!</p>

          <p>Zgrany zespół to coś, co nas wyróżnia, jesteśmy pionierem tego typu usług na rynku. Oferujemy między
            innymi pomoc dotyczącą serwerów Minecraft & Linux, wsparcie związane z wyborem hostingu, zabezpieczeń
            serwerowych oraz uwielbiamy się dzielić wiedzą na temat programowania!</p>

          <p>Potrzebujesz czegoś więcej? A może chcesz, abyśmy wykonali Ci projekt na najwyższym poziomie na zlecenie?
            A może potrzebujesz mapy, bądź spawna pod serwer Minecraft? Wszystko możemy bez większego trudu
            zrealizować!</p>

        </div>
        <div class="intellij-container col-lg-6 col-md-12">
          <img alt="intellij" class="intellij" src="/assets/img/eternalcore-intellij.png">
        </div>
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
@media only screen and (max-width: 1000px) {
  #about {
    padding: 0 7% 3% 8%;
  }

  .card-ab {
    border-radius: 12px;
    padding: 15% 15% 4% 10%;
  }

  .card-ab h1 {
    border-left: 5px solid #0f0f0f;
  }

  .card-ab p {
    margin-top: 8%;
  }
}

.card-ab {
  border-radius: 12px;
  padding: 5% 6%;

  background: rgb(63, 94, 251);
  background: -moz-linear-gradient(90deg, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
  background: linear-gradient(90deg, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3f5efb", endColorstr="#fc466b", GradientType=1);
  color: #ffffff;
}

.card-ab h1 {
  font-weight: 800;
  border-left: 5px solid #ffffff;
}

.card-ab p {
  margin-top: 3%;
}

#about {
  padding: 0 12% 3% 8%;
}

.intellij-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px !important;
}


.intellij {
  box-shadow: rgba(0, 0, 0, 0.8) 0 0 15px;
  width: 100%;
  border-radius: 15px;
}

</style>