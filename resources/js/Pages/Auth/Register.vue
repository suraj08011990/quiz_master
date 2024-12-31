<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <div>
        <Head title="Register" />

        <section class="bg-white dark:bg-dark-2 flex flex-wrap min-h-[100vh]">
            <div class="lg:w-1/2 lg:block hidden">
                <div class="flex items-center flex-col h-full justify-center">
                    <img src="assets/images/auth/auth-img.png" alt="Auth Illustration" />
                </div>
            </div>

            <div class="lg:w-1/2 py-8 px-6 flex flex-col justify-center">
                <div class="lg:max-w-[464px] mx-auto w-full">
                    <div>
                        <a href="/" class="mb-2.5 max-w-[290px]">
                            <img src="assets/images/logo.png" alt="Logo" />
                        </a>
                        <h4 class="mb-3">Sign Up to Your Account</h4>
                        <p class="mb-8 text-secondary-light text-lg">Welcome back! Please enter your details.</p>
                    </div>

                    <form @submit.prevent="submit">
                        <div class="icon-field mb-4 relative">
                            <InputLabel for="name" value="Username" />
                            <TextInput
                                id="name"
                                type="text"
                                v-model="form.name"
                                class="mt-1 block w-full"
                                required
                                autofocus
                                autocomplete="name"
                            />
                            <InputError class="mt-2" :message="form.errors.name" />
                        </div>

                        <div class="icon-field mb-4 relative">
                            <InputLabel for="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                v-model="form.email"
                                class="mt-1 block w-full"
                                required
                                autocomplete="username"
                            />
                            <InputError class="mt-2" :message="form.errors.email" />
                        </div>

                        <div class="icon-field mb-5 relative">
                            <InputLabel for="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                v-model="form.password"
                                class="mt-1 block w-full"
                                required
                                autocomplete="new-password"
                            />
                            <InputError class="mt-2" :message="form.errors.password" />
                            <span class="mt-3 text-sm text-secondary-light">Your password must have at least 8 characters</span>
                        </div>

                        <div class="icon-field mb-5 relative">
                            <InputLabel for="password_confirmation" value="Confirm Password" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                v-model="form.password_confirmation"
                                class="mt-1 block w-full"
                                required
                                autocomplete="new-password"
                            />
                            <InputError class="mt-2" :message="form.errors.password_confirmation" />
                        </div>

                        <div class="form-check style-check mb-5">
                            <input
                                id="condition"
                                type="checkbox"
                                class="form-check-input"
                                required
                            />
                            <label for="condition" class="text-sm">
                                By creating an account, you agree to the
                                <a href="javascript:void(0)" class="text-primary-600 font-semibold">Terms & Conditions</a>
                                and our
                                <a href="javascript:void(0)" class="text-primary-600 font-semibold">Privacy Policy</a>.
                            </label>
                        </div>

                        <PrimaryButton
                            class="btn-primary justify-center text-sm btn-sm px-3 py-4 w-full rounded-xl mt-8"
                            :disabled="form.processing"
                        >
                            Sign Up
                        </PrimaryButton>

                        <div class="mt-8 center-border-horizontal text-center relative before:absolute before:w-full before:h-[1px] before:top-1/2 before:-translate-y-1/2 before:bg-neutral-300 before:start-0">
                            <span class="bg-white dark:bg-dark-2 z-[2] relative px-4">Or sign up with</span>
                        </div>

                        
                        <div class="mt-8 text-center text-sm">
                            <p>
                                Already have an account?
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
