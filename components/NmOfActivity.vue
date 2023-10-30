<template>
  <div class="activity">
    <div class="section-container">
        <div class="activity-wrap">
            <div class="activity-card">
                <p class="activity-title">定期セミナー</p>
                <p class="activity-article">ライブコマースに関するセミナー·勉強会を定期的に実施します。オフライン開催にすることで横の連携を強めます。<br>開催日時·テーマ·お申込みはNEWSよりご確認ください。</p>
            </div>
            <div class="activity-card">
                <p class="activity-title">コンサルティング</p>
                <p class="activity-article">企業·ブランドのライブコマースの戦略、レポート、コマーサー育成サポートなどをご支援しております。詳しくはお問い合わせよりご連絡ください。</p>
            </div>
            <div class="activity-card">
                <p class="activity-title">執筆・登壇</p>
                <p class="activity-article">ライブコマースに関する登壇、取材対応、記事の執筆などを行っています。お問い合わせよりご依頼ください。<br>過去登壇はこちら</p>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/base' as *;

.activity-wrap {
    display        : flex;
    flex-direction : column;
    gap            : calc(var(--bv) * 8);
    padding : calc(var(--bv) * 16);
    align-items    : center;

    .activity-card {
        display       : flex;
        flex          : 1;
        flex-direction: column;
        gap           : calc(var(--bv) * 2);
        max-width     : calc(100% - var(--bv) * 32);
        height        : 100%;
        position      : relative;


        &::before {
            content         : "";
            background-image: url("~/assets/images/activity-1.png");
            position        : absolute;
            background-repeat: no-repeat;
            background-position:left center; 
            display         : block;
            width          : calc(var(--bv) * 28);
            height         : calc(var(--bv) * 18);
            left            : -250px;
            mix-blend-mode  : lighten;
            align-content: flex-start;
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

        .activity-title {
            font-size       : 18px;
        }
        
    }
}
</style>