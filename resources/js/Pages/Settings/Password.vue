<script setup lang="ts">
import { Form } from '@inertiajs/vue3'
import { update } from '@/Http/actions/Laravel/Fortify/Http/Controllers/PasswordController'
</script>

<template>
    <Form
        v-slot="{ errors }"
        :action="update()"
        error-bag="updatePassword"
        reset-on-success
        :reset-on-error="['password', 'password_confirmation', 'current_password']"
    >
        <div>
            <label for="current_password">Password</label>

            <input
                id="current_password"
                type="password"
                name="current_password"
            >

            <div v-if="errors.current_password">
                <mark>{{ errors.current_password }}</mark>
            </div>
        </div>

        <div>
            <label for="password">New Password</label>

            <input
                id="password"
                type="password"
                name="password"
            >

            <div v-if="errors.password">
                <mark>{{ errors.password }}</mark>
            </div>
        </div>

        <div>
            <label for="password_confirmation">Confirm Password</label>

            <input
                id="password_confirmation"
                type="password"
                name="password_confirmation"
            >

            <div v-if="errors.password_confirmation">
                <mark>{{ errors.password_confirmation }}</mark>
            </div>
        </div>

        <button type="submit">Change Password</button>
    </Form>
</template>
