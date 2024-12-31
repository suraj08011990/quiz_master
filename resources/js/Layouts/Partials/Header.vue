<template>

    <div class="navbar-header border-b border-neutral-200 dark:border-neutral-600">
      <div class="flex items-center justify-between">
        <div class="col-auto">
          <div class="flex flex-wrap items-center gap-[16px]">
             

    <!-- Mobile Sidebar Toggle Button -->
    <button 
      type="button" 
      @click="$emit('toggleSidebar')" 
      class="sidebar-mobile-toggle d-flex !leading-[0]"
    >
      <iconify-icon 
        icon="heroicons:bars-3-solid" 
        class="icon !text-[30px]" 
      />
    </button>
            <form class="navbar-search">
              <input type="text" name="search" placeholder="Search">
              <iconify-icon icon="ion:search-outline" class="icon"></iconify-icon>
            </form>
          </div>
        </div>
        <div class="col-auto">
          <div class="flex flex-wrap items-center gap-3">
          
          <button 
              @click="toggleDropdown" 
              class="has-indicator w-10 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-full flex justify-center items-center"
              type="button"
            >
              <iconify-icon icon="iconoir:bell" class="text-neutral-900 dark:text-white text-xl"></iconify-icon>
            </button>

            <!-- Notification Dropdown -->
            <div 
              v-if="isDropdownOpen" 
              id="dropdownNotification" 
              class="z-10 bg-white dark:bg-neutral-700 rounded-2xl overflow-hidden shadow-lg max-w-[394px] w-full absolute top-full right-0 mt-2"
            >
              <!-- Header -->
              <div class="py-3 px-4 rounded-lg bg-primary-50 dark:bg-primary-600/25 m-4 flex items-center justify-between gap-2">
                <h6 class="text-lg text-neutral-900 font-semibold mb-0">Notification</h6>
                <span class="w-10 h-10 bg-white dark:bg-neutral-600 text-primary-600 dark:text-white font-bold flex justify-center items-center rounded-full">
                  {{ notifications.length }}
                </span>
              </div>

              <!-- Notifications List -->
              <div class="scroll-sm !border-t-0">
                <div class="max-h-[400px] overflow-y-auto">
                  <a 
                    v-for="(notification, index) in notifications" 
                    :key="index"
                    href="javascript:void(0)" 
                    class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 justify-between gap-1"
                  >
                    <div class="flex items-center gap-3">
                      <div class="flex-shrink-0 relative w-11 h-11 bg-success-200 dark:bg-success-600/25 text-success-600 flex justify-center items-center rounded-full">
                        <iconify-icon :icon="notification.icon" class="text-2xl"></iconify-icon>
                      </div>
                      <div>
                        <h6 class="text-sm fw-semibold mb-1">{{ notification.title }}</h6>
                        <p class="mb-0 text-sm line-clamp-1">{{ notification.message }}</p>
                      </div>
                    </div>
                    <div class="shrink-0">
                      <span class="text-sm text-neutral-500">{{ notification.time }}</span>
                    </div>
                  </a>
                </div>

                <!-- Footer -->
                <div class="text-center py-3 px-4">
                  <a 
                    href="javascript:void(0)" 
                    class="text-primary-600 dark:text-primary-600 font-semibold hover:underline text-center"
                  >
                    See All Notifications
                  </a>
                </div>
              </div>
            </div>
            <button @click="toggleProfile" data-dropdown-toggle="dropdownProfile" class="flex justify-center items-center rounded-full" type="button">
              <img src="assets/images/user.png" alt="image" class="w-10 h-10 object-fit-cover rounded-full">
            </button>
            <div v-show="isProfileOpen" id="dropdownProfile" class="z-10 bg-white dark:bg-neutral-700 rounded-lg shadow-lg dropdown-menu-sm p-3">
              <div class="py-3 px-4 rounded-lg bg-primary-50 dark:bg-primary-600/25 mb-4 flex items-center justify-between gap-2">
                <div>
                  <h6 class="text-lg text-neutral-900 font-semibold mb-0">Welcome , {{ userName }}</h6>
                  <span class="text-neutral-500">{{ userEmail }}</span>
                </div>
              </div>

              <div class="max-h-[400px] overflow-y-auto scroll-sm pe-2">
                <ul class="flex flex-col">
                  <li>
                  <Link :href="route('profile.edit')" class="text-black px-0 py-2 hover:text-primary-600 flex items-center gap-4" @click="setActive('profile')">
                    <iconify-icon icon="solar:user-linear" class="icon text-xl"></iconify-icon>
                    <span>My Profile</span>
                  </Link>
                  </li>
                  <li>
                  <ResponsiveNavLink
                                :href="route('logout')"
                                method="post"
                                as="button"
                                class="text-black px-0 py-2 hover:text-primary-600 flex items-center gap-4"
                            >
                               <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      class="text-current"
                      @click="logout"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 2v10m6.4-5.4a9 9 0 1 1-12.77.04"
                      ></path>
                    </svg>  <span>Log Out</span>
                    </ResponsiveNavLink>
                
                </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
defineProps({
  auth: Object, // declare auth prop
});
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import Iconify from '@iconify/iconify';
const isProfileOpen = ref(false);
const isDropdownOpen = ref(false); // Define this to control the notification dropdown
const activeMenu = ref('');  // Track active menu state
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
const notifications = ref([
  {
    title: "Congratulations",
    message: "Your profile has been Verified. Your profile has been Verified",
    time: "23 Mins ago",
    icon: "bitcoin-icons:verify-outline",
  },
  // Add more notifications here as needed
]);

// Toggle profile dropdown
const toggleProfile = () => {
  isProfileOpen.value = !isProfileOpen.value;
  if (isProfileOpen.value) {
    isDropdownOpen.value = false; // Close notification dropdown if profile is opened
  }
};

// Toggle notification dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  if (isDropdownOpen.value) {
    isProfileOpen.value = false; // Close profile dropdown if notifications are opened
  }
};

// Set the active menu item
const setActive = (menu) => {
  activeMenu.value = menu;
};

// Close dropdowns when clicking outside
const closeDropdowns = () => {
  isProfileOpen.value = false;
  isDropdownOpen.value = false;
};
</script>
<script>
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  data() {
    return {
      isLoggingOut: false,
      form: useForm(),
    };
  },
  computed: {
        // Access the user data from the shared props
        userName() {
            return this.$page.props.auth?.user?.name || null;
        },
         userEmail() {
            return this.$page.props.auth?.user?.email || null;
        },
    },
  props: {
    isSidebarOpen: {
      type: Boolean,
      default: false,
    },
  },
    methods: {
    logout(event) {
      event.preventDefault(); // Prevent default link behavior

      // Send a POST request to the logout route
      this.$inertia.post(this.route('logout')).then(() => {
        // After logout, redirect to the login page with Inertia (SPA navigation)
        window.location.href = '/login'; // Full reload and redirect to login page
      });
    }
  },
};
</script>
<style scoped>
/* Optional: Add styles for the active state */
.text-black.active {
  background-color: #f1f1f1; /* Light background for active item */
  color: #007bff; /* Active text color */
}

.text-black:hover {
  background-color: #e0e0e0; /* Hover effect */
}
#dropdownProfile {
  position: absolute;
  top: 100%; /* Position it just below the button */
  right: 0;  /* Align it to the right edge of the button */
  z-index: 1000; /* Ensure it's above other elements */
}
</style>
