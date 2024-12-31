<template>
  <div>
    <div class="flex">
      <!-- Left Menu -->
      <LeftMenu :isSidebarOpen="isSidebarOpen" />
      
      <div class="flex-1 flex flex-col">
        <!-- Header -->
       

        <!-- Main Content Area -->
        <main class="flex-1 dashboard-main">
         <Header @toggleSidebar="toggleSidebar" :isSidebarOpen="isSidebarOpen"  />
          <!-- Page Heading -->
           <slot name="header" />

          <!-- Page Content -->
          <div class="p-4">
            <slot />
          </div>
           <Footer />
        </main>

        <!-- Footer -->
       
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/Layouts/Partials/Header.vue';
import LeftMenu from '@/Layouts/Partials/LeftMenu.vue';
import Footer from '@/Layouts/Partials/Footer.vue';
</script>

<script>
export default {
  components: {
    Header,
    LeftMenu,
    Footer,
  },
  data() {
    return {
      isSidebarOpen: false, // Sidebar initially closed
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style>
/* Importing all CSS files */
@import url('/assets/css/remixicon.css');
@import url('/assets/css/lib/apexcharts.css');
@import url('/assets/css/lib/dataTables.min.css');
@import url('/assets/css/lib/editor-katex.min.css');
@import url('/assets/css/lib/editor.atom-one-dark.min.css');
@import url('/assets/css/lib/editor.quill.snow.css');
@import url('/assets/css/lib/flatpickr.min.css');
@import url('/assets/css/lib/full-calendar.css');
@import url('/assets/css/lib/jquery-jvectormap-2.0.5.css');
@import url('/assets/css/lib/magnific-popup.css');
@import url('/assets/css/lib/slick.css');
@import url('/assets/css/lib/prism.css');
@import url('/assets/css/lib/file-upload.css');
@import url('/assets/css/lib/audioplayer.css');
@import url('/assets/css/style.css');
</style>
