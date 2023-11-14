<template>
  <section>
    <div :class="$style.linksContainer">
      <div :class="$style.linksCard">
        <p :class="$style.linksBigTitle">運営会社</p>
        <p :class="$style.linksSmallTitle">社名</p>
        <p :class="$style.linksText">株式会社田中旗店</p>
        <p :class="$style.linksSmallTitle">所在地</p>
        <p :class="$style.linksText">〒541-0048<br>大阪府大阪市中央区瓦町３丁目２−６</p>
        <p :class="$style.linksSmallTitle">WEBサイト</p>
        <a href="http://www.tanakaflag.jp/">http://www.tanakaflag.jp/</a>
        <p :class="$style.linksSmallTitle">電話</p>
        <p :class="$style.linksText">06-6231-4455</p>
        <p :class="$style.linksSmallTitle">設立</p>
        <p :class="$style.linksText">大正元年創業</p>
        <p :class="$style.linksSmallTitle">代表取締役</p>
        <p :class="$style.linksText">田中 哲</p>
      </div>
      <div :class="$style.linksCard">
        <p :class="$style.linksBigTitle">関連書籍</p>
        <img src="~/assets/images/books.png" alt="成果をあげるライブコマースの教科書">
        <a href="#">Amazon</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.linksContainer {
  display        : flex;
  justify-content: center;
  gap            : 300px;

  @include mediaScreen('mobile')  {
    flex-direction: column;
    /* gap           : calc(var(--bv) * 16); */
  }

  .linksCard {
  display       : flex;
  flex-direction: column;
  text-align    : center;

    .linksBigTitle {
        font-size: 24px;
    }

    .linksSmallTitle {
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