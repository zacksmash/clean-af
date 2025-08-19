<script setup lang="ts">
import { computed } from 'vue'
import { Form, Head, usePage } from '@inertiajs/vue3'
import { logout } from '@/Http/routes'
import { type User } from '@/Types'

import AppLayout from '@/Layouts/AppLayout.vue'
import Profile from '@/Pages/Settings/Profile.vue'
import Password from '@/Pages/Settings/Password.vue'
import TwoFactorAuth from '@/Pages/Settings/TwoFactorAuth.vue'

interface Props {
    canUpdateProfile: boolean;
    canUpdatePassword?: boolean;
    canManageTwoFactorAuthentication?: boolean;
}

const user = computed(() => usePage().props.auth.user as User)
const status = computed(() => usePage().props.status as string | undefined)
const props = defineProps<Props>()
</script>
<template>
    <Head title="Dashboard"/>

    <AppLayout>
        <div>Logged in as {{ user?.name }}!</div>

        <Form :action="logout()">
            <button type="submit">Logout</button>
        </Form>

        <div>
            <mark>{{ status }}</mark>
        </div>

        <hr>

        <Profile v-if="props.canUpdateProfile"/>

        <hr>

        <Password v-if="props.canUpdatePassword"/>

        <hr>

        <TwoFactorAuth v-if="props.canManageTwoFactorAuthentication"/>
    </AppLayout>
</template>
