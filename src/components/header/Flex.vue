<template>
  <div class="flex">

    <div class="row cent">
      <div class="col-lg-6">
        <h1>{{ $t("message.heading.hello") }}</h1>
        <p>{{ $t("message.heading.motto") }}</p>
        <p></p>

        <div class="social">
          <a href="https://discord.gg/FQ7jmGBd6c">
            <font-awesome-icon icon="fa-brands fa-discord"/>
          </a>

          <a href="https://github.com/EternalCodeTeam">
            <svg height="1em" style="vertical-align: -0.125em;" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><mask id="svgIDa" width="24" height="24" x="0" y="0"><g fill="#fff"><ellipse cx="9.5" cy="9" rx="1.5" ry="1"/><ellipse cx="14.5" cy="9" rx="1.5" ry="1"/></g></mask><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0"/><animate attributeName="d" dur="3s" repeatCount="indefinite" values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"/></path></g><rect width="8" height="4" x="8" y="11" fill="currentColor" mask="url(#svgIDa)"><animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite" values="11;11;7;7;11;11"/></rect></svg>
          </a>

          <a href="https://www.youtube.com/channel/UC-p0H9D82LLFuGXahoN9akA">
            <font-awesome-icon icon="fa-brands fa-youtube"/>
          </a>

          <a href="https://www.tiktok.com/@eternalproject.pl?lang=pl-PL">
            <font-awesome-icon icon="fa-brands fa-tiktok"/>
          </a>

        </div>
      </div>

      <div class="col-lg-6">
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
/*    display: none;*/
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
  float: right !important;
}

.flex p {
  color: #666666;
}

.flex h1 {
  color: #ffffff;
  font-weight: 800;
  font-size: 50px;
}

.social {
  margin-top: 5%;
}

.social a {
  position: -ms-device-fixed;
  color: #b8b8b8 !important;
  margin: 10px;
  font-size: large;
}

.social a:hover {
  color: #666666;
}

.skill {
  animation: animateLogotype 6s ease-in-out infinite;
}

@-webkit-keyframes animateLogotype {
  0% {
    -webkit-box-shadow: 0 5px 15px 0 #0000;
  }

  50% {
    -webkit-box-shadow: 0 25px 15px 0 #0000;
  }

  100% {
    -webkit-box-shadow: 0 5px 15px 0 #0000;
  }
}

@keyframes animateLogotype {
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-20px);
  }

  100% {
    transform: translatey(0px);
  }
}


</style>

<script>
export default {
  name: "Flex"
};
</script>

