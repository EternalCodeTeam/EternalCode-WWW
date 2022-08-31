<template>
  <div class="flex">

    <div class="row cent" data-aos="fade-right">
      <div class="col-lg-6">
        <h1>{{ $t("message.heading.hello") }}</h1>
        <p>{{ $t("message.heading.motto") }}</p>
        <p></p>

        <div class="social">
          <a href="https://discord.gg/FQ7jmGBd6c">
            <font-awesome-icon icon="fa-brands fa-discord"/>
          </a>

          <a href="https://github.com/EternalCodeTeam">
            <font-awesome-icon icon="fa-brands fa-github"/>
          </a>

          <a href="https://www.youtube.com/channel/UC-p0H9D82LLFuGXahoN9akA">
            <font-awesome-icon icon="fa-brands fa-youtube"/>
          </a>

          <a href="https://www.tiktok.com/@eternalproject.pl?lang=pl-PL">
            <font-awesome-icon icon="fa-brands fa-tiktok"/>
          </a>

          <a href="https://www.instagram.com/eternalproject.pl/">
            <font-awesome-icon icon="fa-brands fa-instagram"/>
          </a>

        </div>
      </div>

      <div class="col-lg-6" data-aos="fade-left">
        <div class="skill">
          <img alt="Floating icons" src="/assets/img/floating-icons.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media only screen and (max-width: 1000px) {
  .skill {
    animation: animateLogotype 6s ease-in-out infinite;
    width: 100%;
    position: relative;
    opacity: 0.1;
    margin-top: -100%;
    z-index: -99;
  }

  .skill {
    animation: animateLogotype 6s ease-in-out infinite;
  }

  .flex {
    padding: 52% 12% 20% 8%;
  }

  .flex p {
    font-size: small;
  }

  .flex h1 {
    font-size: 40px;
    margin-bottom: 4%;
  }
}

.flex {
  padding: 15% 12% 10% 8%;
}

.cent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill {
  float: right;
}

.flex p {
  color: #666666;
}

.flex h1 {
  color: white;
  font-weight: 800;
  font-size: 50px;
}

.social {
  margin-top: 5%;
}

.social a {
  position: -ms-device-fixed;
  color: rgb(190, 190, 190) !important;
  margin: 10px;
  font-size: large;
}

.social a:hover {
  color: #666666;
}

.skill {
  animation: animateLogotype 6s ease-in-out infinite;
}

@keyframes animateLogotype {
  0% {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0);
    transform: translatey(0px);
  }

  50% {
    box-shadow: 0 25px 15px 0 rgba(0, 0, 0, 0);
    transform: translatey(-20px);
  }

  100% {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0);
    transform: translatey(0px);
  }
}


</style>

<script>
export default {
  name: "Flex"
};
</script>

