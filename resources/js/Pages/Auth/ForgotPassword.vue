<script setup>
import { Form, Head, Link } from '@inertiajs/vue3';
import AuthLayout from '@/Layouts/AuthLayout.vue';

defineOptions({
    layout: AuthLayout
});

defineProps({
    status: String,
});
</script>

<template>
    <Head title="Forgot Password" />
    <div>
        <Form :action="route('password.email')" method="post" #default="{ errors }" reset-on-success>
            <div>
                <label for="email">Email</label>
                <input id="email" type="email" name="email" autocomplete="off" autofocus placeholder="email@example.com" />
                <div v-if="errors.email">{{ errors.email }}</div>
            </div>

            <button type="submit">Send Password Reset Link</button>
        </Form>

        <div v-if="status">
            {{ status }}
        </div>

        <p>
            Remembered your password? <Link :href="route('login')">Login</Link>
        </p>
    </div>
</template>
