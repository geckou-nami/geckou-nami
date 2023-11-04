<template>
  <section>
    <div :class="$style.member2">
      <div :class="$style.member2Container">
        <div :class="$style.member2Card">
          <img src="~/assets/images/news-pic.png" alt="メンバー紹介">
          <div :class="$style.member2TextWrap">
            <p :class="$style.member2Title">会長／武者 慶佑</p>
            <p :class="$style.member2Article">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
        <div :class="$style.member2Card">
          <img src="~/assets/images/news-pic.png" alt="メンバー紹介">
          <div :class="$style.member2TextWrap">
            <p :class="$style.member2Title">会長／武者 慶佑</p>
            <p :class="$style.member2Article">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
        <div :class="$style.member2Card">
          <img src="~/assets/images/news-pic.png" alt="メンバー紹介">
          <div :class="$style.member2TextWrap">
            <p :class="$style.member2Title">会長／武者 慶佑</p>
            <p :class="$style.member2Article">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>

.member2 {
  color     : #000000;

  .member2Container {
    display        : flex;
    gap            : calc(var(--bv) * 8);
    justify-content: space-between;

    .member2Card {
      background-color  : #E4D2DB;
      box-shadow        : 0 0 64px 0 rgba(47, 7, 26, 0.2);
      border-radius     : 30px;
      margin-block-start: 0;

      img {
        width        : 100%;
        border-radius: 30px 30px 0 0;
      }
      .member2TextWrap {
        padding: calc(var(--bv) * 4);
      }
      .member2Title {
        font-weight: bold;
        text-align : center;
        padding    : calc(var(--bv) * 4);
      }
    }

    .member2Card:nth-child(2) {
        margin-top      : 5%;
        margin-block-end: -5%;
    }

    .member2Card:nth-child(3) {
        margin-top      : 10%;
        margin-block-end: -10%;
    }
  }
}
</style>