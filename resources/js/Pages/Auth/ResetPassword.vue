<script setup>
import { Head, Form, Link } from '@inertiajs/vue3';
import AuthLayout from '@/Layouts/AuthLayout.vue';

defineOptions({
    layout: AuthLayout
});

defineProps({
    token: String,
    email: String
})
</script>

<template>
    <Head title="Reset Password" />
    <div>
        <Form :action="route('password.update', { token: token })" method="post" #default="{ errors }">
            <div>
                <label for="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    :value="email"
                    readonly />
                <div v-if="errors.email">{{ errors.email }}</div>
            </div>
            <div>
                <label for="password">New Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    autocomplete="new-password"
                    autofocus
                    placeholder="Password" />
                <div v-if="errors.password">{{ errors.password }}</div>
            </div>
            <div>
                <label for="password_confirmation">Confirm Password</label>
                <input
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    autocomplete="new-password"
                    placeholder="Confirm password" />
                <div v-if="errors.password_confirmation">{{ errors.password_confirmation }}</div>
            </div>
            <button type="submit">Reset Password</button>
        </Form>
        <p>
            Remembered your password? <Link :href="route('login')">Login</Link>
        </p>
    </div>
</template>
