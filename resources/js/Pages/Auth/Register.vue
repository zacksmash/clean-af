<script setup>
import { Head, Link, Form } from '@inertiajs/vue3';
import AuthLayout from '@/Layouts/AuthLayout.vue';

defineOptions({
    layout: AuthLayout
});
</script>

<template>
    <Head title="Register" />
    <div>
        <Form :action="route('register.store')" method="post" #default="{ errors }">
            <div>
                <label for="name">Name</label>
                <input id="name" type="text" required autofocus :tabindex="1" autocomplete="name" name="name" placeholder="Full name"  />
                <div v-if="errors.name">{{ errors.name }}</div>
            </div>
            <div>
                <label for="email">Email</label>
                <input id="email" type="email" required :tabindex="2" autocomplete="email" name="email" placeholder="email@example.com" />
                <div v-if="errors.email">{{ errors.email }}</div>
            </div>
            <div>
                <label for="password">Password</label>
                <input id="password" type="password" required :tabindex="3" autocomplete="new-password" name="password" placeholder="Password" />
                <div v-if="errors.password">{{ errors.password }}</div>
            </div>
            <div>
                <label for="password_confirmation">Confirm Password</label>
                <input
                    id="password_confirmation"
                    type="password"
                    required
                    :tabindex="4"
                    autocomplete="new-password"
                    name="password_confirmation"
                    placeholder="Confirm password" />
                <div v-if="errors.password_confirmation">{{ errors.password_confirmation }}</div>
            </div>
            <button type="submit">Register</button>
        </Form>
        <p>
            Already have an account? <Link :href="route('login')">Login</Link>
        </p>
    </div>
</template>
