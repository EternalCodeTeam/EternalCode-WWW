<template>
  <section id="projects">

    <h1>Nasze projekty</h1>
    <p>Poniżej znajdziesz nasze przykładowe projekty z otwartym kodem źródłowym!</p>

      <div class="row flex-container">
        <div class="col-lg-6">
          <div class="card-pro">
            <div class="row cent">

              <div class="col-lg-3">
                <img alt="512" class="img-fluid rounded" src="/assets/img/infinity.png">
              </div>

              <div class="col-lg-9">
                <h5>EternalCore</h5>
                <h6>♾️ All the most important server functions in one!</h6>
                <a href="">
                  <font-awesome-icon icon="fa-solid fa-arrow-right-long"/>
                  {{ $t("message.more") }}
                </a>
              </div>

            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card-pro">
            <div class="row cent">

              <div class="col-lg-3">
                <img alt="512" class="img-fluid rounded" src="/assets/img/fireworks.png">
              </div>

              <div class="col-lg-9">
                <h5>EternalCheck</h5>
                <h6>🎇 Simple plugin to check players!</h6>
                <a href="">
                  <font-awesome-icon icon="fa-solid fa-arrow-right-long"/>
                  {{ $t("message.more") }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card-pro">
            <div class="row cent">

              <div class="col-lg-3">
                <img alt="512" class="img-fluid rounded" src="/assets/img/fireworks.png">
              </div>

              <div class="col-lg-9">
                <h5>EternalCheck</h5>
                <h6>🎇 Simple plugin to check players!</h6>
                <a href="">
                  <font-awesome-icon icon="fa-solid fa-arrow-right-long"/>
                  {{ $t("message.more") }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card-pro">
            <div class="row cent">
              <div class="col-lg-3">
                <img alt="512" class="img-fluid rounded" src="/assets/img/chat.png">
              </div>
              <div class="col-lg-9">
                <h5>ChatFormatter</h5>
                <h6>📝 Free chat formatting plugin with minimessages support!</h6>
                <a href="">
                  <font-awesome-icon icon="fa-solid fa-arrow-right-long"/>
                  {{ $t("message.more") }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card-pro">
            <div class="row cent">
              <div class="col-lg-3">
                <img alt="" class="img-fluid rounded" src="/assets/img/treasure-map.png">
              </div>
              <div class="col-lg-9">
                <h5>EternalRTP</h5>
                <h6>🗺️ A random teleport plugin that doesn't give you a headache.</h6>
                <a href="">
                  <font-awesome-icon icon="fa-solid fa-arrow-right-long"/>
                  {{ $t("message.more") }}
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects"
};
</script>

<style>

.flex-container {
  display: flex;
  justify-content: space-around;
}

@media only screen and (max-width: 1000px) {
  #projects {
    padding: 3% 8%;
  }

  #projects h1 {
    font-size: 30px;
  }

  #projects p {
    font-size: small;
    margin-bottom: 15%;
  }

  #projects img {
    width: 40%;
    margin-bottom: 10%;
  }

  #projects .card-pro {
    margin-bottom: 5%;
    padding: 15% 10% 15% 12%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-pro h5 {
    color: rgb(167, 167, 167);
  }

  .card-pro h6 {
    color: rgb(153, 150, 150);
  }
}

#projects {
  padding: 3% 12% 3% 8%;
}

#projects h1 {
  font-weight: 800;
  color: #d3d3d380;
  font-size: 40px;
  border: 2px;
  text-align: center;
}

#projects p {
  font-weight: 500;
  color: #d3d3d354;
  font-size: medium;
  margin-top: -10px;
  border: 2px;
  margin-bottom: 5%;
  text-align: center;
}

#projects img {
  width: 65%;
}

.card-pro {
  background-color: #2a2c2c;
  border-radius: 12px;
  margin-bottom: 2%;
  padding: 6% 10%;
  transition: 0.5s;
}

.card-pro a:hover {
  color: #707070;
  transition: 0.5s;
}

.card-pro h5 {
  color: rgb(114, 114, 114);
  font-weight: 600;
}


.card-pro h6 {
  color: rgb(114, 114, 114);
  font-weight: 400;
  font-size: small;
}

.card-pro a {
  font-size: small;
  text-decoration: none;
  color: #a6abaf;
}
</style>