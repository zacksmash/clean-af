<script setup>
import { computed } from 'vue';
import { Form, usePage } from '@inertiajs/vue3';

const props = computed(() => usePage().props);
</script>

<template>
    <div>
        <div v-if="! props.auth.user?.two_factor_secret">
            <Form :action="route('two-factor.enable')" method="post">
                <button type="submit">Enable Two-Factor Authentication</button>
            </Form>
        </div>

        <div v-else>
            <Form :action="route('two-factor.disable')" method="delete">
                <button type="submit">Disable Two-Factor Authentication</button>
            </Form>

            <template v-if="props.status === 'two-factor-authentication-enabled'">
                <div>
                    Two factor authentication is now enabled. Please finish configuring two factor authentication below.
                </div>

                <div>
                    Scan the QR code using your phone’s authenticator application, or click it to use an authenticator application on your current device.
                </div>

                <div>
                    <a :href="props.twoFactorQrCodeUrl" rel="alternate" aria-label="2FA link">
                        <div v-html="props.twoFactorQrCodeSvg"></div>
                    </a>
                </div>

                <Form method="post" :action="route('two-factor.confirm')">
                    <div>
                        <label>Enter current 2FA code from your authenticator application to confirm the setup has been successful.</label>
                        <input type="text" name="code" required autofocus autocomplete="off" />
                    </div>

                    <button type="submit">Confirm 2FA code</button>
                </Form>

                <div>
                    Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.
                </div>
            </template>

            <template v-if="props.status === 'two-factor-authentication-confirmed'">
                <div>
                    Two factor authentication confirmed and enabled successfully.
                </div>
            </template>

            <div v-for="code in props.twoFactorRecoveryCodes" :key="code">
                {{ code }}
            </div>

            <Form :action="route('two-factor.recovery-codes')" method="post">
                <button type="submit">Regenerate Recovery Codes</button>
            </Form>
        </div>
    </div>
</template>
