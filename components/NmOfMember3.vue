<template>
  <div class="member-3">
    <div class="section-container">
      <ul class="member3-container">
        <li class="member3-card">
            <img src="~/assets/images/logo.png" alt="メンバー紹介">
        </li>
        <li class="member3-card">
            <img src="~/assets/images/logo.png" alt="メンバー紹介">
        </li>
        <li class="member3-card">
            <img src="~/assets/images/logo.png" alt="メンバー紹介">
        </li>
        <li class="member3-card">
            <img src="~/assets/images/logo.png" alt="メンバー紹介">
        </li>
        <li class="member3-card">
            <img src="~/assets/images/logo.png" alt="メンバー紹介">
        </li>
        <li class="member3-card">
            <img src="~/assets/images/logo.png" alt="メンバー紹介">
        </li>
        <li class="member3-card">
            <img src="~/assets/images/logo.png" alt="メンバー紹介">
        </li>
        <li class="member3-card">
            <img src="~/assets/images/logo.png" alt="メンバー紹介">
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/base' as *;

ul.member3-container {
  display        : flex;
  flex-wrap      : wrap;
  justify-content: center;
  gap            : calc(var(--bv) * 8);

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width           : calc(var(--bv) * 30);
    height          : calc(var(--bv) * 30);
    background-color: #e4d2db;
    border-radius: 50%;
    overflow: hidden;
  
    img {
      width    : 100%;
      height   : 100%;
      object-fit: cover;
    }
  }
}
</style>