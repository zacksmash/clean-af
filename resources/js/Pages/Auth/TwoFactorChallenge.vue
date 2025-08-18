<script setup>
import { ref } from 'vue';
import { Form, Head } from '@inertiajs/vue3';
import AuthLayout from '@/Layouts/AuthLayout.vue';

defineOptions({
    layout: AuthLayout
});

const showCodeField = ref(true);
const showRecoveryCodeField = ref(false);
</script>

<template>
    <Head title="Two Factor Challenge" />
    <div>
        <h1>Two Factor Challenge</h1>
        <Form :action="route('two-factor.login')" method="post" #default="{ errors }">
            <div>
                <button @click.prevent="showCodeField = true; showRecoveryCodeField = false">
                    Use Authenticator App
                </button>
                &nbsp;
                <button @click.prevent="showCodeField = false; showRecoveryCodeField = true">
                    Use Recovery Code
                </button>
            </div>

            <div v-if="showCodeField">
                <div>
                    Please confirm access to your account by entering the authentication code provided by your authenticator application.
                </div>

                <div>
                    <label>Code</label>
                    <input type="text" name="code" autofocus autocomplete="one-time-code" />
                    <div v-if="errors.code">{{ errors.code }}</div>
                </div>
            </div>

            <div v-if="showRecoveryCodeField">
                <div>
                    Please confirm access to your account by entering one of your emergency recovery codes.
                </div>

                <div>
                    <label>Recovery Code</label>
                    <input type="text" name="recovery_code" autocomplete="one-time-code" />
                    <div v-if="errors.recovery_code">{{ errors.recovery_code }}</div>
                </div>
            </div>

            <button type="submit">Login</button>
        </Form>
    </div>
</template>
