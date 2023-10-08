<template>
  <div>
    <h1>當前寬度</h1><br>
    <p>螢幕寬: {{ screenWidth }}</p><br>
    <p>(ios不會更新螢幕寬)</p><br>
    <hr><br>
    <p>瀏覽器寬度: {{ innerWidth }}</p>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.screenWidth = screen.width
      this.innerWidth = innerWidth
      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize)
    },
    data() {
      return {
        screenWidth: '',
        innerWidth: '',
      }
    },
    methods:{
      handleResize() {
        // let tempValue = this.innerWidth
        this.innerWidth = innerWidth
        this.screenWidth = screen.width
        // if(tempValue != this.innerWidth) {
        //   alert('螢幕寬變了!!!')
        // }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>