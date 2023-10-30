<template>
  <div class="member-2">
    <div class="section-container">
      <div class="member2-container">
        <div class="member2-card">
          <img src="~/assets/images/news-pic.png" alt="メンバー紹介">
          <div class="member2-text-wrap">
            <p class="member2-title">会長／武者 慶佑</p>
            <p class="member2-article">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
        <div class="member2-card">
          <img src="~/assets/images/news-pic.png" alt="メンバー紹介">
          <div class="member2-text-wrap">
            <p class="member2-title">会長／武者 慶佑</p>
            <p class="member2-article">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
        <div class="member2-card">
          <img src="~/assets/images/news-pic.png" alt="メンバー紹介">
          <div class="member2-text-wrap">
            <p class="member2-title">会長／武者 慶佑</p>
            <p class="member2-article">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/base' as *;

.member-2 {
    color     : #000000;

    .section-container {
        // padding          : calc(var(--bv) * 16) calc(var(--bv) * 4);

        .member2-container {
            display        : flex;
            gap            : calc(var(--bv) * 8);
            justify-content: space-between;

            .member2-card {
                background-color  : #E4D2DB;
                box-shadow        : 0 0 64px 0 rgba(47, 7, 26, 0.2);
                border-radius     : 30px;
                margin-block-start: 0;
        
                img {
                    width        : 100%;
                    border-radius: 30px 30px 0 0;
                }
        
                .member2-text-wrap {
                    padding: calc(var(--bv) * 4);
                }
        
                .member2-title {
                    font-weight: bold;
                    text-align : center;
                    padding    : calc(var(--bv) * 4);
                }   
            }

            .member2-card:nth-child(2) {
                margin-top      : 5%;
                margin-block-end: -5%;
            }
                
            .member2-card:nth-child(3) {
                margin-top      : 10%;
                margin-block-end: -10%;
            }
        }
    }
}
</style>