<script setup lang="ts">
import { ref } from 'vue'
import { Form, Head } from '@inertiajs/vue3'
import { store as twoFactorAuthenticate } from '@/Http/actions/Laravel/Fortify/Http/Controllers/TwoFactorAuthenticatedSessionController'

import AuthLayout from '@/Layouts/AuthLayout.vue'

const showCodeField = ref<boolean>(true)
const showRecoveryCodeField = ref<boolean>(false)
</script>

<template>
    <Head title="Two Factor Challenge"/>

    <AuthLayout>
        <section>
            <button v-if="!showCodeField" @click.prevent="showCodeField = true; showRecoveryCodeField = false">
                Use Authentication Code
            </button>

            <button v-if="!showRecoveryCodeField" @click.prevent="showCodeField = false; showRecoveryCodeField = true">
                Use Recovery Code
            </button>
        </section>

        <Form
            v-slot="{ errors }"
            :action="twoFactorAuthenticate()"
        >
            <template v-if="showCodeField">
                <p>
                    Log in with Authentication Code
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
            </template>

            <template v-if="showRecoveryCodeField">
                <p>
                    Log in with recovery code
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
            </template>

            <button type="submit">Login</button>
        </Form>
    </AuthLayout>
</template>
