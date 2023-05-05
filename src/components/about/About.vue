<template>
  <section id="about">

    <h1 class="title" >{{ $t("message.about-us.title") }}</h1>
    <div class="gallery">
      <!-- Ludzie -->
      <Gallery
          :title="$t('message.about-us.title1') "
          :description="$t('message.about-us.desc1')"
          icon="/assets/img/about/ninja-icon.webp"
          image="/assets/img/about/raports-screenshot.webp"
      />
      <!-- Repos -->
      <Gallery
          :title="$t('message.about-us.title2') "
          :description="$t('message.about-us.desc2')"
          icon="/assets/img/about/monitor-icon.webp"
          image="/assets/img/about/repos-screenshot.webp"
      />
      <!-- Discord -->
      <Gallery
          :title="$t('message.about-us.title3') "
          :description="$t('message.about-us.desc3')"
          icon="/assets/img/about/discord-icon.webp"
          image="/assets/img/about/discord-screenshot.webp"
      />
      <!-- Games -->
      <Gallery
          :title="$t('message.about-us.title4') "
          :description="$t('message.about-us.desc4')"
          icon="/assets/img/about/gamepad-icon.webp"
          image="/assets/img/about/games-screenshot.webp  "
      />
    </div>
  </section>
</template>

<script>

import Gallery from "@/components/about/components/Gallery.vue";

export default {
  name: "about",
  components: {Gallery},
  data() {
    return {

    };
  },
};
</script>

<style>
.title {
  color: white;
}

.gallery {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  overflow: hidden;
  width: 100%;
}

#about {
  padding: 0 12% 3% 12%;
}

@media only screen and (max-width: 1000px) {
  #about {
    padding: 0 7% 3% 8%;
  }

  .gallery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    overflow: hidden;
    width: 100%;
  }
}

</style>