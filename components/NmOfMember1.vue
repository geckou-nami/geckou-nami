<template>
  <div class="member-1">
    <div class="section-container">
        <div class="member1-card">
            <div class="image-member1">
                <img src="~/assets/images/menber1.png" alt="メンバー紹介">
            </div>
            <div class="member1-text-wrap">
                <p class="member1-title">会長／武者 慶佑</p>
                <p class="member1-article">スターバックス、ビジネス·ブレークスルーなどの事業会社のマーケティング、Kona's Coffeeのブランドマネージャー、SNSコンサルティング会社を経て、2021年より株式会社アイレップにてライブコマース・エヴァンジェリストとして活動。アパレル、食品、化粧品などのライブコマースの立ち上げや、コマーサー育成などを実施。ad:tech tokyo2021、Japan IT EXPO2021 などに登壇。</p>
                <p>2022年「成果を上げるライブコマースの教科書」を執筆し、Amazonカテゴリランキング1位となる。自らもコマーサーとしても出演。また、2013年より日本グミ協会を発足し、Twitter、Instagramのフォロワー数延べ20万人の国内最大のグミのコミュニティを運営し、グミの日のプロデュースなどを行う。</p>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/base' as *;

.member-1 {
    color         : #000000;

    .section-container {
        // padding          : calc(var(--bv) * 16) calc(var(--bv) * 4);

        .member1-card {
            display: flex;
            background-color: #E4D2DB;
            box-shadow      : 0 0 64px 0 rgba(47, 7, 26, 0.2);
            border-radius   : 30px;
            overflow: hidden;

            .image-member1 {
                display         : block;
                flex            : 0 0 38%;
                width           : 38%;
                aspect-ratio    : 1.618/1;

                img {
                width         : 100%;
                height        : 100%;
                object-fit    : cover;
                mix-blend-mode: darken;
                }
            }

            .member1-text-wrap {
                display        : flex;
                flex-direction : column;
                justify-content: center;
                gap            : calc(var(--bv) * 4);
                padding        : calc(var(--bv) * 8); 
            
                .member1-title {
                    font-size: 18px;
                }
            }
        }
    }
}
</style>