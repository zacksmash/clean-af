<script setup lang="ts">
import { computed } from 'vue'
import { Head, Link, usePage } from '@inertiajs/vue3'
import { logout } from '@/Http/routes'
import { type User } from '@/Types'

import AppLayout from '@/Layouts/AppLayout.vue'
import Profile from '@/Pages/Settings/Profile.vue'
import Password from '@/Pages/Settings/Password.vue'
// import TwoFactorAuth from '@/Pages/Settings/TwoFactorAuth.vue'

const user = computed(() => usePage().props.auth.user as User)
const status = computed(() => usePage().props.status as string)
const props = defineProps<{
    canUpdateProfile: boolean;
    canUpdatePassword?: boolean;
    canManageTwoFactorAuthentication?: boolean;
}>()
</script>
<template>
    <AppLayout>
        <Head title="Dashboard"/>

        <header>
            <p>Logged in as {{ user?.name }}!</p>

            <div v-if="status">
                <mark>{{ status }}</mark>
            </div>

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

        <!-- <template v-if="props.canManageTwoFactorAuthentication">
            <hr>

            <TwoFactorAuth/>
        </template> -->
    </AppLayout>
</template>
