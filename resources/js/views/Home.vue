<template>
  <div id="page-top">
    <!-- Page Wrapper -->

    <div id="wrapper">
      <Sidebar />

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <Header />
        <router-view></router-view>

        <Footer />
        <a class="scroll-to-top rounded" href="#page-top">
          <i class="fas fa-angle-up"></i>
        </a>
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Sidebar,
    Footer,
  },
  created() {
    document.querySelector("body").style.backgroundColor = "#fff";
    document.querySelector("body").style.marginTop = "0";
  },
};
</script>
