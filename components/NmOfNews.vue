<template>
  <div class="news">
    <div class="section-container">
        <div class="news-container">
            <div class="news-card">
                <img src="~/assets/images/news-pic.png" alt="ニュース記事">
                <div class="news-text-wrap">
                    <p class="news-title">記事のタイトル・記事のタイトル・記事のタイトル・記事のタイトル</p>
                    <p class="news-date">2025.09.08</p>
                </div>
            </div>
            <div class="news-card">
                <img src="~/assets/images/news-pic.png" alt="ニュース記事">
                <div class="news-text-wrap">
                    <p class="news-title">記事のタイトル・記事のタイトル・記事のタイトル・記事のタイトル</p>
                    <p class="news-date">2025.09.08</p>
                </div>
            </div>
            <div class="news-card">
                <img src="~/assets/images/news-pic.png" alt="ニュース記事">
                <div class="news-text-wrap">
                    <p class="news-title">記事のタイトル・記事のタイトル・記事のタイトル・記事のタイトル</p>
                    <p class="news-date">2025.09.08</p>
                </div>
            </div>
            <div class="news-card">
                <img src="~/assets/images/news-pic.png" alt="ニュース記事">
                <div class="news-text-wrap">
                    <p class="news-title">記事のタイトル・記事のタイトル・記事のタイトル・記事のタイトル</p>
                    <p class="news-date">2025.09.08</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/base' as *;

.news {
  .news-container {
      display       : flex;
      flex-direction: column;
      gap           : calc(var(--bv) * 8);

      .news-card {
          display            : flex;
          width: calc(100% - var(--bv) * 24);
          height             :  calc(var(--bv) * 26);
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

          .news-text-wrap {
              display        : flex;
              flex           : 1 1 auto;
              flex-direction : column;
              justify-content: space-between;
              justify-content: space-between;
              gap            : calc(var(--bv) * 2);
              padding        : calc(var(--bv) * 4);
          }

          p {
              color: #000000;
          }
          .news-date {
              font-size : var(--font-size-small);
              text-align: end;
          }
      }
  }   
}
</style>
