<template>
  <div>
    <h2>
      由左右Btn控制捲軸，捲軸在最左時 左箭頭隱藏，捲軸在最右時，右箭頭隱藏<br>
      拉動捲軸時也是，最左 左箭頭隱藏 / 最右 右箭頭隱藏
    </h2>

    <div class="wrap">
      <div class="container" ref="container">
        <div class="six-icon">icon1</div>
        <div class="six-icon">icon2</div>
        <div class="six-icon">icon3</div>
        <div class="six-icon">icon4</div>
        <div class="six-icon">icon5</div>
        <div class="six-icon">icon6</div>
        <button v-show="showLeftArrow" class="btn pre" @click="scrollLeft">←</button>
        <button v-show="showRightArrow" class="btn nxt" @click="scrollRight">→</button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        showLeftArrow: false,
        showRightArrow: true,
      }
    },
    computed: {},
    mounted() {
      this.$refs.container.addEventListener('scroll', this.checkButtonVisibility)
    },
    methods:{
      scrollLeft() {
        this.$refs.container.scrollLeft = 0;
        this.checkButtonVisibility();
      },
      scrollRight() {
        this.$refs.container.scrollLeft = this.$refs.container.scrollWidth;
        this.checkButtonVisibility();
      },
      checkButtonVisibility() {
        this.$refs.container.scrollLeft == 0
        ? this.showLeftArrow = false
        : this.showLeftArrow = true

        this.$refs.container.scrollLeft ==
        this.$refs.container.scrollWidth - this.$refs.container.clientWidth
        ? this.showRightArrow = false
        : this.showRightArrow = true
      }
    }
  }
</script>

<style lang="scss" scoped>
h2{
  text-align: center;
}
.wrap{
  width: 500px;
  height: 300px;
  margin: 2rem auto;
  position: relative;
  border: 1px solid #aaa;

  .container{
    width: 500px;
    height: 300px;
    display:flex;
    align-items: center;
    overflow-x: scroll;

    .six-icon{
      min-width: 100px;
      height: 100px;
      margin:.5rem;
      background: #0af;
    }
    button.btn{
      min-width: 30px;
      height: 30px;
      border-radius: 50%;
      position: absolute;
      z-index: 99;
    }
    button.pre{
      left: -6%;
    }
    button.nxt{
      right: -6%;
    }
  }
}
</style>