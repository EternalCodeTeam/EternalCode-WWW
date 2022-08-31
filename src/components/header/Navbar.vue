<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">

      <a class="navbar-brand" href="#">EternalCode.pl</a>

      <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
              data-bs-target="#navbarNav" data-bs-toggle="collapse" type="button">
        <span class="custom-toggler">
          <font-awesome-icon icon="fa-solid fa-bars"/>
        </span>
      </button>

      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav custom-navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about">{{ $t("message.navbar.about") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">{{ $t("message.navbar.projects") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://status.eternalcode.pl/">{{ $t("message.navbar.status") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://repo.eternalcode.pl/">{{ $t("message.navbar.repository") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://paste.eternalcode.pl/">{{ $t("message.navbar.paste") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://docs.eternalcode.pl/">{{ $t("message.navbar.docs") }}</a>
          </li>

          <li class="navbar-nav-lang nav-item" @click="$i18n.locale = 'pl'">
            <img alt="PL" src="/assets/img/icon_pl.webp">
          </li>

          <li class="navbar-nav-lang nav-item" @click="$i18n.locale = 'en'">
            <img alt="EN" src="/assets/img/icon_en.webp">
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<style>

.navbar-nav-lang {
  margin: 9px;
  top: 0;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.5s;
}

.navbar-nav-lang:hover {
  transform: scale(1.2);
}

.navbar-nav-lang img {
  border-radius: 15%;
}

@media only screen and (max-width: 1000px) {
  .navbar-nav {
    margin-top: 2%;
    background-color: #232323;
    border-radius: 12px;
    text-align: center;
  }

  .navbar-nav-lang {
    align-items: center;
  }
}

.container {
  padding: 3% 8%;
  top: 0;
  left: 0;
  right: 0;
}

.nav-link {
  font-family: 'IBM Plex Sans', sans-serif;
  text-transform: uppercase;
  color: #d3d4d5 !important;
  margin-right: 19px;
  font-size: 15px;
  transition: 0.5s;
}

.custom-toggler {
  color: #d3d4d5;
}

.nav-link:hover {
  transition: 0.5s;
  color: #666666 !important;
  transform: scale(1.1);
}

.navbar-brand {
  color: white !important;
  font-weight: 700;
}
</style>

<script>
export default {
  name: "Navbar"
};
</script>