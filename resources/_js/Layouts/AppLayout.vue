<script setup lang="ts">
defineProps<{
    status?: string
}>()
</script>

<template>
    <header v-if="status">
        <mark>{{ status }}</mark>
    </header>

    <slot/>
</template>
