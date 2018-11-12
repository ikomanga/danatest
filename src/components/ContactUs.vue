<template>
  <main>
    <div class="contact-us container">
      <div class="contact-us-left">
        <h2>Contact us</h2>
        <div class="mobile-only contact-us-info">
          <div class="contact-us-phone">
            <i class="icon-contact-us"></i>
            <span>1-500-445</span>
          </div>
          <div class="help-text">Or kindly fill out this form, we’ll get back to you as quickly as possible</div>
        </div>
        <form class="contact-us-form">
          <div class="form-wrapper">
            <label>Name</label>
            <input type="text" name="name" class="form-control" />
          </div>
          <div class="form-wrapper">
            <label>E-mail</label>
            <input type="email" name="email" class="form-control" />
          </div>
          <div class="form-wrapper">
            <label>Message</label>
            <textarea name="message" rows="8">
            </textarea>
          </div>
          <input type="submit" value="Send"/>
        </form>
      </div>
      <div class="contact-us-right desktop-only">
        <div class="contact-us-info">
          <h2>Customer Support</h2>
          <div class="contact-us-phone">
            <i class="icon-contact-us"></i>
            <span>1-500-445</span>
          </div>
          <div class="help-text">Contact our customer support or email us at <a href="mailto:help@dana.id" >help@dana.id</a> if you need help</div>
        </div>
        <div class="contact-us-social">
          <h2>Social Media</h2>
          <p>Feel free to contact us at one of out social media outlets below</p>
          <div class="contact-us-social-share">
            <a href="http://facebook.com"><i class="icon-facebook"></i></a>
            <a href="http://instagram.com"><i class="icon-instagram"></i></a>
            <a href="http://twitter.com"><i class="icon-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style lang="scss">
@import "@/assets/css/style.scss";

.contact-us {
  &.container {
    display: flex;
    max-width: 1100px;
    padding: 0 20px;
    margin: 64px auto 80px;
  }

  & > div {
    flex: 1 0 50%;
  }

  &-left {
    padding-right: 30px;
  }

  &-form {
    max-width: 410px;
    label {
      display: block;
      font-size: 18px;
      line-height: normal;
      margin-bottom: 8px;
    }

    .form-wrapper {
      margin-bottom: 24px;
    }
  }

  &-info {
    margin-bottom: 30px;
    a {
      color: app-color('primary');
    }
    .help-text {
      font-size: 18px;
      font-weight: normal;
      line-height: 1.33em;
    }
  }

  &-phone {
    margin-bottom: 24px;

    i {
      display: inline-block;
      font-size: 64px;
      margin-right: 23px;
      vertical-align: middle;
    }
    span {
      color: app-color('primary');
      display: inline-block;
      font-size: 36px;
      font-weight: bold;
      vertical-align: middle;
    }
  }

  &-social {
    p {
      font-size: 18px;
      font-weight: normal;
      line-height: 1.33;
      margin-bottom: 24px;
    }

    &-share {
      a {
        color: app-color('primary');
        font-size: 36px;
        margin-right: 40px;
        text-decoration: none;
      }
    }
  }

  @media (max-width: 768px) {
    &.container {
      display: block;
    }

    &-left {
      padding-right: 0;
    }

    &-info {
      text-align: center;
    }

    &-form {
      max-width: none;
    }
  }
}
</style>
