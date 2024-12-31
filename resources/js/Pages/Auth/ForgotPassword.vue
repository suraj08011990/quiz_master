<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'), {
        onSuccess: () => {
            // Update the status prop to show a success message
            form.reset('email'); // Optionally reset the email input
        },
    });
};
</script>

<template>
 <Head title="Forget Password" />
    <section class="bg-white dark:bg-neutral-700 flex flex-wrap min-h-[100vh]">
        <!-- Left Side Image -->
        <div class="lg:w-1/2 lg:block hidden">
            <div class="flex items-center flex-col h-full justify-center">
                <img src="assets/images/auth/forgot-pass-img.png" alt="Forgot Password Image">
            </div>
        </div>
        
        <!-- Right Side Form -->
        <div class="lg:w-1/2 py-8 px-6 flex flex-col justify-center">
            <div class="lg:max-w-[464px] mx-auto w-full">
                <!-- Header -->
                <div>
                    <h4 class="mb-3">Forgot Password</h4>
                    <p class="mb-8 text-secondary-light text-lg">
                        Enter the email address associated with your account and we will send you a link to reset your password.
                    </p>
                </div>

                <!-- Display Success Message -->
                <div v-if="status" class="mb-4 text-green-600">
                    {{ status }}
                </div>

                <!-- Form -->
                <form @submit.prevent="submit">
                    <div class="icon-field mb-6 relative">
                        <span class="absolute start-4 top-1/2 -translate-y-1/2 pointer-events-none flex text-xl">
                            <iconify-icon icon="mage:email"></iconify-icon>
                        </span>
                        <input 
                            type="email" 
                            id="email"
                            v-model="form.email"
                            required
                            autofocus
                            autocomplete="username"
                            class="form-control h-[56px] ps-11 border-neutral-300 bg-neutral-50 dark:bg-neutral-600 rounded-xl"
                            placeholder="Email">
                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>
                    
                    <!-- Submit Button -->
                    <button 
                        type="submit" 
                        :disabled="form.processing"
                        class="btn btn-primary justify-center text-sm btn-sm px-3 py-4 w-full rounded-xl">
                        Continue
                    </button>

                    <!-- Back to Sign In -->
                    <div class="text-center">
                      <Link href="/" class="text-primary-600 mt-6 font-semibold hover:underline">
                                    Back to Sign In
                                </Link>
                       
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<style scoped>
 @import "/assets/css/style.css";
</style>
