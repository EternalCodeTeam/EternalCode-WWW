<script setup>
import Navbar from "./components/header/Navbar.vue";
import Flex from "./components/header/Flex.vue";
import About from "./components/about/About.vue";
import Skills from "./components/skills/Skills.vue";
import Projects from "./components/projects/Projects.vue";
import Footer from "./components/footer/Footer.vue";
import Team from "./components/team/Team.vue";</script>

<template>
  <div>

    <header>
      <Navbar/>
      <Flex/>
    </header>

    <About/>
    <Skills/>
    <Projects/>
    <Team/>

    <Footer/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #000000;
  box-shadow: inset 0 0 5px rgb(0, 0, 0);
  border-radius: 0;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(22, 22, 22);
  border-radius: 0;
}

* {
  padding: 0;
  margin: 0;
  align-items: center;
}

html {
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  height: 100%;
  overflow-x: hidden;
  background: linear-gradient(to right, #1e1f1f, #020202);
}

a:link {
  text-decoration: none;
}

header {
  background-image: url('/assets/img/bg.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
}

@media only screen and (max-width: 1000px) {
  header {
    background-image: url('/assets/img/bg.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-position: 0 0;
    background-repeat: no-repeat;
  }
}

</style>





