<template>
  <section id="about">
    <h3 class="title">{{ $t("message.about-us.title") }}</h3>
    <p class="desc">{{ $t("message.about-us.desc") }}</p>

    <div class="gallery">
      <Gallery
          v-for="(item, index) in items"
          :key="index"
          :title="$t('message.about-us.gallery-parts[' + (index) + '].title')"
          :description="$t('message.about-us.gallery-parts[' + (index) + '].desc')"
          :icon="item.icon"
          :image="item.image"
          :isActive="item.isActive"
          @toggle-active="handleToggleActive(index)"
      />
    </div>
    <div class="description-box">
      <div class="description" :class="isActive ? 'active' : '' ">
        <h3> {{ $t("message.about-us.gallery-parts[" + activeIndex + "].title")}}  </h3>
        <p> {{ $t("message.about-us.gallery-parts[" + activeIndex + "].desc")}} </p>

      </div>
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
      activeIndex: 0,
      isActive: false,
      items: [
        {
          icon: "/assets/img/about/people-icon.webp",
          image: "/assets/img/about/raports-screenshot.webp",
          isActive: true,
        },
        {
          icon: "/assets/img/about/repositories-icon.webp",
          image: "/assets/img/about/repos-screenshot.webp",
        },
        {
          icon: "/assets/img/about/discord-icon.webp",
          image: "/assets/img/about/discord-screenshot.webp",
        },
        {
          icon: "/assets/img/about/gamepad-icon.webp",
          image: "/assets/img/about/games-screenshot.webp",
        }
      ]
    };
  },
  created() {
    this.autoToggleActive();
  },
  mounted() {
  },
  methods: {
    isMobileScreenWidth() {
      return window.innerWidth < 1000;
    },
    handleToggleActive(index) {
      this.items.forEach((item, i) => {
        if (i === index) {
          item.isActive = true;
        } else {
          item.isActive = false;
          this.activeIndex = index;
        }
      });
    },
    autoToggleActive() {
      setTimeout( () => {
        this.autoToggleActive();

        if (!this.isMobileScreenWidth()) {

          return
        }

        if (this.activeIndex === this.items.length - 1) {
          this.handleToggleActive(0);
          return;
        }

        this.handleToggleActive(this.activeIndex + 1);
      }, 5000);
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
  margin-bottom: 25px;
}

.gallery {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  overflow: hidden;
  gap: 15px;
  margin-bottom: 10px;


}

#about {
  padding: 3% 12% 3% 12%;
}

.description-box {
  width: 100%;
  border-radius: 15px;
  background: var(--light-gray);
  border: var(--light-gray) 5px solid;
}

.description {
  padding: 15px 15px 0 15px;
}

.description h3 {
  color: var(--primary-title);
  font-size: 1.2rem;
}

.description p {
  color: var(--secondary-title);
  font-size: 1.2rem;
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
    height: 40vh;
  }

  .description h3 {
    font-size: 1.2rem;
  }

  .description p {
    font-size: 0.9rem;
  }
}

</style>