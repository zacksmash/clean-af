<script setup lang="ts">
import { computed } from 'vue'
import { Form, usePage } from '@inertiajs/vue3'
import { update } from '@/Http/actions/Laravel/Fortify/Http/Controllers/ProfileInformationController'
import { type User } from '@/Types'

const user = computed(() => usePage().props.auth.user as User)
</script>

<template>
    <Form
        v-slot="{ errors }"
        :action="update()"
    >
        <div>
            <p>Update Profile</p>
        </div>

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

        <button type="submit">Update Profile</button>
    </Form>
</template>
