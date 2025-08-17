<script setup>
import { computed } from 'vue';
import { Form, Head, usePage } from '@inertiajs/vue3';

const user = computed(() => usePage().props.auth.user);
</script>

<template>
    <Head title="Profile" />
    <div>
        <Form :action="route('user-profile-information.update')" method="put" #default="{ errors }">
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" :value="user.name" />
                <div v-if="errors.name">{{ errors.name }}</div>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" :value="user.email" />
                <div v-if="errors.email">{{ errors.email }}</div>
            </div>
            <div>
                <button type="submit">
                    Update Profile
                </button>
            </div>
        </Form>
    </div>
</template>
