<script setup lang="ts">
import { computed } from 'vue'
import { Form, usePage } from '@inertiajs/vue3'
// import TwoFactorAuthenticationController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/TwoFactorAuthenticationController'
// import ConfirmedTwoFactorAuthenticationController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/ConfirmedTwoFactorAuthenticationController'
// import RecoveryCodeController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/RecoveryCodeController'
import { type AppPageProps } from '@/types'

interface PageProps extends AppPageProps {
    twoFactorQrCodeUrl?: string;
    twoFactorQrCodeSvg?: string;
    twoFactorRecoveryCodes?: string[];
    twoFactorConfirmed?: boolean;
}

const pageProps = computed(() => usePage().props as PageProps)
</script>

<template>
    <section>
        <p>Two-Factor Authentication</p>

        <template v-if="! pageProps.auth.user?.two_factor_secret">
            <Form v-slot="{ processing }" v-bind="TwoFactorAuthenticationController.store.form()">
                <button type="submit" :disabled="processing">Enable Two-Factor Authentication</button>
            </Form>
        </template>

        <template v-else>
            <Form v-slot="{ processing }" v-bind="TwoFactorAuthenticationController.destroy.form()">
                <button type="submit" :disabled="processing">Disable Two-Factor Authentication</button>
            </Form>

            <template v-if="pageProps.status === 'two-factor-authentication-enabled'">
                <p>
                    Two factor authentication is now enabled. Please finish configuring two factor authentication below.
                </p>

                <p>
                    Scan the QR code using your phone’s authenticator application, or click it to use an authenticator application on your current device.
                </p>

                <a
                    :href="pageProps.twoFactorQrCodeUrl"
                    rel="alternate"
                    aria-label="2FA link"
                >
                    <div v-html="pageProps.twoFactorQrCodeSvg"></div>
                </a>

                <Form v-slot="{ processing }" v-bind="ConfirmedTwoFactorAuthenticationController.store.form()">
                    <div>
                        <label>
                            Enter current 2FA code from your authenticator application to confirm the setup has been successful.
                        </label>

                        <input
                            type="text"
                            name="code"
                            required
                            autofocus
                            autocomplete="off"
                        >
                    </div>

                    <button type="submit" :disabled="processing">Confirm 2FA code</button>
                </Form>
            </template>

            <template v-if="pageProps.twoFactorConfirmed">
                <p>
                    <strong>Two factor authentication confirmed and enabled successfully.</strong>
                </p>

                <p>
                    Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.
                </p>

                <div v-for="code in pageProps.twoFactorRecoveryCodes" :key="code">
                    <pre>{{ code }}</pre>
                </div>

                <Form v-slot="{ processing }" v-bind="RecoveryCodeController.store.form()">
                    <button type="submit" :disabled="processing">Regenerate Recovery Codes</button>
                </Form>
            </template>
        </template>
    </section>
</template>
