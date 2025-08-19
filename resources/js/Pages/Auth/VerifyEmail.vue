<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3'
import { logout } from '@/Http/routes'
import { store } from '@/Http/actions/Laravel/Fortify/Http/Controllers/EmailVerificationNotificationController'

import AuthLayout from '@/Layouts/AuthLayout.vue'

defineProps<{
    status?: string;
}>()
</script>

<template>
    <Head title="Verify Email"/>

    <AuthLayout>
        <div v-if="status === 'verification-link-sent'">
            <mark>A new verification link has been sent to the email address you provided during registration.</mark>
        </div>

        <Form :action="store()">
            <button type="submit">Resend Verification Email</button>
        </Form>

        <Form :action="logout()">
            <button type="submit">Log out</button>
        </Form>
    </AuthLayout>
</template>
