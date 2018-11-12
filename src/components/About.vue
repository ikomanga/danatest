<template>
  <main>
    <section class="above-content container">
      <div class="about-banner">
        <div class="about-banner-left">
          <h1 v-html="heroTitle" class="about-banner-title"></h1>
          <img src="@/assets/img/rainy.jpg" />
          <p v-html="heroDescription" class="about-banner-description"></p>
        </div>
        <div class="about-banner-right">
          <img src="@/assets/img/rainy.jpg" />
        </div>
      </div>
    </section>
    <section class="content container">
      <div class="app-feature">
        <h2 class="app-feature-title">Lorem Ipsum</h2>
        <ul class="app-feature-list">
          <li class="app-feature-list-item">
            <i class="icon-location"></i>
            <h3 class="app-feature-list-item-title">Lorem Ipsum</h3>
            <p class="app-feature-list-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec turpis convallis, rutrum arcu eleifend, efficitur leo. Quisque finibus nibh urna, vitae tincidunt tortor imperdiet sed.
            </p>
          </li>
          <li class="app-feature-list-item">
            <i class="icon-location"></i>
            <h3 class="app-feature-list-item-title">Lorem Ipsum</h3>
            <p class="app-feature-list-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec turpis convallis, rutrum arcu eleifend, efficitur leo. Quisque finibus nibh urna, vitae tincidunt tortor imperdiet sed.
            </p>
          </li>
          <li class="app-feature-list-item">
            <i class="icon-location"></i>
            <h3 class="app-feature-list-item-title">Lorem Ipsum</h3>
            <p class="app-feature-list-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec turpis convallis, rutrum arcu eleifend, efficitur leo. Quisque finibus nibh urna, vitae tincidunt tortor imperdiet sed.
            </p>
          </li>
          <li class="app-feature-list-item">
            <i class="icon-location"></i>
            <h3 class="app-feature-list-item-title">Lorem Ipsum</h3>
            <p class="app-feature-list-item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec turpis convallis, rutrum arcu eleifend, efficitur leo. Quisque finibus nibh urna, vitae tincidunt tortor imperdiet sed.
            </p>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'About',
  data () {
    return {
      heroData: Object,
      heroTitle: '',
      heroDescription: ''
    }
  },
  mounted () {
    axios
      .get('https://swapi.co/api/films/1/')
      .then(response => {
        this.heroData = response
        this.heroTitle = this.heroData.data.title
        this.heroDescription = this.heroData.data.opening_crawl
      })
  }
}
</script>

<style lang="scss">
@import "@/assets/css/style.scss";

.about-banner {
  align-items: center;
  display: flex;
  margin: 40px 0 80px;
  padding: 0 20px;

  &-left {
    flex: 1;
    min-width: 400px;
    padding: 0 40px 0 0;

    img {
      display: none;
    }
  }

  &-right {
    flex: 2;
    img {
      width: 100%;
    }
  }

  &-title {
    font-size: 36px;
    font-weight: 300;
    line-height: normal;
  }

  &-description {
    font-size: 18px;
    font-weight: normal;
    line-height: 1.78em;
  }
}

.app-feature {
  padding: 0 20px;

  &-title {
    font-size: 48px;
    font-weight: 300;
    margin-bottom: 60px;
    text-align: center;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    &-item {
      flex: 1 0 25%;
      padding: 0 10px 30px;
      text-align: center;
      &-title {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 16px;
      }
      &-description {
        font-size: 14px;
        line-height: 1.43em;
      }
    }
  }

  .icon-location {
    display: inline-block;
    font-size: 64px;
    margin-bottom: 16px;
  }
}

@media (max-width: 991px) {
  .app-feature {
    &-list {
      &-item {
        flex: 1 0 50%;
      }
    }
  }
}

@media (max-width: 768px) {
  .about-banner {
    &-left {
      padding-right: 0;

      img {
        display: block;
        margin-bottom: 16px;
        width: 100%;
      }
    }
    &-right {
      flex: 0;

      img {
        display: none;
      }
    }

    &-title {
      font-size: 32px;
    }

    &-description {
      font-size: 14px;
      line-height: 1.43;
    }
  }

  .app-feature {
    &-list {
      &-item {
        flex: 1 0 50%;
        &-title {
          font-size: 24px;
          font-weight: 600;
        }
        &-description {
          font-size: 14px;
          line-height: 1.43;
        }
      }
    }

    &-title {
      font-size: 32px;
      margin-bottom: 32px;
    }
  }
}

@media (max-width: 600px) {
  .app-feature {
    &-list {
      &-item {
        flex: 1 0 100%;
      }
    }
  }
}
</style>
