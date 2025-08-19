<script setup lang="ts">
import { computed } from 'vue'
import { Form, usePage } from '@inertiajs/vue3'
import { store as enableTwoFactor, destroy as disableTwoFactor } from '@/Http/actions/Laravel/Fortify/Http/Controllers/TwoFactorAuthenticationController'
import { store as confirmTwoFactor } from '@/Http/actions/Laravel/Fortify/Http/Controllers/ConfirmedTwoFactorAuthenticationController'
import { store as regenerateRecoveryCodes } from '@/Http/actions/Laravel/Fortify/Http/Controllers/RecoveryCodeController'
import { type AppPageProps } from '@/Types'

interface PageProps extends AppPageProps {
    twoFactorQrCodeUrl?: string;
    twoFactorQrCodeSvg?: string;
    twoFactorRecoveryCodes?: string[];
}

const pageProps = computed(() => usePage().props as PageProps);
</script>

<template>
    <div>
        <div v-if="! pageProps.auth.user?.two_factor_secret">
            <Form :action="enableTwoFactor()">
                <button type="submit">Enable Two-Factor Authentication</button>
            </Form>
        </div>

        <div v-else>
            <Form :action="disableTwoFactor()">
                <button type="submit">Disable Two-Factor Authentication</button>
            </Form>

            <template v-if="pageProps.status === 'two-factor-authentication-enabled'">
                <p>
                    Two factor authentication is now enabled. Please finish configuring two factor authentication below.
                </p>

                <p>
                    Scan the QR code using your phone’s authenticator application, or click it to use an authenticator application on your current device.
                </p>

                <div>
                    <a
                        :href="pageProps.twoFactorQrCodeUrl"
                        rel="alternate"
                        aria-label="2FA link"
                    >
                        <div v-html="pageProps.twoFactorQrCodeSvg"></div>
                    </a>
                </div>

                <Form :action="confirmTwoFactor()">
                    <div>
                        <label>Enter current 2FA code from your authenticator application to confirm the setup has been successful.</label>

                        <input
                            type="text"
                            name="code"
                            required
                            autofocus
                            autocomplete="off"
                        >
                    </div>

                    <button type="submit">Confirm 2FA code</button>
                </Form>

                <p>
                    Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.
                </p>
            </template>

            <template v-if="pageProps.status === 'two-factor-authentication-confirmed'">
                <p>
                    Two factor authentication confirmed and enabled successfully.
                </p>
            </template>

            <div v-for="code in pageProps.twoFactorRecoveryCodes" :key="code">
                {{ code }}
            </div>

            <Form :action="regenerateRecoveryCodes()">
                <button type="submit">Regenerate Recovery Codes</button>
            </Form>
        </div>
    </div>
</template>
