<template>
  <section id="about">
    <div class="card-ab">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <h1>&nbsp;{{ $t("message.about.title") }}</h1>
          <p>{{ $t("message.about.p1") }}</p>

          <p>{{ $t("message.about.p2") }}</p>

          <p>{{ $t("message.about.p3") }}</p>

        </div>
        <div class="intellij-container col-lg-6 col-md-12">
          <img alt="intellij" class="intellij" src="/assets/img/header/about/eternalcore-intellij.webp">
        </div>


      </div>
    </div>
    <div class="panel-zmiany">
      <h2>Zmiana długości opisów:</h2>
      <button class="toggle-btn" @click="toggleShort" :class="{short: isShortDesc}"></button>
      <h2>Usunięcie karty z grami:</h2>
      <button class="toggle-btn" @click="toggleGamesSection" :class="{short: isGamesSection}"></button>
    </div>
    <div class="gallery">
      <!-- Ludzie -->
      <Gallery
          :title="$t('message.about-us.title1') "
          :description="$t('message.about-us.desc1')"
          :description-short="$t('message.about-us.desc1short')"
          :isShortDesc="isShortDesc"
          icon="/assets/img/about/ninja-icon.webp"
          image="/assets/img/about/raports-screenshot.webp"
      />
      <!-- Repos -->
      <Gallery
          :title="$t('message.about-us.title2') "
          :description="$t('message.about-us.desc2')"
          :description-short="$t('message.about-us.desc2short')"
          :isShortDesc="isShortDesc"
          icon="/assets/img/about/monitor-icon.webp"
          image="/assets/img/about/repos-screenshot.webp"
      />
      <!-- Discord -->
      <Gallery
          :title="$t('message.about-us.title3') "
          :description="$t('message.about-us.desc3')"
          :description-short="$t('message.about-us.desc3short')"
          :isShortDesc="isShortDesc"
          icon="/assets/img/about/discord-icon.webp"
          image="/assets/img/about/discord-screenshot.webp"
      />
      <!-- Games -->
      <Gallery
          v-if="!isGamesSection"
          :title="$t('message.about-us.title4') "
          :description="$t('message.about-us.desc4')"
          :description-short="$t('message.about-us.desc4short')"
          :isShortDesc="isShortDesc"
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
      isGamesSection: false,
      isShortDesc: false,
    };
  },
  methods: {
    toggleGamesSection() {
      this.isGamesSection = !this.isGamesSection;
    },
    toggleShort() {
      this.isShortDesc = !this.isShortDesc;
    }
  }
};
</script>

<style>

.gallery {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  overflow: hidden;
  width: 100%;
}

.card-ab {
  border-radius: 12px;
  padding: 5% 5%;
  background: rgb(63, 94, 251);
  background: -moz-linear-gradient(90deg, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
  background: linear-gradient(90deg, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3f5efb", endColorstr="#fc466b", GradientType=1);
  color: #ffffff;
}

.card-ab h1 {
  font-weight: 800;
  border-left: 5px solid #ffffff;
}

.card-ab p {
  margin-top: 6%;
}

#about {
  padding: 0 12% 3% 12%;
}

.intellij-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px !important;
}

.intellij {
  box-shadow: rgba(0, 0, 0, 0.8) 0 0 15px;
  width: 100%;
  border-radius: 15px;
}

.toggle-btn {
  display: inline-block;
  width: 60px;
  height: 30px;
  background-color: gray;
  border-radius: 15px;
  position: relative;
}

.toggle-btn:before {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.2s ease-in-out;
}

.toggle-btn.short:before {
  transform: translateX(30px);
}

.panel-zmiany {
  background: #666666;
  margin: 10px;
  padding: 10px;
}

@media only screen and (max-width: 1000px) {
  #about {
    padding: 0 7% 3% 8%;
  }

  .card-ab {
    border-radius: 12px;
    padding: 15% 15% 4% 10%;
  }

  .card-ab h1 {
    border-left: 5px solid #0f0f0f;
  }

  .card-ab p {
    margin-top: 8%;
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