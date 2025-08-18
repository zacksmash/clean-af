<script setup>
import { Form, Head, Link } from '@inertiajs/vue3'

import AuthLayout from '@/Layouts/AuthLayout.vue'

defineProps({
    status: String,
})
</script>

<template>
    <Head title="Forgot Password"/>

    <AuthLayout>
        <Form
            v-slot="{ errors }"
            :action="route('password.email')"
            method="post"
            reset-on-success
        >
            <div>
                <label for="email">Email</label>

                <input
                    id="email"
                    type="email"
                    name="email"
                    autocomplete="off"
                    autofocus
                    placeholder="email@example.com"
                >

                <div v-if="errors.email">
                    <mark>{{ errors.email }}</mark>
                </div>
            </div>

            <button type="submit">Send Password Reset Link</button>
        </Form>

        <div v-if="status">
            <mark>{{ status }}</mark>
        </div>

        <p>
            Remembered your password? <Link :href="route('login')">Login</Link>
        </p>
    </AuthLayout>
</template>
