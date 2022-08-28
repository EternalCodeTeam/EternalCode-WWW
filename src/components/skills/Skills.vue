<template>
  <section id="skills" data-aos="fade-up">

    <h1>
      <i class="zap" data-feather="zap"></i> Nasze magiczne moce!
    </h1>

    <div class="row">

      <div class="col-lg-3">
        <div class="card-info">
          <img alt="" class="img-fluid rounded" src="assets/img/java.png">
          <h5>Java</h5>
          <p>W naszym składzie znajdziesz wielu programistów specjalizujących się w tym języku!</p>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card-info">
          <img alt="" src="assets/img/php.png">
          <h5>PHP</h5>
          <p>Potrzebujesz autorskiego Item shopu pod twój serwer Minecraft? Wykonamy dla ciebie backend strony.
            WWW!</p>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card-info">
          <img alt="" src="assets/img/javascript.png">
          <h5>JavaScript</h5>
          <p>Możesz zamówić u nas aplikacje napisane w tym języku, bądź boty przeznaczone na discorda (node.
            Js)&nbsp;</p>
        </div>
      </div>

      <div class="col-lg-3">

        <div class="card-info">
          <img alt="" src="assets/img/kotlin.png">
          <h5>Kotlin</h5>
          <p>Oferujemy wiele usług napisanych w kotlinie w tym pluginy do gry Minecraft, aplikacje.&nbsp;</p>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card-info">
          <img alt="" src="assets/img/linux64.png">
          <h5>Linux</h5>
          <p>Skonfigurujemy Dedyka/VPS specjalnie dla ciebie, instalacja baz danych, panelów typu.
            Pterodactyl!</p>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card-info">
          <img alt="" src="assets/img/brick-wall.png">
          <h5>Budowle</h5>
          <p>Potrzebujesz Spawna, lobby bądź mapy w Minecraft? Możesz zamówić takową właśnie u nas!</p>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card-info">
          <img alt="" src="assets/img/minecraft.png">
          <h5>Minecraft</h5>
          <p>Potrzebujesz pomocy z serwerem Minecraft? Możesz u nas zamówić paczkę pluginów pod serwer
            Minecraft.</p>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card-info">
          <img alt="" src="assets/img/shield.png">
          <h5>Zabezpieczenia</h5>
          <p>Pomożemy zabezpieczyć twój serwer przed atakami botów, DDoS oraz przed exploitami!</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Skills"
};
</script>

<style>
#skills {
  padding: 3% 12% 3% 8%;
}

#skills h1 {
  font-weight: 800;
  color: #92909080;
  font-size: x-large;
  border: 2px;
  margin-bottom: 2%;
}

.card-info {
  background-color: #2a2c2c;
  border-radius: 12px;
  padding: 10% 10% 8%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  transition: 0.5s;
  margin-bottom: 5%;
}

.card-info:hover {
  background-color: #292b2b;
  transition: 0.4s;
}

.card-info h5 {
  color: rgb(196, 196, 196);
  font-weight: 700;
  margin-top: 4%;
}

.card-info p {
  color: #666666;
  font-size: small;
}

.zap {
  color: gold;
  margin-right: 10px;
}
</style>