<script setup lang="ts">
import { computed } from 'vue'
import { Head, Link, usePage } from '@inertiajs/vue3'
import { logout } from '@/wayfinder/routes'

import Profile from '@/pages/settings/Profile.vue'
import Password from '@/pages/settings/Password.vue'
import TwoFactorAuth from '@/pages/settings/TwoFactorAuth.vue'

const user = computed(() => usePage().props.auth.user)
const props = defineProps<{
    canUpdateProfile: boolean;
    canUpdatePassword?: boolean;
    canManageTwoFactorAuthentication?: boolean;
    confirmsTwoFactorAuthentication?: boolean;
}>()
</script>
<template>
    <div>
        <Head title="Dashboard"/>

        <header>
            <p>Logged in as {{ user?.name }}!</p>

            <div>
                <Link as="button" :href="logout()">
                    Log Out
                </Link>
            </div>
        </header>

        <template v-if="props.canUpdateProfile">
            <hr>

            <section>
                <p>Update Profile</p>

                <Profile/>
            </section>
        </template>

        <template v-if="props.canUpdatePassword">
            <hr>

            <section>
                <p>Change Password</p>

                <Password/>
            </section>
        </template>

        <template v-if="props.canManageTwoFactorAuthentication">
            <hr>

            <TwoFactorAuth :requires-confirmation="props.confirmsTwoFactorAuthentication"/>
        </template>
    </div>
</template>
