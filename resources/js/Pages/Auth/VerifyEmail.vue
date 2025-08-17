<script setup>
import { Form } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
import AuthLayout from '@/Layouts/AuthLayout.vue';

defineOptions({
    layout: AuthLayout
});

defineProps({
    status: String
})
</script>

<template>
    <div v-if="status === 'verification-link-sent'">
        A new verification link has been sent to the email address you provided during registration.
    </div>

    <Form :action="route('verification.send')" method="post">
        <button type="submit">Resend Verification Email</button>
    </Form>

    <Form :action="route('logout')" method="post">
        <button type="submit">Log out</button>
    </Form>
</template>
