<template>
  <div id="app">
    <div class="header">
      <button type="button" class="side_menu_btn" @click="toggleSideMenu">側邊攔</button>
    </div>
    <div class="wrap">
      <div class="side-menu" v-show="sideMenu">
        <router-link to="/20230816/ChartTest01">chart</router-link>
        <router-link to="/20230903/ScrollTest">scroll</router-link>
        <router-link to="/20231008/ScreenWidth">ScreenWidth</router-link>
      </div>
      <div :class="sideMenu? 'content':'content_no_side_menu'">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sideMenu: true,
    }
  },
  methods: {
    toggleSideMenu() {
      this.sideMenu = !this.sideMenu
    },
  },
}
</script>

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
  .side_menu_btn{
    height: 40px;
    width: 100px;
    margin-top: 5px;
  }
}
.wrap{
  display: flex;
  .side-menu{
    padding-top: 20px;
    position: fixed;
    z-index: 99;
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

  // 動態class
  .content{
    background: #eee;
    top: 50px;
    left: 300px;
    width: calc(100% - 300px);
    position: fixed;
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
  .content_no_side_menu{
    background: #eee;
    top: 50px;
    width: 100%;
    position: fixed;
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>
