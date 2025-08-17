<script setup>
import { Form, Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Change Password" />
    <div>
        <Form :action="route('user-password.update')" method="put" #default="{ errors }" error-bag="updatePassword">
            <div>
                <label for="current_password">Current Password</label>
                <input type="password" id="current_password" name="current_password" />
                <div v-if="errors.current_password" class="error">{{ errors.current_password }}</div>
            </div>
            <div>
                <label for="password">New Password</label>
                <input type="password" id="password" name="password" />
                <div v-if="errors.password" class="error">{{ errors.password }}</div>
            </div>
            <div>
                <label for="password_confirmation">Confirm New Password</label>
                <input type="password" id="password_confirmation" name="password_confirmation" />
                <div v-if="errors.password_confirmation" class="error">{{ errors.password_confirmation }}</div>
            </div>
            <div>
                <button type="submit">
                    Change Password
                </button>
            </div>
        </Form>
    </div>
</template>
