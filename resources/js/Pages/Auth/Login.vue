<template>
<Head title="Login Page" />
  <section class="bg-white dark:bg-dark-2 flex flex-wrap min-h-[100vh]">
    <!-- Left Column -->
    <div class="lg:w-1/2 lg:block hidden">
      <div class="flex items-center flex-col h-full justify-center">
        <img src="/assets/images/auth/auth-img.png" alt="Auth Image" />
      </div>
    </div>
    <!-- Right Column -->
    <div class="lg:w-1/2 py-8 px-6 flex flex-col justify-center">
      <div class="lg:max-w-[464px] mx-auto w-full">
        <div>
          <a href="/" class="mb-2.5 max-w-[290px]">
            <img src="/assets/images/logo.png" alt="Logo" />
          </a>
          <h4 class="mb-3">Sign In to your Account</h4>
          <p class="mb-8 text-secondary-light text-lg">Welcome back! Please enter your details.</p>
        </div>
        <form @submit.prevent="submit">
          <div class="icon-field mb-4 relative">
            <span class="absolute start-4 top-1/2 -translate-y-1/2 pointer-events-none flex text-xl">
              <iconify-icon icon="mage:email"></iconify-icon>
            </span>
            <input
              v-model="form.email"
              type="email"
              class="form-control h-[56px] ps-11 border-neutral-300 bg-neutral-50 dark:bg-dark-2 rounded-xl"
              placeholder="Email"
            />
            <InputError class="mt-2" :message="form.errors.email" />
          </div>
          <div class="relative mb-5">
            <div class="icon-field">
              <span class="absolute start-4 top-1/2 -translate-y-1/2 pointer-events-none flex text-xl">
                <iconify-icon icon="solar:lock-password-outline"></iconify-icon>
              </span>
              <input
                v-model="form.password"
                type="password"
                class="form-control h-[56px] ps-11 border-neutral-300 bg-neutral-50 dark:bg-dark-2 rounded-xl"
                placeholder="Password"
                ref="passwordInput"
              />
              <InputError class="mt-2" :message="form.errors.password" />
            </div>
            <span
              @click="togglePassword"
              class="toggle-password ri-eye-line cursor-pointer absolute end-0 top-1/2 -translate-y-1/2 me-4 text-secondary-light"
            ></span>
          </div>
          <div class="mt-7">
            <div class="flex justify-between gap-2">
              <div class="flex items-center">
                <input class="form-check-input border border-neutral-300" type="checkbox" v-model="form.remember" />
                <label class="ps-2" for="remember">Remember me</label>
              </div>
              <!-- Replace the <a> tag with <Link> -->
              <Link
                v-if="canResetPassword"
                :href="route('password.request')"
                class="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <button type="submit" class="btn btn-primary justify-center text-sm btn-sm px-3 py-4 w-full rounded-xl mt-8">Sign In</button>

          <div class="mt-8 center-border-horizontal text-center relative before:absolute before:w-full before:h-[1px] before:top-1/2 before:-translate-y-1/2 before:bg-neutral-300 before:start-0">
            <span class="bg-white dark:bg-dark-2 z-[2] relative px-4">Or sign in with</span>
          </div>
          <div class="mt-8 text-center text-sm">
            <p>
                Dont have an account?
                <Link :href="route('register')" class="text-primary-600 font-semibold hover:underline">
                    Sign Up
                </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';


const form = useForm({
  email: '',
  password: '',
  remember: false,
});

const submit = () => {
  form.post(route('login'), {
    onFinish: () => form.reset('password'),
  });
};

const togglePassword = () => {
  const passwordInput = ref(null);
  const type = passwordInput.value.type === 'password' ? 'text' : 'password';
  passwordInput.value.type = type;
};
const canResetPassword = true; 
const canRegister = true; 
</script>
<script>
export default {
  props: {
    auth: Object,
    errors: Object
  }
}
</script>
<style scoped>
 @import "/assets/css/style.css";
</style>
