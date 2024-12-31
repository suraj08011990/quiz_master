<template>
  <aside class="sidebar" :class="{ 'is-open': isSidebarOpen }">
    <div>
     <Link :href="route('dashboard')" class="sidebar-logo">
              <img src="/assets/images/logo.png" alt="site logo" class="light-logo" />
      </Link>
   
    </div>
    <div class="sidebar-menu-area">
      <ul class="sidebar-menu" id="sidebar-menu">
     
         <li>
          <Link :href="route('dashboard')">
                   <iconify-icon icon="solar:gallery-wide-linear" class="menu-icon"></iconify-icon>
            <span>Dashboard</span> 
            </Link>
         </li>
        <li :class="{'dropdown': true, 'open': isDropdownOpen}" @click="toggleDropdown">
          <a href="javascript:void(0)">
          <iconify-icon icon="solar:document-text-outline" class="menu-icon"></iconify-icon>
            <span>Institution</span>
          </a>
          <ul v-show="isDropdownOpen" class="sidebar-submenu">
            <li>
              <a href="company.html"><i class="ri-circle-fill circle-icon text-primary-600 w-auto"></i> Company</a>
            </li>
            <li>
              <a href="notification.html"><i class="ri-circle-fill circle-icon text-warning-600 w-auto"></i> Notification</a>
            </li>
            <li>
              <a href="notification-alert.html"><i class="ri-circle-fill circle-icon text-info-600 w-auto"></i> Notification Alert</a>
            </li>
            <li>
              <a href="theme.html"><i class="ri-circle-fill circle-icon text-danger-600 w-auto"></i> Theme</a>
            </li>
            <li>
              <a href="currencies.html"><i class="ri-circle-fill circle-icon text-danger-600 w-auto"></i> Currencies</a>
            </li>
            <li>
              <a href="language.html"><i class="ri-circle-fill circle-icon text-danger-600 w-auto"></i> Languages</a>
            </li>
            <li>
              <a href="payment-gateway.html"><i class="ri-circle-fill circle-icon text-danger-600 w-auto"></i> Payment Gateway</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const isDropdownOpen = ref(false); // Controls the visibility of the dropdown menu

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value; // Toggle dropdown visibility
};
</script>
<script>
export default {
  props: {
    isSidebarOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>
<style scoped>
/* Sidebar Styling */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  //background: #1a202c;
 
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%); /* Hidden by default */
}

.sidebar.is-open {
  transform: translateX(0); /* Visible when open */
}

/* Sidebar Menu */
.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar.is-open {
  transform: translateX(0); /* Visible when open */
}


.sidebar-menu li.open > ul {
  display: block;
}

.sidebar-submenu {
  display: none;
  padding-left: 20px;
}
.sidebar-menu li.dropdown > a {
    margin-top:10px;
}
.sidebar-submenu li {
  padding: 5px 0;
  
}

@media (min-width: 768px) {
  .sidebar {
    transform: translateX(0); /* Always visible on desktop */
  }
}
</style>
