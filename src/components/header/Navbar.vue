<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>

      <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
              data-bs-target="#navbarNav" data-bs-toggle="collapse" type="button">
        <span class="custom-toggler">
          <font-awesome-icon icon="fa-solid fa-bars"/>
        </span>
      </button>

      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto" data-aos="fade-down">
          <li class="nav-item">
            <select v-model="$i18n.locale">
              <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
            </select>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#projects">Projekty</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">O nas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://status.eternalcode.pl/">Monitor usług</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://repo.eternalcode.pl/">Repozytorium</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://paste.eternalcode.pl/">Serwis wklejania</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://docs.eternalcode.pl/">Dokumentacje</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.container-fluid {
  padding: 3%;
  padding-left: 8%;
  padding-right: 8%;
  position: absolute;
  top: 0;
}

.nav-link {
  font-family: 'IBM Plex Sans', sans-serif;
  text-transform: uppercase;
  color: #d3d4d5 !important;
  margin-right: 19px;
  font-size: 15px;
}


.custom-toggler {
  color: #d3d4d5;
}

.nav-link:hover {
  color: #666666 !important;
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
