<script>
import { Doughnut } from "vue-chartjs";
import Axios from "axios";

export default {
  extends: Doughnut,
  name: "CategoryRevenue",

  data() {
    return {
      chartDataa: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
            hoverBackgroundColor: [
              "#2e59d9",
              "#17a673",
              "#2c9faf",
              "#43AFD0",
              "#47B32C",
              "#3C96E5",
            ],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: "#dddfeb",
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: true,
        },
        cutoutPercentage: 50,
        weight: 100,
      },
    };
  },

  methods: {
    fetchData() {
      return Axios.get("api/category-revenue").then((response) => {
        Object.values(response.data).forEach((value) => {
          this.chartDataa.datasets.forEach((item) => {
            item.data.push(value.reduce((a, b) => Number((a + b).toFixed(2))));
          });
        });
        this.chartDataa.labels = Object.keys(response.data);
        this.renderChart(this.chartDataa, this.options);
      });
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>
