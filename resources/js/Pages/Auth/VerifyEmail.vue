<script setup lang="ts">
import { Form, Head, Link } from '@inertiajs/vue3'
import { store as sendVerificationEmail } from '@/Http/actions/Laravel/Fortify/Http/Controllers/EmailVerificationNotificationController'
import { logout } from '@/Http/routes'

import AuthLayout from '@/Layouts/AuthLayout.vue'

defineProps<{
    status?: string;
}>()
</script>

<template>
    <AuthLayout>
        <Head title="Verify Email"/>

        <section>
            <p>Verify Your Email</p>

            <div v-if="status === 'verification-link-sent'">
                <mark>A new verification link has been sent to the email address you provided during registration.</mark>
            </div>
        </section>

        <Form :action="sendVerificationEmail()">
            <button type="submit">Resend Verification Email</button>
        </Form>

        <section>
            <Link :href="logout()">
                Log out
            </Link>
        </section>
    </AuthLayout>
</template>
