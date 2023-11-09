<template>
  <div :class="$style.background" />
</template>

<style lang="scss" module>

.background {
  position : fixed;
  isolation: isolate;
  width    : 100%;
  height   : 100%;
  top      : 0;
  left     : 0;
  z-index  : -100;

  &::before,
  &::after {
    content : '';
    display : block;
    width   : 100%;
    height  : 100%;
    position: absolute;
    top     : 0;
    left    : 0;
  }

  &::before {
    background-image: linear-gradient(165.83deg, #BF3D7B 49.63%, #C4512D 91.91%);
  }

  &::after {
    background-image: linear-gradient(89.85deg, rgba(235, 66, 106, 0.2) 0.13%, rgba(235, 66, 106, 0.8) 99.88%);
    mix-blend-mode  : screen;
  }
}
</style>