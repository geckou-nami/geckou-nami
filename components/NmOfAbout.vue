
<template>
    <div class="about">
        <div class="section-container">
            <div class="about-wrap">
                <div class="about-text-small">
                    <p>日本の1対1の接客や、おもてなし、こだわりのものづくりをライブという手段を通して1対1に届けるにはどうあるべきなのかを研究しています。</p>
                    <p>ライブは、コマース機能に限らず、企業やブランドと生活者の距離を縮め、コミュニティの形成や強化を行うことができる有効なマーケティング手法でもあります。</p>
                </div>
                <div class="about-text-big">
                    <p>デジタルマーケティング領域において、今後多くの企業が取り入れるべき、ライブエンゲージメントを定義し、マーケティング業界への貢献を目指します。</p>
                </div>
                <img src="~/assets/images/about-1.png" class="about-image1" alt="">
                <img src="~/assets/images/about-2.png" class="about-image2" alt="">
            </div>
        </div>
    </div>
</template>



<style lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/base' as *;

.about-wrap {
    display: grid;
    grid-template-columns: 50% 1fr calc(var(--bv) * 38);
    grid-template-rows: calc(var(--bv) * 38) 1fr calc(var(--bv) * 38);
    grid-template-areas: 
    'text-small image-1 image-1'
    'text-big text-big image-2'
    'text-big text-big image-2';
    gap : calc(var(--bv) * 4) calc(var(--bv) * 15);
    
    .about-text-small {
        grid-area: text-small;
        display        : flex;
        flex-direction : column;
        justify-content: flex-end;
        gap            : calc(var(--bv) * 4);
    }

    .about-text-big {
        grid-area: text-big;
        font-size: var(--font-size-large);
        padding    : calc(var(--bv) * 4) calc(var(--bv) * 15) 0 0;
    }

    .about-image1 {
        grid-area: image-1;
    }

    .about-image2 {
        grid-area: image-2;
    }
}
</style>