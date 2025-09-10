<script setup lang="ts">
import axios from 'axios'
import { Ref, nextTick, reactive, ref } from 'vue'
import ConfirmablePasswordController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/ConfirmablePasswordController'
import { confirmation } from '@/wayfinder/routes/password'

const emit = defineEmits(['confirmed'])

const confirmingPassword = ref(false)

const form = reactive({
    password: '',
    error: '',
    processing: false,
})

const passwordInput: Ref<HTMLInputElement | null> = ref(null)

const startConfirmingPassword = () => {
    axios.get(confirmation.url()).then(response => {
        if (response.data.confirmed) {
            emit('confirmed')
        } else {
            confirmingPassword.value = true

            nextTick(() => passwordInput.value?.focus())
        }
    })
}

const confirmPassword = () => {
    form.processing = true

    axios.post(ConfirmablePasswordController.store.url(), {
        password: form.password,
    }).then(() => {
        form.processing = false

        closeModal()
        nextTick().then(() => emit('confirmed'))
    }).catch(error => {
        form.processing = false
        form.error = error.response.data.errors.password[0]
        passwordInput.value?.focus()
    })
}

const closeModal = () => {
    confirmingPassword.value = false
    form.password = ''
    form.error = ''
}
</script>

<template>
    <span>
        <span @click="startConfirmingPassword">
            <slot/>
        </span>

        <dialog :open="confirmingPassword">
            <form>
                <input
                    type="text"
                    name="email"
                    autocomplete="username email"
                    style="display: none;"
                >

                <div>
                    <input
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        placeholder="Password"
                        autocomplete="current-password"
                        @keyup.enter="confirmPassword"
                    >

                    <div v-if="form.error">
                        <mark>{{ form.error }}</mark>
                    </div>
                </div>

                <button
                    :disabled="form.processing"
                    @click="confirmPassword"
                >
                    Confirm
                </button>

                <button type="button" @click="closeModal">
                    Cancel
                </button>
            </form>
        </dialog>
    </span>
</template>
