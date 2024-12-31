<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const props = defineProps({
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <div>
        <Head title="Reset Password" />

        <section class="bg-white dark:bg-dark-2 flex flex-wrap min-h-[100vh]">
            <!-- Left Image Section -->
            <div class="lg:w-1/2 lg:block hidden">
                <div class="flex items-center flex-col h-full justify-center">
                    <img src="/assets/images/auth/auth-img.png" alt="Auth Illustration" />
                </div>
            </div>

            <!-- Form Section -->
            <div class="lg:w-1/2 py-8 px-6 flex flex-col justify-center">
                <div class="lg:max-w-[464px] mx-auto w-full">
                    <!-- Header -->
                    <div>
                        <a href="/" class="mb-2.5 max-w-[290px]">
                            <img src="/assets/images/logo.png" alt="Logo" />
                        </a>
                        <h4 class="mb-3">Reset Your Password</h4>
                        <p class="mb-8 text-secondary-light text-lg">
                            Enter your new password to reset your account.
                        </p>
                    </div>

                    <!-- Form -->
                    <form @submit.prevent="submit">
                        <!-- Email -->
                        <div class="icon-field mb-5 relative">
                            <InputLabel for="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                class="mt-1 block w-full"
                                v-model="form.email"
                                required
                                autofocus
                                autocomplete="username"
                            />
                            <InputError class="mt-2" :message="form.errors.email" />
                        </div>

                        <!-- Password -->
                        <div class="icon-field mb-5 relative">
                            <InputLabel for="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                class="mt-1 block w-full"
                                v-model="form.password"
                                required
                                autocomplete="new-password"
                            />
                            <InputError class="mt-2" :message="form.errors.password" />
                        </div>

                        <!-- Confirm Password -->
                        <div class="icon-field mb-5 relative">
                            <InputLabel for="password_confirmation" value="Confirm Password" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                class="mt-1 block w-full"
                                v-model="form.password_confirmation"
                                required
                                autocomplete="new-password"
                            />
                            <InputError class="mt-2" :message="form.errors.password_confirmation" />
                        </div>

                        <!-- Submit Button -->
                        <PrimaryButton
                            class="btn-primary justify-center text-sm btn-sm px-3 py-4 w-full rounded-xl mt-8"
                            :disabled="form.processing"
                        >
                            Reset Password
                        </PrimaryButton>

                        <!-- Back to Sign In -->
                        <div class="mt-8 text-center text-sm">
                            <p>
                                Remember your password?
                                <Link href="/" class="text-primary-600 font-semibold hover:underline">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
 @import "/assets/css/style.css";
</style>