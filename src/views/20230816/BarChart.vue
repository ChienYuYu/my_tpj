<template>
  <Bar v-if="finishCount" id="my-chart-id" :options="chartOptions" :data="chartData"/>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ],
        datasets: [
          {
            data: [
              40, 20, 12, 13, 8, 22, 6, 33, 29, 10, 9, 32, 40, 20, 12, 13, 8,
              22, 6, 33, 29, 10, 9, 32,
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
      finishCount: false,
    };
  },
  computed:{},
  mounted() {
    this.arr15();
  },
  methods: {
    arr15() {
      // 建立一個空的陣列
      let array = [];

      // 取得當前的時間
      let now = new Date();

      // 設定一個起始時間為當日的00:00
      let start = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,
        0
      );

      // 設定一個結束時間為當前時間的最接近的15分鐘
      let end = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        now.getHours(),
        Math.floor(now.getMinutes() / 15) * 15
      );

      // 設定一個間隔時間為15分鐘，單位為毫秒
      let interval = 15 * 60 * 1000;

      // 使用while迴圈，從起始時間開始，每次增加間隔時間，直到結束時間或超過結束時間為止
      while (start <= end) {
        // 將起始時間轉換為字串，格式為HH:mm
        let timeString = start.toTimeString().slice(0, 5);

        // 將字串寫入陣列
        array.push(timeString);

        // 將起始時間增加間隔時間
        start = new Date(start.getTime() + interval);
      }

      // 輸出陣列
      console.log(array);
      //
      this.chartData.labels = array;
      this.finishCount = true;
    },
  },
};
</script>
