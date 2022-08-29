<template>
  <section id="skills">

    <h1>
      <span class="skills-icon">
              <font-awesome-icon icon="fa-solid fa-meteor"/>
      </span>
      {{ $t("message.skills.title") }}
    </h1>

    <div class="row">

      <div class="col-lg-3">
        <div class="card-info">
          <img alt="" class="img-fluid rounded" src="/assets/img/java.png">
          <h5>Java</h5>
          <p>{{ $t("message.skills.java") }}</p>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card-info">
          <img alt="" src="/assets/img/php.png">
          <h5>PHP</h5>
          <p>{{ $t("message.skills.php") }}</p>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card-info">
          <img alt="" src="/assets/img/javascript.png">
          <h5>JavaScript</h5>
          <p>{{ $t("message.skills.javascript") }}</p>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card-info">
          <img alt="" src="/assets/img/linux64.png">
          <h5>Linux</h5>
          <p>{{ $t("message.skills.linux") }}</p>
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
@media only screen and (max-width: 1000px) {
  #skills {
    padding: 10% 7% 3% 8%;
  }

  #skills h1 {
    font-size: large;
    margin-bottom: 6%;
  }
}

.skills-icon {
  color: #ffa600;
}

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
  border-radius: 15px;
  padding: 10% 10% 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 2%;
  transition: 0.5s;
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

.zap {
  color: gold;
  margin-right: 10px;
}
</style>