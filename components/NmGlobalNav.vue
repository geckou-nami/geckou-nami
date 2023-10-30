<template>
  <div id="accordion-menu">
    <input type="checkbox" id="open">
    
    <label for="open" class="menu-btn">
      <span class="top-bar"></span> <!--上の線-->
      <span class="center-bar"></span> <!--中の線-->
      <span class="under-bar"></span> <!--下の線-->
    </label>
    
    <nav class="inner-menu">
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
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/base' as *;

/*** ボタン全体 ***/
#accordion-menu {
  display: flex;
  justify-content: flex-end;
}

.menu-btn{
  display: block;
  position: relative; /*線の起点*/
  width: 50px; /*ボタンの幅*/
  height: 50px; /*ボタンの高さ*/
  cursor: pointer; /*クリック可能を伝える*/
  z-index: 100; /*最前面*/
}

/*** ボタンの三本線（共通） ***/
.menu-btn span{
  position: absolute;
  width: 40%; /*線の長さ*/
  height: 2px; /*線の太さ*/
  left: calc(50% - 40% / 2); /*中央から長さの半分を引く*/
  background: #BF3D7B; /*線の色*/
  transition: .4s;
}

/* 順に上・中・下の線 */
.top-bar{
  top: calc(35% - 2px / 2); /*上から35%の位置*/ 
}
.center-bar{
  top: calc(50% - 2px / 2); /*上から50%の位置*/
}
.under-bar{
  top: calc(65% - 2px / 2); /*上から65%の位置*/
}


/** クリック後(✔が入った後)の線 **/
/*上の線*/
#open:checked ~ .menu-btn > .top-bar {
  top: calc(50% - 2px / 2); /*中央*/
  transform: rotate(45deg); /*45度回転*/
}
/*中の線*/
#open:checked ~ .menu-btn > .center-bar{
  opacity: 0;/*真ん中の線は透過*/
}
/*下の線*/
#open:checked ~ .menu-btn > .under-bar{
  top: calc(50% - 2px / 2); /*中央*/
  transform: rotate(-45deg); /*-45度回転*/
}

/*** チェックボックスは非表示に ***/
#open{
  display: none;
}


/*** メニュー内容 ***/
.inner-menu{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 50px 60px; /*ボタンと被らない位には*/
  background: #eee;
  opacity: 0; /*透明*/
  visibility: hidden; /*標準で非表示*/
  transition: .5s;
  z-index: 99; /*ボタンより背面(小さい値)*/
  color : #BF3D7B;
  font-size: 32px;

  h3 {
    color: #000;
    font-size: 20px;
  }
  
  p {
    color : #000;
    font-size: 16px;
  }
}
/*リスト*/
.inner-menu ul{
  list-style: none;
  padding-left: 0;
}
/*リンク*/
.inner-menu a{
  color: inherit;
  text-decoration: none;
}

/*** クリックで(✔が入ったら)メニューを表示 ***/
#open:checked ~ .inner-menu{
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

</style>