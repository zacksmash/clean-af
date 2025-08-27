<script setup lang="ts">
import { ref } from 'vue'
import { Form, Head, Link } from '@inertiajs/vue3'
import NewPasswordController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/NewPasswordController'
import { login } from '@/wayfinder/routes'
import AuthLayout from '@/layouts/AuthLayout.vue'

defineOptions({
    layout: AuthLayout,
})

const props = defineProps<{
    token?: string;
    email?: string;
}>()

const inputEmail = ref(props.email)
</script>

<template>
    <div>
        <Head title="Reset Password"/>

        <header>
            <p>Reset Password</p>
        </header>

        <Form
            v-slot="{ errors, processing }"
            v-bind="NewPasswordController.store.form()"
            :transform="(data) => ({ ...data, token, email })"
            :reset-on-success="['password', 'password_confirmation']"
        >
            <div>
                <label for="email">Email</label>

                <input
                    id="email"
                    v-model="inputEmail"
                    type="email"
                    name="email"
                    autocomplete="email"
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

            <button type="submit" :disabled="processing">Reset Password</button>
        </Form>

        <footer>
            <Link :href="login()">Login</Link>
        </footer>
    </div>
</template>
