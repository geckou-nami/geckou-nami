<template>
  <section>
    <ul :class="$style.member3Container">
      <li :class="$style.member3Card">
        <img src="~/assets/images/logo.png" alt="メンバー紹介">
      </li>
      <li :class="$style.member3Card">
        <img src="~/assets/images/logo.png" alt="メンバー紹介">
      </li>
      <li :class="$style.member3Card">
        <img src="~/assets/images/logo.png" alt="メンバー紹介">
      </li>
      <li :class="$style.member3Card">
        <img src="~/assets/images/logo.png" alt="メンバー紹介">
      </li>
      <li :class="$style.member3Card">
        <img src="~/assets/images/logo.png" alt="メンバー紹介">
      </li>
      <li :class="$style.member3Card">
        <img src="~/assets/images/logo.png" alt="メンバー紹介">
      </li>
      <li :class="$style.member3Card">
        <img src="~/assets/images/logo.png" alt="メンバー紹介">
      </li>
      <li :class="$style.member3Card">
        <img src="~/assets/images/logo.png" alt="メンバー紹介">
      </li>
    </ul>
  </section>
</template>

<style lang="scss" module>

ul.member3Container {
  display        : flex;
  flex-wrap      : wrap;
  justify-content: center;
  gap            : calc(var(--bv) * 8);

  li {
    flex: 0 0 calc((100% - var(--bv) * 24) / 4);
    background-color: #e4d2db;
    border-radius: 50%;
    aspect-ratio : 1/1;
    overflow: hidden;

    img {
      width    : 100%;
      height   : 100%;
      padding  : calc(var(--bv) * 6);
    }
  }
}
</style>