<script setup>
import { computed } from 'vue';
import { Head, Form, usePage } from '@inertiajs/vue3';
import Profile from '@/Pages/Settings/Profile.vue';
import Password from '@/Pages/Settings/Password.vue';
import TwoFactorAuth from '@/Pages/Settings/TwoFactorAuth.vue';

const user = computed(() => usePage().props.auth.user);
</script>
<template>
    <Head title="Dashboard" />
    <div>
        <div>You are logged in, {{ user?.name }}!</div>

        <Form :action="route('logout')" method="post">
            <button type="submit">Logout</button>
        </Form>

        <hr>

        <Profile />

        <hr>

        <Password />

        <hr>

        <TwoFactorAuth />
    </div>
</template>
