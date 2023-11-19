<template>
  <div :class="$style.header_container">
    <div :class="$style.header_flame">
      <img :class="$style.main_logo" src="~/assets/images/mainlogo.png" alt="日本ライブコマース">
      <div :class="$style.right_menu">
        <div :class="$style.hamburger_circle">
          <NmGlobalNav />
        </div>
        <img src="~/assets/images/tw_icon.png" alt="twitter" :class="$style.sns_icon">
        <img src="~/assets/images/note_icon.png" alt="note" :class="$style.sns_icon">
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.header_container {
  display        : flex;
  justify-content: center;

  .header_flame {
    display        : flex;
    justify-content: space-between;
    padding        : calc(var(--bv) * 2);
    border         : calc(var(--bv) * 2.5) solid #FFFFFF;
    border-radius  : 40px;
    width          : calc(100% - (var(--bv) * 16));
    height         : calc(100% - (var(--bv) * 16));
    z-index        : 10;
    position       : fixed;
    top            : calc(var(--bv) * 8);
    left           : calc(var(--bv) * 8);

    @include mediaScreen('mobile') {
      width : calc(100% - (var(--bv) * 2));
      height: calc(100% - (var(--bv) * 2));
      top   : var(--bv);
      left  : var(--bv);
      border         : var(--bv) solid #FFFFFF;
      border-radius  : 20px;
      padding        : var(--bv);
    }

    .main_logo {
      width : calc(var(--bv) * 66);
      height: calc(var(--bv) * 12);

      @include mediaScreen('mobile') {
        width : calc(var(--bv) * 26);
        height: calc(var(--bv) * 6);
      }
    }

    .right_menu {
      display       : flex;
      flex-direction: column;
      gap           : calc(var(--bv) * 3);

      @include mediaScreen('mobile') {
        gap           : calc(var(--bv) * 1.5);
      }

      .hamburger_circle {
        display: flex;
        align-items: center;
        justify-content: center;
        width           : calc(var(--bv) * 8);
        height          : calc(var(--bv) * 8);
        background-color: #FFFFFF;
        border-radius   : 50%;

        @include mediaScreen('mobile') {
          width           : calc(var(--bv) * 6);
          height          : calc(var(--bv) * 6);
        }
      }

      .sns_icon {
      width     : calc(var(--bv) * 6);
      align-self: flex-end;

        @include mediaScreen('mobile') {
          width           : calc(var(--bv) * 5);
        }
      }
    }
  }
}
</style>