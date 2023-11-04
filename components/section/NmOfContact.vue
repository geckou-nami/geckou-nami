<template>
  <section>
    <div :class="$style.contactContainer">
      <p :class="$style.contactText">
        執筆・セミナーなどなどライブコマースに関わるお仕事の依頼、<br>
        本協会への参加のご希望などはこちらからご連絡ください。
      </p>
      <a href="#" :class="$style.button">CONTACT</a>
    </div>
  </section>
</template>

<style lang="scss" module>

.contactContainer {
  min-height: calc(100vh - var(--bv) * 21);
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  p {
    font-size : var(--font-size-large);
    line-height: 2;
  }

  .button {
    display           : inline-block;
    width             : 100%;
    max-width         : 270px;
    background-image  : var(--main-color);
    box-shadow        : 0 0 64px 0 rgba(47, 7, 26, 0.2);
    color             : #FFFFFF;
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