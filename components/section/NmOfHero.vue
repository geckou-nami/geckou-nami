<template>
  <div :class="$style.hero_container">
    <div :class="$style.hero_contents">
      <div :class="$style.hero_pic_wrap">
        <div :class="$style.hero_pic">
          <img src="@/assets/images/mv-1.png" alt="日本ライブコマース">
        </div>
        <div :class="$style.hero_pic">
          <img src="@/assets/images/mv-2.png" alt="日本ライブコマース">
        </div>
        <div :class="$style.hero_pic">
          <img src="@/assets/images/mv-3.png" alt="日本ライブコマース">
        </div>
        <div :class="$style.hero_pic">
          <img src="@/assets/images/mv-4.png" alt="日本ライブコマース">
        </div>
        <div :class="$style.hero_pic">
          <img src="@/assets/images/mv-5.png" alt="日本ライブコマース">
        </div>
        <div :class="$style.hero_pic">
          <img src="@/assets/images/mv-6.png" alt="日本ライブコマース">
        </div>
      </div>
      <p>
        日本ライブコマース協会は、<br>
        日本におけるライブコマース文化の<br>
        促進を支援します。
      </p>
    </div>
    <a href="#contact" :class="$style.button">▶︎ CONTACT US!</a>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.hero_container {
  width   : 100%;
  height  : 100dvh;
  position: relative;

  .hero_contents {
    display        : flex;
    justify-content: center;
    align-items    : center;
    width          : 100%;
    height         : 100%;
    position       : absolute;
    top            : 0;
    left           : 0;
    overflow       : hidden;

    .hero_pic_wrap{
      display        : flex;
      flex-wrap      : wrap;
      width          : 100%;
      max-width: 100%;
      gap            : calc(var(--bv) * 6);
      justify-content: center;
      position       : relative;
      left           : calc(var(--bv) * 4);

      @include mediaScreen('mobile') {
        gap: calc(var(--bv) * 4) calc(var(--bv) * 3);
      }

      .hero_pic {
        --image-width      : calc(100% / 3 - (var(--bv) * 8));
        flex               : 1 1 var(--image-width);
        max-width          : var(--image-width);
        animation-name     : slideInLeft;
        animation-duration : .5s;
        animation-fill-mode: forwards;

        &:nth-of-type(4) {
          margin-left: calc(var(--bv) * -16);
        }

        @include mediaScreen('mobile') {
          --image-width: calc(100% / 2 - (var(--bv) * 2));

          &:nth-of-type(1) {
            margin-left: calc(var(--bv) * -6);
          }

          &:nth-of-type(4) {
            margin-left: 0;
          }

          &:nth-of-type(5) {
            margin-left: calc(var(--bv) * -12);
          }
        }

        &::before,
        &::after {
          content      : '';
          display      : block;
          width        : 100%;
          height       : 100%;
          position     : absolute;
          top          : 0;
          left         : 0;
          border-radius: 12px;
        }

        &::before {
          background-image: linear-gradient(89.85deg, rgba(235, 66, 106, 0.2) 0.13%, rgba(235, 66, 106, 0.8) 99.88%);
          mix-blend-mode  : screen;
          z-index         : 10;
        }

        &::after {
          background-color: rgba(110, 66, 235, 0.3);
          mix-blend-mode  : exclusion;
        }
      }
    }
  }

  p {
    font-size  : var(--font-size-large);
    font-weight: bold;
    position   : absolute;
    left       : calc(var(--bv) * 12);
    bottom     : calc(var(--bv) * 18);

    @include mediaScreen('mobile') {
      font-size: var(--font-size-medium);
      left     : calc(var(--bv) * 4);
      bottom   : calc(var(--bv) * 4);
    }
  }

  a.button {
  display         : inline-block;
  width           : 100%;
  max-width       : calc(var(--bv) * 42);
  background-color: #FFFFFF;
  border          : solid 4px #F44B7E;
  color           : #F44B7E;
  font-family     : var(--font-family-rounded);
  font-weight     : bold;
  text-align      : center;
  padding         : var(--bv) 0;
  font-size       : var(--font-size-max);
  letter-spacing  : var(--letter-spacing-narrow);
  border-radius   : 50px;
  text-decoration : none;
  position        : absolute;
  top             : 50%;
  left            : 50%;
  transform       : translate(-50%, -50%);

    @include mediaScreen('mobile') {
      max-width: calc(var(--bv) * 35);
    }
  }
}

@keyframes slideInLeft {
  from {
    opacity  : 0;
    transform: translateX(-36px);
  }

  to {
    opacity  : 1;
    transform: translateX(0px);
  }
}
</style>
