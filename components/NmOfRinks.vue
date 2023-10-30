<template>
  <div class=rinks>
    <div class="section-container">
        <div class="rinks-container">
            <div class="rinks-card">
                <p class="rinks-big-title">運営会社</p>
                <p class="rinks-small-title">社名</p>
                <p class="rinks-text">株式会社田中旗店</p>
                <p class="rinks-small-title">所在地</p>
                <p class="rinks-text">〒541-0048<br>大阪府大阪市中央区瓦町３丁目２−６</p>
                <p class="rinks-small-title">WEBサイト</p>
                <a href="http://www.tanakaflag.jp/">http://www.tanakaflag.jp/</a>
                <p class="rinks-small-title">電話</p>
                <p class="rinks-text">06-6231-4455</p>
                <p class="rinks-small-title">設立</p>
                <p class="rinks-text">大正元年創業</p>
                <p class="rinks-small-title">代表取締役</p>
                <p class="rinks-text">田中 哲</p>
            </div>
            <div class="rinks-card">
                <p class="rinks-big-title">関連書籍</p>
                <img src="~/assets/images/books.png" alt="成果をあげるライブコマースの教科書">
                <a href="#">Amazon</a>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/base' as *;


.rinks {

  .rinks-container {
      display        : flex;
      justify-content: center;
      gap            : 300px;

      .rinks-card {
          display       : flex;
          flex-direction: column;
          text-align    : center;

          .rinks-big-title {
              font-size: 24px;
          }

          .rinks-small-title {
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
}
</style>