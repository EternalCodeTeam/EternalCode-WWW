<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container-fluid">

      <a class="navbar-brand js-scroll-trigger" href="https://eternalcode.pl" data-aos="fade-down">EternalCode.pl</a>

      <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
              class="navbar-toggler"
              data-bs-target="#navbarNav" data-bs-toggle="collapse" type="button">
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarResponsive">

        <ul class="navbar-nav ms-auto" data-aos="fade-down">
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
  padding: 3% 8%;
  z-index: 999;
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

nav .btn-priamry {
  background-color: #54c53e;
  border-radius: 50px;
  width: 20%;
  color: white;
  transition: 1s;
}

nav .btn-priamry:hover {
  color: #666666 !important;
  background-color: #fdfdfd;
  width: 130%;
  transition: 1s;
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
