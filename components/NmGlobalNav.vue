<template>
  <div id="accordionMenu">
    <input type="checkbox" id="open" />
    <label for="open" class="menu_button">
      <span class="top_bar"></span>
      <span class="center_bar"></span>
      <span class="under_bar"></span>
    </label>
    <nav class="inner_menu">
      <h3>日本ライブコマース協会</h3>
      <ul>
        <li>
          <a href="#">ABOUT</a>
          <p>日本ライブコマース協会とは</p>
        </li>
        <li>
          <a href="#">NEWS</a>
          <p>お知らせ</p>
        </li>
        <li>
          <a href="#">MEMBERS</a>
          <p>日本ライブコマース協会 会員</p>
        </li>
        <li>
          <a href="#">ACTIVITY</a>
          <p>活動内容</p>
        </li>
        <li>
          <a href="#">LINKS</a>
          <p>関連リンク</p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/mixin' as *;

#accordionMenu {
  display        : flex;
  justify-content: flex-end;
}

.menu_button{
  display : block;
  position: relative;
  width   : 50px;
  height  : 50px;
  cursor  : pointer;
  z-index : 100;
}

.menu_button span{
  position     : absolute;
  width        : 40%;
  height       : 2px;
  border-radius: 20%;
  left         : calc(50% - 40% / 2);
  background   : #BF3D7B;
  transition   : .4s;
}

.top_bar{
  top: calc(35% - 2px / 2);
}
.center_bar{
  top: calc(50% - 2px / 2);
}
.under_bar{
  top: calc(65% - 2px / 2);
}

#open {
  display: none;
}

  #open:checked ~ .menu_button > .top_bar {
  top      : calc(50% - 2px / 2);
  transform: rotate(45deg);
}

#open:checked ~ .menu_button > .center_bar{
  opacity: 0;
}

#open:checked ~ .menu_button > .under_bar{
  top      : calc(50% - 2px / 2);
  transform: rotate(-45deg);
}

.inner_menu{
  position   : fixed;
  top        : 0;
  left       : 0;
  width      : 100vw;
  height     : 100vh;
  box-sizing : border-box;
  padding    : 50px 60px;
  background : #eee;
  opacity    : 0;
  visibility : hidden;
  transition : .5s;
  z-index    : 99;
  color      : #BF3D7B;
  font-size  : 32px;
  font-weight: bold;
  font-family: var(--font-family-rounded);

  h3 {
    color         : #000;
    padding-bottom: calc(var(--bv) * 6);
  }

  p {
    color      : #000;
    font-weight: normal;
    font-size  : var(--font-size-medium);
  }
}

.inner_menu ul{
  list-style  : none;
  padding-left: 0;
}

.inner_menu a{
  color          : inherit;
  text-decoration: none;
}

#open:checked ~ .inner_menu{
  transform : translateY(0);
  opacity   : 1;
  visibility: visible;
}
</style>