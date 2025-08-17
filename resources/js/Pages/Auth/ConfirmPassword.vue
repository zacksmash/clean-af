<script setup>
import { Head, Form } from '@inertiajs/vue3';
import AuthLayout from '@/Layouts/AuthLayout.vue';

defineOptions({
    layout: AuthLayout
});
</script>

<template>
    <Head title="Confirm Password" />
    <div>
        <h1>Confirm Password</h1>
        <Form :action="route('password.confirm.store')" method="post" #default="{ errors }">
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
                <div v-if="errors.password">{{ errors.password }}</div>
            </div>
            <button type="submit">Confirm Password</button>
        </Form>
    </div>
</template>
