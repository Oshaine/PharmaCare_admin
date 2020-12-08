<template>
  <!-- Main Content -->
  <div id="content">
    <!-- Begin Page Content -->
    <div class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <!--
      <div class="row">
        <div class="col-md-6 mb-4">
          <button class="btn btn-primary" v-on:click="userScope">
            User Scope
          </button>
          <div class="col-md-6 mb-4">
            <button class="btn btn-danger" v-on:click="adminScope">
              Admin Scope
            </button>
          </div>
        </div>
      </div> -->

      <card-reports />

      <!-- Content Row -->

      <div class="row">
        <!-- Area Chart -->
        <div class="col-xl-8 col-lg-7">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            >
              <h6 class="m-0 font-weight-bold text-primary">
                Earnings Overview
              </h6>
              <div class="dropdown no-arrow">
                <a
                  class="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div class="dropdown-header">Dropdown Header:</div>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <div class="chart-area">
                <monthly-earnings />
              </div>
              <hr />
              <h5>
                Monthly Sales for medication orders and prescription orders
              </h5>
            </div>
          </div>

          <!-- Bar Chart -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                Mobile User Registrations
              </h6>
            </div>
            <div class="card-body">
              <div class="chart-bar">
                <mobile-registrations />
              </div>
              <hr />
              <h5>Mobile user registrations per month</h5>
            </div>
          </div>
        </div>

        <!-- Pie Chart -->
        <div class="col-xl-4 col-lg-5">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            >
              <h6 class="m-0 font-weight-bold text-primary">
                Category Revenue
              </h6>
              <div class="dropdown no-arrow">
                <a
                  class="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div class="dropdown-header">Dropdown Header:</div>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <div class="chart-pie pt-4 pb-2">
                <category-revenue />
              </div>
              <hr />
              <h5>
                Category Revenue for medication orders and prescription orders
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </div>
  <!-- End of Main Content -->
</template>
<script>
import CardReports from "../components/CardReports.vue";
import CategoryRevenue from "../components/CategoryRevenue.vue";
import MobileRegistrations from "../components/MobileRegistrations.vue";
import MonthlyEarnings from "../components/MonthlyEarnings.vue";
import * as user from "../services/user_service";

export default {
  components: {
    MonthlyEarnings,
    CardReports,
    CategoryRevenue,
    MobileRegistrations,
  },
  name: "Dashboard",
  methods: {
    userScope: async function () {
      try {
        const response = await user.userScope();
        console.log(response);
      } catch (error) {
        console.log(" " + error, error.response.status);
      }
    },
    adminScope: async function () {
      try {
        const response = await user.adminScope();
        console.log(response);
      } catch (error) {
        console.log(" " + error, error.response.status);
      }
    },
  },
};
</script>
