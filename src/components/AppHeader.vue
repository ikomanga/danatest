<template>
  <header>
    <div class="app-header" :class="{'is-mobile': showMenuToggle}">
      <div class="app-header-logo">
        <a href="/"><img src="@/assets/img/logo-dana-with-typography.svg"
     class="logo-dana-with-typography"></a>
      </div>
      <div class="app-header-nav">
        <div
          @click="menuToggle()"
          :class="{
            'app-header-nav-toggle--show': showMenuToggle,
            'app-header-nav-toggle--open': (menuMobileState === 'opened')
          }"
          class="app-header-nav-toggle hamburger"
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div
          :class="{
            'app-header-nav-menus--mobile' : showMenuToggle,
            'app-header-nav-menus--mobile--open' : (menuMobileState === 'opened')
          }"
          class="app-header-nav-menus"
        >
          <ul class="app-header-nav-menus-list">
            <li><a href="/#/webtask/about">About</a></li>
            <li><a href="/#/webtask/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data: function () {
    return {
      menuMobileState: 'closed',
      showMenuToggle: false,
      responsiveWidth: 768
    }
  },
  mounted: function () {
    this.windowResize()
    window.addEventListener('resize', this.windowResize)
  },
  methods: {
    windowResize: function (e) {
      var w = window.innerWidth || document.documentElement.clientWidth
      if (w <= this.responsiveWidth) {
        this.showMenuToggle = true
      } else {
        this.showMenuToggle = false
        this.menuMobileState = 'closed'
      }
    },
    menuToggle: function () {
      this.menuMobileState = (this.menuMobileState === 'closed') ? 'opened' : 'closed'
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/style.scss";

header {
  position: relative;
  z-index: 2;
}

.app-header {
  display: flex;
  background-color: app-color('white');
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.5);
  justify-content: space-between;
  padding: 20px;
  &-nav {
    &-menus {
      &--mobile {
        background: app-color('white');
        bottom: 0;
        left: 100%;
        position: fixed;
        top: 55px;
        transition: left 0.2s ease-in-out;
        width: 100%;
        z-index: -1;

        &--open {
          display: block;
          left: 0;
        }

        & .app-header-nav-menus-list {
          display: block;
          margin: 0;
          padding: 12px 0 0;

          li {
            padding: 12px 24px;
          }
        }
      }

      &-list {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          padding: 14px 20px;
        }

        a {
          font-size: 18px;
          text-decoration: none;

          &:focus,
          &:hover {
            color: app-color('primary');
          }
        }
      }
    }
    &-toggle {
      display: none;
      &--show {
        display: block;
      }

      cursor: pointer;
      height: 16px;
      margin: 0 auto;
      position: relative;
      top: 6px;
      transform: rotate(0deg);
      transition: .5s ease-in-out;
      width: 16px;

      span {
        background: app-color('grey');
        border-radius: 3px;
        display: block;
        height: 2px;
        left: 0;
        opacity: 1;
        position: absolute;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
        width: 100%;

        &:nth-child(1) {
          top: 0px;
        }

        &:nth-child(2) {
          top: 6px;
        }

        &:nth-child(3) {
          top: 12px;
        }
      }

      &--open {
        span {
          background: app-color('primary');
        }

        span:nth-child(1) {
          top: 6px;
          transform: rotate(135deg);
        }

        span:nth-child(2) {
          left: -12px;
          opacity: 0;
        }

        span:nth-child(3) {
          top: 6px;
          transform: rotate(-135deg);
        }
      }
    }
  }

  // Mobile style :
  &.is-mobile {
    padding: 13px 16px 12px;

    .logo-dana-with-typography {
      height: 27px;
      width: 93px;
    }
  }
}

.logo-dana-with-typography {
  height: 47px;
  object-fit: contain;
  width: 161.5px;
}
</style>
