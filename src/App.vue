<template>
  <div id="app">
    <div class="header"></div>
    <div class="wrap">
      <div class="side-menu">
        <router-link to="/20230816/ChartTest01">chart</router-link>
        <router-link to="/20230903/ScrollTest">scroll</router-link>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  margin: 2rem 0;
}
.header{
  width: 100%;
  height: 50px;
  background: #aaa;
  position: fixed;
}
.wrap{
  display: flex;
  .side-menu{
    padding-top: 20px;
    position: fixed;
    top: 50px;
    width: 300px;
    height: calc(100vh - 50px);
    background: #333;
    a{
      font-size: 30px;
      display: block;
      text-align: center;
      color: #fff;
      &:hover{
        color: aqua;
      }
    }
  }
  .content{
    background: #eee;
    top: 50px;
    left: 300px;
    width: calc(100% - 300px);
    position: fixed;
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>
