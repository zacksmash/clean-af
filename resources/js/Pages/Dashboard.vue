<script setup>
import { computed } from 'vue';
import { Form, Head, usePage } from '@inertiajs/vue3';

import Profile from '@/Pages/Settings/Profile.vue';
import Password from '@/Pages/Settings/Password.vue';
import TwoFactorAuth from '@/Pages/Settings/TwoFactorAuth.vue';

const user = computed(() => usePage().props.auth.user);
const status = computed(() => usePage().props.status);
const props = defineProps({
    canUpdateProfile: Boolean,
    canUpdatePassword: Boolean,
    canManageTwoFactorAuthentication: Boolean,
});
</script>
<template>
    <Head title="Dashboard" />
    <div>
        <div>Logged in as {{ user?.name }}!</div>

        <Form :action="route('logout')" method="post">
            <button type="submit">Logout</button>
        </Form>

        <div>{{ status }}</div>

        <hr>

        <Profile v-if="props.canUpdateProfile" />

        <hr>

        <Password v-if="props.canUpdatePassword" />

        <hr>

        <TwoFactorAuth v-if="props.canManageTwoFactorAuthentication" />
    </div>
</template>
