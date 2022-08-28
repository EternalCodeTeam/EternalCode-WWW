<template>
  <footer>
    <div class="footer-social">
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

    <div class="info">
      &copy; 2021-2022 EternalCode.pl. Wszelkie prawa zastrzeżone.<br>
      All icons created by Freepik - Flaticon
    </div>
  </footer>
</template>

<style>
footer {
  background-color: #111111;
  border-radius: 12px;
  margin: 2% 11% 2% 8%;
  padding: 2%;
  font-size: small;
  color: #444444;
}

footer .info {
  margin-top: 15px;
  transition: 0.5s;
  color: #a29d9d;
}

footer .info:hover {
  color: #a2a2a2;
}

footer a {
  color: rgb(133, 133, 133);
}

footer a:hover {
  color: rgb(100, 100, 100);
}

.footer-social a {
  color: rgb(190, 190, 190) !important;
  margin: 5px;
  font-size: large;
}


</style>


<script>
export default {
  name: "Footer"
};
</script>