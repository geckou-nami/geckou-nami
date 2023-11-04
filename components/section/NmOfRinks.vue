<template>
  <section>
    <div :class="$style.rinksContainer">
      <div :class="$style.rinksCard">
        <p :class="$style.rinksBigTitle">運営会社</p>
        <p :class="$style.rinksSmallTitle">社名</p>
        <p :class="$style.rinksText">株式会社田中旗店</p>
        <p :class="$style.rinksSmallTitle">所在地</p>
        <p :class="$style.rinksText">〒541-0048<br>大阪府大阪市中央区瓦町３丁目２−６</p>
        <p :class="$style.rinksSmallTitle">WEBサイト</p>
        <a href="http://www.tanakaflag.jp/">http://www.tanakaflag.jp/</a>
        <p :class="$style.rinksSmallTitle">電話</p>
        <p :class="$style.rinksText">06-6231-4455</p>
        <p :class="$style.rinksSmallTitle">設立</p>
        <p :class="$style.rinksText">大正元年創業</p>
        <p :class="$style.rinksSmallTitle">代表取締役</p>
        <p :class="$style.rinksText">田中 哲</p>
      </div>
      <div :class="$style.rinksCard">
        <p :class="$style.rinksBigTitle">関連書籍</p>
        <img src="~/assets/images/books.png" alt="成果をあげるライブコマースの教科書">
        <a href="#">Amazon</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>

.rinksContainer {
  display        : flex;
  justify-content: center;
  gap            : 300px;

  .rinksCard {
  display       : flex;
  flex-direction: column;
  text-align    : center;

    .rinksBigTitle {
        font-size: 24px;
    }

    .rinksSmallTitle {
        font-size         : 18px;
        margin-block-start: 28px;
    }

    img {
        margin: 16px 0;
    }

    a {
        color: #FFFFFF;
    }
  }
}
</style>