<script setup lang="ts">
import { ref } from 'vue'
import { Form, Head } from '@inertiajs/vue3'
// import TwoFactorAuthenticatedSessionController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/TwoFactorAuthenticatedSessionController'
import AuthLayout from '@/layouts/AuthLayout.vue'

defineOptions({
    layout: AuthLayout,
})

const showCodeField = ref<boolean>(true)
const showRecoveryCodeField = ref<boolean>(false)
</script>

<template>
    <div>
        <Head title="Two Factor Challenge"/>

        <header>
            <p>Two Factor Challenge</p>

            <div>
                <button
                    v-if="!showCodeField"
                    type="button"
                    @click="showCodeField = true; showRecoveryCodeField = false"
                >
                    Use Authentication Code
                </button>

                <button
                    v-if="!showRecoveryCodeField"
                    type="button"
                    @click="showCodeField = false; showRecoveryCodeField = true"
                >
                    Use Recovery Code
                </button>
            </div>
        </header>

        <Form
            v-slot="{ errors, processing }"
            v-bind="TwoFactorAuthenticatedSessionController.store.form()"
            :reset-on-error="['code', 'recovery_code']"
        >
            <template v-if="showCodeField">
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

            <button type="submit" :disabled="processing">Login</button>
        </Form>
    </div>
</template>
