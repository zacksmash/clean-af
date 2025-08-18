<script setup>
import { computed } from 'vue'
import { Form, usePage } from '@inertiajs/vue3'

const user = computed(() => usePage().props.auth.user)
</script>

<template>
    <Form
        v-slot="{ errors }"
        :action="route('user-profile-information.update')"
        method="put"
    >
        <div>
            <label for="name">Name</label>

            <input
                id="name"
                type="text"
                name="name"
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
                :value="user.email"
            >

            <div v-if="errors.email">
                <mark>{{ errors.email }}</mark>
            </div>
        </div>

        <button type="submit">Update Profile</button>
    </Form>
</template>
