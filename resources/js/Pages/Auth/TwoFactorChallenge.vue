<script setup lang="ts">
import { ref } from 'vue'
import { Form, Head } from '@inertiajs/vue3'
import { store as twoFactorAuthenticate } from '@/Http/actions/Laravel/Fortify/Http/Controllers/TwoFactorAuthenticatedSessionController'

import AuthLayout from '@/Layouts/AuthLayout.vue'

const showCodeField = ref<Boolean>(true)
const showRecoveryCodeField = ref<Boolean>(false)
</script>

<template>
    <Head title="Two Factor Challenge"/>

    <AuthLayout>
        <Form
            v-slot="{ errors }"
            :action="twoFactorAuthenticate()"
        >
            <div>
                <button v-if="!showCodeField" @click.prevent="showCodeField = true; showRecoveryCodeField = false">
                    Use Authenticator App
                </button>

                <button v-if="!showRecoveryCodeField" @click.prevent="showCodeField = false; showRecoveryCodeField = true">
                    Use Recovery Code
                </button>
            </div>

            <div v-if="showCodeField">
                <p>
                    Please confirm access to your account by entering the authentication code provided by your authenticator application.
                </p>

                <div>
                    <label>Code</label>

                    <input
                        type="text"
                        name="code"
                        autofocus
                        autocomplete="one-time-code"
                    >

                    <div v-if="errors.code">
                        <mark>{{ errors.code }}</mark>
                    </div>
                </div>
            </div>

            <div v-if="showRecoveryCodeField">
                <p>
                    Please confirm access to your account by entering one of your emergency recovery codes.
                </p>

                <div>
                    <label>Recovery Code</label>

                    <input
                        type="text"
                        name="recovery_code"
                        autocomplete="one-time-code"
                    >

                    <div v-if="errors.recovery_code">
                        <mark>{{ errors.recovery_code }}</mark>
                    </div>
                </div>
            </div>

            <button type="submit">Login</button>
        </Form>
    </AuthLayout>
</template>
