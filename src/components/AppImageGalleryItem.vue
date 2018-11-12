<template>
  <div class="app-image-gallery-item">
    <img @click="showDetail" class="app-image-gallery-item-imgthumb" :src="imageThumb"/>
    <div class="app-image-gallery-item-share">
      <button v-if="!isShowSocialShare" @click="showSocialShare" class="app-image-gallery-item-share-btn"><i class="icon-share"></i></button>
      <button v-if="isShowSocialShare" @click="closeSocialShare" class="app-image-gallery-item-share-close"><span>x</span></button>
      <div
        class="app-image-gallery-item-share-group"
        :class="{'app-image-gallery-item-share-group-open': isShowSocialShare}"
      >
        <a href="http://facebook.com"><i class="icon-facebook"></i></a>
        <a href="http://instagram.com"><i class="icon-instagram"></i></a>
        <a href="http://twitter.com"><i class="icon-twitter"></i></a>
      </div>
    </div>
    <h3 v-html="title" class="app-image-gallery-item-title"></h3>
    <div v-show="isShowDetail" class="app-image-gallery-item-detail" ref="imageGalleryDetail">
      <button class="btn-close" @click="closeDetail"><i class="icon-prev"></i></button>
      <div class="app-image-gallery-item-detail-image" :style="{ height: imageWrapperHeight }">
        <img :src="image" />
      </div>
      <h3 v-html="title" class="app-image-gallery-item-detail-title" ref="imageGalleryDetailTitle"></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppImageGalleryItem',
  props: {
    image: String,
    imageThumb: String,
    title: String
  },
  data: function () {
    return {
      isShowDetail: false,
      isShowSocialShare: false,
      imageWrapperHeight: 0,
      imageDetailMinHeight: 300
    }
  },
  methods: {
    showSocialShare () {
      this.isShowSocialShare = true
    },
    closeSocialShare () {
      this.isShowSocialShare = false
    },
    showDetail () {
      this.isShowDetail = true
      this.calculateImageWrapperHeight()
    },
    closeDetail () {
      this.isShowDetail = false
    },
    calculateImageWrapperHeight () {
      this.$nextTick(() => {
        let w = window.innerWidth || document.documentElement.clientWidth
        if (w > 768) {
          let imageWrapperHeight = this.$refs.imageGalleryDetail.clientHeight - this.$refs.imageGalleryDetailTitle.clientHeight
          imageWrapperHeight = (imageWrapperHeight <= this.imageDetailMinHeight) ? this.imageDetailMinHeight : imageWrapperHeight
          this.imageWrapperHeight = imageWrapperHeight + 'px'
        } else {
          this.imageWrapperHeight = 'auto'
        }
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

.app-image-gallery-item {
  border-radius: 4px;
  box-shadow: 3px 6px 10px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover {
    .app-image-gallery-item-share,
    .app-image-gallery-item-title {
      opacity: 1;
    }
  }

  &-imgthumb {
    display: block;
    width: 100%;
  }

  &-share {
    opacity: 0;
    position: absolute;
    right: 20px;
    top: 20px;

    a {
      display: block;
      text-decoration: none;
      margin-bottom: 10px;
    }

    i {
      color: app-color('white');
      display: block;
    }

    &-group {
      margin-top: 30px;
      opacity: 0;
      transition: .2s all ease-in-out;
      &-open {
        opacity: 1;
      }
    }

    &-btn,
    &-close {
      font-size: 16px;
      height: 20px;
      line-height: 20px;
      position: absolute;
      text-align: center;
      right: 0;
      width: 20px;
    }

    &-close {
      background-color: app-color('white');
      border-radius: 50%;
      color: app-color('red');
      font-size: 13px;
    }
  }

  &-detail {
    background: app-color('white');
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    left: 0;
    top: 0;
    overflow: auto;
    padding: 0 20px;
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
      padding: 35px 0 0;
    }

    &-title {
      margin: 0;
      padding: 20px 0;
    }
  }

  &-title {
    bottom: 0;
    box-sizing: border-box;
    color: app-color('white');
    font-size: 18px;
    margin: 0;
    opacity: 0;
    padding: 0 17px 20px;
    position: absolute;
    transition: .2s all ease-in-out;
  }
}

.btn-close {
  color: app-color('primary');
  font-size: 20px;
  left: 0;
  position: absolute;
  top: 10px;
  width: 30px;
}

@media (max-width: 768px) {
  .app-image-gallery-item {
    &-detail {
      padding: 0;

      img {
        width: 100%;
      }

      &-title {
        padding: 20px 15px;
      }

      &-image {
        padding: 0;
      }
    }
  }

  .btn-close {
    color: app-color('white');
  }
}

@media (max-width: 500px) {
  .app-image-gallery-item {
    box-shadow: none;
    border-radius: 0;

    &-title {
      color: app-color('grey');
      opacity: 1;
      padding: 15px 15px 20px;
      position: static;
    }
  }
}
</style>
