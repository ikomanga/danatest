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
    </section>
  </main>
</template>

<script>
import axios from 'axios'
import AppHeroBanner from '@/components/AppHeroBanner'

export default {
  name: 'Home',
  components: {
    AppHeroBanner
  },
  data () {
    return {
      heroTitle: 'Welcome to DANA',
      heroDescription: '',
      heroImage: 'https://source.unsplash.com/random',
      heroLink: '',
      heroData: Object
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
  }
}
</script>

<style lang="scss">

</style>
