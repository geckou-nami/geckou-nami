<template>
  <section>
    <div :class="$style.activityWrap">
      <div :class="$style.activityCard">
        <p :class="$style.activityTitle">定期セミナー</p>
        <p :class="$style.activityArticle">
          ライブコマースに関するセミナー・勉強会を定期的に実施します。
          オフライン開催にすることで横の連携を強めます。<br>
          開催日時・テーマ・お申込みはNEWSよりご確認ください。
        </p>
      </div>
      <div :class="$style.activityCard">
        <p :class="$style.activityTitle">コンサルティング</p>
        <p :class="$style.activityArticle">
          企業・ブランドのライブコマースの戦略、レポート、コマーサー育成サポートなどを
          ご支援しております。詳しくはお問い合わせよりご連絡ください。
        </p>
      </div>
      <div :class="$style.activityCard">
        <p :class="$style.activityTitle">執筆・登壇</p>
        <p :class="$style.activityArticle">
          ライブコマースに関する登壇、取材対応、記事の執筆などを行っています。
          お問い合わせよりご依頼ください。<br>
          過去登壇はこちら
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>

.activityWrap {
  display        : flex;
  flex-direction : column;
  gap            : calc(var(--bv) * 8);
  padding        : calc(var(--bv) * 16);
  align-items    : center;

  .activityCard {
    display       : flex;
    flex-direction: column;
    gap           : calc(var(--bv) * 1.5);
    max-width     : calc(100% - var(--bv) * 32);
    height        : 100%;
    position      : relative;
    padding       : var(--bv) 0;

    &::before {
      content            : "";
      background-image   : url("~/assets/images/activity-1.png");
      position           : absolute;
      background-repeat  : no-repeat;
      background-position: left center;
      display            : block;
      width              : 100%;
      height             : 100%;
      top                : 0;
      left               : -250px;
      align-content      : flex-start;
    }

    &:nth-child(2) {
      margin-inline-start: 200px;

      &::before {
        background-image: url("~/assets/images/activity-2.png");
      }
    }

    &:nth-child(3) {
      margin-inline-start: 300px;

      &::before {
        background-image: url("~/assets/images/activity-3.png");
      }
    }

    .activityTitle {
      font-size       : 18px;
      font-weight: bold;
    }
  }
}
</style>