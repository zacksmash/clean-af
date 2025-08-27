<script setup lang="ts">
import { Form, Head, Link } from '@inertiajs/vue3'
import AuthenticatedSessionController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/AuthenticatedSessionController'
import { request } from '@/wayfinder/routes/password'
import { register } from '@/wayfinder/routes'
import AuthLayout from '@/layouts/AuthLayout.vue'

defineOptions({
    layout: AuthLayout,
})

defineProps<{
    status?: string;
}>()
</script>

<template>
    <div>
        <Head title="Login"/>

        <header>
            <p>Log In</p>

            <mark v-if="status">{{ status }}</mark>
        </header>

        <Form
            v-slot="{ errors, processing }"
            v-bind="AuthenticatedSessionController.store.form()"
            :reset-on-success="['password']"
        >
            <div>
                <label for="email">Email</label>

                <input
                    id="email"
                    type="email"
                    name="email"
                    required
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

            <button type="submit" :disabled="processing">Log In</button>
        </Form>

        <footer>
            <Link :href="request()">Forgot Password</Link>
            &nbsp;
            <Link :href="register()">Register</Link>
        </footer>
    </div>
</template>
