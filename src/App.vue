<template>
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from "vue-router";</script>

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
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  height: 100%;
  overflow-x: hidden;
  background: rgb(30, 31, 31);
  background: -moz-linear-gradient(146deg, rgba(30, 31, 31, 1) 45%, rgba(2, 2, 2, 1) 100%);
  background: -webkit-linear-gradient(right, rgb(30, 31, 31), #020202);
  background: linear-gradient(to right, #1e1f1f, #020202);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1e1f1f", endColorstr="#020202", GradientType=1);
}

a:link {
  text-decoration: none;
}

header {
  background-image: url('/assets/img/header/bg.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media only screen and (max-width: 1000px) {
  header {
    background-image: url('/assets/img/header/bg.webp');
  }
}

</style>





