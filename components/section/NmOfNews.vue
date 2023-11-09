<template>
  <section>
    <div :class="$style.newsContainer">
      <div :class="$style.newsCard">
        <img src="~/assets/images/news-pic.png" alt="ニュース記事">
        <div :class="$style.newsTextWrap">
          <p :class="$style.newsTitle">記事のタイトル・記事のタイトル・記事のタイトル・記事のタイトル</p>
          <p :class="$style.newsDate">2025.09.08</p>
        </div>
      </div>
      <div :class="$style.newsCard">
        <img src="~/assets/images/news-pic.png" alt="ニュース記事">
        <div :class="$style.newsTextWrap">
          <p :class="$style.newsTitle">記事のタイトル・記事のタイトル・記事のタイトル・記事のタイトル</p>
          <p :class="$style.newsDate">2025.09.08</p>
        </div>
      </div>
      <div :class="$style.newsCard">
        <img src="~/assets/images/news-pic.png" alt="ニュース記事">
        <div :class="$style.newsTextWrap">
          <p :class="$style.newsTitle">記事のタイトル・記事のタイトル・記事のタイトル・記事のタイトル</p>
          <p :class="$style.newsDate">2025.09.08</p>
        </div>
      </div>
      <div :class="$style.newsCard">
        <img src="~/assets/images/news-pic.png" alt="ニュース記事">
        <div :class="$style.newsTextWrap">
          <p :class="$style.newsTitle">記事のタイトル・記事のタイトル・記事のタイトル・記事のタイトル</p>
          <p :class="$style.newsDate">2025.09.08</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>

.newsContainer {
  display       : flex;
  flex-direction: column;
  gap           : calc(var(--bv) * 8);

  .newsCard {
    display            : flex;
    width              : calc(100% - var(--bv) * 24);
    height             : calc(var(--bv) * 26);
    background-color   : #E4D2DB;
    box-shadow         : 0 0 64px 0 rgba(47, 7, 26, 0.2);
    border-radius      : 30px;
    margin-inline-start: 0;

    &:nth-child(2) {
      margin-inline-start:calc(var(--bv) * 8);
    }

    &:nth-child(3) {
      margin-inline-start: calc(var(--bv) * 16);
    }

    &:nth-child(4) {
      margin-inline-start: calc(var(--bv) * 24);
    }

    img {
      flex            : 0 0 38%;
      display         : flex;
      border-radius: 30px 0 0 30px;
      justify-content : center;
      align-items     : center;
      width           : 38%;
      aspect-ratio    : var(--silver-ratio);
    }

    .newsTextWrap {
      display        : flex;
      flex           : 1 1 auto;
      flex-direction : column;
      justify-content: space-between;
      gap            : calc(var(--bv) * 2);
      padding        : calc(var(--bv) * 4);
    }

    p {
      color: #000000;
    }
      .newsDate {
      font-size : var(--font-size-small);
      text-align: end;
    }
  }
}
</style>
