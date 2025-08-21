<script setup lang="ts">
import { Form, Head, Link } from '@inertiajs/vue3'
// import { store as sendVerificationEmail } from '@/Http/actions/Laravel/Fortify/Http/Controllers/EmailVerificationNotificationController'
import { logout } from '@/Http/routes'

import AuthLayout from '@/Layouts/AuthLayout.vue'

defineProps<{
    status?: string;
}>()
</script>

<template>
    <AuthLayout>
        <Head title="Verify Email"/>

        <header>
            <p>Verify Your Email</p>

            <div v-if="status === 'verification-link-sent'">
                <mark>A new verification link has been sent to the email address you provided during registration.</mark>
            </div>
        </header>

        <Form :action="sendVerificationEmail()">
            <button type="submit">Resend Verification Email</button>
        </Form>

        <footer>
            <Link :href="logout()">
                Log out
            </Link>
        </footer>
    </AuthLayout>
</template>
