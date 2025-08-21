<script setup lang="ts">
import { Form, Head, Link } from '@inertiajs/vue3'
import { store as register } from '@/Http/actions/Laravel/Fortify/Http/Controllers/RegisteredUserController'
import { login } from '@/Http/routes'

import AuthLayout from '@/Layouts/AuthLayout.vue'
</script>

<template>
    <AuthLayout>
        <Head title="Register"/>

        <header>
            <p>Register</p>
        </header>

        <Form
            v-slot="{ errors }"
            :action="register()"
            :reset-on-success="['password', 'password_confirmation']"
        >
            <div>
                <label for="name">Name</label>

                <input
                    id="name"
                    type="text"
                    required
                    autofocus
                    :tabindex="1"
                    autocomplete="name"
                    name="name"
                    placeholder="Full name"
                >

                <div v-if="errors.name">
                    <mark>{{ errors.name }}</mark>
                </div>
            </div>

            <div>
                <label for="email">Email</label>

                <input
                    id="email"
                    type="email"
                    required
                    :tabindex="2"
                    autocomplete="email"
                    name="email"
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
                    required
                    :tabindex="3"
                    autocomplete="new-password"
                    name="password"
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
                    required
                    :tabindex="4"
                    autocomplete="new-password"
                    name="password_confirmation"
                    placeholder="Confirm password"
                >

                <div v-if="errors.password_confirmation">
                    <mark>{{ errors.password_confirmation }}</mark>
                </div>
            </div>

            <button type="submit">Register</button>
        </Form>

        <footer>
            <Link :href="login()">Login</Link>
        </footer>
    </AuthLayout>
</template>
