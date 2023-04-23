<template>
  <footer>
    <div class="footer-social">
      <a href="https://discord.gg/FQ7jmGBd6c">
        <font-awesome-icon icon="fa-brands fa-discord"/>
      </a>
      <a href="https://github.com/EternalCodeTeam">
        <font-awesome-icon icon="fa-brands fa-github"/>
      </a>
      <a href="https://www.youtube.com/channel/UC2BEaMJWxxUscN50AD0oY_Q">
        <font-awesome-icon icon="fa-brands fa-youtube"/>
      </a>
      <a href="https://www.tiktok.com/@eternalcode.pl">
        <font-awesome-icon icon="fa-brands fa-tiktok"/>
      </a>
    </div>

    <div class="info">
      &copy; 2021-2023 EternalCode.pl All rights reserved.<br>
      All icons created by Freepik - Flaticon
    </div>
  </footer>
</template>

<style scoped>
@media only screen and (max-width: 1000px) {
  footer {
    background-color: var(--dark-gray);
    margin: 7% 11% 7% 8%;
    padding: 2%;
    font-size: small;
    color: var(--primary-dark-gray);
  }
}

footer {
  background-color: var(--dark-gray);
  border-radius: 12px;
  margin: 2% 11% 2% 8%;
  padding: 2%;
  font-size: small;
  color: var(--primary-dark-gray);
}

footer .info {
  margin-top: 15px;
  transition: 0.5s;
  color: var(--white-gray) !important;
  margin-right: 19px;
  font-size: 14px;
}

footer a {
  color: var(--secondary-title);
}

.footer-social a {
  color: var(--primary-title) !important;
  margin: 5px;
  font-size: large;
}
</style>

<script>
export default {
  name: "Footer",
};
</script>
