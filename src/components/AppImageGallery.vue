<template>
  <ul class="app-image-gallery">
    <li
      v-for="(item, index) in imageGallery"
      :key="index"
      class="app-image-gallery-item"
    >
      <div class="app-image-gallery-item-wrapper" @click="showDetail(index)">
        <img class="app-image-gallery-item-imgthumb" :src="item.thumbnailUrl"/>
        <h3 v-html="item.title" class="app-image-gallery-item-title"></h3>
        <div v-show="isShowDetail" class="app-image-gallery-item-detail" ref="imageGalleryDetail">
          <button class="btn-close" @click="closeDetail">Close</button>
          <div class="app-image-gallery-item-detail-image" :style="{ height: imageWrapperHeight + 'px' }">
            <img :src="item.url" />
          </div>
          <h3 v-html="item.title" class="app-image-gallery-item-detail-title" ref="imageGalleryDetailTitle"></h3>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppImageGalleryItem',
  props: {
    imageGallery: Array
  },
  data: function () {
    return {
      isShowDetail: false,
      imageWrapperHeight: 0,
      imageDetailMinHeight: 300,
      openedItemId: 0
    }
  },
  methods: {
    showDetail (index) {
      this.openedItemId = index
      this.isShowDetail = true
      this.calculateImageWrapperHeight()
    },
    closeDetail () {
      this.isShowDetail = false
    },
    calculateImageWrapperHeight () {
      this.$nextTick(() => {
        let imageWrapperHeight = this.$refs.imageGalleryDetail[this.openedItemId].clientHeight - this.$refs.imageGalleryDetailTitle[this.openedItemId].clientHeight
        imageWrapperHeight = (imageWrapperHeight <= this.imageDetailMinHeight) ? this.imageDetailMinHeight : imageWrapperHeight
        this.imageWrapperHeight = imageWrapperHeight
      })
    },
    windowResize () {
      this.calculateImageWrapperHeight()
    }
  },
  mounted () {
    window.addEventListener('resize', this.windowResize)
  }
}
</script>

<style lang="scss">
@import "@/assets/css/style.scss";

.app-image-gallery {
  display: flex;
  flex-wrap: wrap;
  margin: 80px -16px 30px;

  &-item {
    flex: 1 0 25%;
    padding: 16px;

    &-wrapper {
      cursor: pointer;
      position: relative;

      &:hover {
        .app-image-gallery-item-title {
          opacity: 1;
        }
      }
    }

    &-imgthumb {
      width: 100%;
    }

    &-detail {
      background: app-color('black');
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      height: 100%;
      left: 0;
      top: 0;
      overflow: auto;
      position: fixed;
      width: 100%;
      z-index: 3;

      img {
        display: block;
        margin: 0 auto;
        max-height: 100%;
        max-width: 100%;
      }

      &-image {
        padding: 20px 0;
      }

      &-title {
        color: app-color('white');
        margin: 0;
        padding: 20px 0;
      }
    }

    &-title {
      bottom: 0;
      box-sizing: border-box;
      color: app-color('white');
      opacity: 0;
      position: absolute;
      transition: .2s all ease-in-out;
    }
  }
}

.btn-close {
  position: absolute;
}
</style>
