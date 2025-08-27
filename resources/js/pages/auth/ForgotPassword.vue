<script setup lang="ts">
import { Form, Head, Link } from '@inertiajs/vue3'
import PasswordResetLinkController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/PasswordResetLinkController'
import { login } from '@/wayfinder/routes'
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
        <Head title="Forgot Password"/>

        <header>
            <p>Forgot Password</p>

            <mark v-if="status">{{ status }}</mark>
        </header>

        <Form v-slot="{ errors, processing }" v-bind="PasswordResetLinkController.store.form()">
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

            <button type="submit" :disabled="processing">Send Password Reset Link</button>
        </Form>

        <footer>
            <Link :href="login()">Login</Link>
        </footer>
    </div>
</template>
