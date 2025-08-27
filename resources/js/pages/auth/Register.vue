<script setup lang="ts">
import { Form, Head, Link } from '@inertiajs/vue3'
import RegisteredUserController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/RegisteredUserController'
import { login } from '@/wayfinder/routes'
import AuthLayout from '@/layouts/AuthLayout.vue'

defineOptions({
    layout: AuthLayout,
})
</script>

<template>
    <div>
        <Head title="Register"/>

        <header>
            <p>Register</p>
        </header>

        <Form
            v-slot="{ errors, processing }"
            v-bind="RegisteredUserController.store.form()"
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

            <button type="submit" :disabled="processing">Register</button>
        </Form>

        <footer>
            <Link :href="login()">Login</Link>
        </footer>
    </div>
</template>
