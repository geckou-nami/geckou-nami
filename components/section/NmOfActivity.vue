<template>
  <section>
    <div :class="$style.activity_contents">
      <div :class="$style.activity_card">
        <div :class="$style.circle">
          <img src="~/assets/images/activity-1.png" alt="" :class="$style.activityImage">
        </div>
        <div :class="$style.activity_text_wrap">
          <p :class="$style.activityTitle">定期セミナー</p>
          <p :class="$style.activity_article">
            ライブコマースに関するセミナー・勉強会を定期的に実施します。
            オフライン開催にすることで横の連携を強めます。<br>
            開催日時・テーマ・お申込みはNEWSよりご確認ください。
          </p>
        </div>
      </div>
      <div :class="$style.activity_card">
        <div :class="$style.circle">
          <img src="~/assets/images/activity-2.png" alt="" :class="$style.activityImage">
        </div>
        <div :class="$style.activity_text_wrap">
          <p :class="$style.activity_title">コンサルティング</p>
          <p :class="$style.activity_article">
            企業・ブランドのライブコマースの戦略、レポート、コマーサー育成サポートなどを
            ご支援しております。詳しくはお問い合わせよりご連絡ください。
          </p>
        </div>
      </div>
      <div :class="$style.activity_card">
        <div :class="$style.circle">
          <img src="~/assets/images/activity-3.png" alt="" :class="$style.activityImage">
        </div>
        <div :class="$style.activity_text_wrap">
          <p :class="$style.activity_title">執筆・登壇</p>
          <p :class="$style.activity_article">
            ライブコマースに関する登壇、取材対応、記事の執筆などを行っています。
            お問い合わせよりご依頼ください。<br>
            過去登壇はこちら
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.activity_contents {
  display        : flex;
  flex-direction : column;
  gap            : calc(var(--bv) * 8);

  @include mediaScreen('mobile') {
    gap        : calc(var(--bv) * 16);
  }

  .activity_card {
    display            : flex;
    width              : calc(100% - var(--bv) * 40);
    gap                : calc(var(--bv) * 2);
    align-items        : space-between;
    animation-name     : slideInLeft;
    animation-duration : .5s;
    animation-fill-mode: forwards;

    @include mediaScreen('mobile') {
      flex-direction: column;
      align-items: center;
      width :100%;
    }

    .circle {
      flex            : 0 0 calc(var(--bv) * 18);
      display         : flex;
      align-items     : center;
      justify-content : center;
      background-color: var(--dark-white);
      width           : calc(var(--bv) * 18);
      height          : calc(var(--bv) * 18);
      padding         : calc(var(--bv) * 4);
      border-radius   : 50%;
      overflow        : hidden;
      position        : relative;
      box-shadow      : 0px 0px 64px 0px rgba(47, 7, 26, 0.20);
      backdrop-filter : blur(8px);
    }
    .activity_text_wrap {
      display       : flex;
      flex-direction: column;
      gap           : calc(var(--bv) * 1.5);
      height        : 100%;
      position      : relative;
      padding       : var(--bv);

      .activity_title {
        font-size  : 18px;
        font-weight: bold;

        @include mediaScreen('mobile') {
          text-align: center;
        }
      }
    }

    &:nth-child(2) {
      margin-inline-start: calc(var(--bv) * 16);
      animation-delay: 0.2s;

      @include mediaScreen('mobile') {
        margin-inline-start:0;
      }
    }

    &:nth-child(3) {
      margin-inline-start: calc((var(--bv) * 16) * 2);
      animation-delay: 0.4s;

      @include mediaScreen('mobile') {
        margin-inline-start:0;
      }
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