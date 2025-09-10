<script setup lang="ts">
import { Form } from '@inertiajs/vue3'
import PasswordController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/PasswordController'
</script>

<template>
    <Form
        v-slot="{ errors, processing }"
        v-bind="PasswordController.update.form()"
        error-bag="updatePassword"
        reset-on-success
        :reset-on-error="['password', 'password_confirmation', 'current_password']"
    >
        <input
            type="text"
            name="email"
            autocomplete="username email"
            style="display: none;"
        >

        <div>
            <label for="current_password">Password</label>

            <input
                id="current_password"
                ref="currentPasswordInput"
                name="current_password"
                type="password"
                autocomplete="current-password"
                placeholder="Current password"
            >

            <div v-if="errors.current_password">
                <mark>{{ errors.current_password }}</mark>
            </div>
        </div>

        <div>
            <label for="password">New Password</label>

            <input
                id="password"
                ref="passwordInput"
                name="password"
                type="password"
                autocomplete="new-password"
                placeholder="New password"
            >

            <div v-if="errors.password">
                <mark>{{ errors.password }}</mark>
            </div>
        </div>

        <div>
            <label for="password_confirmation">Confirm Password</label>

            <input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                autocomplete="new-password"
                placeholder="Confirm password"
            >

            <div v-if="errors.password_confirmation">
                <mark>{{ errors.password_confirmation }}</mark>
            </div>
        </div>

        <button type="submit" :disabled="processing">Change Password</button>
    </Form>
</template>
