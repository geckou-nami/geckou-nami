<template>
  <ul :class="$style.member3_container">
    <li :class="$style.member3_card">
      <img src="~/assets/images/logo.png" alt="メンバー紹介">
    </li>
    <li :class="$style.member3_card">
      <img src="~/assets/images/logo.png" alt="メンバー紹介">
    </li>
    <li :class="$style.member3_card">
      <img src="~/assets/images/logo.png" alt="メンバー紹介">
    </li>
    <li :class="$style.member3_card">
      <img src="~/assets/images/logo.png" alt="メンバー紹介">
    </li>
    <li :class="$style.member3_card">
      <img src="~/assets/images/logo.png" alt="メンバー紹介">
    </li>
    <li :class="$style.member3_card">
      <img src="~/assets/images/logo.png" alt="メンバー紹介">
    </li>
    <li :class="$style.member3_card">
      <img src="~/assets/images/logo.png" alt="メンバー紹介">
    </li>
    <li :class="$style.member3_card">
      <img src="~/assets/images/logo.png" alt="メンバー紹介">
    </li>
  </ul>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

ul.member3_container {
  display        : flex;
  flex-wrap      : wrap;
  justify-content: center;
  gap            : calc(var(--bv) * 8);
  padding-top: calc(var(--bv) * 28);

  @include mediaScreen('mobile') {
    gap        : calc(var(--bv) * 4);
    padding-top: calc(var(--bv) * 10);
  }

  li {
    flex: 0 0 calc((100% - var(--bv) * 24) / 4);
    background-color: #e4d2db;
    border-radius: 50%;
    aspect-ratio : 1/1;
    overflow: hidden;
    box-shadow: 0px 0px 64px 0px rgba(47, 7, 26, 0.20);
    backdrop-filter: blur(8px);

    @include mediaScreen('mobile') {
      flex: 0 0 calc((100% - var(--bv) * 4) / 2);
    }

    img {
      width    : 100%;
      height   : 100%;
      padding  : calc(var(--bv) * 6);

      @include mediaScreen('mobile') {
        padding  : calc(var(--bv) * 2);
      }
    }
  }
}
</style>