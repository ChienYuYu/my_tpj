<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12','01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
        datasets: [ { data: [40, 20, 12, 13, 8, 22, 6, 33, 29, 10, 9, 32,40, 20, 12, 13, 8, 22, 6, 33, 29, 10, 9, 32] } ],
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
