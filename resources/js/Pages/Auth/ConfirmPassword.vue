<script setup>
import { Form, Head } from '@inertiajs/vue3';
import AuthLayout from '@/Layouts/AuthLayout.vue';

defineOptions({
    layout: AuthLayout
});
</script>

<template>
    <Head title="Confirm Password" />
    <div>
        <Form :action="route('password.confirm.store')" reset-on-success method="post" #default="{ errors }">
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
                <div v-if="errors.password">{{ errors.password }}</div>
            </div>

            <button type="submit">Confirm Password</button>
        </Form>
    </div>
</template>
