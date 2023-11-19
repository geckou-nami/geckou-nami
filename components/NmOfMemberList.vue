<template>
  <div :class="$style.member2">
    <div :class="$style.member2_container">
      <div :class="$style.member2_card">
        <img src="~/assets/images/news-pic.png" alt="メンバー紹介">
        <div :class="$style.member2_text_wrap">
          <p :class="$style.member2_title">会長／武者 慶佑</p>
          <p :class="$style.member2_article">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
      </div>
      <div :class="$style.member2_card">
        <img src="~/assets/images/news-pic.png" alt="メンバー紹介">
        <div :class="$style.member2_text_wrap">
          <p :class="$style.member2_title">会長／武者 慶佑</p>
          <p :class="$style.member2_article">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
      </div>
      <div :class="$style.member2_card">
        <img src="~/assets/images/news-pic.png" alt="メンバー紹介">
        <div :class="$style.member2_text_wrap">
          <p :class="$style.member2_title">会長／武者 慶佑</p>
          <p :class="$style.member2_article">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.member2 {
  color      : #000000;
  padding-top: calc(var(--bv) * 28);

  @include mediaScreen('mobile') {
    padding-top: calc(var(--bv) * 10);
  }

  .member2_container {
    display        : flex;
    gap            : calc(var(--bv) * 8);
    justify-content: space-between;

    @include mediaScreen('mobile') {
      flex-direction: column;
      gap           : calc(var(--bv) * 4);
      }

    .member2_card {
      background-color   : #E4D2DB;
      box-shadow         : 0 0 64px 0 rgba(47, 7, 26, 0.2);
      border-radius      : 30px;
      margin-block-start : 0;
      box-shadow         : 0px 0px 64px 0px rgba(47, 7, 26, 0.20);
      backdrop-filter    : blur(8px);
      animation-name     : slideInDown;
      animation-duration : .5s;
      animation-fill-mode: forwards;

      @include mediaScreen('mobile') {
        border-radius: 10px;
      }

      img {
        width        : 100%;
        border-radius: 30px 30px 0 0;

        @include mediaScreen('mobile') {
          border-radius: 8px 8px 0 0;
        }
      }
      .member2_text_wrap {
        padding: calc(var(--bv) * 4);
      }
      .member2_title {
        font-weight: bold;
        text-align : center;
        padding    : calc(var(--bv) * 4);
      }
    }

    .member2_card:nth-child(2) {
        margin-top      : 5%;
        margin-block-end: -5%;
        animation-delay : 0.2s;
    }

    .member2_card:nth-child(3) {
        margin-top      : 10%;
        margin-block-end: -10%;
        animation-delay : 0.4s;
    }
  }
}

@keyframes slideInDown {
  from {
    opacity  : 0;
    transform: translateY(-36px);
  }

  to {
    opacity  : 1;
    transform: translateY(0px);
  }
}
</style>