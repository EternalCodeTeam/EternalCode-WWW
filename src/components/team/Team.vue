<template>
  <section id="team">
    <h1>Nasz team!</h1>
    <p>Poniżej znajdziesz wszystkich członków naszego teamu!</p>

    <div class="container py-5">
      <div class="row team-container text-center">

        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="team-card rounded shadow-sm py-5 px-4"><img
              alt="" class="img-fluid rounded-circle mb-3 shadow-sm" src="https://avatars.githubusercontent.com/u/65517973?v=4"
              width="100">
            <h5 class="mb-0 team-card-title">Martin Sulikowski</h5><span
                class="small team-card-subtitle">Lead Team</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a class="social-link" href="#">
                <font-awesome-icon icon="fa-brands fa-github"/>
              </a></li>
              <li class="list-inline-item"><a class="social-link" href="#">
                <font-awesome-icon icon="fa-brands fa-linkedin"/>
              </a></li>
            </ul>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="team-card rounded shadow-sm py-5 px-4"><img
              alt="" class="img-fluid rounded-circle mb-3 shadow-sm" src="https://avatars.githubusercontent.com/u/49173834?s=100&v=4"
              width="100">
            <h5 class="mb-0 team-card-title">Rollczi</h5><span class="small team-card-subtitle">Lead Team</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a class="social-link" href="#">
                <font-awesome-icon icon="fa-brands fa-github"/>
              </a></li>
              <li class="list-inline-item"><a class="social-link" href="#">
                <font-awesome-icon icon="fa-brands fa-linkedin"/>
              </a></li>
            </ul>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="team-card rounded shadow-sm py-5 px-4"><img
              alt="" class="img-fluid rounded-circle mb-3 shadow-sm" src="https://avatars.githubusercontent.com/u/60399586?s=100&v=4"
              width="100">
            <h5 class="mb-0 team-card-title">Krzysztof Haller</h5><span
                class="small team-card-subtitle">Lead Team</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a class="social-link" href="#">
                <font-awesome-icon icon="fa-brands fa-github"/>
              </a></li>
              <li class="list-inline-item"><a class="social-link" href="#">
                <font-awesome-icon icon="fa-brands fa-linkedin"/>
              </a></li>
            </ul>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="team-card rounded shadow-sm py-5 px-4"><img
              alt="" class="img-fluid rounded-circle mb-3 shadow-sm" src="https://avatars.githubusercontent.com/u/77621271?s=100&v=4"
              width="100">
            <h5 class="mb-0 team-card-title">Osnixer</h5><span class="small team-card-subtitle">Lead Team</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a class="social-link" href="#">
                <font-awesome-icon icon="fa-brands fa-github"/>
              </a></li>
              <li class="list-inline-item"><a class="social-link" href="#">
                <font-awesome-icon icon="fa-brands fa-linkedin"/>
              </a></li>
            </ul>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="team-card rounded shadow-sm py-5 px-4"><img
              alt="" class="img-fluid rounded-circle mb-3 shadow-sm" src="https://avatars.githubusercontent.com/u/28400410?v=4"
              width="100">
            <h5 class="mb-0 team-card-title">Vetther</h5><span class="small team-card-subtitle">Lead Team</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a class="social-link" href="#">
                <font-awesome-icon icon="fa-brands fa-github"/>
              </a></li>
              <li class="list-inline-item"><a class="social-link" href="#">
                <font-awesome-icon icon="fa-brands fa-linkedin"/>
              </a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

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

.team-card {
  background: #2a2c2c;
  transition: 0.3s;
}

.team-card:hover {
  transform: scale(1.03);
}

.team-card-title {
  color: #fff;
}

.team-card-subtitle {
  color: #fff;
}

</style>