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
            <a class="nav-link" href="#about">O nas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">{{ $t("message.projects") }}</a>
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

          <snap class="locale-changer">
            <select v-model="$i18n.locale">
              <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
                {{ locale.toUpperCase() }}
              </option>
            </select>
          </snap>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>

@media only screen and (max-width: 1000px) {
  .navbar-nav {
    margin-top: 2%;
    background-color: #232323;
    border-radius: 12px;
    text-align: center;
  }
}


.locale-changer {
  padding-top: 4px;
}

select {
  border: none;
  outline: none;
  width: 100%;
  background-color: transparent !important;
  color: #d3d4d5;
  padding: 5px;
  border-radius: 12px;
  margin-left: 10px;
  transition: 0.5s;
  text-decoration: none;
  font-weight: bold;
}

select:hover {
  color: #666666;
}

select option {
  background: #232323;


  border: none;
  outline: none;

  border-radius: 20px;
}

.container {
  padding: 3% 8%;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
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
