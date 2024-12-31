<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
           <div class="dashboard-main-body">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-6">
            <h6 class="font-semibold mb-0 dark:text-white">Dashboard</h6>
            <ul class="flex items-center gap-[6px]">
                <li class="font-medium">
               
                    <iconify-icon 
                    icon="solar:home-smile-angle-outline" 
                    class="icon text-lg"
                    ></iconify-icon>
                    Home
               
                </li>
                <li class="dark:text-white">-</li>
                <li class="font-medium dark:text-white">Dashboard</li>
            </ul>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6">  
        
        <!-- Dashboard Widget Start -->
          <div class="card px-xl-6 px-4 py-4 shadow-none rounded-lg border-neutral-200 dark:border-neutral-600 h-full bg-gradient-to-r from-primary-600/10 to-bg-white">
            <div class="card-body p-0">
              <div class="flex flex-wrap items-center justify-between gap-1">
                  <div class="flex items-center">

                      <div class="w-[64px] h-[64px] rounded-2xl bg-white flex-shrink-0 dark:bg-neutral-800/75 flex justify-center items-center me-2xl-5 me-xl-4 me-3">
                          <span class="w-10 h-10 bg-primary-600 shrink-0 text-white flex justify-center items-center rounded-lg h6 mb-0">
                              <iconify-icon icon="flowbite:users-group-solid" class="icon"></iconify-icon>
                          </span>
                      </div>
                    
                      <div>
                          <span class="mb-2 font-medium text-secondary-light text-base">New Users</span>
                          <h6 class="font-semibold my-1">4000</h6>
                          <p class="text-sm mb-0">Increase by  
                              <span class="bg-success-100 dark:bg-success-600/50 px-1 py-0.5 rounded-sm font-medium text-success-600 dark:text-success-400 text-sm">+200</span> this week
                          </p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        <!-- Dashboard Widget End -->

        <!-- Dashboard Widget Start -->
          <div class="card px-xl-6 px-4 py-4 shadow-none rounded-lg border-neutral-200 dark:border-neutral-600 h-full bg-gradient-to-r from-purple-600/10 to-bg-white">
            <div class="card-body p-0">
              <div class="flex flex-wrap items-center justify-between gap-1">
                  <div class="flex items-center">

                      <div class="w-[64px] h-[64px] rounded-2xl bg-white flex-shrink-0 dark:bg-neutral-800/75 flex justify-center items-center me-2xl-5 me-xl-4 me-3">
                          <span class="w-10 h-10 bg-purple-600 shrink-0 text-white flex justify-center items-center rounded-lg h6 mb-0">
                              <iconify-icon icon="solar:wallet-bold" class="text-white text-2xl mb-0"></iconify-icon>
                          </span>
                      </div>
                    
                      <div>
                          <span class="mb-2 font-medium text-secondary-light text-base">Total Deposit</span>
                          <h6 class="font-semibold my-1">15,000</h6>
                          <p class="text-sm mb-0">Increase by  
                              <span class="bg-danger-100 dark:bg-danger-600/50 px-1 py-0.5 rounded-sm font-medium text-danger-600 dark:text-danger-400 text-sm">-200</span> this week
                          </p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        <!-- Dashboard Widget End -->

        <!-- Dashboard Widget Start -->
          <div class="card px-xl-6 px-4 py-4 shadow-none rounded-lg border-neutral-200 dark:border-neutral-600 h-full bg-gradient-to-r from-red-600/10 to-bg-white">
            <div class="card-body p-0">
              <div class="flex flex-wrap items-center justify-between gap-1">
                  <div class="flex items-center">

                      <div class="w-[64px] h-[64px] rounded-2xl bg-white flex-shrink-0 dark:bg-neutral-800/75 flex justify-center items-center me-2xl-5 me-xl-4 me-3">
                          <span class="w-10 h-10 bg-red-600 shrink-0 text-white flex justify-center items-center rounded-lg h6 mb-0">
                              <iconify-icon icon="fa6-solid:file-invoice-dollar" class="text-white text-2xl mb-0"></iconify-icon>
                          </span>
                      </div>
                    
                      <div>
                          <span class="mb-2 font-medium text-secondary-light text-base">Total Expense</span>
                          <h6 class="font-semibold my-1">15,000</h6>
                          <p class="text-sm mb-0">Increase by  
                              <span class="bg-success-100 dark:bg-success-600/50 px-1 py-0.5 rounded-sm font-medium text-success-600 dark:text-success-400 text-sm">+200</span> this week
                          </p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        <!-- Dashboard Widget End -->

        <!-- Dashboard Widget Start -->
          <div class="card px-xl-6 px-4 py-4 shadow-none rounded-lg border-neutral-200 dark:border-neutral-600 h-full bg-gradient-to-r from-success-600/10 to-bg-white">
            <div class="card-body p-0">
              <div class="flex flex-wrap items-center justify-between gap-1">
                  <div class="flex items-center">

                      <div class="w-[64px] h-[64px] rounded-2xl bg-white flex-shrink-0 dark:bg-neutral-800/75 flex justify-center items-center me-2xl-5 me-xl-4 me-3">
                          <span class="w-10 h-10 bg-success-600 shrink-0 text-white flex justify-center items-center rounded-lg h6 mb-0">
                              <iconify-icon icon="streamline:bag-dollar-solid" class="icon"></iconify-icon>
                          </span>
                      </div>
                    
                      <div>
                          <span class="mb-2 font-medium text-secondary-light text-base">Total Earning</span>
                          <h6 class="font-semibold my-1">15,000</h6>
                          <p class="text-sm mb-0">Increase by  
                              <span class="bg-success-100 dark:bg-success-600/50 px-1 py-0.5 rounded-sm font-medium text-success-600 dark:text-success-400 text-sm">+200</span> this week
                          </p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          
        <!-- Dashboard Widget End -->
    </div>

        </div>
        </template>

        
    </AuthenticatedLayout>
</template>

