<script setup lang="ts">
import { Form, Head, Link } from '@inertiajs/vue3'
import { store as resetPassword } from '@/Http/actions/Laravel/Fortify/Http/Controllers/NewPasswordController'
import { login } from '@/Http/routes'

import AuthLayout from '@/Layouts/AuthLayout.vue'

defineProps<{
    token?: string;
    email?: string;
}>()
</script>

<template>
    <Head title="Reset Password"/>

    <AuthLayout>
        <Form
            v-slot="{ errors }"
            :action="resetPassword()"
            :transform="(data) => ({ ...data, token, email })"
            :reset-on-success="['password', 'password_confirmation']"
        >
            <div>
                <label for="email">Email</label>

                <input
                    id="email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    :value="email"
                    readonly
                >

                <div v-if="errors.email">
                    <mark>{{ errors.email }}</mark>
                </div>
            </div>

            <div>
                <label for="password">New Password</label>

                <input
                    id="password"
                    type="password"
                    name="password"
                    autocomplete="new-password"
                    autofocus
                    placeholder="Password"
                >

                <div v-if="errors.password">
                    <mark>{{ errors.password }}</mark>
                </div>
            </div>

            <div>
                <label for="password_confirmation">Confirm Password</label>

                <input
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    autocomplete="new-password"
                    placeholder="Confirm password"
                >

                <div v-if="errors.password_confirmation">
                    <mark>{{ errors.password_confirmation }}</mark>
                </div>
            </div>

            <button type="submit">Reset Password</button>
        </Form>

        <p>
            <Link :href="login()">Login</Link>
        </p>
    </AuthLayout>
</template>
