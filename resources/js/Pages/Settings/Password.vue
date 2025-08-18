<script setup>
import { Form } from '@inertiajs/vue3';
</script>

<template>
    <Form :action="route('user-password.update')" method="put" #default="{ errors }" error-bag="updatePassword" reset-on-success :reset-on-error="['password', 'password_confirmation', 'current_password']">
        <div>
            <label for="current_password">Current Password</label>
            <input type="password" id="current_password" name="current_password" />
            <div v-if="errors.current_password">{{ errors.current_password }}</div>
        </div>

        <div>
            <label for="password">New Password</label>
            <input type="password" id="password" name="password" />
            <div v-if="errors.password">{{ errors.password }}</div>
        </div>

        <div>
            <label for="password_confirmation">Confirm New Password</label>
            <input type="password" id="password_confirmation" name="password_confirmation" />
            <div v-if="errors.password_confirmation">{{ errors.password_confirmation }}</div>
        </div>

        <button type="submit">Change Password</button>
    </Form>
</template>
