<template>
  <section>
    <div :class="$style.links_container">
      <dl :class="$style.links_card">
        <p :class="$style.links_big_title">運営会社</p>
        <dt :class="$style.links_small_title">社名</dt>
        <dd :class="$style.links_text">株式会社田中旗店</dd>
        <dt :class="$style.links_small_title">所在地</dt>
        <dd :class="$style.links_text">〒541-0048<br>大阪府大阪市中央区瓦町３丁目２−６</dd>
        <dt :class="$style.links_small_title">WEBサイト</dt>
        <a href="http://www.tanakaflag.jp/">http://www.tanakaflag.jp/</a>
        <dt :class="$style.links_small_title">代表取締役</dt>
        <dd :class="$style.links_text">田中 哲</dd>
      </dl>
      <div :class="$style.links_card">
        <p :class="$style.links_big_title">関連書籍</p>
        <img src="~/assets/images/books.png" alt="成果をあげるライブコマースの教科書">
        <a href="#">Amazon</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.links_container {
  display        : flex;
  justify-content: center;
  gap            : 300px;

  @include mediaScreen('mobile')  {
    flex-direction: column;
  }

  .links_card {
  display       : flex;
  flex-direction: column;
  text-align    : center;

    .links_big_title {
        font-size: var(--font-size-larger);
        font-weight: bold;
    }

    .links_small_title {
        font-size         : var(--font-size-small);
        font-weight: bold;
        margin-top: calc(var(--bv) * 8);
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