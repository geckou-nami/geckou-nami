<template>
  <section>
    <div id="contact" :class="$style.contact_container">
      <p :class="$style.contact_text">
        執筆・セミナーなどなどライブコマースに関わるお仕事の依頼、<br>
        本協会への参加のご希望などはこちらからご連絡ください。
      </p>
      <a href="" :class="$style.button">CONTACT</a>
    </div>
  </section>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.contact_container {
  min-height     : calc(100vh - var(--bv) * 21);
  display        : flex;
  flex-direction : column;
  text-align     : center;
  justify-content: center;

  .contact_text {
    font-size : var(--font-size-larger);
    line-height: 2;

    @include mediaScreen('mobile') {
      font-size: var(--font-size-large);
      text-align: left;
      font-weight: bold;
    }
  }

  .button {
    display           : inline-block;
    width             : 100%;
    max-width         : 270px;
    background-image  : var(--main-color);
    box-shadow        : 0 0 64px 0 rgba(47, 7, 26, 0.2);
    color             : #FFFFFF;
    font-family       : var(--font-family-rounded);
    font-weight       : bold;
    padding           : 8px 0;
    font-size         : 32px;
    letter-spacing    : 0.1em;
    border-radius     : 50px;
    text-decoration   : none;
    margin-block-start: 64px;
    margin-inline     : auto;
  }
}
</style>