<template>
  <footer class="app-footer">
    <div class="container">
      <div class="app-footer-wrapper">
        <section class="app-footer-left">
          <div class="app-footer-social">
            <div class="app-footer-social-title">Follow Us:</div>
            <ul class="app-footer-social-list">
              <li><a href="http://www.facebook.com/danawallet" class="facebook"><i class="icon-facebook"></i></a></li>
              <li><a href="http://www.instagram.com/dana.id" class="instagram"><i class="icon-instagram"></i></a></li>
              <li><a href="http://twitter.com/danawallet" class="twitter"><i class="icon-twitter"></i></a></li>
            </ul>
          </div>
        </section>
        <section class="app-footer-right">
          <nav class="app-footer-nav">
            <ul class="app-footer-nav-menu">
              <li><a href="/">Menu</a></li>
              <li><a href="/">Menu</a></li>
              <li><a href="/">Menu</a></li>
            </ul>
          </nav>
          <div class="app-footer-copyright">
            <span>© 2017 <br class="show-mobile">DANA - PT. Espay Debit Indonesia Koe. <br class="show-mobile">All Rights Reserved.</span>
          </div>
        </section>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss">
@import "@/assets/css/style.scss";
.app-footer {
  background-color: app-color('primary');
  color: app-color('white');
  margin: 30px 0 0;
  padding: 96px 20px;

  a {
    color: app-color('white');
  }

  &-wrapper {
    display: flex;
  }

  &-left,
  &-right {
    flex-basis: 50%;
  }

  &-right {
    text-align: right;
  }

  &-nav-menu {
    margin: 0 -16px;
    li {
      display: inline-block;
      padding: 0 16px 10px;

      a {
        text-transform: uppercase;
        text-decoration: none;
        &:focus,
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &-social-list {
    margin: 0 -15px;
    li {
      display: inline-block;
      padding: 15px;
      a {
        font-size: 25px;
        text-decoration: none;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 48px 20px;

    &-wrapper {
      display: block;
    }

    &-left,
    &-right {
      text-align: center;
    }

    &-social {
      &-title {
        font-size: 12px;
        padding-bottom: 9px;
      }

      &-list {
        li {
          padding: 15px 26px 24px;
        }
      }
    }

    &-nav {
      &-menu {
        li {
          padding-bottom: 40px;

          a {
            font-size: 12px;
          }
        }
      }
    }

    &-copyright {
      font-size: 12px;
      line-height: 1.5em;
    }
  }
}

.show-mobile {
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
}
</style>
