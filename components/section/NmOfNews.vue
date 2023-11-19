<template>
  <section>
    <div :class="$style.news_container">
      <ul :class="$style.news_list">
        <li>
          <div :class="$style.image">
            <img src="~/assets/images/news-pic.png" alt="ニュース記事">
          </div>
          <div :class="$style.text_wrap">
            <p :class="$style.title">記事のタイトル・記事のタイトル・記事のタイトル・記事のタイトル</p>
            <p :class="$style.time">2025.09.01</p>
          </div>
        </li>
        <li>
          <div :class="$style.image">
            <img src="~/assets/images/news-pic.png" alt="ニュース記事">
          </div>
          <div :class="$style.text_wrap">
            <p :class="$style.title">記事のタイトル・記事のタイトル・記事のタイトル・記事のタイトル</p>
            <p :class="$style.time">2025.09.02</p>
          </div>
        </li>
        <li>
          <div :class="$style.image">
            <img src="~/assets/images/news-pic.png" alt="ニュース記事">
          </div>
          <div :class="$style.text_wrap">
            <p :class="$style.title">記事のタイトル・記事のタイトル・記事のタイトル・記事のタイトル</p>
            <p :class="$style.time">2025.09.03</p>
          </div>
        </li>
        <li>
          <div :class="$style.image">
            <img src="~/assets/images/news-pic.png" alt="ニュース記事">
          </div>
          <div :class="$style.text_wrap">
            <p :class="$style.title">記事のタイトル・記事のタイトル・記事のタイトル・記事のタイトル</p>
            <p :class="$style.time">2025.09.04</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.news_list {
  display       : flex;
  flex-direction: column;
  gap           : calc(var(--bv) * 8);
  padding       : 0 calc(var(--bv) * 8);

  @include mediaScreen('mobile') {
    flex-direction: row;
    flex-wrap     : wrap;
    gap           : calc(var(--bv) * 2);
    padding       : 0;
    margin-top    : calc(var(--bv) * 8);
    align-items   : flex-start;
  }

  li {
    display            : flex;
    width              : calc(100% - var(--bv) * 24);
    border-radius      : var(--border-radius-base);
    background-color   : #E4D2DB;
    position           : relative;
    animation-name     : slideInLeft;
    animation-duration : .5s;
    animation-fill-mode: forwards;

    &:nth-of-type(1) {
      left: calc(var(--bv) * 8 * 0);
    }

    &:nth-of-type(2) {
      left: calc(var(--bv) * 8 * 1);
    }

    &:nth-of-type(3) {
      left: calc(var(--bv) * 8 * 2);
    }

    &:nth-of-type(4) {
      left: calc(var(--bv) * 8 * 3);
    }

    @include mediaScreen('mobile') {
      flex-direction: column;
      flex          : 1 1 calc(50% - var(--bv) * 2);
      left          : 0 !important;

      &:nth-child(odd) {
        margin-top: calc(var(--bv) * -8);
      }
    }

    .image {
      flex          : 0 0 38%;
      display       : flex;
      flex-direction: column;
      width         : 38%;
      aspect-ratio  : var(--silver-ratio);

      @include mediaScreen('mobile') {
        flex : 0 0 auto;
        width: 100%;
      }

      img {
        border-radius: var(--border-radius-base) 0 0 var(--border-radius-base);

        @include mediaScreen('mobile') {
          border-radius: var(--border-radius-base) var(--border-radius-base) 0 0;
        }
      }
    }

    .text_wrap {
      flex           : 1 1 auto;
      display        : flex;
      flex-direction : column;
      justify-content: space-between;
      gap            : calc(var(--bv) * 2);
      padding        : calc(var(--bv) * 4);
      color          : var(--black);
      text-overflow  : ellipsis;

      @include mediaScreen('mobile') {
        padding: calc(var(--bv) * 2);
      }

      .time {
        display   : block;
        font-size : var(--font-size-small);
        text-align: right;
      }
    }
  }
}
</style>
