<script setup>
import { Form, Head } from '@inertiajs/vue3'

import AuthLayout from '@/Layouts/AuthLayout.vue'
</script>

<template>
    <Head title="Confirm Password"/>

    <AuthLayout>
        <Form
            v-slot="{ errors }"
            :action="route('password.confirm.store')"
            reset-on-success
            method="post"
        >
            <div>
                <label for="password">Password</label>

                <input
                    id="password"
                    type="password"
                    name="password"
                    required
                >

                <div v-if="errors.password">
                    <mark>{{ errors.password }}</mark>
                </div>
            </div>

            <button type="submit">Confirm Password</button>
        </Form>
    </AuthLayout>
</template>
