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
            data: []
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
      
      // yoyo
      this.chartData.labels = array;
      this.chartData.datasets[0].data=[
              15, 20, 12, 13, 8, 22, 6, 33, 29, 10, 9, 32, 40, 20, 12, 13, 8,
              22, 6, 33, 29, 10, 9, 32,
            ],
      this.finishCount = true;
    },
    // AI詠唱咒語
    // 我想用js跑個迴圈寫入陣列，
    // 我想要從當日時間00:00開始每15分鐘將時間字串寫入陣列，最多寫到23:45,
    // 例如['00:00', '00:15','00:30'...'23:45'], 但是最後一筆不一定是'23:45',而是根據目前時間決定，
    // 例如現在時間10:35,那陣列最後一筆資料就是'10:30',
    // 如果現在時間是11:50, 那陣列最後一筆資料就是'11:45',
    // 如果現在時間是11:59,那陣列最後一筆資料一樣是'11:45', 以此類推。
    // 請寫給我，用繁體中文台灣用語回答我。
  },
};
</script>
