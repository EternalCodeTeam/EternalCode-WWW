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
        <ul class="navbar-nav ms-auto">
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
            <a class="nav-link" href="https://docs.eternalcode.pl/">{{ $t("message.navbar.docs") }}</a>
          </li>

          <li class="nav-item navbar-nav-lang" @click="$i18n.locale = 'pl'">
            <img alt="PL" src="/assets/img/lang/icon_pl.webp">
          </li>

          <li class="nav-item navbar-nav-lang" @click="$i18n.locale = 'en'">
            <img alt="EN" src="/assets/img/lang/icon_en.webp">
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<style>

.navbar-nav-lang {
  margin: 7px;
  top: 0;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.5s;
}

.navbar-nav-lang:hover {
  transform: scale(1.05);
  filter: grayscale(100%);
  border-radius: 12px;
}

.navbar-nav-lang img {
  border-radius: 15%;
}

@media only screen and (max-width: 1000px) {
  .navbar-nav {
    margin-top: 2%;
    border-radius: 12px;
    text-align: center;
  }

  img {
    align-items: center;
    justify-content: center;
  }

  .navbar-nav-lang {
    align-items: center;
    justify-content: center;
  }

  .navbar-brand {
    color: white !important;
    margin-top: 30px;
    margin-left: 10px
  }

  .navbar-toggler {
    margin-top: 30px;
  }
}

.container {
  padding: 3% 8%;
  top: 0;
  left: 0;
  right: 0;
}

.nav-link {
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  color: #d3d4d5 !important;
  margin-right: 3px;
  font-size: 15px;
  transition: 0.5s;
  margin-top: 4px;
}

.nav-link:hover {
  transition: 0.5s;
  color: #666666 !important;
  transform: scale(1.05);
}

.custom-toggler {
  color: #d3d4d5;
}

.navbar-brand {
  color: white !important;
  font-weight: 700;
}

.navbar {
  z-index: 100 !important;
}
</style>

<script>
export default {
  name: "Navbar",
};
</script>