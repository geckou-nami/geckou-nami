<template>
  <div class="hero">
    <div class="hero-pic-wrap">
        <div class="hero-row">
            <img class="hero-pic" src="~/assets/images/mv-2.png" alt="日本ライブコマース">
            <img class="hero-pic" src="~/assets/images/mv-1.png" alt="日本ライブコマース">
            <img class="hero-pic" src="~/assets/images/mv-3.png" alt="日本ライブコマース">
        </div>
        <div class="hero-row justify-start">
            <img class="hero-pic" src="~/assets/images/mv-4.png" alt="日本ライブコマース">
            <img class="hero-pic" src="~/assets/images/mv-5.png" alt="日本ライブコマース">
            <img class="hero-pic" src="~/assets/images/mv-6.png" alt="日本ライブコマース">
        </div>
        <p>日本ライブコマース協会は、<br>日本におけるライブコマース文化の<br>促進を支援します。</p>
        <a href="#contact" class="bottun">▶︎ CONTACT  US!</a>
    </div>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/base' as *;

  header {
      height  : 0;
      overflow: hidden;

      .header-container {
          display        : flex;
          justify-content: space-between;
          padding      : calc(var(--bv) * 2);
          margin       : calc(var(--bv) * 8);
          border       : calc(var(--bv) * 2.5) solid #FFFFFF;
          border-radius: 40px;
          width        : calc(100% - (var(--bv) * 16 + var(--bv) * 5));
          height       : calc(100% - (var(--bv) * 16 + var(--bv) * 5));
          z-index      : 10;
          // position     : fixed;
          
          .main-logo {
              width : calc(var(--bv) * 66);
              height: calc(var(--bv) * 12);
          } 

          .right-menu {
              display       : flex;
              flex-direction: column;
              gap           : calc(var(--bv) * 3);

              .hamburger-circle {
                  width           : calc(var(--bv) * 8);
                  height          : calc(var(--bv) * 8);
                  background-color: #FFFFFF;
                  border-radius   : 50%;
              }

              .sns-icon {
                  width     : calc(var(--bv) * 6);
                  align-self: flex-end;
              }
          }
      }
  }

  .hero {
      padding   : calc(var(--bv) * 10) calc(var(--bv) * 4);

      .hero-pic-wrap{
          display        : flex;
          flex-wrap      : wrap;
          width          : 100%;
          gap            : calc(var(--bv) * 6);
          justify-content: center;
          position       : relative;

          .hero-row {
          display        : flex;
          justify-content: flex-end;
          width          : 100%;
          gap            : calc(var(--bv) * 8);
          }

          .justify-start {
          display        : flex;
          justify-content: flex-start;
          width          : 100%;
          gap            : calc(var(--bv) * 8);
          }
      
          .hero-pic {
          --image-width : calc(100% / 3 - (var(--bv) * 8));
          flex         : 1 1 var(--image-width);
          max-width    : var(--image-width);
          // overflow     : hidden;
          }
      }

          p {
              font-size: var(--font-size-large);
              position : absolute;
              left     : calc(var(--bv) * 12);
              bottom   : calc(var(--bv) * 2);
          }

          a.bottun {
              display         : inline-block;
              width           : 100%;
              max-width       : calc(var(--bv) * 42);
              background-color: #FFFFFF;
              border          : solid 4px #F44B7E;
              color           : #F44B7E;
              text-align      : center;
              padding         : var(--bv) 0;
              font-size       : var(--font-size-larger);
              letter-spacing  : var(--letter-spacing-narrow);
              border-radius   : 50px;
              text-decoration : none;
              position        : absolute;
              top             : 50%;
              left            : 50%;
              transform       : translate(-50%, -50%);
          }
  }

  .section-container {
      padding          : calc(var(--bv) * 16) calc(var(--bv) * 16);
      scroll-snap-align: start;
  }
</style>
