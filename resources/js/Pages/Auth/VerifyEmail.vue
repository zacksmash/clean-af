<script setup>
import { Form, Head } from '@inertiajs/vue3'
import { route } from 'ziggy-js'

import AuthLayout from '@/Layouts/AuthLayout.vue'

defineProps({
    status: String,
})
</script>

<template>
    <Head title="Verify Email"/>

    <AuthLayout>
        <div v-if="status === 'verification-link-sent'">
            <mark>A new verification link has been sent to the email address you provided during registration.</mark>
        </div>

        <Form :action="route('verification.send')" method="post">
            <button type="submit">Resend Verification Email</button>
        </Form>

        <Form :action="route('logout')" method="post">
            <button type="submit">Log out</button>
        </Form>
    </AuthLayout>
</template>
