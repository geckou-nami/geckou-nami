<template>
  <section>
    <div :class="$style.member1">
      <div :class="$style.member1Card">
        <div :class="$style.imageMember1">
          <img src="~/assets/images/member1.png" alt="メンバー紹介">
        </div>
        <div :class="$style.member1TextWrap">
          <p :class="$style.member1Title">会長／武者 慶佑</p>
          <p :class="$style.member1Article">
            スターバックス、ビジネス・ブレークスルーなどの事業会社のマーケティング、Kona's Coffeeのブランドマネージャー、SNSコンサルティング会社を経て、2021年より株式会社アイレップにてライブコマース・エヴァンジェリストとして活動。アパレル、食品、化粧品などのライブコマースの立ち上げや、コマーサー育成などを実施。ad:tech tokyo2021、Japan IT EXPO2021 などに登壇。
          </p>
          <p>
            2022年「成果を上げるライブコマースの教科書」を執筆し、Amazonカテゴリランキング1位となる。自らもコマーサーとしても出演。また、2013年より日本グミ協会を発足し、Twitter、Instagramのフォロワー数延べ20万人の国内最大のグミのコミュニティを運営し、グミの日のプロデュースなどを行う。
          </p>
        </div>
      </div>
      <NmOfMemberList />
      <NmOfCompanyList />
    </div>
  </section>>
</template>

<style lang="scss" module>

.member1 {
color         : #000000;
display       : flex;
flex-direction: column;
gap           : calc(var(--bv) * 16);

  .member1Card {
    display: flex;
    background-color: rgb(245, 223, 233);
    border-radius   : 30px;
    overflow: hidden;

    .imageMember1 {
    display         : block;
    flex            : 0 0 38%;
    width           : 38%;
    aspect-ratio    : 1.618/1;
    background-color: rgb(245, 223, 233);

      img {
        width         : 100%;
        height        : 100%;
        object-fit    : cover;
        mix-blend-mode: darken;
      }
    }

    .member1TextWrap {
    display        : flex;
    flex-direction : column;
    justify-content: center;
    gap            : calc(var(--bv) * 4);
    padding        : calc(var(--bv) * 10);

      .member1Title {
        font-size: 18px;
      }
    }
  }
}
</style>