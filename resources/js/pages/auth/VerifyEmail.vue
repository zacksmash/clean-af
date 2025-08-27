<script setup lang="ts">
import { Form, Head, Link } from '@inertiajs/vue3'
// import EmailVerificationNotificationController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/EmailVerificationNotificationController'
import { logout } from '@/wayfinder/routes'
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
        <Head title="Verify Email"/>

        <header>
            <p>Verify Your Email</p>

            <div v-if="status === 'verification-link-sent'">
                <mark>
                    A new verification link has been sent to the email address you provided during registration.
                </mark>
            </div>
        </header>

        <Form v-slot="{ processing }" v-bind="EmailVerificationNotificationController.store.form()">
            <button type="submit" :disabled="processing">Resend Verification Email</button>
        </Form>

        <footer>
            <Link :href="logout()">
                Log out
            </Link>
        </footer>
    </div>
</template>
