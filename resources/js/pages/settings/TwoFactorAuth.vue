<script setup lang="ts">
import axios from 'axios'
import { computed, ref, watch } from 'vue'
import { router, useForm, usePage } from '@inertiajs/vue3'
// import TwoFactorAuthenticationController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/TwoFactorAuthenticationController'
// import TwoFactorQrCodeController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/TwoFactorQrCodeController'
// import TwoFactorSecretKeyController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/TwoFactorSecretKeyController'
// import RecoveryCodeController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/RecoveryCodeController'
// import ConfirmedTwoFactorAuthenticationController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/ConfirmedTwoFactorAuthenticationController'

import ConfirmsPassword from '@/components/ConfirmsPassword.vue'

const props = defineProps({
    requiresConfirmation: Boolean,
})

const page = usePage()
const enabling = ref(false)
const confirming = ref(false)
const disabling = ref(false)
const qrCode = ref(null as { svg: string; url: string } | null)
const setupKey = ref(null)
const recoveryCodes = ref([])

const confirmationForm = useForm({
    code: '',
})

const twoFactorEnabled = computed(
    () => ! enabling.value && page.props.auth.user?.two_factor_enabled,
)

watch(twoFactorEnabled, () => {
    if (! twoFactorEnabled.value) {
        confirmationForm.reset()
        confirmationForm.clearErrors()
    }
})

const enableTwoFactorAuthentication = () => {
    enabling.value = true

    router.post(TwoFactorAuthenticationController.store.url(), {}, {
        preserveScroll: true,
        onSuccess: () => Promise.all([
            showQrCode(),
            showSetupKey(),
            showRecoveryCodes(),
        ]),
        onFinish: () => {
            enabling.value = false
            confirming.value = props.requiresConfirmation
        },
    })
}

const showQrCode = async () => {
    const response = await axios.get(TwoFactorQrCodeController.show.url())
    qrCode.value = {
        svg: response.data.svg,
        url: response.data.url,
    }
}

const showSetupKey = async () => {
    const response = await axios.get(TwoFactorSecretKeyController.show.url())
    setupKey.value = response.data.secretKey
}

const showRecoveryCodes = async () => {
    const response = await axios.get(RecoveryCodeController.index.url())
    recoveryCodes.value = response.data
}

const confirmTwoFactorAuthentication = () => {
    confirmationForm.post(ConfirmedTwoFactorAuthenticationController.store.url(), {
        errorBag: 'confirmTwoFactorAuthentication',
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            confirming.value = false
            qrCode.value = null
            setupKey.value = null
        },
    })
}

const regenerateRecoveryCodes = () => {
    axios
        .post(RecoveryCodeController.store.url())
        .then(() => showRecoveryCodes())
}

const disableTwoFactorAuthentication = () => {
    disabling.value = true

    router.delete(TwoFactorAuthenticationController.destroy(), {
        preserveScroll: true,
        onSuccess: () => {
            disabling.value = false
            confirming.value = false
        },
    })
}
</script>

<template>
    <section>
        <p>
            Two Factor Authentication
        </p>

        <small v-if="twoFactorEnabled && ! confirming">
            You have enabled two factor authentication.
        </small>

        <small v-else-if="twoFactorEnabled && confirming">
            Finish enabling two factor authentication.
        </small>

        <small v-else>
            You have not enabled two factor authentication.
        </small>

        <small>
            When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your preferred authenticator application.
        </small>

        <template v-if="twoFactorEnabled">
            <template v-if="qrCode">
                <small v-if="confirming">
                    To finish enabling two factor authentication, scan the following QR code using your preferred authenticator application or enter the setup key and provide the generated OTP code.
                </small>

                <small v-else>
                    Two factor authentication is now enabled. Scan the following QR code using your preferred authenticator application or enter the setup key.
                </small>

                <div>
                    <a :href="qrCode.url" target="_blank">
                        <div v-html="qrCode.svg"/>
                    </a>
                </div>

                <template v-if="setupKey">
                    <small>
                        Setup Key: <span v-html="setupKey"></span>
                    </small>
                </template>

                <form v-if="confirming">
                    <div>
                        <label for="code">Code</label>

                        <input
                            id="code"
                            v-model="confirmationForm.code"
                            type="text"
                            name="code"
                            inputmode="numeric"
                            autofocus
                            autocomplete="one-time-code"
                            @keyup.enter="confirmTwoFactorAuthentication"
                        >
                    </div>

                    <div v-if="confirmationForm.errors.code">
                        <mark>{{ confirmationForm.errors.code }}</mark>
                    </div>
                </form>
            </template>

            <template v-if="recoveryCodes.length > 0 && ! confirming">
                <small>
                    Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.
                </small>

                <div>
                    <p v-for="code in recoveryCodes" :key="code">
                        <small>
                            <code>{{ code }}</code>
                        </small>
                    </p>
                </div>
            </template>
        </template>

        <ConfirmsPassword v-if="! twoFactorEnabled" @confirmed="enableTwoFactorAuthentication">
            <button type="button" :disabled="enabling">
                Enable
            </button>
        </ConfirmsPassword>

        <div v-else>
            <ConfirmsPassword v-if="confirming" @confirmed="confirmTwoFactorAuthentication">
                <button type="button" :disabled="enabling || confirmationForm.processing">
                    Confirm
                </button>
            </ConfirmsPassword>

            <ConfirmsPassword v-if="recoveryCodes.length > 0 && ! confirming" @confirmed="regenerateRecoveryCodes">
                <button type="button">
                    Regenerate Recovery Codes
                </button>
            </ConfirmsPassword>

            <ConfirmsPassword v-if="recoveryCodes.length === 0 && ! confirming" @confirmed="showRecoveryCodes">
                <button type="button">
                    Show Recovery Codes
                </button>
            </ConfirmsPassword>

            <ConfirmsPassword v-if="confirming" @confirmed="disableTwoFactorAuthentication">
                <button type="button" :disabled="disabling">
                    Cancel
                </button>
            </ConfirmsPassword>

            <ConfirmsPassword v-if="! confirming" @confirmed="disableTwoFactorAuthentication">
                <button type="button" :disabled="disabling">
                    Disable
                </button>
            </ConfirmsPassword>
        </div>
    </section>
</template>
