<script>
import NmGlobalNav from './components/NmGlobalNav.vue';

export default {
    components: {
      NmGlobalNav,
    }
};
</script>

<template>
  <header>
      <div class="header-container">
          <img class="main-logo" src="~/assets/images/mainlogo.png" alt="日本ライブコマース">
          <div class="right-menu">
              <div class="hamburger-circle"><NmGlobalNav /></div>
              <img src="~/assets/images/tw_icon.png" alt="twitter" class="sns-icon">
              <img src="~/assets/images/note_icon.png" alt="note" class="sns-icon">
          </div>
      </div>
  </header>
</template>

<style lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/base' as *;

header {

  .header-container {
    display        : flex;
    justify-content: space-between;
    padding      : calc(var(--bv) * 2);
    margin       : calc(var(--bv) * 8);
    border       : calc(var(--bv) * 2.5) solid #FFFFFF;
    border-radius: 40px;
    width        : calc(100% - (var(--bv) * 16 + var(--bv) * 5));
    height       : calc(100% - (var(--bv) * 16 + var(--bv) * 5));
    z-index      : 10;
    position     : fixed;
    
    .main-logo {
      width : calc(var(--bv) * 66);
      height: calc(var(--bv) * 12);
    } 

    .right-menu {
      display       : flex;
      flex-direction: column;
      gap           : calc(var(--bv) * 3);

      .hamburger-circle {
          width           : calc(var(--bv) * 8);
          height          : calc(var(--bv) * 8);
          background-color: #FFFFFF;
          border-radius   : 50%;
      }

      .sns-icon {
          width     : calc(var(--bv) * 6);
          align-self: flex-end;
      }
    }
  }
}
</style>