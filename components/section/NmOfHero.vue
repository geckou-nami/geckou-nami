<template>
  <div :class="$style.hero">
    <div :class="$style.heroPicWrap">
      <div :class="$style.heroRow">
        <img :class="$style.heroPic" src="@/assets/images/mv-2.png" alt="日本ライブコマース">
        <img :class="$style.heroPic" src="@/assets/images/mv-1.png" alt="日本ライブコマース">
        <img :class="$style.heroPic" src="@/assets/images/mv-3.png" alt="日本ライブコマース">
      </div>
      <div :class="[$style.heroRow,$style.justifyStart]">
        <img :class="$style.heroPic" src="@/assets/images/mv-4.png" alt="日本ライブコマース">
        <img :class="$style.heroPic" src="@/assets/images/mv-6.png" alt="日本ライブコマース">
        <img :class="$style.heroPic" src="@/assets/images/mv-5.png" alt="日本ライブコマース">
      </div>
      <p>
        日本ライブコマース協会は、<br>
        日本におけるライブコマース文化の<br>
        促進を支援します。
      </p>
      <a href="#contact" :class="$style.button">▶︎ CONTACT US!</a>
    </div>
  </div>
</template>

<style lang="scss" module>

.hero {
  padding   : calc(var(--bv) * 10) calc(var(--bv) * 4);

  .heroPicWrap{
    display        : flex;
    flex-wrap      : wrap;
    width          : 100%;
    gap            : calc(var(--bv) * 6);
    justify-content: center;
    position       : relative;

    .heroRow {
      display        : flex;
      justify-content: flex-end;
      width          : 100%;
      gap            : calc(var(--bv) * 8);
    }

    .justifyStart {
      display        : flex;
      justify-content: flex-start;
      width          : 100%;
      gap            : calc(var(--bv) * 8);
    }

    .heroPic {
      --image-width : calc(100% / 3 - (var(--bv) * 8));
      flex         : 1 1 var(--image-width);
      max-width    : var(--image-width);
      // overflow     : hidden;
    }
  }

  p {
    font-size: var(--font-size-large);
    font-weight: bold;
    position : absolute;
    left     : calc(var(--bv) * 12);
    bottom   : calc(var(--bv) * 2);
  }

  a.button {
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
</style>
