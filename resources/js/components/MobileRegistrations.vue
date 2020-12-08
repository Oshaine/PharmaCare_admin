<script>
import { Bar } from "vue-chartjs";
import Axios from "axios";

export default {
  extends: Bar,
  name: "MobileRegistrations",
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Users",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 10,
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2],
              },
            },
          ],
          xAxes: [
            {
              time: {
                unit: "month",
              },
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
              maxBarThickness: 40,
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          titleMarginBottom: 10,
          titleFontColor: "#6e707e",
          titleFontSize: 14,
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: "#dddfeb",
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          mode: "index",
          displayColors: false,
          caretPadding: 10,
        },
        responsive: true,
        maintainAspectRatio: false,
        height: 200,
      },
    };
  },

  methods: {
    fetchData() {
      return Axios.get("api/user-registrations").then((response) => {
        Object.values(response.data).forEach((value) => {
          this.chartData.datasets.forEach((item) => {
            item.data.push(value.length);
          });
        });
        this.chartData.labels = Object.keys(response.data);
        this.renderChart(this.chartData, this.options);
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
