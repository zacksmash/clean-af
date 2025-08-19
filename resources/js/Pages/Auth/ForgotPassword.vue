<script setup lang="ts">
import { Form, Head, Link } from '@inertiajs/vue3'
import { store as sendPasswordResetLink } from '@/Http/actions/Laravel/Fortify/Http/Controllers/PasswordResetLinkController'
import { login } from '@/Http/routes'

import AuthLayout from '@/Layouts/AuthLayout.vue'

defineProps<{
    status?: string;
}>()
</script>

<template>
    <Head title="Forgot Password"/>

    <AuthLayout>
        <Form
            v-slot="{ errors }"
            :action="sendPasswordResetLink()"
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
            Remembered your password? <Link :href="login()">Login</Link>
        </p>
    </AuthLayout>
</template>
