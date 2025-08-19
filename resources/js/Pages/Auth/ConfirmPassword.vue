<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3'
import { store as confirmPassword } from '@/Http/actions/Laravel/Fortify/Http/Controllers/ConfirmablePasswordController'

import AuthLayout from '@/Layouts/AuthLayout.vue'
</script>

<template>
    <Head title="Confirm Password"/>

    <AuthLayout>
        <section>
            <p>Confirm Password</p>
        </section>

        <Form
            v-slot="{ errors }"
            :action="confirmPassword()"
            reset-on-success
        >
            <div>
                <label for="password">Password</label>

                <input
                    id="password"
                    type="password"
                    name="password"
                    required
                    autocomplete="current-password"
                    autofocus
                >

                <div v-if="errors.password">
                    <mark>{{ errors.password }}</mark>
                </div>
            </div>

            <button type="submit">Confirm Password</button>
        </Form>
    </AuthLayout>
</template>
