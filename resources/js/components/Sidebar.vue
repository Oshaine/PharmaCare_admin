<template>
  <div>
    <!-- Sidebar -->
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <router-link
        to="/home"
        class="sidebar-brand d-flex align-items-center justify-content-center"
        exact
      >
        <div class="sidebar-brand-icon">
          <i class="fas fa-heartbeat"></i>
        </div>
        <div class="sidebar-brand-text mx-3">PharmaCare</div>
      </router-link>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <router-link to="/" class="nav-link" exact>
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </router-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">Medication Management</div>

      <!-- Nav Item - Pages Collapse Menu -->

      <li class="nav-item"></li>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <i class="fas fa-briefcase-medical"></i>
          <span>Inventory</span>
        </a>
        <div
          id="collapseOne"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Drugs</h6>
            <router-link to="/categories" class="collapse-item" exact>
              <i class="fas fa-clipboard-list"></i>
              <span>Categories</span>
            </router-link>
            <router-link to="/medications" class="collapse-item" exact>
              <i class="fas fa-capsules"></i>
              <span>Medications</span>
            </router-link>
          </div>
        </div>
      </li>

      <li class="nav-item">
        <router-link to="/prescriptions" class="nav-link" exact>
          <i class="fas fa-file-prescription"></i>
          <span>Prescriptions</span>
        </router-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">Users Management</div>

      <li class="nav-item">
        <router-link to="/users" class="nav-link" exact>
          <i class="fas fa-users"></i>
          <span>Users</span>
        </router-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">Orders</div>
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-file-invoice-dollar"></i>
          <span>Medication Orders</span>
        </a>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Orders</h6>
            <router-link to="/prescription-orders" class="collapse-item" exact>
              <i class="fas fa-prescription-bottle-alt"></i>
              <span>Prescription Orders</span>
            </router-link>

            <router-link to="/over-counter-orders" class="collapse-item" exact>
              <i class="fas fa-pills"></i>
              <span>Over the Counter</span>
            </router-link>
          </div>
        </div>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Nav Item - Charts -->
      <li class="nav-item">
        <a class="nav-link" href="charts.html">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Reports</span>
        </a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block" />

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
    <!-- End of Sidebar -->
  </div>
</template>
