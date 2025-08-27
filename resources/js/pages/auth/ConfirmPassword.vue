<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3'
import ConfirmablePasswordController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/ConfirmablePasswordController'
</script>

<template>
    <div>
        <Head title="Confirm Password"/>

        <header>
            <p>Confirm Password</p>
        </header>

        <Form
            v-slot="{ errors }"
            v-bind="ConfirmablePasswordController.store.form()"
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
    </div>
</template>
