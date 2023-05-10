<template>
  <section id="about">
    <h1 class="title">{{ $t("message.about-us.title") }}</h1>
    <p class="desc">{{$t("message.about-us.desc")}}</p>
    <font-awesome-icon icon="fa-solid fa-dinosaur"/>
    <div class="gallery">
      <Gallery
          v-for="(item, index) in items"
          :key="index"
          :title="$t('message.about-us.title' + (index + 1))"
          :description="$t('message.about-us.desc' + (index + 1))"
          :icon="item.icon"
          :image="item.image"
          :isActive="item.isActive"
          @toggle-active="handleToggleActive(index)"

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
      items: [
        {
          icon: "/assets/img/about/people-icon.webp",
          image: "/assets/img/about/raports-screenshot.webp",
          isActive: false
        },
        {
          icon: "/assets/img/about/repositories-icon.webp",
          image: "/assets/img/about/repos-screenshot.webp",
          isActive: false
        },
        {
          icon: "/assets/img/about/discord-icon.webp",
          image: "/assets/img/about/discord-screenshot.webp",
          isActive: false
        },
        {
          icon: "/assets/img/about/gamepad-icon.webp",
          image: "/assets/img/about/games-screenshot.webp",
          isActive: false
        }
      ]
    };
  },
  methods: {
    handleToggleActive(index) {
      this.items.forEach((item, i) => {
        if (i === index) {
          item.isActive = !item.isActive;
        } else {
          item.isActive = false;
        }
      });
    }
  }
};
</script>

<style>
.title {
  color: var(--primary-title);
}

.desc {
  color: var(--secondary-title);
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