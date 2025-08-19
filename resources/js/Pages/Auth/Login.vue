<script setup lang="ts">
import { Form, Head, Link } from '@inertiajs/vue3'
import { store as authenticate } from '@/Http/actions/Laravel/Fortify/Http/Controllers/AuthenticatedSessionController'
import { request as forgotPassword } from '@/Http/routes/password'
import { register } from '@/Http/routes'

import AuthLayout from '@/Layouts/AuthLayout.vue'
</script>

<template>
    <Head title="Login"/>

    <AuthLayout>
        <Form
            v-slot="{ errors }"
            :action="authenticate()"
            :reset-on-success="['password']"
            :reset-on-error="['password']"
        >
            <div>
                <label for="email">Email</label>

                <input
                    id="email"
                    type="email"
                    name="email"
                    autofocus
                    :tabindex="1"
                    autocomplete="email"
                    placeholder="email@example.com"
                >

                <div v-if="errors.email">
                    <mark>{{ errors.email }}</mark>
                </div>
            </div>

            <div>
                <label for="password">Password</label>

                <input
                    id="password"
                    type="password"
                    name="password"
                    required
                    :tabindex="2"
                    autocomplete="current-password"
                    placeholder="Password"
                >

                <div v-if="errors.password">
                    <mark>{{ errors.password }}</mark>
                </div>
            </div>

            <div>
                <div>
                    <input
                        id="remember"
                        type="checkbox"
                        name="remember"
                        :tabindex="3"
                    >

                    <label for="remember">Remember Me</label>
                </div>
            </div>

            <button type="submit">Login</button>
        </Form>

        <section>
            <Link :href="forgotPassword()">Forgot Password</Link>
            &nbsp;
            <Link :href="register()">Register</Link>
        </section>
    </AuthLayout>
</template>
