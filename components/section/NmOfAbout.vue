<template>
  <div :class="$style.about">
    <section>
      <div :class="$style.about_wrap">
        <div :class="$style.about_text_mall">
          <p>日本の1対1の接客や、おもてなし、こだわりのものづくりをライブという手段を通して1対1に届けるにはどうあるべきなのかを研究しています。</p>
          <p>ライブは、コマース機能に限らず、企業やブランドと生活者の距離を縮め、コミュニティの形成や強化を行うことができる有効なマーケティング手法でもあります。</p>
        </div>
        <div :class="$style.about_text_big">
          <p>デジタルマーケティング領域において、今後多くの企業が取り入れるべき、ライブエンゲージメントを定義し、マーケティング業界への貢献を目指します。</p>
        </div>
        <img src="~/assets/images/about-1.png" :class="$style.about_image1" alt="">
        <img src="~/assets/images/about-2.png" :class="$style.about_image2" alt="">
      </div>
    </section>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.about_wrap {
  display              : grid;
  grid-template-columns: 50% 1fr calc(var(--bv) * 38);
  grid-template-rows   : calc(var(--bv) * 38) 1fr calc(var(--bv) * 38);
  grid-template-areas  :
  'text-small image-1 image-1'
  'text-big text-big image-2'
  'text-big text-big image-2';
  gap: calc(var(--bv) * 4) calc(var(--bv) * 15);

  @include mediaScreen('mobile') {
    display              : grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows   : auto auto 1fr;
    grid-template-areas  :
      'image-1 image-2'
      'text-small text-small'
      'text-big text-big';
    gap: calc(var(--bv) * 4) 0;
  }

  .about_text_mall {
    grid-area          : text-small;
    display            : flex;
    flex-direction     : column;
    justify-content    : flex-end;
    gap                : calc(var(--bv) * 4);
    animation-name     : slideInLeft;
    animation-duration : .3s;
    animation-fill-mode: forwards;

    @include mediaScreen('mobile') {
      justify-content: flex-start;
    }
  }

  .about_text_big {
    grid-area          : text-big;
    font-size          : var(--font-size-larger);
    font-weight        : bold;
    padding            : calc(var(--bv) * 4) calc(var(--bv) * 15) 0 0;
    animation-name     : slideInLeft;
    animation-duration : .3s;
    animation-fill-mode: forwards;

    @include mediaScreen('mobile') {
      font-size: var(--font-size-large);
      padding  : 0;
    }
  }

  .about_image1 {
    grid-area          : image-1;
    animation-name     : popUp;
    animation-duration : .5s;
    animation-fill-mode: forwards;
  }
  .about_image2 {
    grid-area          : image-2;
    animation-name     : popUp;
    animation-duration : .5s;
    animation-fill-mode: forwards;

    @include mediaScreen('mobile') {
      margin-top: calc(var(--bv) * 8);
    }
  }
}

@keyframes slideInLeft {
  from {
    opacity  : 0;
    transform: translateX(-36px);
  }

  to {
    opacity  : 1;
    transform: translateX(0px);
  }
}

@keyframes popUp {
  0% {
    transform: scale(.8);
  }

  80% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
