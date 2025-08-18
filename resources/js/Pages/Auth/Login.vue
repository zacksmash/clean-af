<script setup>
import { Form, Head, Link } from '@inertiajs/vue3';
import AuthLayout from '@/Layouts/AuthLayout.vue';

defineOptions({
    layout: AuthLayout
});
</script>

<template>
    <Head title="Login" />
    <div>
        <Form :action="route('login.store')" :reset-on-success="['password']" method="post" #default="{ errors }">
            <div>
                <label for="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    autofocus
                    :tabindex="1"
                    autocomplete="email"
                    placeholder="email@example.com" />
                <div v-if="errors.email">{{ errors.email }}</div>
            </div>

            <div>
                <label for="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    :tabindex="2"
                    autocomplete="current-password"
                    placeholder="Password" />
                <div v-if="errors.password">{{ errors.password }}</div>
            </div>

            <div>
                <input type="checkbox" id="remember" name="remember" :tabindex="3" />
                <label for="remember">Remember Me</label>
            </div>

            <div>
                <Link :href="route('password.request')">Forgot Password?</Link>
            </div>

            <button type="submit">Login</button>
        </Form>

        <p>
            Don't have an account? <Link :href="route('register')">Register</Link>
        </p>
    </div>
</template>
