<template>
  <div class="app-hero-banner" :style="backgroundImage">
    <div class="container">
      <div class="app-hero-banner-content">
        <h1 v-if="title" v-html="title" class="app-hero-banner-title"></h1>
        <p v-if="description" v-html="description" class="app-hero-banner-description"></p>
        <a v-if="link" :href="link" class="btn">More Info</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppHeroBanner',
  props: {
    title: String,
    description: String,
    image: String,
    link: String
  },
  computed: {
    backgroundImage () {
      if (this.image) {
        return { 'background-image': 'url(' + this.image + ')' }
      }

      return {}
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/style.scss";
.app-hero-banner {
  align-items: center;
  background-position: center center;
  background-size: cover;
  display: flex;
  min-height: 490px;
  padding: 0 20px;

  &-content {
    text-align: center;
  }

  &-title {
    color: app-color('white');
    font-size: 72px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  &-description {
    color: app-color('white');
    font-size: 18px;
    margin: 0 0 36px;
  }

  .btn {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    min-height: 320px;

    &-title {
      font-size: 36px;
    }

    &-description {
      font-size: 16px;
    }
  }
}
</style>
