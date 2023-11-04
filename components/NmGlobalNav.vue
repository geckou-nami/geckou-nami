<template>
  <div id="accordionMenu">
    <input type="checkbox" id="open" />
    <label for="open" class="menuBtn">
      <span class="topBar"></span> <!-- 上の線 -->
      <span class="centerBar"></span> <!-- 中の線 -->
      <span class="underBar"></span> <!-- 下の線 -->
    </label>
    <nav class="innerMenu">
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

/*** ボタン全体 ***/
#accordionMenu {
  display: flex;
  justify-content: flex-end;
}

.menuBtn{
  display: block;
  position: relative; /*線の起点*/
  width: 50px; /*ボタンの幅*/
  height: 50px; /*ボタンの高さ*/
  cursor: pointer; /*クリック可能を伝える*/
  z-index: 100; /*最前面*/
}

/*** ボタンの三本線（共通） ***/
.menuBtn span{
  position: absolute;
  width: 40%; /*線の長さ*/
  height: 2px; /*線の太さ*/
  border-radius: 20%;
  left: calc(50% - 40% / 2); /*中央から長さの半分を引く*/
  background: #BF3D7B; /*線の色*/
  transition: .4s;
}

/* 順に上・中・下の線 */
.topBar{
  top: calc(35% - 2px / 2);
}
.centerBar{
  top: calc(50% - 2px / 2);
}
.underBar{
  top: calc(65% - 2px / 2);
}

/** クリック後(✔が入った後)の線 **/
/*上の線*/
#open:checked ~ .menuBtn > .topBar {
  top: calc(50% - 2px / 2);
  transform: rotate(45deg);
}
/*中の線*/
#open:checked ~ .menuBtn > .centerBar{
  opacity: 0;
}
/*下の線*/
#open:checked ~ .menuBtn > .underBar{
  top: calc(50% - 2px / 2);
  transform: rotate(-45deg);
}

/*** チェックボックスは非表示に ***/
#open {
  display: none;
}

/*** メニュー内容 ***/
.innerMenu{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 50px 60px;
  background: #eee;
  opacity: 0;
  visibility: hidden; /*標準で非表示*/
  transition: .5s;
  z-index: 99; /*ボタンより背面(小さい値)*/
  color : #BF3D7B;
  font-size: 32px;
  font-weight: bold;

  h3 {
    color: #000;
    padding-bottom: calc(var(--bv) * 6);
  }

  p {
    color : #000;
    font-weight: normal;
    font-size: var(--font-size-medium);
  }
}
/*リスト*/
.innerMenu ul{
  list-style: none;
  padding-left: 0;
}
/*リンク*/
.innerMenu a{
  color: inherit;
  text-decoration: none;
}

/*** クリックで(✔が入ったら)メニューを表示 ***/
#open:checked ~ .innerMenu{
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}
</style>