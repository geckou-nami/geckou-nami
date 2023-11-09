<template>
  <section>
    <div :class="$style.activityContents">
      <div :class="$style.activityCard">
        <div :class="$style.circle">
          <img src="~/assets/images/activity-1.png" alt="" :class="$style.activityImage">
        </div>
        <div :class="$style.activityTextWrap">
          <p :class="$style.activityTitle">定期セミナー</p>
          <p :class="$style.activityArticle">
            ライブコマースに関するセミナー・勉強会を定期的に実施します。
            オフライン開催にすることで横の連携を強めます。<br>
            開催日時・テーマ・お申込みはNEWSよりご確認ください。
          </p>
        </div>
      </div>
      <div :class="$style.activityCard">
        <div :class="$style.circle">
          <img src="~/assets/images/activity-2.png" alt="" :class="$style.activityImage">
        </div>
        <div :class="$style.activityTextWrap">
          <p :class="$style.activityTitle">コンサルティング</p>
          <p :class="$style.activityArticle">
            企業・ブランドのライブコマースの戦略、レポート、コマーサー育成サポートなどを
            ご支援しております。詳しくはお問い合わせよりご連絡ください。
          </p>
        </div>
      </div>
      <div :class="$style.activityCard">
        <div :class="$style.circle">
          <img src="~/assets/images/activity-3.png" alt="" :class="$style.activityImage">
        </div>
        <div :class="$style.activityTextWrap">
          <p :class="$style.activityTitle">執筆・登壇</p>
          <p :class="$style.activityArticle">
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

.activityContents {
  display        : flex;
  flex-direction : column;
  gap            : calc(var(--bv) * 8);

  .activityCard {
    display: flex;
    width     : calc(100% - var(--bv) * 40);
    gap : calc(var(--bv) * 2);
    align-items: space-between;
    .circle {
      flex           : 0 0 calc(var(--bv) * 18);
      display        : flex;
      align-items    : center;
      justify-content: center;
      background-color: var(--dark-white);
      width          : calc(var(--bv) * 18);
      height         : calc(var(--bv) * 18);
      padding        : calc(var(--bv) * 4);
      border-radius  : 50%;
      overflow       : hidden;
      position       : relative;
    }
    .activityTextWrap {
      display       : flex;
      flex-direction: column;
      gap           : calc(var(--bv) * 1.5);
      height        : 100%;
      position      : relative;
      padding       : var(--bv) 0;

      .activityTitle {
        font-size       : 18px;
        font-weight: bold;
      }
    }
    &:nth-child(2) {
        margin-inline-start: calc(var(--bv) * 16);
      }

    &:nth-child(3) {
      margin-inline-start: calc((var(--bv) * 16) * 2);
    }
  }
}
</style>