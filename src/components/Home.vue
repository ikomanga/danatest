<template>
  <main>
    <section class="above-content">
      <app-hero-banner
        :title="heroTitle"
        :description="heroDescription"
        :image="heroImage"
        :link="heroLink"
      >
      </app-hero-banner>
    </section>
    <section class="content container">
      <section class="image-gallery">
        <div v-if="imageGalleryError" class="image-gallery-error">
          <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </div>
        <div v-else class="image-gallery-wrapper">
          <div v-if="imageGalleryLoading" class="app-loading">Loading...</div>
          <app-image-gallery
            :imageGallery="imageGalleryPagination"
          >
          </app-image-gallery>
          <app-pagination
            :stepsAround="pager.stepsAround"
            :initialStep="pager.initialStep"
            :totalSteps="pager.totalSteps"
            @pager-change="goToPage"
          />
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import axios from 'axios'
import AppHeroBanner from '@/components/AppHeroBanner'
import AppPagination from '@/components/AppPagination'
import AppImageGallery from '@/components/AppImageGallery'

export default {
  name: 'Home',
  components: {
    AppHeroBanner,
    AppPagination,
    AppImageGallery
  },
  data () {
    return {
      heroTitle: 'Welcome to DANA',
      heroDescription: '',
      heroImage: 'https://source.unsplash.com/random',
      heroLink: '',
      heroData: Object,
      imageGallery: Object,
      imageGalleryPagination: [],
      imageGalleryDataTotal: 0,
      imageGalleryLoading: true,
      imageGalleryError: false,
      pager: {
        totalSteps: 0,
        initialStep: 1,
        stepsAround: 4
      },
      itemsPerPage: 16
    }
  },
  mounted () {
    axios
      .get('https://api.chucknorris.io/jokes/random')
      .then(response => {
        this.heroData = response
        this.heroDescription = this.heroData.data.value
        this.heroLink = this.heroData.data.url
      })

    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        this.imageGallery = response
        this.initImageGalleryPagination()
        this.goToPage(1)
      })
      .catch(error => {
        console.log(error)
        this.imageGalleryError = true
      })
      .finally(() => {
        this.imageGalleryLoading = false
      })

    this.windowResize()
    window.addEventListener('resize', this.windowResize)
  },
  methods: {
    initImageGalleryPagination: function () {
      if (this.imageGallery.data) {
        this.imageGalleryDataTotal = this.imageGallery.data.length

        if (this.imageGalleryDataTotal > this.itemsPerPage) {
          this.pager.totalSteps = Math.ceil(this.imageGalleryDataTotal / this.itemsPerPage)
        }

        let indexStop = (this.imageGalleryDataTotal < this.itemsPerPage) ? this.imageGalleryDataTotal - 1 : this.itemsPerPage - 1
        this.updateGalleryPagination(0, indexStop)
      }
    },
    windowResize: function (e) {
      var w = window.innerWidth || document.documentElement.clientWidth
      if (w <= 500) {
        this.pager.stepsAround = 1
      } else if (w <= 768) {
        this.pager.stepsAround = 2
      } else {
        this.pager.stepsAround = 4
      }
    },
    goToPage: function (page) {
      let indexStart = (page - 1) * this.itemsPerPage
      let indexStop = (page * this.itemsPerPage) - 1
      indexStop = (indexStop > this.imageGalleryDataTotal) ? this.imageGalleryDataTotal - 1 : indexStop
      this.updateGalleryPagination(indexStart, indexStop)
    },
    updateGalleryPagination: function (indexStart, indexEnd) {
      let _selectedGallery = []
      let j = 0
      for (let i = indexStart; i <= indexEnd; i++) {
        _selectedGallery[j] = this.imageGallery.data[i]
        j++
      }
      this.imageGalleryPagination = _selectedGallery
    }
  }
}
</script>

<style lang="scss">

</style>
