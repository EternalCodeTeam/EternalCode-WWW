<script setup>
import Navbar from "@/components/header/Navbar.vue";
import Flex from "@/components/header/Flex.vue";
import About from "@/components/about/About.vue";
import Skills from "@/components/skills/Skills.vue";
import Projects from "@/components/projects/Projects.vue";
import Footer from "@/components/footer/Footer.vue";
</script>


<template>
  <div>

    <header>
      <Navbar/>
      <Flex/>
    </header>

    <About/>
    <Skills/>
    <Projects/>

    <Footer/>

  </div>
</template>