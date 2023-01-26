<template>
  <section id="skills">
    <h1>
      <span class="skills-icon">
        <font-awesome-icon icon="fa-solid fa-meteor"/>
      </span>
      {{ $t("message.skills.title") }}
    </h1>

    <div class="row skills-row">

      <div class="col-lg-3">
        <div class="card-info">
          <img alt="Java" src="/assets/img/skills/java.webp"/>
          <h5>Java</h5>
          <p>{{ $t("message.skills.java") }}</p>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card-info">
          <img alt="PHP" src="/assets/img/skills/php.webp"/>
          <h5>PHP</h5>
          <p>{{ $t("message.skills.php") }}</p>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card-info">
          <img alt="JavaScript" src="/assets/img/skills/javascript.webp"/>
          <h5>JavaScript</h5>
          <p>{{ $t("message.skills.javascript") }}</p>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card-info">
          <img alt="Linux logo" src="/assets/img/skills/linux64.webp"/>
          <h5>Linux</h5>
          <p>{{ $t("message.skills.linux") }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style>
.skills-row {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
}

.skills-icon {
  color: #ffa600;
}

#skills {
  padding: 3% 12% 3% 12%;
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
  border-radius: 15px;
  padding: 10% 10% 10%;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 5%;
  transition: 0.5s;
  height: 95%;
}

.card-info:hover {
  background-color: #353838;
  transition: 0.5s;
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

@media only screen and (max-width: 1000px) {
  #skills {
    padding: 10% 7% 3% 8%;
  }

  #skills h1 {
    font-size: large;
    margin-bottom: 6%;
  }
}

</style>
