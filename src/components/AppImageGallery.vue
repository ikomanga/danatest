<template>
  <ul class="app-image-gallery">
    <li
      v-for="(item, index) in imageGallery"
      :key="index"
      class="app-image-gallery-list"
    >
      <app-image-gallery-item
        :image="item.url"
        :imageThumb="item.thumbnailUrl"
        :title="item.title"
      />
    </li>
  </ul>
</template>

<script>
import AppImageGalleryItem from '@/components/AppImageGalleryItem'
export default {
  name: 'AppImageGallery',
  components: {
    AppImageGalleryItem
  },
  props: {
    imageGallery: Array
  }
}
</script>

<style lang="scss">
@import "@/assets/css/style.scss";

.app-image-gallery {
  display: flex;
  flex-wrap: wrap;
  margin: 80px 0 30px;

  &-list {
    flex: 1 0 25%;
    padding: 16px;
  }
}

@media (max-width: 991px) {
  .app-image-gallery {
    &-list {
      flex: 1 0 50%;
    }
  }
}

@media (max-width: 500px) {
  .app-image-gallery {
    margin: 40px 0 20px;

    &-list {
      flex: 1 0 100%;
      padding: 16px 0;
    }
  }
}
</style>
