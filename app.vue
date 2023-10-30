<!-- <script>
import NmOfHeader from './components/NmOfHeader.vue';
import NmOfHero from './components/NmOfHero.vue';
import NmOfAbout from './components/NmOfAbout.vue';
import NmOfNews from './components/NmOfNews.vue';
import NmOfMember1 from './components/NmOfMember1.vue';
import NmOfMember2 from './components/NmOfMember2.vue';
import NmOfMember3 from './components/NmOfMember3.vue';
import NmOfActivity from './components/NmOfActivity.vue';
import NmOfContact from './components/NmOfContact.vue';
import NmOfRinks from './components/NmOfRinks.vue';

export default {
    components: {
    NmOfHeader,
    NmOfHero,
    NmOfAbout,
    NmOfNews,
    NmOfMember1,
    NmOfMember2,
    NmOfMember3,
    NmOfActivity,
    NmOfContact,
    NmOfRinks,
    }
};
</script> -->

<template>
  <div class="background">
    <NmOfHeader />
    <NmOfHero />  
    <NmOfAbout />
    <NmOfNews />
    <NmOfMember1 />
    <NmOfMember2 />
    <NmOfMember3 />
    <NmOfActivity />
    <NmOfContact />
    <NmOfRinks />
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/base' as *;

.background {
  position: relative;

  &::before,
  &::after {
  content : '';
    display : block;
    width   : 100%;
    height  : 100%;
    position: absolute;
    top     : 0;
    left    : 0;
    z-index: -1;
  }

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
