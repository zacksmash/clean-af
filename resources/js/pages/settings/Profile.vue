<script setup lang="ts">
import { computed } from 'vue'
import { Form, usePage } from '@inertiajs/vue3'
import ProfileInformationController from '@/wayfinder/actions/Laravel/Fortify/Http/Controllers/ProfileInformationController'

const user = computed(() => usePage().props.auth.user)
</script>

<template>
    <Form
        v-slot="{ errors, processing }"
        v-bind="ProfileInformationController.update.form()"
    >
        <div>
            <label for="name">Name</label>

            <input
                id="name"
                name="name"
                required
                autocomplete="name"
                placeholder="Full name"
                :value="user.name"
            >

            <div v-if="errors.name">
                <mark>{{ errors.name }}</mark>
            </div>
        </div>

        <div>
            <label for="email">Email</label>

            <input
                id="email"
                type="email"
                name="email"
                required
                autocomplete="username"
                placeholder="Email address"
                :value="user.email"
            >

            <div v-if="errors.email">
                <mark>{{ errors.email }}</mark>
            </div>
        </div>

        <button type="submit" :disabled="processing">Update Profile</button>
    </Form>
</template>
