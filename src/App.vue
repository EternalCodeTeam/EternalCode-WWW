<script setup>
import { RouterView } from "vue-router";

import Navbar from "@/components/header/Navbar.vue";
import Footer from "@/components/footer/Footer.vue";
</script>

<template>
  <Navbar/>
  <router-view></router-view>
  <Footer/>
</template>



