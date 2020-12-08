<template>
  <div class="row">
    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-2 col-md-6 mb-4">
      <div class="card border-left-primary shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="text-xs font-weight-bold text-primary text-uppercase mb-1"
              >
                Earnings (Monthly)
              </div>
              <div
                class="h5 mb-0 font-weight-bold text-gray-800"
                v-for="(item, index) in CardReport"
                :key="index"
              >
                {{ "$ " + item.monthly_earnings }}
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-calendar fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Users (Monthly) Card Example -->
    <div class="col-xl-2 col-md-6 mb-4">
      <div class="card border-left-primary shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="text-xs font-weight-bold text-primary text-uppercase mb-1"
              >
                Total Users
              </div>
              <div
                class="h5 mb-0 font-weight-bold text-gray-800"
                v-for="(item, index) in CardReport"
                :key="index"
              >
                {{ item.users }}
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-users fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Orders (Monthly) Card Example -->
    <div class="col-xl-2 col-md-6 mb-4">
      <div class="card border-left-success shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="text-xs font-weight-bold text-success text-uppercase mb-1"
              >
                Over The Counter Orders (Monthly)
              </div>
              <div
                class="h5 mb-0 font-weight-bold text-gray-800"
                v-for="(item, index) in CardReport"
                :key="index"
              >
                {{ item.monthly_orders }}
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Orders (Monthly) Card Example -->
    <div class="col-xl-2 col-md-6 mb-4">
      <div class="card border-left-success shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="text-xs font-weight-bold text-success text-uppercase mb-1"
              >
                Prescription Orders (Monthly)
              </div>
              <div
                class="h5 mb-0 font-weight-bold text-gray-800"
                v-for="(item, index) in CardReport"
                :key="index"
              >
                {{ item.prescription_orders }}
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-prescription fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pending Requests Card Example -->
    <div class="col-xl-2 col-md-6 mb-4">
      <div class="card border-left-warning shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="text-xs font-weight-bold text-warning text-uppercase mb-1"
              >
                Pending Orders
              </div>
              <div
                class="h5 mb-0 font-weight-bold text-gray-800"
                v-for="(item, index) in CardReport"
                :key="index"
              >
                {{ item.pending_orders }}
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-receipt fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stock Count Card Example -->
    <div class="col-xl-2 col-md-6 mb-4">
      <div class="card border-left-warning shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="text-xs font-weight-bold text-warning text-uppercase mb-1"
              >
                Stock Count
              </div>
              <div
                class="h5 mb-0 font-weight-bold text-gray-800"
                v-for="(item, index) in CardReport"
                :key="index"
              >
                {{ item.stock_count }}
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-cubes fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "CardReports",
  data() {
    return {
      CardReport: {},
    };
  },
  methods: {
    fetchData() {
      return Axios.get("api/card-report").then((response) => {
        this.CardReport = response.data;
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
