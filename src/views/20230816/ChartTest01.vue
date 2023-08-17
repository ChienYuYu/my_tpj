<template>
  <div class="wrapper">
    <h2>chart01</h2>
    <h3>將圖表顯示於指定寬高容器下</h3>
    <div class="chart-container">
      <div class="size-wrap">
        <LineChart />
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from './BarChart'
  export default {
    components: { LineChart },
    
  }
</script>

<style lang="scss" scoped>
  .wrapper{
    h2{
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align:center;
      display:inline-block;
      background:#222;
      color:#fa0;
      margin: 10px;
      border-radius:10px;
    }
    h3{
      text-align:center;
      margin-bottom: 15px;
    }
  }
  .chart-container{
    width: 600px;
    height: 400px;
    margin: 0 auto;
    // background: #ccc;
    border:1px dashed #333;
    overflow:auto;
    .size-wrap{
      width: 800px;
      height: 380px;
    }
  }
</style>