<template>
  <div class="gallery-section" @click="toggleActive" :class="isActive ? 'active' : '' "
       :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="shadow"></div>
    <div class="icon" :class="isActive ? 'active' : '' ">
      <img :src="icon" alt="Gallery Image" class="gallery-icon"/>
    </div>
  </div>
</template>

<script>

export default {
  name: "Gallery",
  props: {
    key: Number,
    title: "",
    description: "",
    icon: String,
    image: String,
    isActive: Boolean
  },
  methods: {
    toggleActive() {
      this.$emit('toggle-active', this.key);
    }
  }
};
</script>

<style scoped>

.gallery-section {
  position: relative;
  width: 20%;
  overflow: hidden;
  height: 60vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-repeat: no-repeat;
  background-size: auto 120%;
  background-position: center;
  border: 5px solid var(--light-gray);
  cursor: pointer;
  min-width: 100px;
  margin: 0 ;
  transition: .5s cubic-bezier(.68,.04,0,.91) all;
}

.gallery-section.active {
  flex-grow: 10000;
  transform: scale(0.98);
  max-width: 100%;
  margin: 0;
  border-radius: 15px;
  background-size: auto 110%;
  background-position: center;
}

.gallery-section:not(.active) {
  flex-grow: 1;
  max-width: 150px;
  border-radius: 15px;
}

.icon {
  align-items: center;
  top: 80%;
  left: 20%;
  z-index: 3;
  width: 80px;
  height: 80px;
  background: transparent;
  border-radius: 50%;
  border: var(--primary-dark-gray) 4px solid;
  padding: 5px;
  position: relative;
}

.icon.active {
  display: none;
  opacity: 0;
}

.gallery-icon {
  width: 60%;
  height: auto;
  z-index: 3;
  filter: brightness(0) invert(0.40);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
}

.shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  transition: .5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}

@media only screen and (max-width: 1000px) {
  .gallery-section {
    width: 100%;
    height: 70vh;
    margin: 10px;
    align-items: center;
    justify-content: center;
    max-width: max-content;
    flex-grow: inherit;
    transform: matrix();
  }

  .icon {
    display: none;
  }

  .gallery-section:not(.active) {
    display: none;
    flex-grow: inherit;
    max-width: none;
    border-radius: 15px;
  }
}
</style>