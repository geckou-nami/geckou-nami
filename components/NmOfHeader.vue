<template>
  <header>
    <div :class="$style.headerContainer">
      <div :class="$style.headerFlame">
        <img :class="$style.mainLogo" src="~/assets/images/mainlogo.png" alt="日本ライブコマース">
        <div :class="$style.rightMenu">
          <div :class="$style.hamburgerCircle">
            <NmGlobalNav />
          </div>
          <img src="~/assets/images/tw_icon.png" alt="twitter" :class="$style.snsIcon">
          <img src="~/assets/images/note_icon.png" alt="note" :class="$style.snsIcon">
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" module>

.headerContainer {
  display        : flex;
  justify-content: center;
  .headerFlame {
    display        : flex;
    justify-content: space-between;
    padding        : calc(var(--bv) * 2);
    border         : calc(var(--bv) * 2.5) solid #FFFFFF;
    border-radius  : 40px;
    width          : calc(100% - (var(--bv) * 16));
    height         : calc(100% - (var(--bv) * 16));
    z-index        : 10;
    /* position       : fixed; */
    top            : calc(var(--bv) * 8);
    left           : calc(var(--bv) * 8);

    .mainLogo {
      width : calc(var(--bv) * 66);
      height: calc(var(--bv) * 12);
    }

    .rightMenu {
      display       : flex;
      flex-direction: column;
      gap           : calc(var(--bv) * 3);

      .hamburgerCircle {
        display: flex;
        align-items: center;
        justify-content: center;
        width           : calc(var(--bv) * 8);
        height          : calc(var(--bv) * 8);
        background-color: #FFFFFF;
        border-radius   : 50%;
      }

      .snsIcon {
      width     : calc(var(--bv) * 6);
      align-self: flex-end;
      }
    }
  }
}
</style>